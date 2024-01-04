import iconHTML from "../assets/icons/icons-cards/icon-html.png";
import iconCSS from "../assets/icons/icons-cards/icon-css.png";
import iconJs from "../assets/icons/icons-cards/icon-javascript.png";
import iconReact from "../assets/icons/icons-cards/icon-react.png";
import iconSQL from "../assets/icons/icons-cards/icon-sql.png";
import iconMysql from "../assets/icons/icons-cards/icon-mysql.png";
import iconDeno from "../assets/icons/icons-cards/icon-deno.png";
import iconExpress from "../assets/icons/icons-cards/icon-express.png";
import iconGit from "../assets/icons/icons-cards/icon-git.png";
import iconGithub from "../assets/icons/icons-cards/icon-github.png";
import iconPostgresql from "../assets/icons/icons-cards/icon-postgresql.png";
import iconTypescript from "../assets/icons/icons-cards/icon-typeScript.png";
import iconNode from "../assets/icons/icons-cards/icon-node.png";
import iconTailwind from "../assets/icons/icons-cards/icon-tailwind.png";
import iconMongodb from "../assets/icons/icons-cards/icon-mongodb.png";
import iconBoostrap from "../assets/icons/icons-cards/icon-boot.png";
import iconNext from "../assets/icons/icons-cards/icon-next.png";

import imgAstro from "../assets/images/images-card/img-astro.png";
import imgBoot from "../assets/images/images-card/img-boot.png";
import imgBun from "../assets/images/images-card/img-bun.png";
import imgCss from "../assets/images/images-card/img-css.png";
import imgDeno from "../assets/images/images-card/img-deno.png";
import imgGit from "../assets/images/images-card/img-git.png";
import imgGithub from "../assets/images/images-card/img-github.png";
import imgHtml from "../assets/images/images-card/img-html.jpg";
import imgJs from "../assets/images/images-card/img-js.png";
import imgMongo from "../assets/images/images-card/img-mongo.png";
import imgMysql from "../assets/images/images-card/img-mysql.png";
import imgNext from "../assets/images/images-card/img-next.png";
import imgNode from "../assets/images/images-card/img-node.png";
import imgPostgre from "../assets/images/images-card/img-postgre.png";
import imgReact from "../assets/images/images-card/img-react.png";
import imgSql from "../assets/images/images-card/img-sql.png";
import imgTailwind from "../assets/images/images-card/img-tailwind.png";
import imgTypescript from "../assets/images/images-card/img-typescript.png";
import imgExpress from "../assets/images/images-card/img-express.png";

