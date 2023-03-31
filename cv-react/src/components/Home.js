import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Home = () => {
  const { theme, handleTheme } = useContext(ThemeContext);

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
            Contacto
          </HashLink>
          <HashLink onClick={handleLinkMenu} smooth to="#acerca">
            Acerca de
          </HashLink>
          <HashLink onClick={handleLinkMenu} smooth to="#portfolio">
            Portfolio
          </HashLink>
          <HashLink onClick={handleLinkMenu} smooth to="#habilidades">
            Habilidades
          </HashLink>
          <HashLink onClick={handleLinkMenu} smooth to="#tecnologias">
            Tecnologías y herramientas
          </HashLink>
          <HashLink onClick={handleLinkMenu} smooth to="#educacion">
            Educación
          </HashLink>
          <HashLink onClick={handleLinkMenu} smooth to="#experiencia">
            Experiencia
          </HashLink>
          <HashLink onClick={handleLinkMenu} smooth to="#docente">
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
            versión impresa 🖨️ es
          </button>
        </a>
        <a
          href="https://sergioortega.com.ar/sergioortega-cv-en.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button" className="btn btn-outline-secondary">
            printed version 🖨️ en
          </button>
        </a>
      </section>

      <main className="container">
        <article id="contacto">
          <h2>Contacto</h2>
          <ul>
            <li>✉ vía mail: instintoimagen@gmail.com</li>
            <li> 📍 mi ubicación: Córdoba, Argentina</li>
            <li>
              {" "}
              ✔ visitá mi web:{" "}
              <a
                href="https://sergioortega.com.ar"
                target="_blank"
                rel="noreferrer"
              >
                sergioortega.com.ar
              </a>
            </li>
            <li>
              {" "}
              🏙 conectá en LinkedIn:{" "}
              <a
                href="https://linkedin.com/in/sergioortegadev"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/sergioortegadev
              </a>
            </li>
            <li>
              {" "}
              💾 mi GitHub:{" "}
              <a
                href="https://github.com/sergioortegadev"
                target="_blank"
                rel="noreferrer"
              >
                github.com/sergioortegadev
              </a>
            </li>
            <li>
              🐦 mis tweets:{" "}
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
          <h2>Acerca de</h2>
          <p>
            Desarrollador con experiencia en maquetado de prototipos diseñados
            con creatividad, amigables para el usuario, teniendo en cuenta los
            lineamientos de UX. Programador especializado en tecnologías web
            como JavaScript, React, consumo de APIs, y también Node, Java y
            MySQL. Manejo de Git y GitHub. Interesado en proyectos escalables,
            con metodologías ágiles como SCRUM y procesos CI/CD.
            <br />
            <br />
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
            <li>Desarrollo de web app</li>
            <li>Diseño y maquetación web</li>
            <li>Autodidacta</li>
            <li>Comunicación efectiva</li>
            <li>Habilidad analítica</li>
            <li>
              Creación de contenidos digitales, y audiovisuales. Fotógrafo
              profesional. Docente
            </li>
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

            <li>
              2023 -{" "}
              <a
                href="https://drive.google.com/file/d/1LAQbGqCcdfEDQjM8IPNVlSHtrYWgv-51/view?usp=share_link"
                target="_blank"
                rel="noreferrer"
              >
                Metodologías ágiles │ UNC - Min. Ciencia y Tecnología -
              </a>{" "}
              <a
                href="https://certificados.campusvirtual.unc.edu.ar/upv/?code=754554925bc64b019b39e3dcc0a556ba"
                target="_blank"
                rel="noreferrer"
              >
                <small>Código de verificación</small>
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
            <li>2016 - Técnico superior en fotografía - UPC</li>
            <li>2011 - Lic. en cine y televisión - UNC</li>
          </ul>
        </article>

        <article id="experiencia">
          <h2>Experiencia</h2>
          <div className="items-experiencia">
            <div className="logo-exp">
              <img
                src="./assets/freelance-code.png"
                height="50px"
                alt="Sergio Ortega Developer Freelance Logo"
              />
            </div>
            <div className="tex-exp">
              <h3>Desarrollador Freelance (2022 - actualidad)</h3>
              <p>
                Desarrollo de web apps, landing pages y tiendas virtuales
                (e-commerce). Diseñadas con creatividad, amigables al usuario,
                siguiendo lineamientos de UX.
                <br />
                Programador especializado en tecnologías web como React.js,
                JavaScript, consumo de APIs; y también Node, Java y MySQL.
              </p>
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
              <p>Diseño, desarrollo y SEO del sitio con e-commerce.</p>
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
              <h3> InstintoImagen.com.ar (2003 - 2022)</h3>
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
          Última Actualización: Abril 2023 <br />
          Por consultas, propuestas o proyectos contactar vía mail. Muchas
          gracias ;)
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
