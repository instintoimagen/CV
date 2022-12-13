import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Home = () => {
  const { theme, handleTheme } = useContext(ThemeContext);
  return (
    <>
      {/* Menu Desplegado */}
      <aside className="panel">
        <nav className="menu">
          <HashLink smooth to="#contacto">
            Contacto
          </HashLink>
          <HashLink smooth to="#acerca">
            Acerca de
          </HashLink>
          <HashLink smooth to="#portfolio">
            Portfolio
          </HashLink>
          <HashLink smooth to="#habilidades">
            Habilidades
          </HashLink>
          <HashLink smooth to="#tecnologias">
            Tecnologías y herramientas
          </HashLink>
          <HashLink smooth to="#educacion">
            Educación
          </HashLink>
          <HashLink smooth to="#experiencia">
            Experiencia
          </HashLink>
          <HashLink smooth to="#docente">
            Experiencia Docente
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
        <h4>DESARROLLADOR</h4>
        <a
          href="https://sergioortega.com.ar/sergioortega-cv.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button" className="btn btn-outline-secondary">
            versión impresa 🖨️
          </button>
        </a>
      </section>

      <main className="container">
        <article id="contacto">
          <h2>Contacto</h2>
          <ul>
            <li>vía mail: instintoimagen@gmail.com</li>
            <li>mi ubicación: Córdoba, Argentina</li>
            <li>
              visitá mi web:{" "}
              <a
                href="https://sergioortega.com.ar"
                target="_blank"
                rel="noreferrer"
              >
                sergioortega.com.ar
              </a>
            </li>
            <li>
              conectá en LinkedIn:{" "}
              <a
                href="https://linkedin.com/in/sergioortegadev"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/sergioortegadev
              </a>
            </li>
            <li>
              mi GitHub:{" "}
              <a
                href="https://github.com/instintoimagen"
                target="_blank"
                rel="noreferrer"
              >
                github.com/instintoimagen
              </a>
            </li>
          </ul>
        </article>

        <article id="acerca">
          <h2>Acerca de</h2>
          <p>
            Entusiasta de la tecnología desde siempre, soy un autodidacta nato,
            y me estoy constantemente actualizando. Tengo habilidades blandas
            desarrolladas, especialmente en comunicación organizacional. Soy un
            convencido de la potencia del trabajo en equipo, por mi actividad
            audiovisual casi siempre trabajé en ese formato, incluso en posición
            de líder. Me interesan los desafíos y respondo muy bien al trabajo
            bajo presión. Cumplí mis objetivos en la actividad audiovisual tras
            varios años de dirigir televisión, y decidí continuar con nuevos
            retos en el área de la programación.
          </p>
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
                  <p>Aquí una selección de algunos trabajos</p>
                </div>
              </>
            }
          </Link>
        </article>

        <article id="habilidades">
          <h2>Habilidades</h2>
          <ul>
            <li>Desarrollo web Frontend</li>
            <li>Diseño y maquetación web</li>
            <li>Creación de contenidos digitales</li>
            <li>Autodidacta</li>
            <li>Fotografía profesional</li>
            <li>Producción audiovisual</li>
            <li>Docencia</li>
          </ul>
        </article>

        <article id="tecnologias">
          <h2>Tecnologías y herramientas</h2>
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
                src="./assets/webpack.svg"
                alt="webpack"
              />
              <figcaption>Webpack</figcaption>
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
          <h2>Educación</h2>
          <ul>
            <li>
              Autodidacta <i className="bi bi-person-up"></i>
            </li>
            <li>2022 - Argentina Programa</li>
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
            <li>2016 - Técnico superior en fotografía - UPC</li>
            <li>2011 - Lic. en cine y televisión - UNC</li>
          </ul>
        </article>

        <article id="experiencia">
          <h2>Experiencia</h2>
          <div className="items-experiencia">
            <div className="logo-exp">
              <img
                src="./assets/Canal_10.png"
                height="50px"
                alt="logo canal 10"
              />
            </div>
            <div className="tex-exp">
              <h3>Canal 10 - SRT UNC (2015 - actualidad)</h3>
              <p>
                Director de programas (2020 - actualidad). <br />
                Operador de tape (2015 - 2020).
              </p>
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
              <h3>Aplitivo.com (2021)</h3>
              <p>Diseño, desarrollo y SEO del sitio con ecommerce.</p>
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
              <h3> InstintoImagen.com.ar (2003 - actualidad)</h3>
              <p>
                Diseño, desarrollo y SEO del sitio. <br />
                Además es una productora audiovisual en donde he trabajado como
                fotógrafo, camarógrafo y editor de video.
              </p>
            </div>
          </div>
          <div className="items-experiencia">
            <div className="logo-exp">
              <img src="./assets/La_Voz.png" height="50px" alt="logo La Voz" />
            </div>
            <div className="tex-exp">
              <h3>La Voz (2011 - 2013)</h3>
              <p>
                Fotógrafo contratado del diario en el período indicado, y
                también continúo como fotógrafo freelance para el mismo medio
                hasta la actualidad.
              </p>
            </div>
          </div>
          <div className="items-experiencia">
            <div className="logo-exp">
              <img src="./assets/apex.png" height="50px" alt="logo apex" />
            </div>
            <div className="tex-exp">
              <h3>Apex América (2007 - 2011)</h3>
              <p>
                Trainer (capacitador con certificación del cliente) para nuevos
                ingresos a la atención telefónica de soporte técnico de
                internet. También analista de calidad y representante de
                atención técnica de internet.
              </p>
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
              <h3>SIEMENS (2007)</h3>
              <p>Representante de atención al cliente.</p>
            </div>
          </div>
        </article>

        <article id="docente">
          <h2>Experiencia Docente</h2>
          <div className="items-docente">
            <div className="logo-docente">
              <img
                src="./assets/UB.jpg"
                height="70px"
                alt="logo Universidad de Belgrano"
              />
            </div>
            <div className="tex-docente">
              <h3>Diplomado Periodismo Móvil - UB (2019)</h3>
              <p>
                A cargo de las unidades referidas a fotografía y video, para la
                Universidad de Belgrano extensión en Córdoba.
              </p>
            </div>
          </div>
          <div className="items-docente">
            <div className="logo-docente">
              <img
                src="./assets/UNC.jpg"
                height="60px"
                alt="logo Universidad Nacional de Córdoba"
              />
            </div>
            <div className="tex-docente">
              <h3>Realización Televisiva - UNC (2017 - 2018)</h3>
              <p>
                Integrando el equipo de la cátedra de la carrera de Cine y
                Televisión, facultad de artes.
              </p>
            </div>
          </div>
          <div className="items-docente">
            <div className="logo-docente">
              <img
                src="./assets/UPC.png"
                height="40px"
                alt="logo Universidad Provincial de Córdoba"
              />
            </div>
            <div className="tex-docente">
              <h3>Fotografía Documental - UPC (2017 - 2018)</h3>
              <p>
                Integrando el equipo de la cátedra de la carrera de Tecnicatura
                Superior en Fotografía, facultad de diseño y artes.
              </p>
            </div>
          </div>
          <div className="items-docente">
            <div className="logo-docente"></div>
            <div className="tex-docente">
              <h3>Cursos y talleres online y presencial varios</h3>
              <p>
                sobre creación de páginas web con wordpress, fotografía y
                producción audiovisual.
              </p>
            </div>
          </div>
        </article>
      </main>

      <footer>
        <h3>Sergio Ortega</h3>
        <p>
          Última Actualización: Diciembre 2022 <br />
          Por consultas, propuestas o proyectos contactar vía mail. Muchas
          gracias ;)
        </p>
      </footer>
      {/* Botón Up */}
      <button className="scroll-top-boton btn btn-dark">
        <HashLink to="#top">
          <div>
            <i className="bi bi-arrow-up-circle-fill"></i>
          </div>
        </HashLink>
      </button>

      {/* Botón tema oscuro */}
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
      <button className="panel-btn hamburger hamburger--spring" type="button">
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </>
  );
};

export default Home;
