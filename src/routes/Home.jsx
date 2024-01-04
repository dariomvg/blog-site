import { Link } from "react-router-dom";
import { cursos } from "../constants/data-courses.js";
import { temas } from "../constants/data-topics.js";
import { paquetes } from "../constants/data-packages.js";
import { CardRouteCurso } from "../components/CardRouteCurso.jsx";
import { CardRoutePackages } from "../components/CardRoutePackages.jsx";
import { CardRouteTemas } from "../components/CardRouteTemas.jsx";
import { Footer } from "../components/Footer";
import video from "../assets/videos/video-home.mp4";
import iconArrow from "../assets/icons/all-icons/icon-arrow.png";
import { Typewriter } from "react-simple-typewriter";
import { words } from "../constants/words.js";
import "../styles/home.scss";

export const Home = () => {
  const dataCursos = cursos.slice(0, 3);
  const dataTemas = temas.slice(0, 3);
  const dataPaq = paquetes.slice(0, 3);

  return (
    <main className="container-home">
      <section className="cont-home">
        <div className="box-home">
          <h1 className="title-home">
            Blog sobre programación y desarrollo web
          </h1>
          <div className="efects_titles">
            <Typewriter
              words={words}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={3000}
            />
          </div>

          <p className="text-home">
            En este blog aprenderás sobre las tecnologias que demandan, como
            lenguajes de programación, frameworks, dependencias, etc. Además de
            recursos de ayuda como cursos y/o artículos.
          </p>
        </div>
        <video width={600} height={400} autoPlay loop muted className="video">
          <source src={video} type="video/mp4" />
        </video>
      </section>

      <section className="cont-details">
        <h2 className="subtitle-home">Algunas secciones dentro del blog</h2>

        <section className="container-cards">
          <h2 className="title-container">Cursos</h2>
          <div className="list-cards">
            {dataCursos &&
              dataCursos.map((item) => (
                <CardRouteCurso key={item.id} item={item} />
              ))}
          </div>

          <Link to="/cursos" className="link-more">
            Ver todo
            <img
              src={iconArrow}
              alt="image arrow"
              width={20}
              height={20}
              loading="lazy"
            />
          </Link>
        </section>

        <section className="container-cards">
          <h2 className="title-container">Temas</h2>
          <div className="list-cards">
            {dataTemas &&
              dataTemas.map((item) => (
                <CardRouteTemas key={item.id} item={item} />
              ))}
          </div>

          <Link to="/temas" className="link-more">
            Ver todo
            <img
              src={iconArrow}
              alt="image arrow"
              width={20}
              height={20}
              loading="lazy"
            />
          </Link>
        </section>
        <section className="container-cards">
          <h2 className="title-container">Paquetes y dependencias útiles</h2>
          <div className="list-cards">
            {dataPaq &&
              dataPaq.map((item) => (
                <CardRoutePackages key={item.id} item={item} />
              ))}
          </div>

          <Link to="/contenido/paquetes" className="link-more">
            Ver todo
            <img
              src={iconArrow}
              alt="image arrow"
              width={20}
              height={20}
              loading="lazy"
            />
          </Link>
        </section>

        <section className="cont-info">
          <h1 className="title-info">Explora más...</h1>
          <p className="text-info">
            Míra todas las secciones que te ofrece este blog
          </p>
          <Link to="/contenido" className="link-info">
          Contenido
        </Link>
        </section>
        
      </section>

      <Footer />
    </main>
  );
};
