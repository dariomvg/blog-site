import { NavLink, Route, Routes } from "react-router-dom";
import { RouteContentCourses } from "../routes-content/RouteContentCourses";
import { RouteContentTopics } from "../routes-content/RouteContentTopics";
import { RouteContentPackeges } from "../routes-content/RouteContentPackeges";
import { RouteContentContacts } from "../routes-content/RouteContentContacts";
import { RouteContentArticles } from "../routes-content/RouteContentArticles";
import { RouteLanding } from "../routes-content/RouteLanding";
import imgFelcha from "../assets/icons/all-icons/icon-down.svg"; 
import "../styles/content.scss";
import { useState } from "react";

export const Content = () => {

  const [isOpen, setIsOpen] = useState(false); 


  const openAside = () => {
    setIsOpen(!isOpen); 
  }

  return (
    <section className="section-content">
      <aside className={`aside-links ${isOpen ? "open" : ""}`}>
        <div className="cont-title">
          <h2 className="title-categories">Categorias</h2>
          <img src={imgFelcha} alt="image" className="img-flecha" width={20} height={20} onClick={openAside} />
        </div>
        <div className="list-link">
          <NavLink
            to="cursos"
            className={`link-category ${({ isActive }) =>
              isActive ? "active" : ""}`}>
            Cursos
          </NavLink>
          <NavLink to="articulos" className="link-category">
            Artículos
          </NavLink>
          <NavLink to="temas" className="link-category">
            Temas
          </NavLink>
          <NavLink to="paquetes" className="link-category">
            Paquetes
          </NavLink>
          <NavLink to="redes" className="link-category">
            Redes
          </NavLink>
          <NavLink to="/" className="link-category">
            Principal
          </NavLink>
        </div>
      </aside>
      <section className="nav-routes">
        <Routes>
          <Route path="/" element={<RouteLanding />} />
          <Route path="/cursos" element={<RouteContentCourses />} />
          <Route path="/temas" element={<RouteContentTopics />} />
          <Route path="/paquetes" element={<RouteContentPackeges />} />
          <Route path="/articulos" element={<RouteContentArticles />} />
          <Route path="/redes" element={<RouteContentContacts />} />
        </Routes>
      </section>
    </section>
  );
};
