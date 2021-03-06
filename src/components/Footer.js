import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";

function Footer() {
  const [year, setYear] = useState(2020);

  useEffect(() => {
    const date = new Date();
    const currentYear = date.getFullYear();
    if (currentYear > 2020) {
      setYear(`2020-${currentYear}`);
    }
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    alert("🤷‍♂️🤷‍♀️");
  };

  return (
    <footer className="footer">
      <div className="footer__columns">
        <div className="footer__column footer__column_content_copyright">
          <Link className="link logo logo_place_footer" to="/">
            Гражданин поэт
          </Link>
          <MediaQuery minWidth={761}>
            <p className="footer__author">&copy; {year} / Team39</p>
          </MediaQuery>
        </div>
        <nav className="footer__column footer__column_content_info">
          <ul className="footer__column-links">
            <li className="footer__item">
              <a href="/" className="link footer__link" onClick={handleClick}>
                О проекте
              </a>
            </li>
            <li className="footer__item">
              <a href="/" className="link footer__link" onClick={handleClick}>
                Пресса
              </a>
            </li>
          </ul>
        </nav>
        <nav className="footer__column footer__column_content_contacts">
          <ul className="footer__column-links">
            <li className="footer__item">
              <a href="/" className="link footer__link" onClick={handleClick}>
                Контакты
              </a>
            </li>
            <li className="footer__item">
              <a href="/" className="link footer__link" onClick={handleClick}>
                Сотрудничество
              </a>
            </li>
          </ul>
        </nav>
        <MediaQuery maxWidth={760}>
          <p className="footer__author">&copy; {year} / Team39</p>
        </MediaQuery>
      </div>
    </footer>
  );
}

export default Footer;
