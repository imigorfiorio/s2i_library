import axios from "axios";
import getBooks from "./getBooks.js";
import moveSearchBar from "../components/moveSearchBar.js";

const booksList = document.querySelector(".books");

async function getData() {
  try {
    booksList.innerHTML = "";

    const search = document.querySelector(".search_input").value;
    if (!search) {
      alert("Insert text");
      return false;
    }

    const searchLower = search.toLowerCase();
    const url = `https://openlibrary.org/subjects/${searchLower}.json?sort=rating`;
    const res = await axios.get(url);
    if (res.status !== 200) {
      if (res.status === 404) {
        alert("Book not found");
        return;
      } else if (res.status === 500) {
        alert("Error from server");
        return;
      } else if (res.status === 401) {
        alert("Access denied");
        return;
      } else if (res.status === 202) {
        alert("The request has been accepted for processing, but the processing has not been completed",);
        return;
      } else {
        alert("Ops! something went wrong");
        return;
      }
    }

    const books = res.data.works;
    if (res.status === 200) {
      if (res.data.work_count === 0) {
        alert("Subject not found");
      } else {
        document.title = `${search} | Library`;
        moveSearchBar();
        books;
      }
    } else {
      alert("Ops! something went wrong");
      return;
    }
    getBooks(booksList, books);
  } catch (error) {
    alert("Oops! something went wrong");
    console.log(error);
  }
}

export default getData;
