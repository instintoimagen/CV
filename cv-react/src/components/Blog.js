import React from "react";
import "./Blog.css";
import { HashLink } from "react-router-hash-link";
import { Route, Routes, Outlet } from "react-router-dom";
import BlogIndex from "./BlogIndex";
import PostArticle from "./PostArticle";

const Blog = () => {
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
        <Outlet />
        <Routes>
          <Route path="/" element={<BlogIndex />} />
          <Route path=":topic" element={<PostArticle />} />
        </Routes>
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
