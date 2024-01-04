import { paquetes } from '../constants/data-packages'
import { CardRoutePackages } from '../components/CardRoutePackages';
import "../styles/packages.scss";


export const RouteContentPackeges = () => {
  return (
    <section  className="section-routes-packages">
        {paquetes && paquetes.map((item) => <CardRoutePackages key={item.id} item={item} />)}
    </section>
  )
}
