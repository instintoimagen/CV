import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import LangContext from "../context/LangContext";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Home = () => {
  const { theme, handleTheme } = useContext(ThemeContext);
  const { text, lang, handleLang } = useContext(LangContext);

  const handleMenu = () => {
    //  switcheamos la clase "is-active" de esta forma: buscamos el selector "panel" y luego entra a su lista de clases y con el método toggle añade o quita la clase "is-active"
    document.querySelector(".panel").classList.toggle("is-active");
    document.querySelector(".hamburguer-btn").classList.toggle("is-active");
  };
  const handleLinkMenu = () => {
    // con este tercer parámetro quitamos el "is-active" cuando se selecciona algún link del menú, cerrándolo.
    document.querySelector(".panel").classList.remove("is-active");
    document.querySelector(".hamburguer-btn").classList.remove("is-active");
  };

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
      {/* Menu Desplegado */}
      <aside className="panel">
        <nav className="menu">
          <HashLink onClick={handleLinkMenu} smooth to="#contacto">
            {text.nav_contacto}
          </HashLink>
          <HashLink onClick={handleLinkMenu} smooth to="#acerca">
            {text.nav_acerca}
          </HashLink>
          <HashLink onClick={handleLinkMenu} smooth to="#portfolio">
            {text.nav_portfolio}
          </HashLink>
          <HashLink onClick={handleLinkMenu} smooth to="#habilidades">
            {text.nav_habilidades}
          </HashLink>
          <HashLink onClick={handleLinkMenu} smooth to="#tecnologias">
            {text.nav_tecnologias}
          </HashLink>
          <HashLink onClick={handleLinkMenu} smooth to="#educacion">
            {text.nav_educacion}
          </HashLink>
          <HashLink onClick={handleLinkMenu} smooth to="#experiencia">
            {text.nav_experiencia}
          </HashLink>
        </nav>
      </aside>

      <section className="planta-dev d-flex">
        <img
          className="planta-dev-img"
          src="./assets/dev-plant.jpg"
          alt="La planta Dev"
        />
      </section>

      <section className="foto-perfil">
        <img
          className="foto-perfil-img"
          src="./assets/perfil.jpg"
          alt="foto de perfil de Sergio Ortega"
        />
      </section>

      <section className="titulo-centro">
        <h1>Sergio Ortega</h1>
        <h4>{text.tituloCentro_h4}</h4>
        {lang === "es" ? (
          <a
            href="https://sergioortega.com.ar/sergioortega-cv.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <button type="button" className="btn btn-outline-secondary">
              versión impresa 🖨️ es
            </button>
          </a>
        ) : (
          <a
            href="https://sergioortega.com.ar/sergioortega-cv-en.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <button type="button" className="btn btn-outline-secondary">
              printed version 🖨️ en
            </button>
          </a>
        )}
      </section>

      <main className="container">
        <article id="contacto">
          <h2>{text.contacto_h2}</h2>
          <ul>
            <li>{text.contact_li_mail}</li>
            <li>{text.contact_li_location}</li>
            <li>
              {text.contact_li_web}
              <a
                href="https://sergioortega.com.ar"
                target="_blank"
                rel="noreferrer"
              >
                sergioortega.com.ar
              </a>
            </li>
            <li>
              {text.contact_li_linkedin}
              <a
                href="https://linkedin.com/in/sergioortegadev"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/sergioortegadev
              </a>
            </li>
            <li>
              {text.contact_li_github}
              <a
                href="https://github.com/sergioortegadev"
                target="_blank"
                rel="noreferrer"
              >
                github.com/sergioortegadev
              </a>
            </li>
            <li>
              {text.contact_li_twitter}
              <a
                href="https://twitter.com/intent/follow?screen_name=sergioortegadev"
                target="_blank"
                rel="noreferrer"
              >
                twitter.com/sergioortegadev
              </a>
            </li>
          </ul>
        </article>

        <article id="acerca">
          <h2>{text.acerca_h2}</h2>
          <p>{text.acerca_p}</p>
        </article>

        <article id="portfolio">
          <Link to="/portfolio">
            {
              <>
                <h2>Portfolio</h2>
                <div className="d-flex">
                  <figure className="logo-portfolio">
                    <img src="./assets/portfolio.png" alt="portfolio" />
                  </figure>
                  <p>{text.portfolio_p}</p>
                </div>
              </>
            }
          </Link>
        </article>

        <article id="habilidades">
          <h2>{text.habilidades_h2}</h2>
          <ul>
            <li>{text.habilidades_li_desarrollo}</li>
            <li>{text.habilidades_li_diseño}</li>
            <li>{text.habilidades_li_autodidacta}</li>
            <li>{text.habilidades_li_comunicacion}</li>
            <li>{text.habilidades_li_analitica}</li>
            <li>{text.habilidades_li_contenido}</li>
          </ul>
        </article>

        <article id="tecnologias">
          <h2>{text.tecnologias_h2}</h2>
          <div className="tecno-grilla">
            <figure>
              <img
                className="icon-tec"
                src="./assets/javascript.svg"
                alt="javascript"
              />
              <figcaption>JavaScript</figcaption>
            </figure>
            <figure>
              <img
                className="icon-tec"
                src="./assets/react.svg"
                alt="react.js"
              />
              <figcaption>React.js</figcaption>
            </figure>
            <figure>
              <img className="icon-tec" src="./assets/node.svg" alt="node.js" />
              <figcaption>Node.js</figcaption>
            </figure>
            <figure>
              <img className="icon-tec" src="./assets/java.svg" alt="java" />
              <figcaption>Java</figcaption>
            </figure>
            <figure>
              <img className="icon-tec" src="./assets/mysql.svg" alt="MySql" />
              <figcaption>MySQL</figcaption>
            </figure>
            <figure>
              <img
                className="icon-tec"
                src="./assets/bootstrap.svg"
                alt="bootstrap"
              />
              <figcaption>Bootstrap</figcaption>
            </figure>
            <figure>
              <img
                className="icon-tec"
                src="./assets/html-5.svg"
                alt="html-5"
              />
              <figcaption>HTML 5</figcaption>
            </figure>
            <figure>
              <img className="icon-tec" src="./assets/css3.svg" alt="css" />
              <figcaption>CSS</figcaption>
            </figure>
            <figure>
              <img className="icon-tec" src="./assets/git.svg" alt="git" />
              <figcaption>Git</figcaption>
            </figure>
            <figure>
              <img
                className="icon-tec"
                src="./assets/github.svg"
                alt="github"
              />
              <figcaption>GitHub</figcaption>
            </figure>
            <figure>
              <img
                className="icon-tec"
                src="./assets/terminal.svg"
                alt="linux"
              />
              <figcaption>Linux</figcaption>
            </figure>
            <figure>
              <img
                className="icon-tec"
                src="./assets/wordpress.svg"
                alt="wordpress"
              />
              <figcaption>Wordpress</figcaption>
            </figure>
            <figure>
              <img
                className="icon-tec"
                src="./assets/photoshop.svg"
                alt="photoshop"
              />
              <figcaption>Photoshop</figcaption>
            </figure>
            <figure>
              <img
                className="icon-tec"
                src="./assets/premiere-pro.svg"
                alt="premiere"
              />
              <figcaption>Premiere</figcaption>
            </figure>
            <figure>
              <img
                className="icon-tec"
                src="./assets/effects.svg"
                alt="after effects"
              />
              <figcaption>After Effects</figcaption>
            </figure>
            <figure>
              <img
                className="icon-tec"
                src="./assets/lightroom.svg"
                alt="lightroom"
              />
              <figcaption>Lightroom</figcaption>
            </figure>
          </div>
        </article>

        <article id="educacion">
          <h2>{text.educacion_h2}</h2>
          <ul>
            <li>
              {text.educacion_li_autodidacta}{" "}
              <i className="bi bi-person-up"></i>
            </li>

            <li>
              2023 -{" "}
              <a
                href="https://drive.google.com/file/d/1LAQbGqCcdfEDQjM8IPNVlSHtrYWgv-51/view?usp=share_link"
                target="_blank"
                rel="noreferrer"
              >
                {text.educacion_li_metodologias} │ UNC - Min. Ciencia y
                Tecnología -
              </a>{" "}
              <a
                href="https://certificados.campusvirtual.unc.edu.ar/upv/?code=754554925bc64b019b39e3dcc0a556ba"
                target="_blank"
                rel="noreferrer"
              >
                <small>{text.educacion_li_metodologias_small}</small>
              </a>
            </li>
            <li>
              2022 -{" "}
              <a
                href="https://drive.google.com/file/d/16kSITLZ4M0RhV8As0cvlsOrPlWxIgQ3o/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Argentina Programa │ Ticmas
              </a>
            </li>

            <li>
              2022 -{" "}
              <a
                href="https://drive.google.com/file/d/16fquiHODTlPWt11MuBvuSsyAnxkP8jHw/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Argentina Programa
              </a>
            </li>

            <li>
              2022 - Cisco -{" "}
              <a
                href="https://drive.google.com/file/d/1iIjj0C3uVjWKc_OYvj64sJ3KhfuBAGnf/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                NDG Linux Unhatched
              </a>
            </li>
            <li>2016 - {text.educacion_li_fotografia} - UPC</li>
            <li>2011 - {text.educacion_li_cine} - UNC</li>
          </ul>
        </article>

        <article id="experiencia">
          <h2>{text.experiencia_h2}</h2>
          <div className="items-experiencia">
            <div className="logo-exp">
              <img
                src="./assets/freelance-code.png"
                height="50px"
                alt="Sergio Ortega Developer Freelance Logo"
              />
            </div>
            <div className="tex-exp">
              <h3>{text.experiencia_01_h3}</h3>
              <p>{text.experiencia_01_p1}</p>
              <p>{text.experiencia_01_p2}</p>
            </div>
          </div>
          <div className="items-experiencia">
            <div className="logo-exp">
              <img
                src="./assets/Canal_10.png"
                height="50px"
                alt="logo canal 10"
              />
            </div>
            <div className="tex-exp">
              <h3>{text.experiencia_02_h3}</h3>
              <p>{text.experiencia_02_p1}</p>
              <p>{text.experiencia_02_p2}</p>
            </div>
          </div>
          <div className="items-experiencia">
            <div className="logo-exp">
              <img
                src="./assets/aplitivo.png"
                height="50px"
                alt="logo aplitivo"
              />
            </div>
            <div className="tex-exp">
              <h3>{text.experiencia_03_h3}</h3>
              <p>{text.experiencia_03_p1}</p>
            </div>
          </div>
          <div className="items-experiencia">
            <div className="logo-exp">
              <img
                src="./assets/instinto.jpg"
                height="50px"
                alt="logo InstintoImagen"
              />
            </div>
            <div className="tex-exp">
              <h3>{text.experiencia_04_h3}</h3>
              <p>{text.experiencia_04_p1}</p>
              <p>{text.experiencia_04_p2}</p>
            </div>
          </div>
          <div className="items-experiencia">
            <div className="logo-exp">
              <img src="./assets/La_Voz.png" height="50px" alt="logo La Voz" />
            </div>
            <div className="tex-exp">
              <h3>{text.experiencia_05_h3}</h3>
              <p>{text.experiencia_05_p1}</p>
            </div>
          </div>
          <div className="items-experiencia">
            <div className="logo-exp">
              <img src="./assets/apex.png" height="50px" alt="logo apex" />
            </div>
            <div className="tex-exp">
              <h3>{text.experiencia_06_h3}</h3>
              <p>{text.experiencia_06_p1}</p>
            </div>
          </div>
          <div className="items-experiencia">
            <div className="logo-exp">
              <img
                src="./assets/Siemens.png"
                height="50px"
                alt="logo siemens"
              />
            </div>
            <div className="tex-exp">
              <h3>{text.experiencia_07_h3}</h3>
              <p>{text.experiencia_07_p1}</p>
            </div>
          </div>
        </article>
      </main>

      <footer>
        <h3>Sergio Ortega</h3>
        <div>
          <p>{text.footer_p1}</p>
          <p>{text.footer_p2}</p>
        </div>
      </footer>

      {/* Botón Up */}
      <button className="scroll-top-boton btn btn-dark hidden">
        <HashLink smooth to="#top">
          <div>
            <i className="bi bi-arrow-up-circle-fill"></i>
          </div>
        </HashLink>
      </button>

      {/* Botón idioma - Lang Button */}
      <button
        className="lang-boton btn btn-dark"
        onClick={() => handleLang(lang)}
      >
        <div>{lang === "es" ? "En" : "Es"}</div>
      </button>

      {/* Botón tema oscuro - Dark theme */}
      <button
        onClick={() => handleTheme(theme)}
        className="dark-theme-btn btn btn-dark"
      >
        {theme === "light" ? (
          <i className="bi bi-moon-stars-fill"></i>
        ) : (
          <i className="bi bi-brightness-high-fill"></i>
        )}
      </button>

      {/* Hamburguer Menu */}
      <button
        onClick={handleMenu}
        className="hamburguer-btn hamburger hamburger--spring"
        type="button"
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </>
  );
};

export default Home;
