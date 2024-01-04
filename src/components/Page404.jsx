import img404 from "../assets/images/image-404.svg"
import "../styles/page404.scss";

export const Page404 = () => {
  return (
    <div className="container-404">
      <img src={img404} alt="image 404" width={500} height={450} loading="lazy" />
      <p className="title-404"><b>ERROR-404:</b> Página no encontrada, revisa la ruta y vuelve a intentarlo</p>
    </div>
  )
}
