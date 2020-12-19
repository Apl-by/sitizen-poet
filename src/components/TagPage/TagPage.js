function TagPage() {
  return (
    <section className="application page__application">
      <div className="application__top">
        <button className="application__btn-back" type="button" aria-label="Назад"></button>
        <p className="application__counter">1/3</p>
      </div>

      <form name="surveyForm" className="form-survey">
        <fieldset className="fieldset form-survey__fieldset">
          <h2 className="title application__title">Какого рода проблема?</h2>
          <div className="form-survey__list">
            <label className="form-survey__item">
              <input name="problem" type="radio" value="Коммунальная" className="form-survey__radio" />
              <span className="form-survey__custom">Коммунальная</span>
            </label>
            <label className="form-survey__item">
              <input name="problem" type="radio" value="Экономическая" className="form-survey__radio" />
              <span className="form-survey__custom">Экономическая</span>
            </label>
            <label className="form-survey__item">
              <input name="problem" type="radio" value="Социальная" className="form-survey__radio" />
              <span className="form-survey__custom">Социальная</span>
            </label>
            <label className="form-survey__item">
              <input name="problem" type="radio" value="Урбанистическая" className="form-survey__radio" />
              <span className="form-survey__custom">Урбанистическая</span>
            </label>
            <label className="form-survey__item">
              <input name="problem" type="radio" value="Политическая" className="form-survey__radio" />
              <span className="form-survey__custom">Политическая</span>
            </label>
          </div>
        </fieldset>
        <fieldset className="fieldset form-survey__fieldset">
          <h3 className="title title_size_medium">Что не так?</h3>
          <div className="form-survey__list">
            <label className="form-survey__item">
              <input name="subject" type="radio" value="Электричество" className="form-survey__radio" />
              <span className="form-survey__custom">Электричество</span>
            </label>
            <label className="form-survey__item">
              <input name="subject" type="radio" value="Водопровод" className="form-survey__radio" />
              <span className="form-survey__custom">Водопровод</span>
            </label>
            <label className="form-survey__item">
              <input name="subject" type="radio" value="Соседи" className="form-survey__radio" />
              <span className="form-survey__custom">Соседи</span>
            </label>
            <label className="form-survey__item">
              <input name="subject" type="radio" value="Платежи" className="form-survey__radio" />
              <span className="form-survey__custom">Платежи</span>
            </label>
          </div>
        </fieldset>
        <input type="submit" className="btn application__control" value="Далее" />
      </form>
    </section>
  );
}

export default TagPage;
