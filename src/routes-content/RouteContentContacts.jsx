import iconInstagram from "../assets/icons/all-icons/icon-instagram.png";
import iconLinkedin from "../assets/icons/all-icons/icon-linkedin.png";
import iconTwitter from "../assets/icons/all-icons/icon-twitter.png";
import "../styles/contacs.scss";

export const RouteContentContacts = () => {
  return (
    <section className="section-routes-contacts">
      <strong className="title-redes">Redes</strong>
      <div className="list-apps">
        <a href="https://www.instagram.com/dariomartinezgod/" target="_BLANK" className="link-app">
          <img
            src={iconInstagram}
            alt="icon instagram"
            width={50}
            height={50}
            loading="lazy"
          />
        </a>
        <a href="https://twitter.com/DarioGod07" target="_BLANK" className="link-app">
          <img
            src={iconTwitter}
            alt="icon twitter - x"
            width={50}
            height={50}
            loading="lazy"
          />
        </a>
        <a href="https://www.linkedin.com/in/dario-martinez-597486291/" target="_BLANK" className="link-app">
          <img
            src={iconLinkedin}
            alt="icon linkedin"
            width={50}
            height={50}
            loading="lazy"
          />
        </a>
      </div>

      <a href="https://dariomvg.github.io/portfolio/#" target="_BLANK" className="link-portfolio">
        Portfolio
      </a>
    </section>
  );
};
