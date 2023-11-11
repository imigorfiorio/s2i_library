import createElementHtml from "../components/createElementHtml.js";
import getInfo from "./getInfo.js";
import coverJpg from "../../assets/img/cover.jpg";

function getBooks(booksList, books) {
  for (const book of books) {
    const card = createElementHtml("div", "card", "");
    booksList.appendChild(card);

    const cardTop = createElementHtml("div", "card_top", "");
    card.appendChild(cardTop);

    const cover = createElementHtml("img", "card_cover", "");
    const coverImg = book.cover_id
      ? `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`
      : coverJpg;

    cover.setAttribute("src", coverImg);
    cardTop.appendChild(cover);

    const cardBottom = createElementHtml("div", "card_bottom", "");
    card.appendChild(cardBottom);

    const title = createElementHtml("h2", "card_title", book.title);
    cardBottom.appendChild(title);

    const author = createElementHtml("h3", "card_author", book.authors[0].name);
    cardBottom.appendChild(author);

    getInfo(book, cover);
  }
}

export default getBooks;
