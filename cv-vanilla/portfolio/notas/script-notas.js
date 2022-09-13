showNotes();

// If user adds a note, save it to the localStorage

let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");

  let notes = localStorage.getItem("notes");

  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.push(addTxt.value);

  localStorage.setItem("notes", JSON.stringify(notesObj));

  addTxt.value = "";

  showNotes();
});

// Function to show elements from localStorage

function showNotes() {
  let notes = localStorage.getItem("notes"),
    theme = localStorage.getItem("theme");

  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  let html = "";

  notesObj.forEach(function (element, index) {
    html += `
    <div class="noteCard my-2 mx-2 card ${
      theme === "dark" && "dark-mode-notes"
    }" style="width: 18rem;" data-dark-notes>
  <div class="card-body">
  
    <h5 class="card-title">Note ${index + 1}</h5>
 
   <p class="card-text"> ${element}</p>
 
   <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-danger">Delete Note</button>
 </div>
  </div>`;
  });

  let notesElm = document.getElementById("notes");

  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = "Todavía no hay notas, escribe una nueva 🙂";
  }
}

// Function to delete a note

function deleteNote(index) {
  let notes = localStorage.getItem("notes");

  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1);

  localStorage.setItem("notes", JSON.stringify(notesObj));

  showNotes();
}

/* - - - - Dark Mode   - - - - */
function darkTheme(btn, classDark, classDarkNotes) {
  const $themeBtn = document.querySelector(btn),
    $selectors = document.querySelectorAll("[data-dark]"),
    $selectorsNotes = document.querySelectorAll("[data-dark-notes]");

  const lightMode = () => {
    $selectors.forEach((el) => el.classList.remove(classDark));
    $selectorsNotes.forEach((el) => el.classList.remove(classDarkNotes));
    $themeBtn.textContent = "🌙";
    $themeBtn.classList.remove("btn-outline-light");
    $themeBtn.classList.add("btn-outline-dark");
    localStorage.setItem("theme", "light");
  };

  const darkMode = () => {
    $selectors.forEach((el) => el.classList.add(classDark));
    $selectorsNotes.forEach((el) => el.classList.add(classDarkNotes));
    $themeBtn.textContent = "☀️";
    $themeBtn.classList.remove("btn-outline-dark");
    $themeBtn.classList.add("btn-outline-light");
    localStorage.setItem("theme", "dark");
  };

  document.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      if ($themeBtn.textContent === "🌙") {
        darkMode();
        location.reload();
      } else {
        lightMode();
        location.reload();
      }
    }
  });

  document.addEventListener("DOMContentLoaded", (e) => {
    if (localStorage.getItem("theme") === null)
      localStorage.setItem("theme", "light");
    if (localStorage.getItem("theme") === "light") lightMode();
    if (localStorage.getItem("theme") === "dark") darkMode();
  });
}

darkTheme("#btn-theme", "dark-mode", "dark-mode-notes");
