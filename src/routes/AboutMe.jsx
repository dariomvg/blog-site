import iconInstagram from "../assets/icons/all-icons/icon-instagram.png";
import iconLinkendin from "../assets/icons/all-icons/icon-linkedin.png";
import iconX from "../assets/icons/all-icons/icon-twitter.png";
import "../styles/aboutMe.scss";

export const AboutMe = () => {
  return (
    <section className="wrapper-about">
      <section className="section-about">
        <h1 className="title-about">Dario Martinez</h1>
        <p className="subtitle-about">
          Programador y desarrollador web fullstack
        </p>
        <p className="text-about">
          Construyo aplicaciones y páginas dinámicas, rapidas y óptimas. me
          gusta especializarme en un stack(MERN), pero siempre viendo las últimas
          novedades del mercado, tecnologías que demandan más y así aprender lo
          necesario.
        </p>
        <div className="apps-about">
          <a href="https://www.instagram.com/dariomartinezgod/" target="_BLANK"  className="link-app">
            <img src={iconInstagram} alt="icon instagram" width={40} height={40} loading="lazy" />
          </a>
          <a href="https://twitter.com/DarioGod07" target="_BLANK" className="link-app" >
            <img src={iconX} alt="icon twitter - X" width={40} height={40} loading="lazy" />
          </a>
          <a href="https://www.linkedin.com/in/dario-martinez-597486291/" target="_BLANK"  className="link-app">
            <img src={iconLinkendin} alt="icon linkedin" width={40} height={40} loading="lazy" />
          </a>
        </div>
        <a href="https://dariomvg.github.io/portfolio/" target="_BLANK" className="link-portfolio">
          Portfolio
        </a>
      </section>
    </section>
  );
};
