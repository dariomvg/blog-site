import { NavLink } from "react-router-dom";
import { useState } from "react";
import imgMenu from "../assets/icons/all-icons/menu.svg";
import "../styles/header.scss";

const handleTest = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const handleMenu = () => {
    setIsOpen(!isOpen); 
  }

  return {isOpen, handleMenu}
}

export const Header = () => {

 const {isOpen,handleMenu} = handleTest(); 

  return (
    <header className={`header ${isOpen ? "open" : ""}`}>
      <NavLink to="/" className="logo">
        Blog
      </NavLink>
      <img
        src={imgMenu}
        alt="imagen de menu"
        className="img-menu"
        width={40}
        height={40}
        loading="lazy"
        onClick={handleMenu}
      />
      <nav className="navbar">
        <NavLink
          to="/contenido"
          className={`nav-link ${({isActive}) => isActive ? "active" : ""}`}>
          Contenido
        </NavLink>
        <NavLink to="/sobre-mi" className="nav-link">
          Sobre mí
        </NavLink>
        <NavLink to="/temas" className="nav-link">
          Temas
        </NavLink>
        <NavLink to="/cursos" className="nav-link">
          Cursos
        </NavLink>
        <NavLink to="/proximo" className="nav-link">
          Próximo
        </NavLink>
      </nav>
    </header>
  );
};
