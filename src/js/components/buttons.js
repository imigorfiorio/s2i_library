import getData from "../data/getData.js";

export function search() {
  const searchInput = document.querySelector(".search_input");
  const btnSearch = document.querySelector(".btn-search");
  const btnCancel = document.querySelector(".btn-cancel");

  window.addEventListener("keyup", function(event) {
    if (event.key === "/") {
      event.preventDefault();
      searchInput.focus();
    }
  })

  btnSearch.addEventListener("click", getData);

  searchInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      getData();
    }
  });

  searchInput.addEventListener("input", function() {
    if (searchInput.value.length > 0) {
      btnCancel.style.display = "inline";
    } else {
      btnCancel.style.display = "none";
    }
  });

  btnCancel.addEventListener("click", function() {
    searchInput.value = "";
    document.querySelector(".search_input").focus();
    btnCancel.style.display = "none";
  });
}

export function switchTheme() {
  let darkMode = localStorage.getItem("darkMode");
  const btnTheme = document.querySelector(".btn-theme");

  const enableDarkMode = () => {
    document.body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled");
  };

  const disableDarkMode = () => {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "disabled");
  };

  if (darkMode === "enabled") {
    enableDarkMode();
  }

  btnTheme.addEventListener("click", function(event) {
    event.preventDefault();
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled") {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  });
}

export function btnExit() {
  const btnExit = document.querySelector(".btn-exit");
  const about = document.querySelector(".about");
  const booksList = document.querySelector(".books");
  const searchWrapper = document.querySelector(".search_wrapper");

  btnExit.addEventListener("click", () => {
    const search = document.querySelector(".search_input").value;
    document.title = `${search} | Library`;

    about.style.display = "none";
    searchWrapper.style.display = "flex";
    booksList.style.display = "grid";
  });

  document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
      const search = document.querySelector(".search_input").value;
      document.title = `${search} | Library`;

      about.style.display = "none";
      searchWrapper.style.display = "flex";
      booksList.style.display = "grid";
    }
  });
}
