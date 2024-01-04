import { cursos } from '../constants/data-courses'
import { CardRouteCurso } from '../components/CardRouteCurso'
import "../styles/courses.scss";

export const RouteContentCourses = () => {
  return (
    <section className="section-routes-courses">
        {cursos && cursos.map((item) => <CardRouteCurso key={item.id} item={item} />)}
    </section>
  )
}
