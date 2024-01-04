import { temas } from "../constants/data-topics"
import { CardRouteTemas } from "../components/CardRouteTemas"
import "../styles/topics.scss";


export const RouteContentTopics = () => {
  return (
    <section className="section-routes-topics">
        {temas && temas.map((item) => <CardRouteTemas key={item.id} item={item} />)}
    </section>
  )
}
