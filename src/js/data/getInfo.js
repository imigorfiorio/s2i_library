import axios from "axios";
import showdown from "showdown";

function getInfo(book, cover) {
  axios.get(`https://openlibrary.org${book.key}.json`)
    .then(res => {
      cover.addEventListener("click", () => {
        document.title = `${book.title} | Library`;

        const searchWrapper = document.querySelector(".search_wrapper");
        searchWrapper.style.display = "none";

        const books = document.querySelector(".books");
        books.style.display = "none";

        const about = document.querySelector(".about");
        about.style.display = "block";

        const title = document.querySelector(".about_title");
        title.innerHTML = book.title;

        const author = document.querySelector(".about_author");
        author.innerHTML = `by ${book.authors[0].name}`;

        const description = res.data.description;
        const info = document.querySelector(".about_info");
        const converter = new showdown.Converter();
        info.innerHTML =
          description === undefined
            ? "Description not found"
            : converter.makeHtml(description.value || description)
      })
    })
    .catch(err => {
      console.log(err);
    })
}

export default getInfo;
