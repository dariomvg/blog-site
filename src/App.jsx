import { HashRouter, Routes, Route } from "react-router-dom";
import { Home } from "./routes/Home";
import { Page404 } from "./components/Page404";
import { AboutMe } from "./routes/AboutMe";
import { Content } from "./routes/Content";
import { Topics } from "./routes/Topics";
import { Courses } from "./routes/Courses";
import { NextStudy } from "./routes/NextStudy";
import { Header } from "./components/Header";
import "./styles/app.scss";

function App() {
  return (
    <section className="wrapper-app">
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contenido/*" element={<Content />} />
          <Route path="/sobre-mi" element={<AboutMe />} />
          <Route path="/temas" element={<Topics />} />
          <Route path="/cursos" element={<Courses />} />
          <Route path="/proximo" element={<NextStudy />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </HashRouter>
    </section>
  );
}

export default App;
