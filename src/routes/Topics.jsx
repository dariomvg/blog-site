import { temas } from "../constants/data-topics";
import { CardRouteTemas } from "../components/CardRouteTemas";
import "../styles/topics.scss"; 

export const Topics = () => {
  return (
    <section className="container-temas">
      <h1 className="title-temas">Temas</h1>

      <section className="all-topics">
          {temas && 
            temas.map((item) => <CardRouteTemas key={item.id} item={item} /> )
          }
      </section>
    </section>
  )
}
