import MediaQuery from "react-responsive";

import ButtonArrow from "../Buttons/ButtonArrow";
import ApplicationForm from "./AplicationForm";

function SubmitPage({ history, strsForRender, onSubmit }) {
  return (
    <section className="application">
      <div className="application__diagonal-box"></div>
      <div className="application__content">
        <MediaQuery minWidth={761}>
          <div className="application__top">
            <ButtonArrow history={history} />
            <p className="application__counter">3/3</p>
          </div>
        </MediaQuery>
        <ApplicationForm history={history} strsForRender={strsForRender} onSubmit={onSubmit} />
      </div>
    </section>
  );
}

export default SubmitPage;
