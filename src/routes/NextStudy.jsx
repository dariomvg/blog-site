import "../styles/nextStudy.scss";

export const NextStudy = () => {
  return (
    <section className="container-study">
      <h3 className="title-study">Tecnologias/temas para aprender:</h3>
      <div className="list-tech">
        <a href="https://deno.com/" target="_BLANK" className="link-tech">
          Deno.js
        </a>
        <a href="https://nextjs.org/" target="_BLANK" className="link-tech">
          Next.js
        </a>
        <a href="https://bun.sh/" target="_BLANK" className="link-tech">
          Bun
        </a>
        <a href="https://astro.build/" target="_BLANK" className="link-tech">
          Astro
        </a>
        <a href="https://www.patterns.dev/" target="_BLANK" className="link-tech">
          Patrones de diseño
        </a>
        <a href="https://www.mongodb.com/es" target="_BLANK" className="link-tech">
          MongoBD
        </a>
      </div>

      <div className="container-details">
        <h2 className="title-list">
          ¿Para que sirven cada uno de estos?
        </h2>
        <ul className="list-details">
          <li className="detail">
            <b>Deno.js:</b> Deno es una plataforma para la ejecución de código
            Javascript(como node.js) y TypeScript basado en el motor V8 y
            escrito en Rust. se enfoca en la seguridad y productividad. permite
            realizar aplicaciones en cualquier ámbito, como podría ser los
            programas de consola, servicios web o aplicaciones de backend en
            general. y algunas cosas que lo diferencian de node.js son: seguro
            por defecto, soporte nativo para typeScript y JSX,pruebas, linting,
            formateo entre otras.
          </li>
          <li className="detail">
            <b>Next.js:</b> Next.js es un framework de desarrollo front-end de
            React de código abierto que habilita funcionalidades como la
            representación del lado del servidor y la generación de sitios web
            estáticos para aplicaciones web basadas en React. es decir permite a
            los desarrolladores crear aplicaciones de página única y
            aplicaciones web de alto rendimiento a través de la renderización
            del lado del servidor.
          </li>
          <li className="detail">
            <b>Bun:</b> Bun es un paquete de ejecuciones de pruebas,
            administrador de paquetes y tiempo de ejecución de JavaScript. lo
            que busca es reemplazar a node.js, webpack, entre otras. lo que
            atrae bun en su mayoria en la rapidez para ejecutar los procesos.
          </li>
          <li className="detail">
            <b>Astro:</b> Astro es un framework para crear sitios web basados
            ​​en contenido,es decir, sitios web estáticos. Astro es viene con
            una nueva arquitectura frontend(islas) para reducir la sobrecarga y
            la complejidad de JavaScript en comparación con otros frameworks. lo
            que destaca de astro es su rendimiento y carga rapida.
          </li>
          <li className="detail">
            <b>Patrones de diseño:</b> los patrones vienen a solucionar los
            problemas comunes en donde se desperdician tiempo y energia. Estos,
            son modelos ya utilizados y probados buscando es eliminar el codigo
            repetitivo. Entonces, son: elementos reutilizables de código creados
            para resolver problemas comunes
          </li>
          <li className="detail">
            <b>MongoDB:</b> MongoDB es un sistema de base de datos NoSQL,
            orientado a documentos y de código abierto. En lugar de guardar los
            datos en tablas, tal y como se hace en las bases de datos
            relacionales, MongoDB guarda estructuras de datos BSON con un
            esquema dinámico, haciendo que la integración de los datos en
            ciertas aplicaciones sea más fácil y rápida.
          </li>
        </ul>
      </div>
    </section>
  );
};
