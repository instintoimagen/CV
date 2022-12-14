import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <>
      <main className="main-port">
        <h1 className="h1-port">Porfolio</h1>
        {/*       Proyectos  Section   */}
        <section className="proyectos ">
          <h2 className="h2-port seccion-titulo">PROYECTOS</h2>

          {/*   Galeria de Proyectos  */}
          <div className="container text-center proyectos-contenedor">
            <div className="row">
              {/*      Proyecto 1  */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="proyecto">
                  <img
                    src="./assets/proy01.jpg"
                    alt="Proyecto 1 - Portfolio personal CV"
                  />
                  <div className="overlay">
                    <p>Portfolio personal CV</p>
                    <div className="iconos-contenedor d-flex justify-content-around">
                      <a
                        href="https://github.com/instintoimagen"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="bi bi-github"></i>
                      </a>
                      <a
                        href="https://sergioortega.com.ar"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="bi bi-browser-chrome"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/*     <!-- Proyecto 2 --> */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="proyecto">
                  <img src="./assets/proy02.jpg" alt="Proyecto 2 e-commerce" />
                  <div className="overlay">
                    <p>e-commerce simple</p>
                    <div className="iconos-contenedor d-flex justify-content-around">
                      <a
                        href="https://github.com/instintoimagen"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="bi bi-github"></i>
                      </a>
                      <a
                        href="https://sergioortega.com.ar/citas-simpsons"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="bi bi-browser-chrome"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/*     <!-- Proyecto 3 --> */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="proyecto">
                  <img
                    src="./assets/proy03.jpg"
                    alt="Proyecto 3 web app calculadora"
                  />
                  <div className="overlay">
                    <p>Calculadora</p>
                    <div className="iconos-contenedor d-flex justify-content-around">
                      <a
                        href="https://github.com/instintoimagen"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="bi bi-github"></i>
                      </a>
                      <a
                        href="https://sergioortega.com.ar/apis-ej"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="bi bi-browser-chrome"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/*       Proyecto 4     */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="proyecto">
                  <img
                    src="./assets/proy04.jpg"
                    alt="Proyecto 4 web app notas"
                  />
                  <div className="overlay">
                    <p>Notas</p>
                    <div className="iconos-contenedor d-flex justify-content-around">
                      <a
                        href="https://github.com/instintoimagen"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="bi bi-github"></i>
                      </a>
                      <a
                        href="https://sergioortega.com.ar/portfolio/web-pedidos"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="bi bi-browser-chrome"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/*     Proyecto 5  */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="proyecto">
                  <img
                    src="./assets/proy05.jpg"
                    alt="Proyecto 5 API citas de los Simpsons"
                  />
                  <div className="overlay">
                    <p>Frases de Los Simpsons</p>
                    <div className="iconos-contenedor d-flex justify-content-around">
                      <a
                        href="https://github.com/instintoimagen"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="bi bi-github"></i>
                      </a>
                      <a
                        href="https://sergioortega.com.ar/portfolio/notas/notas.html"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="bi bi-browser-chrome"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/*  Proyecto 6  */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="proyecto">
                  <img
                    src="./assets/proy06.jpg"
                    alt="Proyecto 6 API Nasa Photos"
                  />
                  <div className="overlay">
                    <p>API Nasa Photos</p>
                    <div className="iconos-contenedor d-flex justify-content-around">
                      <a
                        href="https://github.com/instintoimagen"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="bi bi-github"></i>
                      </a>
                      <a
                        href="https://sergioortega.com.ar/portfolio/calc/calc.html"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="bi bi-browser-chrome"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Portfolio;
