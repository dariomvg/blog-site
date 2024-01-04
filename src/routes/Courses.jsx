import { cursos } from "../constants/data-courses";
import { useFilters } from "../controllers/FiltersCourses";
import { CardRouteCurso } from "../components/CardRouteCurso";

export const Courses = () => {
  const { cambioCursos, setNameCourse } = useFilters(cursos);

  return (
    <section className="container-courses">
      <section className="section-filters">
      <h1 className="title-courses">Cursos</h1>
        <select className="select" onChange={(e) => setNameCourse(e.target.value)}>
          <option value="all">Todos los cursos</option>
          <option value="html">html</option>
          <option value="css">css</option>
          <option value="javascript">javascript</option>
          <option value="react">react</option>
          <option value="typescript">typescript</option>
          <option value="node">node</option>
          <option value="express">express</option>
          <option value="deno">deno</option>
          <option value="bun">bun</option>
          <option value="sql">sql</option>
          <option value="mysql">mysql</option>
          <option value="mongodb">mongodb</option>
          <option value="postgresql">postgresql</option>
          <option value="bootstrap">bootstrap</option>
          <option value="tailwind">tailwind</option>
          <option value="git">git</option>
          <option value="github">github</option>
          <option value="next">next</option>
          <option value="astro">astro</option>
        </select>
        
      </section>
      <section className="all-courses">
        {cambioCursos &&
          cambioCursos.map((item) => (
            <CardRouteCurso key={item.id} item={item} />
          ))}
      </section>
    </section>
  );
};
