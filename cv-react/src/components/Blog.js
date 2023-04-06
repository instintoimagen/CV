import React from "react";
import "./Blog.css";
import { HashLink } from "react-router-hash-link";
import { Route, Routes } from "react-router-dom";
import posts from "../db/Posts";
import BlogIndex from "./BlogIndex";
import PostArticle from "./PostArticle";

/* Para extraer la fecha en formato legible
console.table(posts);
console.log(posts[0].date);
const horaActual = new Date();
console.log(
  new Intl.DateTimeFormat("es-GB", {
    dateStyle: "full",
    timeStyle: "long",
    timeZone: "America/Cordoba",
  }).format(horaActual)
);
console.log(new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'long', timeZone: 'Australia/Sydney' }).format(date));
*/
const Blog = () => {
  // Para que el botón aparezca cuando hacemos scroll para abajo, y desaparezca cuando suba. Usamos las propiedades: "pageYOffset" del objeto Window, || o la propiedad "documentElement.scrollTop" del Document, para detectar a qué distancia se ha hecho scroll vertical, y luego determinar que cuando sea mayor de 400 haga aparecer (quita el hidden) al botón. Con else volvemos a ocultarlo.
  window.addEventListener("scroll", (e) => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 450) {
      document.querySelector(".scroll-top-boton").classList.remove("hidden");
    } else {
      document.querySelector(".scroll-top-boton").classList.add("hidden");
    }
    //podríamos ver la actividad del scroll con console.log(window.pageYOffset, document.documentElement.scrollTop)
  });

  return (
    <>
      <main className="main-blog">
        <HashLink to="/blog">
          <h3 className="blog-header"> Cuaderno de notas ={">"} miBlog() </h3>
        </HashLink>
        <Routes>
          <Route path="/" element={<BlogIndex />} />
          <Route path=":topic" element={<PostArticle />} />
        </Routes>

        {/*  <div className="content-blog">
          <div className="blog-div">
              {posts.map((el) => (
              <PostArticle
                key={el.id}
                title={el.title}
                subTitle={el.subTitle}
                date={el.date}
                content={el.content}
              />
            ))} 
          </div>
        </div>*/}
      </main>
      <footer>
        <h3>Sergio Ortega</h3>
        <p>
          © 2023 Sergio Ortega Developer's Blog
          <br />
          Por consultas, propuestas o proyectos contactar vía mail. Muchas
          gracias ;{")"}
        </p>
      </footer>
      {/* Botón Up */}
      <button className="scroll-top-boton btn btn-dark hidden">
        <HashLink smooth to="#top">
          <div>
            <i className="bi bi-arrow-up-circle-fill"></i>
          </div>
        </HashLink>
      </button>
    </>
  );
};

export default Blog;
