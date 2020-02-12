import axios from "axios";

export default {
  // Gets all posts
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the Book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a Book to the database
  saveBook: function(postData) {
    return axios.post("/api/books", postData);
  },
  // search for book
  seachBook: function(title) {
    return axios.get("/api/search" + title);
  }
};
