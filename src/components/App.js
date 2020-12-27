import { Route, Switch, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

import { api } from "../utils/api";
import { getCurrentItem, handleSearchRes } from "../utils/utils";
import { regexpInputValid } from "../utils/constants";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import TagPage from "./TagPage/TagPage";
import InputPage from "./InputPage/InputPage";
import SubmitPage from "./SubmitPage/SubmitPage";
import ResultPage from "./ResultPage/ResultPage";
import MainPage from "./MainPage/MainPage";

function App() {
  const history = useHistory();

  // -------- Данные из пользовательского ввода--------------------

  const [currentInput, setCurrentInput] = useState("");
  const [submitedInput, setSubmitedInput] = useState("");
  const [invalidValue, setInvalidValue] = useState("");

  const handleChangeInput = (e) => {
    if (!regexpInputValid.test(e.target.value)) {
      setInvalidValue("используйте кириллицу, один пробел, не более 6 слов");
      return;
    }
    setInvalidValue("");
    setCurrentInput(e.target.value);
  };

  // ------Выбор тегов-----------
  const [selectedProblem, setSelectedProblem] = useState({ problem: "", type: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const clone = { ...selectedProblem };
    clone["type"] = "";
    name === "problem" ? (clone["problem"] = value) : (clone["type"] = value);
    setSelectedProblem(clone);
  };

  //-------- Запрос  на сервер за стихами---------------------------
  const [requestObj, setRequestObj] = useState({});
  const [wasSearch, setWasSearch] = useState(false);
  const [currentArr, setCurrentArr] = useState({});

  // ----- Обновление одной строки-----------
  const refreshString = (id) => {
    const cloneArr = [...currentArr];
    const newItem = getCurrentItem(requestObj[id]);
    cloneArr.splice(id, 1, newItem);
    setCurrentArr(cloneArr);
    handleSelection(id, false);
  };

  // ----------Получение строк для отрисовки (всех сразу, при введении слов в основной input )------
  useEffect(() => {
    if (!wasSearch) return;

    const newArr = [];
    for (let key in requestObj) {
      const newItem = getCurrentItem(requestObj[key]);
      newArr.push(newItem);
    }
    setCurrentArr(newArr);
    setWasSearch(false);
  }, [requestObj, wasSearch]);

  // -------------Первичный поиск по массиву введенных слов--------------
  const handleSearch = () => {
    if (submitedInput === currentInput.replace(/\s?$/, "")) {
      return;
    }

    const str = currentInput.replace(/\s?$/, "");
    const arrayInputTags = str.split(" ");

    setSubmitedInput(str);

    const promises = arrayInputTags.map((item) => {
      return api
        .getPoemStrings(item)
        .then((res) => {
          const arrStrings = res.map((i) => {
            return i.fields.text[0];
          });
          return arrStrings;
        })
        .catch((err) => alert(err));
    });

    Promise.all(promises)
      .then((res) => {
        const requestRes = res.reduce((prev, item, index) => {
          return handleSearchRes(prev, item, index, arrayInputTags[index]);
        }, {});
        setRequestObj(requestRes);
        setWasSearch(true);
      })
      .catch((err) => alert(err))
      .finally(() => {
        setStrForSubmit({});
        setIsSelected({});
      });
  };

  // ---------------Добавление/удаление строк в правое окно
  const [isSelected, setIsSelected] = useState({});
  const [strForSubmit, setStrForSubmit] = useState({});
  const [selectedArrForRender, setSelectedArrForRender] = useState([]);

  useEffect(() => {
    const newArr = [];
    for (let key in strForSubmit) {
      const newItem = strForSubmit[key];
      newArr.push(newItem);
    }
    setSelectedArrForRender(newArr);
  }, [strForSubmit]);

  const handleSelection = (id, boolean, upperCase) => {
    const selectedStr = { ...isSelected };
    const strUpperCase = { ...strForSubmit };
    boolean ? (selectedStr[id] = true) : (selectedStr[id] = false);
    boolean ? (strUpperCase[id] = upperCase) : delete strUpperCase[id];
    setStrForSubmit(strUpperCase);
    setIsSelected(selectedStr);
  };

  // -----------Поиск одного слова  при редактировании + изменение связанных данных

  const [isEdit, setIsEdit] = useState({});

  const handleEdit = (id) => {
    const editStr = { ...isEdit };
    editStr[id] = true;
    setIsEdit(editStr);
  };

  const handleNewSearch = (tag, newTag, id) => {
    if (tag === newTag || newTag === "") {
      const editStr = { ...isEdit };
      editStr[id] = false;
      setIsEdit(editStr);
      return;
    }

    api
      .getPoemStrings(newTag)
      .then((res) => {
        const arrStrings = res.map((i) => {
          return i.fields.text[0];
        });
        const newObj = handleSearchRes({}, arrStrings, id, newTag);

        const cloneRequestObj = { ...requestObj };
        cloneRequestObj[id] = newObj[id];
        setRequestObj(cloneRequestObj);

        const cloneCurrentArr = [...currentArr];
        const newItem = getCurrentItem(newObj[id]);
        cloneCurrentArr.splice(id, 1, newItem);
        setCurrentArr(cloneCurrentArr);
      })
      .catch((err) => alert(err))
      .finally(() => {
        const editStr = { ...isEdit };
        editStr[id] = false;
        setIsEdit(editStr);
      });

    const cloneInput = currentInput.replace(/\s?$/, "");
    const arrayInputTags = cloneInput.split(" ");
    arrayInputTags.splice(id, 1, newTag);
    const input = arrayInputTags.join(" ");
    setCurrentInput(input);
    setSubmitedInput(input);
  };

  // ------Получение данных инициативы---------

  const [initiatives, setInitiatives] = useState({ i: 0 });

  const handlerSubmitApp = (item) => {
    const clone = { ...initiatives };
    clone[clone["i"] + 1] = item;
    clone.i += 1;
    setInitiatives(clone);
  };

  // --------------------Сброс данных------------

  const handlerReset = () => {
    setCurrentInput("");
    setSubmitedInput("");
    setInvalidValue("");
    setSelectedProblem({ problem: "", type: "" });
    setRequestObj({});
    setCurrentArr({});
    setIsSelected({});
    setStrForSubmit({});
    setSelectedArrForRender([]);
    setIsEdit({});
  };

  return (
    <div className="page">
      <Header />
      <Main>
        <Switch>
          <Route exact path="/">
            <MainPage history={history} reset={handlerReset} />
          </Route>
          <Route path="/tags-selection">
            <TagPage history={history} onChange={handleChange} selectedTag={selectedProblem} />
          </Route>
          <Route path="/user-input">
            <InputPage
              onChange={handleChangeInput}
              onRefresh={refreshString}
              onAddDelete={handleSelection}
              onNewSearch={handleNewSearch}
              onEdit={handleEdit}
              isEdit={isEdit}
              isSelected={isSelected}
              strForSubmit={strForSubmit}
              value={currentInput}
              onSearchSubmit={handleSearch}
              history={history}
              currentArr={currentArr}
              invalidInput={invalidValue}
            />
          </Route>
          <Route path="/user-submit">
            <SubmitPage history={history} strsForRender={selectedArrForRender} onSubmit={handlerSubmitApp} />
          </Route>
          <Route path="/petition-created">
            <ResultPage selectedProblem={selectedProblem} initiatives={initiatives} />
          </Route>
        </Switch>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
