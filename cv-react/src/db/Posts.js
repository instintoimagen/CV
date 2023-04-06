const posts = [
  {
    id: 1001,
    author: 1,
    category: [1, 2],
    tags: [3, 4],
    title:
      "Cómo usar react-icons para instalar Font Awesome en una aplicación con React",
    /* subTitle es solo para miniatura */
    subTitle:
      "Los íconos son representaciones gráficas de un concepto, una idea, un archivo, un programa, una aplicación, un negocio, entre otros.",
    date: "2023/03/30 14:00:00",
    thumb: `https://placeimg.com/800/400/tech`,
    route: "react-icons-para-installar-font-awesome",
    content: `
    <article class="post-full">
   <header class="post-full-header">
    <h1 class="post-full-title">Cómo usar react-icons para instalar Font Awesome en una aplicación con React</h1>
   </header>

   <img src="https://placeimg.com/800/400/tech" alt="tech place  img">

   <section class="post-full-content">

    <section class="post-content ">

     <h3>Cuando estés construyendo una aplicación web con React, es muy probable que requieras utilizar íconos. Los
      íconos
      son representaciones gráficas de un concepto, una idea, un archivo, un programa, una aplicación, un negocio,
      entre
      otros.</h3>
     <p>También puedes usar íconos para representar la identidad de una funcionalidad. En aquellos lugares donde no
      quieras escribir el nombre de un programa, un ícono adecuado puede aparecer en lugar del nombre o aplicación para
      una fácil identificación.</p>
     <p>Existen muchas y diferentes librerías de íconos allí afuera, así que, ¿cómo puedes agregarlas a tu aplicación
      en
      React? Aprenderemos esto y mucho más en este artículo.</p>
     <hr />
     <h2>En este artículo aprenderás:</h2>
     <ul>
      <li>¿Qué es la librería 'react-icons'?</li>
      <li>¿Qué son los íconos de Font Awesome?</li>
      <li>Cómo configurar tu entorno de desarrollo.</li>
      <li>Cómo instalar 'react-icons'.</li>
      <li>Cómo importar 'react-icons'.</li>
      <li>Cómo usar 'react-icons' en tus aplicaciones.</li>

      <li>Bono: código para importar todas la librerías de íconos de 'react-icons'</li>
      <li>Conclusión</li>
     </ul>
     <h2>¿Qué es 'react-icons'?</h2>
     <p>'React-icons' es una pequeña librería que te permite añadir íconos (desde distintas librerías de íconos) a tus
      aplicaciones hechas con React. Te entrega los íconos en tu aplicación como componentes, de tal manera que se hace
      más fácil trabajar con ellos. También te permite modificar sus estilos, así lograrás que sean consistentes con el
      estilo general de tu aplicación.</p>
     <p>La librería de 'react-icons' usa ES6 para importar los íconos en tu aplicación de React. Lo hace de tal manera
      que solamente los íconos que realmente vas a utilizar sean lo que se importen de cada librería.</p>
     <p>Con 'react-icons', tú sólo necesitas ejecutar un comando para poder utilizar cualquier ícono que quieras de
      cierta librería. Solamente necesitas escoger el código <strong>import</strong> correcto y tu ícono estará listo.
     </p>
     <p>'React-icons' funciona con un conjunto amplio de librerías de íconos como Font Awesome, Material UI, Bootstrap,
      entre otros.</p>
     <h2>¿Qué son los íconos de Font Awesome?</h2>
     <p>Existen muchas librerías de íconos, pero una de las más populares es Font Awesome. Font Awesome es una librería
      o
      kit de herramientas (toolkit) gráficas que son creadas para comportarse como fuentes.</p>
     <p>Los íconos de Font Awesome somo como fuentes de texto normales, pero en lugar de letras obtienes gráficos. Son
      vectores gráficos escalables (SVGs por sus siglas en inglés), lo cual significa que puedes cambiar sus colores,
      sus
      dimensiones y demás sin comprometer su calidad.</p>
     <p>Ahora, para usar los íconos de Font Awesome en una aplicación de React sin 'react-icons', tienes que pasar por
      un
      proceso largo de instalación de diferentes paquetes usando varias líneas de comando.</p>
     <p>Algunas veces puede que incluso necesites instalar el paquete Pro. En ese caso, tienes que importar todos los
      íconos de forma universal o en archivos individuales. ¿Todo este proceso solamente para instalar unos cuántos
      íconos en tu página web?</p>
     <p>Aquí es donde 'react-icons' aparece para salvar el día. En este artículo, te mostraré cómo usar 'react-icons'
      para añadir íconos de Font Awesome a tu aplicación de React. Empecemos.</p>
     <h2>Cómo configurar tu entorno de desarrollo</h2>
     <p>Sigue los siguientes pasos para configurar tu entorno de desarrollo:</p>
     <blockquote>Nota: si ya cuentas con tu configuración lista, no hace falta que repitas el proceso. Simplemente,
      salta
      a la siguiente sección.</blockquote>
     <ol>
      <li>Dirígete a <a href="https://nodejs.org/es/">Node.js</a> para descargar e instalar Node si aún no lo has
       hecho.
      </li>
      <li>Abre la terminal de tu equipo.</li>
      <li>Ingresa este comando: <code>npm i -g create-react-app fonts-app</code>. Este instalará una aplicación de
       React
       con todos los paquetes que necesitas para tu proyecto.</li>
      <li>Luego, ingresa <code>cd fonts-app/</code>. <code>fonts-app</code> es el nombre de la carpeta de tu proyecto.
       Tu
       puedes elegir el nombre que quieras. <code>cd fonts-app</code> te llevará adentro de la carpeta de tu proyecto.
      </li>
      <li>Una vez dentro, ingresa <code>npm start</code> para iniciar tu proyecto en un servidor de desarrollo.</li>
      <li>Desde tu editor de código abre la carpeta src de tu proyecto y encuentra el archivo <code>App.js</code>.</li>
      <li>Elimina el elemento de React que se encuentra renderizado allí por defecto y añade tu propio div, h1 o
       cualquier otro elemento que tú prefieras (es sólo con fines de ejemplificar).</li>
     </ol>
     <p>Ahora ya está todo listo.</p>
     <h2>Cómo instalar 'react-icons'</h2>
     <p>Para instalar la librería <code>react-icons</code> , realiza lo siguiente:</p>
     <ul>
      <li>Estando dentro de la carpeta de tu proyecto, abre la terminal de tu editor de código.</li>
      <li>Ejecuta allí el comando <code>npm install react-icons</code> para instalar la librería en la carpeta de tu
       proyecto.</li>
     </ul>
     <p>Esto puede tomar algún tiempo dependiendo de la velocidad de tu sistema. Una vez completo, ya estás listo para
      usar los íconos.</p>
     <h2>Cómo importar íconos con 'react-icons'</h2>
     <p>Ve a la página de '<a href="https://react-icons.github.io/react-icons/">react-icons</a>'. Verás varias
      librerías
      de íconos que puedes utilizar. Cada librería de íconos tiene un código para importarlas. Para este tutorial, nos
      enfocaremos en la librería de íconos Font Awesome.</p>
     <p>El código para importar desde Font Awesome es <code>import { IconName } from "react-icons/fa";</code>.</p>
     <h4>Código de ejemplo</h4>
     <pre class="language-jsx"><code class=" language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> IconName <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-icons/fa"</span><span class="token punctuation">;</span>
  </code></pre>
     <figure class="kg-card kg-image-card kg-card-hascaption"><img
       src="https://www.freecodecamp.org/news/content/images/2021/09/FontAwesomePage.png" class="kg-image" alt="FontAwesomePage" width="600"
       height="400" loading="lazy">
      <figcaption>Íconos de Font Awesome en la página de react-icons</figcaption>
     </figure>
     <h2>Cómo usar íconos en tus aplicaciones</h2>
     <p>Sigue los siguientes pasos para usar los íconos de Font Awesome en tu apliación.</p>
     <ol>
      <li>En <code>App.js</code>, pega el código de importar al principio del archivo o luego del código para importar
       React.</li>
      <li>Vuelve a la página de 'react-icons' y elige cualquier ícono de Font Awesome.</li>
      <li>Haz clic en el ícono para copiarlo.</li>
      <li>Vuelve a tu código de importar en <code>App.js</code>.</li>
      <li>Pega y reemplaza <code>IconName</code> por el nombre del ícono que copiaste, dentro de las llaves.</li>
      <li>Usa el nombre del ícono como el nombre de un elemento de React.</li>
     </ol>
     <h6>Código de ejemplo</h6>
     <pre pre
      class="language-jsx"><code pre class="language-jsx"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> FaHeart <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-icons/fa"</span><span class="token punctuation">;</span>
  
  <span class="token keyword">class</span> <span class="token class-name">Like</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FaHeart</span></span> <span class="token punctuation">/&gt;</span></span>  
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
  <span class="token keyword">export</span> <span class="token keyword">default</span> Like<span class="token punctuation">;</span></code></pre>
     <figure class="kg-card kg-image-card kg-card-hascaption"><img src="https://www.freecodecamp.org/news/content/images/2021/09/HeartIcon.png"
       class="kg-image" alt="HeartIcon" width="600" height="400" loading="lazy">
      <figcaption>Render de un ícono de corazón de Font Awesome</figcaption>
     </figure>
     <p>Al añadir <code>&lt;FaHeart /&gt;</code> al método <strong>render, </strong>se muestra el ícono en tu página
      web.
      Esto es posible porque ya habíamos importado el ícono al principio del archivo.</p>
     <blockquote>Nota: Debes hacer coincidir cualquier ícono que hayas copiado con el código para importar. Es decir,
      no
      puedes pegar un ícono de Bootstrap con un código de importar de Font Awesome. Hacerlo así no te dará el resultado
      correcto.</blockquote>

     <h2>Código para importar todas las
      librerías
      de íconos de 'react-icons'</h2>
     <p>En caso de que quieras usar íconos de otras librerías (además de aquellas que hemos discutido aquí), aquí están
      sus códigos de importación para que puedas acceder a ellas rápidamente:</p>
     <pre pre class="language-jsx"><code pre class="language-jsx">import { IconName } from "react-icons/ai"; //Ant Design Icons
  import { IconName } from "react-icons/bs"; //Bootstrap Icons
  import { IconName } from "react-icons/bi"; //Boxicons
  import { IconName } from "react-icons/di"; //Devicon Icons
  import { IconName } from "react-icons/fi"; //Feather 
  import { IconName } from "react-icons/fc"; //Flat Color Icons
  import { IconName } from "react-icons/fa"; //Font Awesome Icons
  import { IconName } from "react-icons/gi"; //Game Icons
  import { IconName } from "react-icons/go"; //Github Octicons Icons
  import { IconName } from "react-icons/gr"; //Grommet-Icons
  import { IconName } from "react-icons/hi"; //HeroIcons
  import { IconName } from "react-icons/im"; //IcoMoon Free
  import { IconName } from "react-icons/io"; //Ionicon4
  import { IconName } from "react-icons/io5"; //Ionicon5
  import { IconName } from "react-icons/md"; //Material Design Icons
  import { IconName } from "react-icons/ri"; //Remix Icons
  import { IconName } from "react-icons/si"; //Simple Icons
  import { IconName } from "react-icons/ti"; //Typicons
  import { IconName } from "react-icons/vsc"; //VS Code Icons
  import { IconName } from "react-icons/wi"; //Weather Icons
  import { IconName } from "react-icons/cg"; //css.gg
  </code></pre>
     <p>Todas las librerías de íconos disponibles en la página de 'react-icons' se usan de la misma manera que
      describimos en este artículo.</p>
     <h2 id="conclusi-n">Conclusión</h2>
     <p>Los íconos disponibles con 'react-icons' están altamente optimizados, son escalables y fáciles de usar. Espero
      haber podido ayudarte a aprender su funcionamiento básico para que puedas hacer uso de ellos. Puedes leer la <a
       href="https://react-icons.github.io/react-icons/">documentación</a> (en inglés) de 'react-icons' para aprender
      más.</p>

    </section>
   </section>
  </article>
    `,
  },
  {
    id: 1002,
    author: 1,
    category: [1, 2],
    tags: [1, 4],
    title: "Enlazar JavaScript a HTML con el atributo src de script",
    /* subTitle es solo para miniatura */
    subTitle:
      "El atributo ‘src’ en una etiqueta es la ruta a un archivo o recurso externo que quieres enlazar a tu documento HTML.",
    date: "2023/04/01 14:00:00",
    thumb: `https://placeimg.com/800/400/arch`,
    route: "enlazar-javascript-a-html-con-atributo-src",
    content: `
    <article class="post-full">
   <header class="post-full-header">
    <h1 class="post-full-title">Enlazar JavaScript a HTML con el atributo src de script</h1>
   </header>

   <img src="https://placeimg.com/800/400/arch" alt="tech place  arch">

   <section class="post-full-content">

    <section class="post-content ">

     <h3>Cuando estés construyendo una aplicación web con React, es muy probable que requieras utilizar íconos. Los
      íconos
      son representaciones gráficas de un concepto, una idea, un archivo, un programa, una aplicación, un negocio,
      entre
      otros.</h3>
     <p>También puedes usar íconos para representar la identidad de una funcionalidad. En aquellos lugares donde no
      quieras escribir el nombre de un programa, un ícono adecuado puede aparecer en lugar del nombre o aplicación para
      una fácil identificación.</p>
     <p>Existen muchas y diferentes librerías de íconos allí afuera, así que, ¿cómo puedes agregarlas a tu aplicación
      en
      React? Aprenderemos esto y mucho más en este artículo.</p>
     <hr />
     <h2>En este artículo aprenderás:</h2>
     <ul>
      <li>¿Qué es la librería 'react-icons'?</li>
      <li>¿Qué son los íconos de Font Awesome?</li>
      <li>Cómo configurar tu entorno de desarrollo.</li>
      <li>Cómo instalar 'react-icons'.</li>
      <li>Cómo importar 'react-icons'.</li>
      <li>Cómo usar 'react-icons' en tus aplicaciones.</li>

      <li>Bono: código para importar todas la librerías de íconos de 'react-icons'</li>
      <li>Conclusión</li>
     </ul>
     <h2>¿Qué es 'react-icons'?</h2>
     <p>'React-icons' es una pequeña librería que te permite añadir íconos (desde distintas librerías de íconos) a tus
      aplicaciones hechas con React. Te entrega los íconos en tu aplicación como componentes, de tal manera que se hace
      más fácil trabajar con ellos. También te permite modificar sus estilos, así lograrás que sean consistentes con el
      estilo general de tu aplicación.</p>
     <p>La librería de 'react-icons' usa ES6 para importar los íconos en tu aplicación de React. Lo hace de tal manera
      que solamente los íconos que realmente vas a utilizar sean lo que se importen de cada librería.</p>
     <p>Con 'react-icons', tú sólo necesitas ejecutar un comando para poder utilizar cualquier ícono que quieras de
      cierta librería. Solamente necesitas escoger el código <strong>import</strong> correcto y tu ícono estará listo.
     </p>
     <p>'React-icons' funciona con un conjunto amplio de librerías de íconos como Font Awesome, Material UI, Bootstrap,
      entre otros.</p>
     <h2>¿Qué son los íconos de Font Awesome?</h2>
     <p>Existen muchas librerías de íconos, pero una de las más populares es Font Awesome. Font Awesome es una librería
      o
      kit de herramientas (toolkit) gráficas que son creadas para comportarse como fuentes.</p>
     <p>Los íconos de Font Awesome somo como fuentes de texto normales, pero en lugar de letras obtienes gráficos. Son
      vectores gráficos escalables (SVGs por sus siglas en inglés), lo cual significa que puedes cambiar sus colores,
      sus
      dimensiones y demás sin comprometer su calidad.</p>
     <p>Ahora, para usar los íconos de Font Awesome en una aplicación de React sin 'react-icons', tienes que pasar por
      un
      proceso largo de instalación de diferentes paquetes usando varias líneas de comando.</p>
     <p>Algunas veces puede que incluso necesites instalar el paquete Pro. En ese caso, tienes que importar todos los
      íconos de forma universal o en archivos individuales. ¿Todo este proceso solamente para instalar unos cuántos
      íconos en tu página web?</p>
     <p>Aquí es donde 'react-icons' aparece para salvar el día. En este artículo, te mostraré cómo usar 'react-icons'
      para añadir íconos de Font Awesome a tu aplicación de React. Empecemos.</p>
     <h2>Cómo configurar tu entorno de desarrollo</h2>
     <p>Sigue los siguientes pasos para configurar tu entorno de desarrollo:</p>
     <blockquote>Nota: si ya cuentas con tu configuración lista, no hace falta que repitas el proceso. Simplemente,
      salta
      a la siguiente sección.</blockquote>
     <ol>
      <li>Dirígete a <a href="https://nodejs.org/es/">Node.js</a> para descargar e instalar Node si aún no lo has
       hecho.
      </li>
      <li>Abre la terminal de tu equipo.</li>
      <li>Ingresa este comando: <code>npm i -g create-react-app fonts-app</code>. Este instalará una aplicación de
       React
       con todos los paquetes que necesitas para tu proyecto.</li>
      <li>Luego, ingresa <code>cd fonts-app/</code>. <code>fonts-app</code> es el nombre de la carpeta de tu proyecto.
       Tu
       puedes elegir el nombre que quieras. <code>cd fonts-app</code> te llevará adentro de la carpeta de tu proyecto.
      </li>
      <li>Una vez dentro, ingresa <code>npm start</code> para iniciar tu proyecto en un servidor de desarrollo.</li>
      <li>Desde tu editor de código abre la carpeta src de tu proyecto y encuentra el archivo <code>App.js</code>.</li>
      <li>Elimina el elemento de React que se encuentra renderizado allí por defecto y añade tu propio div, h1 o
       cualquier otro elemento que tú prefieras (es sólo con fines de ejemplificar).</li>
     </ol>
     <p>Ahora ya está todo listo.</p>
     <h2>Cómo instalar 'react-icons'</h2>
     <p>Para instalar la librería <code>react-icons</code> , realiza lo siguiente:</p>
     <ul>
      <li>Estando dentro de la carpeta de tu proyecto, abre la terminal de tu editor de código.</li>
      <li>Ejecuta allí el comando <code>npm install react-icons</code> para instalar la librería en la carpeta de tu
       proyecto.</li>
     </ul>
     <p>Esto puede tomar algún tiempo dependiendo de la velocidad de tu sistema. Una vez completo, ya estás listo para
      usar los íconos.</p>
     <h2>Cómo importar íconos con 'react-icons'</h2>
     <p>Ve a la página de '<a href="https://react-icons.github.io/react-icons/">react-icons</a>'. Verás varias
      librerías
      de íconos que puedes utilizar. Cada librería de íconos tiene un código para importarlas. Para este tutorial, nos
      enfocaremos en la librería de íconos Font Awesome.</p>
     <p>El código para importar desde Font Awesome es <code>import { IconName } from "react-icons/fa";</code>.</p>
     <h4>Código de ejemplo</h4>
     <pre class="language-jsx"><code class=" language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> IconName <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-icons/fa"</span><span class="token punctuation">;</span>
  </code></pre>
     <figure class="kg-card kg-image-card kg-card-hascaption"><img
       src="https://www.freecodecamp.org/news/content/images/2021/09/FontAwesomePage.png" class="kg-image" alt="FontAwesomePage" width="600"
       height="400" loading="lazy">
      <figcaption>Íconos de Font Awesome en la página de react-icons</figcaption>
     </figure>
     <h2>Cómo usar íconos en tus aplicaciones</h2>
     <p>Sigue los siguientes pasos para usar los íconos de Font Awesome en tu apliación.</p>
     <ol>
      <li>En <code>App.js</code>, pega el código de importar al principio del archivo o luego del código para importar
       React.</li>
      <li>Vuelve a la página de 'react-icons' y elige cualquier ícono de Font Awesome.</li>
      <li>Haz clic en el ícono para copiarlo.</li>
      <li>Vuelve a tu código de importar en <code>App.js</code>.</li>
      <li>Pega y reemplaza <code>IconName</code> por el nombre del ícono que copiaste, dentro de las llaves.</li>
      <li>Usa el nombre del ícono como el nombre de un elemento de React.</li>
     </ol>
     <h6>Código de ejemplo</h6>
     <pre pre
      class="language-jsx"><code pre class="language-jsx"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> FaHeart <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-icons/fa"</span><span class="token punctuation">;</span>
  
  <span class="token keyword">class</span> <span class="token class-name">Like</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FaHeart</span></span> <span class="token punctuation">/&gt;</span></span>  
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
  <span class="token keyword">export</span> <span class="token keyword">default</span> Like<span class="token punctuation">;</span></code></pre>
     <figure class="kg-card kg-image-card kg-card-hascaption"><img src="https://www.freecodecamp.org/news/content/images/2021/09/HeartIcon.png"
       class="kg-image" alt="HeartIcon" width="600" height="400" loading="lazy">
      <figcaption>Render de un ícono de corazón de Font Awesome</figcaption>
     </figure>
     <p>Al añadir <code>&lt;FaHeart /&gt;</code> al método <strong>render, </strong>se muestra el ícono en tu página
      web.
      Esto es posible porque ya habíamos importado el ícono al principio del archivo.</p>
     <blockquote>Nota: Debes hacer coincidir cualquier ícono que hayas copiado con el código para importar. Es decir,
      no
      puedes pegar un ícono de Bootstrap con un código de importar de Font Awesome. Hacerlo así no te dará el resultado
      correcto.</blockquote>

     <h2>Código para importar todas las
      librerías
      de íconos de 'react-icons'</h2>
     <p>En caso de que quieras usar íconos de otras librerías (además de aquellas que hemos discutido aquí), aquí están
      sus códigos de importación para que puedas acceder a ellas rápidamente:</p>
     <pre pre class="language-jsx"><code pre class="language-jsx">import { IconName } from "react-icons/ai"; //Ant Design Icons
  import { IconName } from "react-icons/bs"; //Bootstrap Icons
  import { IconName } from "react-icons/bi"; //Boxicons
  import { IconName } from "react-icons/di"; //Devicon Icons
  import { IconName } from "react-icons/fi"; //Feather 
  import { IconName } from "react-icons/fc"; //Flat Color Icons
  import { IconName } from "react-icons/fa"; //Font Awesome Icons
  import { IconName } from "react-icons/gi"; //Game Icons
  import { IconName } from "react-icons/go"; //Github Octicons Icons
  import { IconName } from "react-icons/gr"; //Grommet-Icons
  import { IconName } from "react-icons/hi"; //HeroIcons
  import { IconName } from "react-icons/im"; //IcoMoon Free
  import { IconName } from "react-icons/io"; //Ionicon4
  import { IconName } from "react-icons/io5"; //Ionicon5
  import { IconName } from "react-icons/md"; //Material Design Icons
  import { IconName } from "react-icons/ri"; //Remix Icons
  import { IconName } from "react-icons/si"; //Simple Icons
  import { IconName } from "react-icons/ti"; //Typicons
  import { IconName } from "react-icons/vsc"; //VS Code Icons
  import { IconName } from "react-icons/wi"; //Weather Icons
  import { IconName } from "react-icons/cg"; //css.gg
  </code></pre>
     <p>Todas las librerías de íconos disponibles en la página de 'react-icons' se usan de la misma manera que
      describimos en este artículo.</p>
     <h2 id="conclusi-n">Conclusión</h2>
     <p>Los íconos disponibles con 'react-icons' están altamente optimizados, son escalables y fáciles de usar. Espero
      haber podido ayudarte a aprender su funcionamiento básico para que puedas hacer uso de ellos. Puedes leer la <a
       href="https://react-icons.github.io/react-icons/">documentación</a> (en inglés) de 'react-icons' para aprender
      más.</p>

    </section>
   </section>
  </article>
    `,
  },
  {
    id: 1003,
    author: 1,
    category: [1, 2],
    tags: [2, 4],
    title: "Cómo usar la palabra clave `this` en JavaScript",
    /* subTitle es solo para miniatura */
    subTitle:
      "¡Hola a todos! En este artículo vamos a hablar sobre la palabra clave THIS en JavaScript.",
    date: "2023/03/30 14:00:00",
    thumb: `https://placeimg.com/800/400/people`,
    route: "como-usar-palabra-clave-this-en-javascript",
    content: `
    <article class="post-full">
   <header class="post-full-header">
    <h1 class="post-full-title">Cómo usar la palabra clave "this" en JavaScript</h1>
   </header>

   <img src="https://placeimg.com/800/400/people" alt="tech place  people">

   <section class="post-full-content">

    <section class="post-content ">

     <h3>Cuando estés construyendo una aplicación web con React, es muy probable que requieras utilizar íconos. Los
      íconos
      son representaciones gráficas de un concepto, una idea, un archivo, un programa, una aplicación, un negocio,
      entre
      otros.</h3>
     <p>También puedes usar íconos para representar la identidad de una funcionalidad. En aquellos lugares donde no
      quieras escribir el nombre de un programa, un ícono adecuado puede aparecer en lugar del nombre o aplicación para
      una fácil identificación.</p>
     <p>Existen muchas y diferentes librerías de íconos allí afuera, así que, ¿cómo puedes agregarlas a tu aplicación
      en
      React? Aprenderemos esto y mucho más en este artículo.</p>
     <hr />
     <h2>En este artículo aprenderás:</h2>
     <ul>
      <li>¿Qué es la librería 'react-icons'?</li>
      <li>¿Qué son los íconos de Font Awesome?</li>
      <li>Cómo configurar tu entorno de desarrollo.</li>
      <li>Cómo instalar 'react-icons'.</li>
      <li>Cómo importar 'react-icons'.</li>
      <li>Cómo usar 'react-icons' en tus aplicaciones.</li>

      <li>Bono: código para importar todas la librerías de íconos de 'react-icons'</li>
      <li>Conclusión</li>
     </ul>
     <h2>¿Qué es 'react-icons'?</h2>
     <p>'React-icons' es una pequeña librería que te permite añadir íconos (desde distintas librerías de íconos) a tus
      aplicaciones hechas con React. Te entrega los íconos en tu aplicación como componentes, de tal manera que se hace
      más fácil trabajar con ellos. También te permite modificar sus estilos, así lograrás que sean consistentes con el
      estilo general de tu aplicación.</p>
     <p>La librería de 'react-icons' usa ES6 para importar los íconos en tu aplicación de React. Lo hace de tal manera
      que solamente los íconos que realmente vas a utilizar sean lo que se importen de cada librería.</p>
     <p>Con 'react-icons', tú sólo necesitas ejecutar un comando para poder utilizar cualquier ícono que quieras de
      cierta librería. Solamente necesitas escoger el código <strong>import</strong> correcto y tu ícono estará listo.
     </p>
     <p>'React-icons' funciona con un conjunto amplio de librerías de íconos como Font Awesome, Material UI, Bootstrap,
      entre otros.</p>
     <h2>¿Qué son los íconos de Font Awesome?</h2>
     <p>Existen muchas librerías de íconos, pero una de las más populares es Font Awesome. Font Awesome es una librería
      o
      kit de herramientas (toolkit) gráficas que son creadas para comportarse como fuentes.</p>
     <p>Los íconos de Font Awesome somo como fuentes de texto normales, pero en lugar de letras obtienes gráficos. Son
      vectores gráficos escalables (SVGs por sus siglas en inglés), lo cual significa que puedes cambiar sus colores,
      sus
      dimensiones y demás sin comprometer su calidad.</p>
     <p>Ahora, para usar los íconos de Font Awesome en una aplicación de React sin 'react-icons', tienes que pasar por
      un
      proceso largo de instalación de diferentes paquetes usando varias líneas de comando.</p>
     <p>Algunas veces puede que incluso necesites instalar el paquete Pro. En ese caso, tienes que importar todos los
      íconos de forma universal o en archivos individuales. ¿Todo este proceso solamente para instalar unos cuántos
      íconos en tu página web?</p>
     <p>Aquí es donde 'react-icons' aparece para salvar el día. En este artículo, te mostraré cómo usar 'react-icons'
      para añadir íconos de Font Awesome a tu aplicación de React. Empecemos.</p>
     <h2>Cómo configurar tu entorno de desarrollo</h2>
     <p>Sigue los siguientes pasos para configurar tu entorno de desarrollo:</p>
     <blockquote>Nota: si ya cuentas con tu configuración lista, no hace falta que repitas el proceso. Simplemente,
      salta
      a la siguiente sección.</blockquote>
     <ol>
      <li>Dirígete a <a href="https://nodejs.org/es/">Node.js</a> para descargar e instalar Node si aún no lo has
       hecho.
      </li>
      <li>Abre la terminal de tu equipo.</li>
      <li>Ingresa este comando: <code>npm i -g create-react-app fonts-app</code>. Este instalará una aplicación de
       React
       con todos los paquetes que necesitas para tu proyecto.</li>
      <li>Luego, ingresa <code>cd fonts-app/</code>. <code>fonts-app</code> es el nombre de la carpeta de tu proyecto.
       Tu
       puedes elegir el nombre que quieras. <code>cd fonts-app</code> te llevará adentro de la carpeta de tu proyecto.
      </li>
      <li>Una vez dentro, ingresa <code>npm start</code> para iniciar tu proyecto en un servidor de desarrollo.</li>
      <li>Desde tu editor de código abre la carpeta src de tu proyecto y encuentra el archivo <code>App.js</code>.</li>
      <li>Elimina el elemento de React que se encuentra renderizado allí por defecto y añade tu propio div, h1 o
       cualquier otro elemento que tú prefieras (es sólo con fines de ejemplificar).</li>
     </ol>
     <p>Ahora ya está todo listo.</p>
     <h2>Cómo instalar 'react-icons'</h2>
     <p>Para instalar la librería <code>react-icons</code> , realiza lo siguiente:</p>
     <ul>
      <li>Estando dentro de la carpeta de tu proyecto, abre la terminal de tu editor de código.</li>
      <li>Ejecuta allí el comando <code>npm install react-icons</code> para instalar la librería en la carpeta de tu
       proyecto.</li>
     </ul>
     <p>Esto puede tomar algún tiempo dependiendo de la velocidad de tu sistema. Una vez completo, ya estás listo para
      usar los íconos.</p>
     <h2>Cómo importar íconos con 'react-icons'</h2>
     <p>Ve a la página de '<a href="https://react-icons.github.io/react-icons/">react-icons</a>'. Verás varias
      librerías
      de íconos que puedes utilizar. Cada librería de íconos tiene un código para importarlas. Para este tutorial, nos
      enfocaremos en la librería de íconos Font Awesome.</p>
     <p>El código para importar desde Font Awesome es <code>import { IconName } from "react-icons/fa";</code>.</p>
     <h4>Código de ejemplo</h4>
     <pre class="language-jsx"><code class=" language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> IconName <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-icons/fa"</span><span class="token punctuation">;</span>
  </code></pre>
     <figure class="kg-card kg-image-card kg-card-hascaption"><img
       src="https://www.freecodecamp.org/news/content/images/2021/09/FontAwesomePage.png" class="kg-image" alt="FontAwesomePage" width="600"
       height="400" loading="lazy">
      <figcaption>Íconos de Font Awesome en la página de react-icons</figcaption>
     </figure>
     <h2>Cómo usar íconos en tus aplicaciones</h2>
     <p>Sigue los siguientes pasos para usar los íconos de Font Awesome en tu apliación.</p>
     <ol>
      <li>En <code>App.js</code>, pega el código de importar al principio del archivo o luego del código para importar
       React.</li>
      <li>Vuelve a la página de 'react-icons' y elige cualquier ícono de Font Awesome.</li>
      <li>Haz clic en el ícono para copiarlo.</li>
      <li>Vuelve a tu código de importar en <code>App.js</code>.</li>
      <li>Pega y reemplaza <code>IconName</code> por el nombre del ícono que copiaste, dentro de las llaves.</li>
      <li>Usa el nombre del ícono como el nombre de un elemento de React.</li>
     </ol>
     <h6>Código de ejemplo</h6>
     <pre pre
      class="language-jsx"><code pre class="language-jsx"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> FaHeart <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-icons/fa"</span><span class="token punctuation">;</span>
  
  <span class="token keyword">class</span> <span class="token class-name">Like</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FaHeart</span></span> <span class="token punctuation">/&gt;</span></span>  
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
  <span class="token keyword">export</span> <span class="token keyword">default</span> Like<span class="token punctuation">;</span></code></pre>
     <figure class="kg-card kg-image-card kg-card-hascaption"><img src="https://www.freecodecamp.org/news/content/images/2021/09/HeartIcon.png"
       class="kg-image" alt="HeartIcon" width="600" height="400" loading="lazy">
      <figcaption>Render de un ícono de corazón de Font Awesome</figcaption>
     </figure>
     <p>Al añadir <code>&lt;FaHeart /&gt;</code> al método <strong>render, </strong>se muestra el ícono en tu página
      web.
      Esto es posible porque ya habíamos importado el ícono al principio del archivo.</p>
     <blockquote>Nota: Debes hacer coincidir cualquier ícono que hayas copiado con el código para importar. Es decir,
      no
      puedes pegar un ícono de Bootstrap con un código de importar de Font Awesome. Hacerlo así no te dará el resultado
      correcto.</blockquote>

     <h2>Código para importar todas las
      librerías
      de íconos de 'react-icons'</h2>
     <p>En caso de que quieras usar íconos de otras librerías (además de aquellas que hemos discutido aquí), aquí están
      sus códigos de importación para que puedas acceder a ellas rápidamente:</p>
     <pre pre class="language-jsx"><code pre class="language-jsx">import { IconName } from "react-icons/ai"; //Ant Design Icons
  import { IconName } from "react-icons/bs"; //Bootstrap Icons
  import { IconName } from "react-icons/bi"; //Boxicons
  import { IconName } from "react-icons/di"; //Devicon Icons
  import { IconName } from "react-icons/fi"; //Feather 
  import { IconName } from "react-icons/fc"; //Flat Color Icons
  import { IconName } from "react-icons/fa"; //Font Awesome Icons
  import { IconName } from "react-icons/gi"; //Game Icons
  import { IconName } from "react-icons/go"; //Github Octicons Icons
  import { IconName } from "react-icons/gr"; //Grommet-Icons
  import { IconName } from "react-icons/hi"; //HeroIcons
  import { IconName } from "react-icons/im"; //IcoMoon Free
  import { IconName } from "react-icons/io"; //Ionicon4
  import { IconName } from "react-icons/io5"; //Ionicon5
  import { IconName } from "react-icons/md"; //Material Design Icons
  import { IconName } from "react-icons/ri"; //Remix Icons
  import { IconName } from "react-icons/si"; //Simple Icons
  import { IconName } from "react-icons/ti"; //Typicons
  import { IconName } from "react-icons/vsc"; //VS Code Icons
  import { IconName } from "react-icons/wi"; //Weather Icons
  import { IconName } from "react-icons/cg"; //css.gg
  </code></pre>
     <p>Todas las librerías de íconos disponibles en la página de 'react-icons' se usan de la misma manera que
      describimos en este artículo.</p>
     <h2 id="conclusi-n">Conclusión</h2>
     <p>Los íconos disponibles con 'react-icons' están altamente optimizados, son escalables y fáciles de usar. Espero
      haber podido ayudarte a aprender su funcionamiento básico para que puedas hacer uso de ellos. Puedes leer la <a
       href="https://react-icons.github.io/react-icons/">documentación</a> (en inglés) de 'react-icons' para aprender
      más.</p>

    </section>
   </section>
  </article>
    `,
  },
  {
    id: 1004,
    author: 1,
    category: [1, 2],
    tags: [3, 4],
    title:
      "¿Qué es una cadena de caracteres (string) en JS? Explicación de las variables tipo string en JavaScript",
    /* subTitle es solo para miniatura */
    subTitle:
      "Una cadena de caracteres representa datos textuales, los cuales son parte fundamental de muchas aplicaciones. También se utilizan cadenas para interactuar con usuarios a través de avisos, alertas y otras formas de datos ingresados por el usuario y mostrados al usuario.",
    date: "2023/03/30 14:00:00",
    thumb: `https://placeimg.com/800/400/animals`,
    route: "que-es-una-cadena-en-js",
    content: `
    <article class="post-full">
   <header class="post-full-header">
    <h1 class="post-full-title">¿Qué es una cadena de caracteres (string) en JS? Explicación de las variables tipo string en JavaScript</h1>
   </header>

   <img src="https://placeimg.com/800/400/animals" alt="tech place animals">

   <section class="post-full-content">

    <section class="post-content ">

     <h3>Cuando estés construyendo una aplicación web con React, es muy probable que requieras utilizar íconos. Los
      íconos
      son representaciones gráficas de un concepto, una idea, un archivo, un programa, una aplicación, un negocio,
      entre
      otros.</h3>
     <p>También puedes usar íconos para representar la identidad de una funcionalidad. En aquellos lugares donde no
      quieras escribir el nombre de un programa, un ícono adecuado puede aparecer en lugar del nombre o aplicación para
      una fácil identificación.</p>
     <p>Existen muchas y diferentes librerías de íconos allí afuera, así que, ¿cómo puedes agregarlas a tu aplicación
      en
      React? Aprenderemos esto y mucho más en este artículo.</p>
     <hr />
     <h2>En este artículo aprenderás:</h2>
     <ul>
      <li>¿Qué es la librería 'react-icons'?</li>
      <li>¿Qué son los íconos de Font Awesome?</li>
      <li>Cómo configurar tu entorno de desarrollo.</li>
      <li>Cómo instalar 'react-icons'.</li>
      <li>Cómo importar 'react-icons'.</li>
      <li>Cómo usar 'react-icons' en tus aplicaciones.</li>

      <li>Bono: código para importar todas la librerías de íconos de 'react-icons'</li>
      <li>Conclusión</li>
     </ul>
     <h2>¿Qué es 'react-icons'?</h2>
     <p>'React-icons' es una pequeña librería que te permite añadir íconos (desde distintas librerías de íconos) a tus
      aplicaciones hechas con React. Te entrega los íconos en tu aplicación como componentes, de tal manera que se hace
      más fácil trabajar con ellos. También te permite modificar sus estilos, así lograrás que sean consistentes con el
      estilo general de tu aplicación.</p>
     <p>La librería de 'react-icons' usa ES6 para importar los íconos en tu aplicación de React. Lo hace de tal manera
      que solamente los íconos que realmente vas a utilizar sean lo que se importen de cada librería.</p>
     <p>Con 'react-icons', tú sólo necesitas ejecutar un comando para poder utilizar cualquier ícono que quieras de
      cierta librería. Solamente necesitas escoger el código <strong>import</strong> correcto y tu ícono estará listo.
     </p>
     <p>'React-icons' funciona con un conjunto amplio de librerías de íconos como Font Awesome, Material UI, Bootstrap,
      entre otros.</p>
     <h2>¿Qué son los íconos de Font Awesome?</h2>
     <p>Existen muchas librerías de íconos, pero una de las más populares es Font Awesome. Font Awesome es una librería
      o
      kit de herramientas (toolkit) gráficas que son creadas para comportarse como fuentes.</p>
     <p>Los íconos de Font Awesome somo como fuentes de texto normales, pero en lugar de letras obtienes gráficos. Son
      vectores gráficos escalables (SVGs por sus siglas en inglés), lo cual significa que puedes cambiar sus colores,
      sus
      dimensiones y demás sin comprometer su calidad.</p>
     <p>Ahora, para usar los íconos de Font Awesome en una aplicación de React sin 'react-icons', tienes que pasar por
      un
      proceso largo de instalación de diferentes paquetes usando varias líneas de comando.</p>
     <p>Algunas veces puede que incluso necesites instalar el paquete Pro. En ese caso, tienes que importar todos los
      íconos de forma universal o en archivos individuales. ¿Todo este proceso solamente para instalar unos cuántos
      íconos en tu página web?</p>
     <p>Aquí es donde 'react-icons' aparece para salvar el día. En este artículo, te mostraré cómo usar 'react-icons'
      para añadir íconos de Font Awesome a tu aplicación de React. Empecemos.</p>
     <h2>Cómo configurar tu entorno de desarrollo</h2>
     <p>Sigue los siguientes pasos para configurar tu entorno de desarrollo:</p>
     <blockquote>Nota: si ya cuentas con tu configuración lista, no hace falta que repitas el proceso. Simplemente,
      salta
      a la siguiente sección.</blockquote>
     <ol>
      <li>Dirígete a <a href="https://nodejs.org/es/">Node.js</a> para descargar e instalar Node si aún no lo has
       hecho.
      </li>
      <li>Abre la terminal de tu equipo.</li>
      <li>Ingresa este comando: <code>npm i -g create-react-app fonts-app</code>. Este instalará una aplicación de
       React
       con todos los paquetes que necesitas para tu proyecto.</li>
      <li>Luego, ingresa <code>cd fonts-app/</code>. <code>fonts-app</code> es el nombre de la carpeta de tu proyecto.
       Tu
       puedes elegir el nombre que quieras. <code>cd fonts-app</code> te llevará adentro de la carpeta de tu proyecto.
      </li>
      <li>Una vez dentro, ingresa <code>npm start</code> para iniciar tu proyecto en un servidor de desarrollo.</li>
      <li>Desde tu editor de código abre la carpeta src de tu proyecto y encuentra el archivo <code>App.js</code>.</li>
      <li>Elimina el elemento de React que se encuentra renderizado allí por defecto y añade tu propio div, h1 o
       cualquier otro elemento que tú prefieras (es sólo con fines de ejemplificar).</li>
     </ol>
     <p>Ahora ya está todo listo.</p>
     <h2>Cómo instalar 'react-icons'</h2>
     <p>Para instalar la librería <code>react-icons</code> , realiza lo siguiente:</p>
     <ul>
      <li>Estando dentro de la carpeta de tu proyecto, abre la terminal de tu editor de código.</li>
      <li>Ejecuta allí el comando <code>npm install react-icons</code> para instalar la librería en la carpeta de tu
       proyecto.</li>
     </ul>
     <p>Esto puede tomar algún tiempo dependiendo de la velocidad de tu sistema. Una vez completo, ya estás listo para
      usar los íconos.</p>
     <h2>Cómo importar íconos con 'react-icons'</h2>
     <p>Ve a la página de '<a href="https://react-icons.github.io/react-icons/">react-icons</a>'. Verás varias
      librerías
      de íconos que puedes utilizar. Cada librería de íconos tiene un código para importarlas. Para este tutorial, nos
      enfocaremos en la librería de íconos Font Awesome.</p>
     <p>El código para importar desde Font Awesome es <code>import { IconName } from "react-icons/fa";</code>.</p>
     <h4>Código de ejemplo</h4>
     <pre class="language-jsx"><code class=" language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> IconName <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-icons/fa"</span><span class="token punctuation">;</span>
  </code></pre>
     <figure class="kg-card kg-image-card kg-card-hascaption"><img
       src="https://www.freecodecamp.org/news/content/images/2021/09/FontAwesomePage.png" class="kg-image" alt="FontAwesomePage" width="600"
       height="400" loading="lazy">
      <figcaption>Íconos de Font Awesome en la página de react-icons</figcaption>
     </figure>
     <h2>Cómo usar íconos en tus aplicaciones</h2>
     <p>Sigue los siguientes pasos para usar los íconos de Font Awesome en tu apliación.</p>
     <ol>
      <li>En <code>App.js</code>, pega el código de importar al principio del archivo o luego del código para importar
       React.</li>
      <li>Vuelve a la página de 'react-icons' y elige cualquier ícono de Font Awesome.</li>
      <li>Haz clic en el ícono para copiarlo.</li>
      <li>Vuelve a tu código de importar en <code>App.js</code>.</li>
      <li>Pega y reemplaza <code>IconName</code> por el nombre del ícono que copiaste, dentro de las llaves.</li>
      <li>Usa el nombre del ícono como el nombre de un elemento de React.</li>
     </ol>
     <h6>Código de ejemplo</h6>
     <pre pre
      class="language-jsx"><code pre class="language-jsx"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> FaHeart <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-icons/fa"</span><span class="token punctuation">;</span>
  
  <span class="token keyword">class</span> <span class="token class-name">Like</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FaHeart</span></span> <span class="token punctuation">/&gt;</span></span>  
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
  <span class="token keyword">export</span> <span class="token keyword">default</span> Like<span class="token punctuation">;</span></code></pre>
     <figure class="kg-card kg-image-card kg-card-hascaption"><img src="https://www.freecodecamp.org/news/content/images/2021/09/HeartIcon.png"
       class="kg-image" alt="HeartIcon" width="600" height="400" loading="lazy">
      <figcaption>Render de un ícono de corazón de Font Awesome</figcaption>
     </figure>
     <p>Al añadir <code>&lt;FaHeart /&gt;</code> al método <strong>render, </strong>se muestra el ícono en tu página
      web.
      Esto es posible porque ya habíamos importado el ícono al principio del archivo.</p>
     <blockquote>Nota: Debes hacer coincidir cualquier ícono que hayas copiado con el código para importar. Es decir,
      no
      puedes pegar un ícono de Bootstrap con un código de importar de Font Awesome. Hacerlo así no te dará el resultado
      correcto.</blockquote>

     <h2>Código para importar todas las
      librerías
      de íconos de 'react-icons'</h2>
     <p>En caso de que quieras usar íconos de otras librerías (además de aquellas que hemos discutido aquí), aquí están
      sus códigos de importación para que puedas acceder a ellas rápidamente:</p>
     <pre pre class="language-jsx"><code pre class="language-jsx">import { IconName } from "react-icons/ai"; //Ant Design Icons
  import { IconName } from "react-icons/bs"; //Bootstrap Icons
  import { IconName } from "react-icons/bi"; //Boxicons
  import { IconName } from "react-icons/di"; //Devicon Icons
  import { IconName } from "react-icons/fi"; //Feather 
  import { IconName } from "react-icons/fc"; //Flat Color Icons
  import { IconName } from "react-icons/fa"; //Font Awesome Icons
  import { IconName } from "react-icons/gi"; //Game Icons
  import { IconName } from "react-icons/go"; //Github Octicons Icons
  import { IconName } from "react-icons/gr"; //Grommet-Icons
  import { IconName } from "react-icons/hi"; //HeroIcons
  import { IconName } from "react-icons/im"; //IcoMoon Free
  import { IconName } from "react-icons/io"; //Ionicon4
  import { IconName } from "react-icons/io5"; //Ionicon5
  import { IconName } from "react-icons/md"; //Material Design Icons
  import { IconName } from "react-icons/ri"; //Remix Icons
  import { IconName } from "react-icons/si"; //Simple Icons
  import { IconName } from "react-icons/ti"; //Typicons
  import { IconName } from "react-icons/vsc"; //VS Code Icons
  import { IconName } from "react-icons/wi"; //Weather Icons
  import { IconName } from "react-icons/cg"; //css.gg
  </code></pre>
     <p>Todas las librerías de íconos disponibles en la página de 'react-icons' se usan de la misma manera que
      describimos en este artículo.</p>
     <h2 id="conclusi-n">Conclusión</h2>
     <p>Los íconos disponibles con 'react-icons' están altamente optimizados, son escalables y fáciles de usar. Espero
      haber podido ayudarte a aprender su funcionamiento básico para que puedas hacer uso de ellos. Puedes leer la <a
       href="https://react-icons.github.io/react-icons/">documentación</a> (en inglés) de 'react-icons' para aprender
      más.</p>

    </section>
   </section>
  </article>
    `,
  },
  {
    id: 1005,
    author: 1,
    category: [1, 2],
    tags: [4],
    title: "Anidamiento de bucles For en JavaScript",
    /* subTitle es solo para miniatura */
    subTitle:
      "Si tienes problemas para entender el desafío Anida bucles `for` de freeCodeCamp, no te preocupes. Te cubrimos las espaldas.",
    date: "2023/03/30 14:00:00",
    thumb: `https://placeimg.com/800/400/people`,
    route: "anidamiento-de-bucles-for-en-js",
    content: `
    <article class="post-full">
   <header class="post-full-header">
    <h1 class="post-full-title">Anidamiento de bucles For en JavaScript</h1>
   </header>

   <img src="https://placeimg.com/800/400/people" alt="tech place people">

   <section class="post-full-content">

    <section class="post-content ">

     <h3>Cuando estés construyendo una aplicación web con React, es muy probable que requieras utilizar íconos. Los
      íconos
      son representaciones gráficas de un concepto, una idea, un archivo, un programa, una aplicación, un negocio,
      entre
      otros.</h3>
     <p>También puedes usar íconos para representar la identidad de una funcionalidad. En aquellos lugares donde no
      quieras escribir el nombre de un programa, un ícono adecuado puede aparecer en lugar del nombre o aplicación para
      una fácil identificación.</p>
     <p>Existen muchas y diferentes librerías de íconos allí afuera, así que, ¿cómo puedes agregarlas a tu aplicación
      en
      React? Aprenderemos esto y mucho más en este artículo.</p>
     <hr />
     <h2>En este artículo aprenderás:</h2>
     <ul>
      <li>¿Qué es la librería 'react-icons'?</li>
      <li>¿Qué son los íconos de Font Awesome?</li>
      <li>Cómo configurar tu entorno de desarrollo.</li>
      <li>Cómo instalar 'react-icons'.</li>
      <li>Cómo importar 'react-icons'.</li>
      <li>Cómo usar 'react-icons' en tus aplicaciones.</li>

      <li>Bono: código para importar todas la librerías de íconos de 'react-icons'</li>
      <li>Conclusión</li>
     </ul>
     <h2>¿Qué es 'react-icons'?</h2>
     <p>'React-icons' es una pequeña librería que te permite añadir íconos (desde distintas librerías de íconos) a tus
      aplicaciones hechas con React. Te entrega los íconos en tu aplicación como componentes, de tal manera que se hace
      más fácil trabajar con ellos. También te permite modificar sus estilos, así lograrás que sean consistentes con el
      estilo general de tu aplicación.</p>
     <p>La librería de 'react-icons' usa ES6 para importar los íconos en tu aplicación de React. Lo hace de tal manera
      que solamente los íconos que realmente vas a utilizar sean lo que se importen de cada librería.</p>
     <p>Con 'react-icons', tú sólo necesitas ejecutar un comando para poder utilizar cualquier ícono que quieras de
      cierta librería. Solamente necesitas escoger el código <strong>import</strong> correcto y tu ícono estará listo.
     </p>
     <p>'React-icons' funciona con un conjunto amplio de librerías de íconos como Font Awesome, Material UI, Bootstrap,
      entre otros.</p>
     <h2>¿Qué son los íconos de Font Awesome?</h2>
     <p>Existen muchas librerías de íconos, pero una de las más populares es Font Awesome. Font Awesome es una librería
      o
      kit de herramientas (toolkit) gráficas que son creadas para comportarse como fuentes.</p>
     <p>Los íconos de Font Awesome somo como fuentes de texto normales, pero en lugar de letras obtienes gráficos. Son
      vectores gráficos escalables (SVGs por sus siglas en inglés), lo cual significa que puedes cambiar sus colores,
      sus
      dimensiones y demás sin comprometer su calidad.</p>
     <p>Ahora, para usar los íconos de Font Awesome en una aplicación de React sin 'react-icons', tienes que pasar por
      un
      proceso largo de instalación de diferentes paquetes usando varias líneas de comando.</p>
     <p>Algunas veces puede que incluso necesites instalar el paquete Pro. En ese caso, tienes que importar todos los
      íconos de forma universal o en archivos individuales. ¿Todo este proceso solamente para instalar unos cuántos
      íconos en tu página web?</p>
     <p>Aquí es donde 'react-icons' aparece para salvar el día. En este artículo, te mostraré cómo usar 'react-icons'
      para añadir íconos de Font Awesome a tu aplicación de React. Empecemos.</p>
     <h2>Cómo configurar tu entorno de desarrollo</h2>
     <p>Sigue los siguientes pasos para configurar tu entorno de desarrollo:</p>
     <blockquote>Nota: si ya cuentas con tu configuración lista, no hace falta que repitas el proceso. Simplemente,
      salta
      a la siguiente sección.</blockquote>
     <ol>
      <li>Dirígete a <a href="https://nodejs.org/es/">Node.js</a> para descargar e instalar Node si aún no lo has
       hecho.
      </li>
      <li>Abre la terminal de tu equipo.</li>
      <li>Ingresa este comando: <code>npm i -g create-react-app fonts-app</code>. Este instalará una aplicación de
       React
       con todos los paquetes que necesitas para tu proyecto.</li>
      <li>Luego, ingresa <code>cd fonts-app/</code>. <code>fonts-app</code> es el nombre de la carpeta de tu proyecto.
       Tu
       puedes elegir el nombre que quieras. <code>cd fonts-app</code> te llevará adentro de la carpeta de tu proyecto.
      </li>
      <li>Una vez dentro, ingresa <code>npm start</code> para iniciar tu proyecto en un servidor de desarrollo.</li>
      <li>Desde tu editor de código abre la carpeta src de tu proyecto y encuentra el archivo <code>App.js</code>.</li>
      <li>Elimina el elemento de React que se encuentra renderizado allí por defecto y añade tu propio div, h1 o
       cualquier otro elemento que tú prefieras (es sólo con fines de ejemplificar).</li>
     </ol>
     <p>Ahora ya está todo listo.</p>
     <h2>Cómo instalar 'react-icons'</h2>
     <p>Para instalar la librería <code>react-icons</code> , realiza lo siguiente:</p>
     <ul>
      <li>Estando dentro de la carpeta de tu proyecto, abre la terminal de tu editor de código.</li>
      <li>Ejecuta allí el comando <code>npm install react-icons</code> para instalar la librería en la carpeta de tu
       proyecto.</li>
     </ul>
     <p>Esto puede tomar algún tiempo dependiendo de la velocidad de tu sistema. Una vez completo, ya estás listo para
      usar los íconos.</p>
     <h2>Cómo importar íconos con 'react-icons'</h2>
     <p>Ve a la página de '<a href="https://react-icons.github.io/react-icons/">react-icons</a>'. Verás varias
      librerías
      de íconos que puedes utilizar. Cada librería de íconos tiene un código para importarlas. Para este tutorial, nos
      enfocaremos en la librería de íconos Font Awesome.</p>
     <p>El código para importar desde Font Awesome es <code>import { IconName } from "react-icons/fa";</code>.</p>
     <h4>Código de ejemplo</h4>
     <pre class="language-jsx"><code class=" language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> IconName <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-icons/fa"</span><span class="token punctuation">;</span>
  </code></pre>
     <figure class="kg-card kg-image-card kg-card-hascaption"><img
       src="https://www.freecodecamp.org/news/content/images/2021/09/FontAwesomePage.png" class="kg-image" alt="FontAwesomePage" width="600"
       height="400" loading="lazy">
      <figcaption>Íconos de Font Awesome en la página de react-icons</figcaption>
     </figure>
     <h2>Cómo usar íconos en tus aplicaciones</h2>
     <p>Sigue los siguientes pasos para usar los íconos de Font Awesome en tu apliación.</p>
     <ol>
      <li>En <code>App.js</code>, pega el código de importar al principio del archivo o luego del código para importar
       React.</li>
      <li>Vuelve a la página de 'react-icons' y elige cualquier ícono de Font Awesome.</li>
      <li>Haz clic en el ícono para copiarlo.</li>
      <li>Vuelve a tu código de importar en <code>App.js</code>.</li>
      <li>Pega y reemplaza <code>IconName</code> por el nombre del ícono que copiaste, dentro de las llaves.</li>
      <li>Usa el nombre del ícono como el nombre de un elemento de React.</li>
     </ol>
     <h6>Código de ejemplo</h6>
     <pre pre
      class="language-jsx"><code pre class="language-jsx"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> FaHeart <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-icons/fa"</span><span class="token punctuation">;</span>
  
  <span class="token keyword">class</span> <span class="token class-name">Like</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FaHeart</span></span> <span class="token punctuation">/&gt;</span></span>  
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
  <span class="token keyword">export</span> <span class="token keyword">default</span> Like<span class="token punctuation">;</span></code></pre>
     <figure class="kg-card kg-image-card kg-card-hascaption"><img src="https://www.freecodecamp.org/news/content/images/2021/09/HeartIcon.png"
       class="kg-image" alt="HeartIcon" width="600" height="400" loading="lazy">
      <figcaption>Render de un ícono de corazón de Font Awesome</figcaption>
     </figure>
     <p>Al añadir <code>&lt;FaHeart /&gt;</code> al método <strong>render, </strong>se muestra el ícono en tu página
      web.
      Esto es posible porque ya habíamos importado el ícono al principio del archivo.</p>
     <blockquote>Nota: Debes hacer coincidir cualquier ícono que hayas copiado con el código para importar. Es decir,
      no
      puedes pegar un ícono de Bootstrap con un código de importar de Font Awesome. Hacerlo así no te dará el resultado
      correcto.</blockquote>

     <h2>Código para importar todas las
      librerías
      de íconos de 'react-icons'</h2>
     <p>En caso de que quieras usar íconos de otras librerías (además de aquellas que hemos discutido aquí), aquí están
      sus códigos de importación para que puedas acceder a ellas rápidamente:</p>
     <pre pre class="language-jsx"><code pre class="language-jsx">import { IconName } from "react-icons/ai"; //Ant Design Icons
  import { IconName } from "react-icons/bs"; //Bootstrap Icons
  import { IconName } from "react-icons/bi"; //Boxicons
  import { IconName } from "react-icons/di"; //Devicon Icons
  import { IconName } from "react-icons/fi"; //Feather 
  import { IconName } from "react-icons/fc"; //Flat Color Icons
  import { IconName } from "react-icons/fa"; //Font Awesome Icons
  import { IconName } from "react-icons/gi"; //Game Icons
  import { IconName } from "react-icons/go"; //Github Octicons Icons
  import { IconName } from "react-icons/gr"; //Grommet-Icons
  import { IconName } from "react-icons/hi"; //HeroIcons
  import { IconName } from "react-icons/im"; //IcoMoon Free
  import { IconName } from "react-icons/io"; //Ionicon4
  import { IconName } from "react-icons/io5"; //Ionicon5
  import { IconName } from "react-icons/md"; //Material Design Icons
  import { IconName } from "react-icons/ri"; //Remix Icons
  import { IconName } from "react-icons/si"; //Simple Icons
  import { IconName } from "react-icons/ti"; //Typicons
  import { IconName } from "react-icons/vsc"; //VS Code Icons
  import { IconName } from "react-icons/wi"; //Weather Icons
  import { IconName } from "react-icons/cg"; //css.gg
  </code></pre>
     <p>Todas las librerías de íconos disponibles en la página de 'react-icons' se usan de la misma manera que
      describimos en este artículo.</p>
     <h2 id="conclusi-n">Conclusión</h2>
     <p>Los íconos disponibles con 'react-icons' están altamente optimizados, son escalables y fáciles de usar. Espero
      haber podido ayudarte a aprender su funcionamiento básico para que puedas hacer uso de ellos. Puedes leer la <a
       href="https://react-icons.github.io/react-icons/">documentación</a> (en inglés) de 'react-icons' para aprender
      más.</p>

    </section>
   </section>
  </article>
    `,
  },
  {
    id: 1006,
    author: 1,
    category: [1, 2],
    tags: [1, 2],
    title:
      "Fetch API – Cómo realizar un GET Request y un POST Request en JavaScript",
    /* subTitle es solo para miniatura */
    subTitle:
      "A menudo es posible que quieras que tu sistema se comunique con otros servidores web para obtener información.",
    date: "2023/03/30 14:00:00",
    thumb: `https://placeimg.com/800/400/tech`,
    route: "fetch-api-como-realizar-get-y-post",
    content: `
    <article class="post-full">
   <header class="post-full-header">
    <h1 class="post-full-title">Fetch API – Cómo realizar un GET Request y un POST Request en JavaScript</h1>
   </header>

   <img src="https://placeimg.com/800/400/tech" alt="tech place tech">

   <section class="post-full-content">

    <section class="post-content ">

     <h3>Cuando estés construyendo una aplicación web con React, es muy probable que requieras utilizar íconos. Los
      íconos
      son representaciones gráficas de un concepto, una idea, un archivo, un programa, una aplicación, un negocio,
      entre
      otros.</h3>
     <p>También puedes usar íconos para representar la identidad de una funcionalidad. En aquellos lugares donde no
      quieras escribir el nombre de un programa, un ícono adecuado puede aparecer en lugar del nombre o aplicación para
      una fácil identificación.</p>
     <p>Existen muchas y diferentes librerías de íconos allí afuera, así que, ¿cómo puedes agregarlas a tu aplicación
      en
      React? Aprenderemos esto y mucho más en este artículo.</p>
     <hr />
     <h2>En este artículo aprenderás:</h2>
     <ul>
      <li>¿Qué es la librería 'react-icons'?</li>
      <li>¿Qué son los íconos de Font Awesome?</li>
      <li>Cómo configurar tu entorno de desarrollo.</li>
      <li>Cómo instalar 'react-icons'.</li>
      <li>Cómo importar 'react-icons'.</li>
      <li>Cómo usar 'react-icons' en tus aplicaciones.</li>

      <li>Bono: código para importar todas la librerías de íconos de 'react-icons'</li>
      <li>Conclusión</li>
     </ul>
     <h2>¿Qué es 'react-icons'?</h2>
     <p>'React-icons' es una pequeña librería que te permite añadir íconos (desde distintas librerías de íconos) a tus
      aplicaciones hechas con React. Te entrega los íconos en tu aplicación como componentes, de tal manera que se hace
      más fácil trabajar con ellos. También te permite modificar sus estilos, así lograrás que sean consistentes con el
      estilo general de tu aplicación.</p>
     <p>La librería de 'react-icons' usa ES6 para importar los íconos en tu aplicación de React. Lo hace de tal manera
      que solamente los íconos que realmente vas a utilizar sean lo que se importen de cada librería.</p>
     <p>Con 'react-icons', tú sólo necesitas ejecutar un comando para poder utilizar cualquier ícono que quieras de
      cierta librería. Solamente necesitas escoger el código <strong>import</strong> correcto y tu ícono estará listo.
     </p>
     <p>'React-icons' funciona con un conjunto amplio de librerías de íconos como Font Awesome, Material UI, Bootstrap,
      entre otros.</p>
     <h2>¿Qué son los íconos de Font Awesome?</h2>
     <p>Existen muchas librerías de íconos, pero una de las más populares es Font Awesome. Font Awesome es una librería
      o
      kit de herramientas (toolkit) gráficas que son creadas para comportarse como fuentes.</p>
     <p>Los íconos de Font Awesome somo como fuentes de texto normales, pero en lugar de letras obtienes gráficos. Son
      vectores gráficos escalables (SVGs por sus siglas en inglés), lo cual significa que puedes cambiar sus colores,
      sus
      dimensiones y demás sin comprometer su calidad.</p>
     <p>Ahora, para usar los íconos de Font Awesome en una aplicación de React sin 'react-icons', tienes que pasar por
      un
      proceso largo de instalación de diferentes paquetes usando varias líneas de comando.</p>
     <p>Algunas veces puede que incluso necesites instalar el paquete Pro. En ese caso, tienes que importar todos los
      íconos de forma universal o en archivos individuales. ¿Todo este proceso solamente para instalar unos cuántos
      íconos en tu página web?</p>
     <p>Aquí es donde 'react-icons' aparece para salvar el día. En este artículo, te mostraré cómo usar 'react-icons'
      para añadir íconos de Font Awesome a tu aplicación de React. Empecemos.</p>
     <h2>Cómo configurar tu entorno de desarrollo</h2>
     <p>Sigue los siguientes pasos para configurar tu entorno de desarrollo:</p>
     <blockquote>Nota: si ya cuentas con tu configuración lista, no hace falta que repitas el proceso. Simplemente,
      salta
      a la siguiente sección.</blockquote>
     <ol>
      <li>Dirígete a <a href="https://nodejs.org/es/">Node.js</a> para descargar e instalar Node si aún no lo has
       hecho.
      </li>
      <li>Abre la terminal de tu equipo.</li>
      <li>Ingresa este comando: <code>npm i -g create-react-app fonts-app</code>. Este instalará una aplicación de
       React
       con todos los paquetes que necesitas para tu proyecto.</li>
      <li>Luego, ingresa <code>cd fonts-app/</code>. <code>fonts-app</code> es el nombre de la carpeta de tu proyecto.
       Tu
       puedes elegir el nombre que quieras. <code>cd fonts-app</code> te llevará adentro de la carpeta de tu proyecto.
      </li>
      <li>Una vez dentro, ingresa <code>npm start</code> para iniciar tu proyecto en un servidor de desarrollo.</li>
      <li>Desde tu editor de código abre la carpeta src de tu proyecto y encuentra el archivo <code>App.js</code>.</li>
      <li>Elimina el elemento de React que se encuentra renderizado allí por defecto y añade tu propio div, h1 o
       cualquier otro elemento que tú prefieras (es sólo con fines de ejemplificar).</li>
     </ol>
     <p>Ahora ya está todo listo.</p>
     <h2>Cómo instalar 'react-icons'</h2>
     <p>Para instalar la librería <code>react-icons</code> , realiza lo siguiente:</p>
     <ul>
      <li>Estando dentro de la carpeta de tu proyecto, abre la terminal de tu editor de código.</li>
      <li>Ejecuta allí el comando <code>npm install react-icons</code> para instalar la librería en la carpeta de tu
       proyecto.</li>
     </ul>
     <p>Esto puede tomar algún tiempo dependiendo de la velocidad de tu sistema. Una vez completo, ya estás listo para
      usar los íconos.</p>
     <h2>Cómo importar íconos con 'react-icons'</h2>
     <p>Ve a la página de '<a href="https://react-icons.github.io/react-icons/">react-icons</a>'. Verás varias
      librerías
      de íconos que puedes utilizar. Cada librería de íconos tiene un código para importarlas. Para este tutorial, nos
      enfocaremos en la librería de íconos Font Awesome.</p>
     <p>El código para importar desde Font Awesome es <code>import { IconName } from "react-icons/fa";</code>.</p>
     <h4>Código de ejemplo</h4>
     <pre class="language-jsx"><code class=" language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> IconName <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-icons/fa"</span><span class="token punctuation">;</span>
  </code></pre>
     <figure class="kg-card kg-image-card kg-card-hascaption"><img
       src="https://www.freecodecamp.org/news/content/images/2021/09/FontAwesomePage.png" class="kg-image" alt="FontAwesomePage" width="600"
       height="400" loading="lazy">
      <figcaption>Íconos de Font Awesome en la página de react-icons</figcaption>
     </figure>
     <h2>Cómo usar íconos en tus aplicaciones</h2>
     <p>Sigue los siguientes pasos para usar los íconos de Font Awesome en tu apliación.</p>
     <ol>
      <li>En <code>App.js</code>, pega el código de importar al principio del archivo o luego del código para importar
       React.</li>
      <li>Vuelve a la página de 'react-icons' y elige cualquier ícono de Font Awesome.</li>
      <li>Haz clic en el ícono para copiarlo.</li>
      <li>Vuelve a tu código de importar en <code>App.js</code>.</li>
      <li>Pega y reemplaza <code>IconName</code> por el nombre del ícono que copiaste, dentro de las llaves.</li>
      <li>Usa el nombre del ícono como el nombre de un elemento de React.</li>
     </ol>
     <h6>Código de ejemplo</h6>
     <pre pre
      class="language-jsx"><code pre class="language-jsx"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> FaHeart <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-icons/fa"</span><span class="token punctuation">;</span>
  
  <span class="token keyword">class</span> <span class="token class-name">Like</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FaHeart</span></span> <span class="token punctuation">/&gt;</span></span>  
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
  <span class="token keyword">export</span> <span class="token keyword">default</span> Like<span class="token punctuation">;</span></code></pre>
     <figure class="kg-card kg-image-card kg-card-hascaption"><img src="https://www.freecodecamp.org/news/content/images/2021/09/HeartIcon.png"
       class="kg-image" alt="HeartIcon" width="600" height="400" loading="lazy">
      <figcaption>Render de un ícono de corazón de Font Awesome</figcaption>
     </figure>
     <p>Al añadir <code>&lt;FaHeart /&gt;</code> al método <strong>render, </strong>se muestra el ícono en tu página
      web.
      Esto es posible porque ya habíamos importado el ícono al principio del archivo.</p>
     <blockquote>Nota: Debes hacer coincidir cualquier ícono que hayas copiado con el código para importar. Es decir,
      no
      puedes pegar un ícono de Bootstrap con un código de importar de Font Awesome. Hacerlo así no te dará el resultado
      correcto.</blockquote>

     <h2>Código para importar todas las
      librerías
      de íconos de 'react-icons'</h2>
     <p>En caso de que quieras usar íconos de otras librerías (además de aquellas que hemos discutido aquí), aquí están
      sus códigos de importación para que puedas acceder a ellas rápidamente:</p>
     <pre pre class="language-jsx"><code pre class="language-jsx">import { IconName } from "react-icons/ai"; //Ant Design Icons
  import { IconName } from "react-icons/bs"; //Bootstrap Icons
  import { IconName } from "react-icons/bi"; //Boxicons
  import { IconName } from "react-icons/di"; //Devicon Icons
  import { IconName } from "react-icons/fi"; //Feather 
  import { IconName } from "react-icons/fc"; //Flat Color Icons
  import { IconName } from "react-icons/fa"; //Font Awesome Icons
  import { IconName } from "react-icons/gi"; //Game Icons
  import { IconName } from "react-icons/go"; //Github Octicons Icons
  import { IconName } from "react-icons/gr"; //Grommet-Icons
  import { IconName } from "react-icons/hi"; //HeroIcons
  import { IconName } from "react-icons/im"; //IcoMoon Free
  import { IconName } from "react-icons/io"; //Ionicon4
  import { IconName } from "react-icons/io5"; //Ionicon5
  import { IconName } from "react-icons/md"; //Material Design Icons
  import { IconName } from "react-icons/ri"; //Remix Icons
  import { IconName } from "react-icons/si"; //Simple Icons
  import { IconName } from "react-icons/ti"; //Typicons
  import { IconName } from "react-icons/vsc"; //VS Code Icons
  import { IconName } from "react-icons/wi"; //Weather Icons
  import { IconName } from "react-icons/cg"; //css.gg
  </code></pre>
     <p>Todas las librerías de íconos disponibles en la página de 'react-icons' se usan de la misma manera que
      describimos en este artículo.</p>
     <h2 id="conclusi-n">Conclusión</h2>
     <p>Los íconos disponibles con 'react-icons' están altamente optimizados, son escalables y fáciles de usar. Espero
      haber podido ayudarte a aprender su funcionamiento básico para que puedas hacer uso de ellos. Puedes leer la <a
       href="https://react-icons.github.io/react-icons/">documentación</a> (en inglés) de 'react-icons' para aprender
      más.</p>

    </section>
   </section>
  </article>
    `,
  },
];

export default posts;
