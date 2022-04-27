import hamburguerMenu from "./menu_hamburguesa.js";
import scrollTopButton from "./boton_scroll.js";
import darkTheme from "./tema_oscuro.js";

document.addEventListener("DOMContentLoaded", (e) => {
  //   El evento del botón del menu hamburguesa, y los otros eventos (reloj, contador, etc) los invocamos, o sea, lo cargamos en el DOMContentListener que es más eficiente que en el window.load
  // 1-Definimos el selector, el botón está definido por una clase entonces lleva punto. 2-El evento despliega el panel. 3-tocar un link del menu cierra panel.
  hamburguerMenu(".panel-btn", ".panel", ".menu a");

  // Definimos el selector (botón), lleva punto por ser clase
  scrollTopButton(".scroll-top-boton");
});

// TEMA OSCURO va fuera del DOMContentLoaded porque en tema_oscuro.js utilizamos otro DOMContentLoaded, y no puede haber uno dentro de otro. Se reemplazarían y uno no funcionaría.
// En la función darkTheme: 1-Definimos selector (botón), 2-La clase que va a activar el tema oscuro en los elementos que vamos a hacer dark, agregando o quitando de la lista de clases, No lleva punto.
darkTheme(".dark-theme-btn", "dark-mode");
