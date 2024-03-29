import "../styles/courses.scss";

export const CardRouteCurso = ({ item }) => {
  const { image, title, autor, text, icon, link, docs } = item;

  return (
    <div className="card-route-curso">
      <img
        src={image}
        alt="image"
        className="img-curso"
        width={"100%"}
        height={170}
        loading="lazy"
      />
      <section className="container-todo">
        <div className="details-curso">
          <h4 className="title-curso">{title}</h4>
          {icon ? (
            <img
              src={icon}
              alt="icon"
              width={30}
              height={30}
              className="icon-curso"
              loading="lazy"
            />
          ) : null}
        </div>
        <p className="autor-curso"><b>Autor:</b> {autor}</p>
        <p className="text-curso">{text}</p>
        <div className="links-curso">
          <a href={docs} target="_BLANK" className="link-curso">
            Documentación
          </a>
          <a href={link} target="_BLANK" className="link-curso">
            Curso
          </a>
        </div>
      </section>
    </div>
  );
};
