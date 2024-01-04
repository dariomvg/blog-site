import {articulos} from "../constants/data-articles";
import { CardRouteArticles } from '../components/CardRouteArticles';
import "../styles/articles.scss";

export const RouteContentArticles = () => {
  return (
    <section className="section-routes-articles">
        {articulos && articulos.map((item) => <CardRouteArticles key={item.id} item={item} />)}
    </section>
  )
}