export const cursos = [
  {
    id: 1,
    image: imgHtml,
    title: "Curso HTML5",
    detail: "Hypertext Markup Language 5",
    text: "el lenguaje estándar para la creación y diseño de páginas web. Permite estructurar el contenido de una página web",
    icon: iconHTML,
    link: "https://www.youtube.com/watch?v=kN1XP-Bef7w&list=PLE8uP447fYpgOwKgbypiCGSz7veY2MLGb&index=1",
    docs: "https://developer.mozilla.org/es/docs/Web/HTML",
    name: "html",
    autor: "SoyDalto",
  },
  {
    id: 2,
    image: imgCss,
    title: "Curso CSS3",
    detail: "Cascading Style Sheets 3",
    text: "Se utiliza para dar estilo y formato al contenido HTML. Controla el diseño, la presentación y la apariencia visual de una página web.",
    icon: iconCSS,
    link: "https://www.youtube.com/watch?v=OWKXEJN67FE",
    docs: "https://developer.mozilla.org/es/docs/Web/css",
    name: "css",
    autor: "SoyDalto",
  },
  {
    id: 3,
    image: imgJs,
    title: "JavaScript",
    text: "Un lenguaje de programación del lado del cliente que se utiliza para agregar interactividad y dinamismo a las páginas web.",
    icon: iconJs,
    link: "https://www.youtube.com/playlist?list=PLE8uP447fYpiBqMVF1hdWl9uFeVEeXRTm",
    docs: "https://developer.mozilla.org/es/docs/Web/JavaScript",
    name: "javascript",
    autor: "SoyDalto",
  },
  {
    id: 4,
    image: imgReact,
    title: "React",
    text: "Una biblioteca de JavaScript para construir interfaces de usuario interactivas y reutilizables. Desarrollada por Facebook, es especialmente útil para la creación de aplicaciones de una sola página (SPA)",
    icon: iconReact,
    link: "https://www.youtube.com/playlist?list=PLUofhDIg_38q4D0xNWp7FEHOTcZhjWJ29",
    docs: "https://react.dev/",
    name: "react",
    autor: "Midudev",
  },
  {
    id: 5,
    image: imgSql,
    title: "SQL",
    detail: "Structured Query Language",
    text: " Un lenguaje estándar para gestionar bases de datos relacionales. Se utiliza para realizar consultas, actualizaciones y modificaciones en bases de datos.",
    icon: iconSQL,
    link: "https://www.youtube.com/watch?v=DFg1V-rO6Pg&t=18s",
    docs: "https://sqlbolt.com/",
    name: "sql",
    autor: "SoyDalto",
  },
  {
    id: 6,
    image: imgMysql,
    title: "MySQL",
    detail: "",
    text: "Un sistema de gestión de bases de datos relacional (RDBMS) que utiliza SQL. Es ampliamente utilizado para almacenar y gestionar datos.",
    icon: iconMysql,
    link: "https://youtu.be/96s2i-H7e0w?si=s07_R_DmBjE2OKWV",
    docs: "https://www.mysql.com/",
    name: "mysql",
    autor: "Midudev",
  },
  {
    id: 7,
    image: imgNode,
    title: "Node.js",
    detail: "",
    text: "Un entorno de ejecución de JavaScript del lado del servidor que permite ejecutar código JavaScript fuera de un navegador. Se utiliza para construir aplicaciones web escalables y en tiempo real.",
    icon: iconNode,
    link: "https://youtube.com/playlist?list=PLUofhDIg_38qm2oPOV-IRTTEKyrVBBaU7&si=_VI_r3u8jC6AaZjV",
    docs: "https://nodejs.org/en",
    name: "node",
    autor: "Midudev",
  },
  {
    id: 8,
    image: imgMongo,
    title: "MongoDB",
    detail: "",
    text: "Una base de datos NoSQL que utiliza documentos JSON para almacenar datos. Es especialmente eficaz para manejar grandes cantidades de datos no estructurados.",
    icon: iconMongodb,
    link: "https://youtu.be/HsYA3QvWGlk?si=wab3gUduLcaVR7y3",
    docs: "https://www.mongodb.com/es",
    name: "mongodb",
    autor: "Midudev",
  },
  {
    id: 9,
    image: imgDeno,
    title: "Deno",
    detail: "",
    text: "Un entorno de ejecución de JavaScript y TypeScript del lado del servidor, creado como alternativa a Node.js, con un enfoque en la seguridad y la simplicidad.",
    icon: iconDeno,
    link: "https://youtu.be/KsgDQL6jj2M?si=bA_XB7TxOr6Yi3ZN",
    docs: "https://deno.com/",
    name: "deno",
    autor: "Midudev",
  },
  {
    id: 10,
    image: imgNext,
    title: "Next.js",
    detail: "",
    text: "Un marco de desarrollo para React que facilita la creación de aplicaciones web con renderización del lado del servidor (SSR) y generación de páginas estáticas.",
    icon: iconNext,
    link: "https://youtu.be/_SPoSMmN3ZU?si=-vH2iwQXr8hise6Y",
    docs: "https://nextjs.org/",
    name: "next",
    autor: "fazt",
  },
  {
    id: 11,
    image: imgBun,
    title: "Bun",
    detail: "",
    text: "Un compilador de JavaScript y TypeScript que permite crear aplicaciones web más eficientes y rápidas al reducir el tamaño del código.",
    icon: null,
    link: "https://youtu.be/9gM7HQ7SafE?si=M4CmXRkQfOSNI7hE",
    docs: "https://bun.sh/",
    name: "bun",
    autor: "Fazt",
  },
  {
    id: 12,
    image: imgAstro,
    title: "Astro",
    detail: "",
    text: "Un marco de desarrollo para la construcción de sitios web que utiliza una arquitectura de renderizado por demanda y permite la creación de sitios estáticos y dinámicos.",
    icon: null,
    link: "https://youtu.be/sOXW0ZnJxbQ?si=Bg4DXRF0ET3MGTVb",
    docs: "https://astro.build/",
    name: "astro",
    autor: "Fazt",
  },
  {
    id: 13,
    image: imgGit,
    title: "Git",
    detail: "",
    text: "Un sistema de control de versiones distribuido que permite gestionar el historial de cambios en el código fuente de un proyecto de manera colaborativa.",
    icon: iconGit,
    link: "https://youtu.be/HiXLkL42tMU?si=tZBlh7VsDdpPdY-9",
    docs: "https://git-scm.com/",
    name: "git",
    autor: "Fazt",
  },
  {
    id: 14,
    image: imgExpress,
    title: "Express",
    detail: "",
    text: "Un marco de desarrollo de Node.js que simplifica la creación de aplicaciones web y API mediante la definición de rutas y middleware.",
    icon: iconExpress,
    link: "https://youtu.be/JmJ1WUoUIK4?si=lr_1hhpVmlc3Sh80",
    docs: "https://expressjs.com/",
    name: "express",
    autor: "Fazt",
  },
  {
    id: 15,
    image: imgPostgre,
    title: "PostgreSQL",
    detail: "",
    text: "Un sistema de gestión de bases de datos relacional que es potente, extensible y de código abierto",
    icon: iconPostgresql,
    link: "https://youtube.com/playlist?list=PLgqdACsQ8US2DCzQVrdZDZCTtTFHMY0as&si=5VvoDca6cM8CXlkA",
    docs: "https://www.postgresql.org/",
    name: "postgresql",
    autor: "Victor Ramos",
  },
  {
    id: 16,
    image: imgTypescript,
    title: "TypeScript",
    detail: "",
    text: "Una extensión de JavaScript que agrega tipos estáticos opcionales. Facilita el desarrollo de código más robusto y mantenible.",
    icon: iconTypescript,
    link: "https://youtu.be/fUgxxhI_bvc?si=tQNu1u_AkDnYHMDr",
    docs: "https://www.typescriptlang.org/",
    name: "typescript",
    autor: "Midudev",
  },
  {
    id: 17,
    image: imgGithub,
    title: "GitHub",
    detail: "",
    text: "Una plataforma de desarrollo colaborativo que utiliza Git para el control de versiones. Permite a los desarrolladores trabajar juntos en proyectos de software",
    icon: iconGithub,
    link: "https://youtu.be/3GymExBkKjE?si=A27DhKzTw4paK-2E",
    docs: "https://github.com/",
    name: "github",
    autor: "MoureDev",
  },
  {
    id: 18,
    image: imgBoot,
    title: "Bootstrap",
    detail: "",
    text: "Un marco de diseño front-end que facilita el diseño y desarrollo de interfaces web responsivas y atractivas.",
    icon: iconBoostrap,
    link: "https://youtu.be/QCw0L6FupQ0?si=EduiMGTsgbmiD3Yz",
    docs: "https://getbootstrap.com/",
    name: "bootstrap",
    autor: "FreeCodeCamp",
  },
  {
    id: 19,
    image: imgTailwind,
    title: "Tailwind CSS",
    detail: "",
    text: "Un marco de diseño CSS utilitario que permite diseñar interfaces de usuario de manera eficiente y personalizada.",
    icon: iconTailwind,
    link: "https://youtube.com/playlist?list=PLPl81lqbj-4JdoHDiERR2ptkw9zRggXAL&si=aig-uAbEL6BzymH7",
    docs: "https://tailwindcss.com/",
    name: "tailwind",
    autor: "Bluuweb",
  },
];
