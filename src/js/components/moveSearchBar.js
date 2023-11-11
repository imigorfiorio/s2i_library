const searchWrapper = document.querySelector(".search_wrapper");
const searchTitle = document.querySelector(".search_title");
const searchBar = document.querySelector(".search_bar");
const booksList = document.querySelector(".books");

function moveSearchBar() {
  searchWrapper.style.padding = "0";
  searchWrapper.style.height = "4em";
  searchTitle.style.display = "none";
  searchBar.style.width = "90vw";
  booksList.style.display = "grid";
}

export default moveSearchBar;
