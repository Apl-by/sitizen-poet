import mayak from "../../images/hero-mayak.png";
import { tutorialCards, actualCards, doneCards } from "../../utils/constants";

import Button from "../Buttons/Button";
import DoneCard from "./DoneCard";
import ActualCard from "./ActualCard";
import TutorialCard from "./TutorialCard";

function MainPage({ history, reset }) {
  const handlerReset = () => {
    reset();
    history.push("/tags-selection");
  };

  return (
    <>
      <section className="hero">
        <div className="hero__content">
          <h1 className="title hero__title">Сайт гражданских инициатив</h1>
          <Button type="button" name="Создать инициативу" mix="hero__button" onClick={handlerReset} />
        </div>
        <div className="hero__diagonal-box">
          <div className="hero__phrase"></div>
        </div>
        <img src={mayak} alt="Маяковский с вытянутой рукой" className="hero__mayak" />
      </section>

      <section className="how-it-works">
        <div className="how-it-works__content">
          <h2 className="title how-it-works__title">Как это работает</h2>
          <ul className="how-it-works__cards">
            {tutorialCards.map((item, index) => {
              return <TutorialCard item={item} key={index} mix="how-it-works__card"/>;
            })}
          </ul>
        </div>
      </section>

      <section className="actual">
        <div className="actual__diagonal-box"></div>
        <div className="actual__content">
          <h2 className="title actual__title">Актуальные инициативы</h2>
          <ul className="actual__cards">
            {actualCards.map((item, index) => {
              return <ActualCard item={item} key={index} />;
            })}
          </ul>
          <Button
            type="button"
            mix="actual__btn"
            name="Смотреть ещё"
            onClick={() => alert("Страница с актуальными инициативами")}
          />
        </div>
      </section>

      <section className="done">
        <div className="done__diagonal-box"></div>
        <div className="done__content">
          <h2 className="title done__title">Уже приняты</h2>
          <ul className="done__cards">
            {doneCards.map((item, index) => {
              return <DoneCard item={item} key={index} />;
            })}
          </ul>
          <Button
            type="button"
            mix="done__btn"
            name="Смотреть ещё"
            onClick={() => alert("Страница с принятыми инициативами")}
          />
        </div>
      </section>
    </>
  );
}

export default MainPage;
