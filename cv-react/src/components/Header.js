import React from "react";

const Header = () => {
  const rel = "noopener";

  return (
    <>
      <section className="plantaDev">
        <img id="plantaDev" src="./assets/dev-plant.jpg" alt="La planta Dev" />
      </section>

      <div className="divfotoperfil">
        <img
          className="fotoperfil"
          src="./assets/perfil.jpg"
          alt="foto de perfil de Sergio Ortega"
        />
      </div>

      <div className="titulo-centro">
        <h1>Sergio Ortega</h1>
        <h4>DESARROLLADOR</h4>
        <a
          href="https://sergioortega.com.ar/sergioortega-cv.pdf"
          target="_blank"
          rel="noopener"
        >
          <button type="button" className="btn btn-outline-secondary">
            versión impresa 🖨️
          </button>
        </a>
      </div>
    </>
  );
};

export default Header;
