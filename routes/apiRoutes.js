const Book = require("../models/Book.js");
const axios = require("axios");

module.exports = app => {
  // Get all saved books
  app.get("/api/books", (_, res) => {
    Book.find({})
      .sort("title")
      .then(books => res.json(books))
      .catch(err => console.log(err));
  });

  // Save a book
  app.post("/api/books", ({ body }, res) => {
    Book.create(body)
      .then(newBook => res.json(newBook))
      .catch(err => res.status(400).json(err));
  });

  // Get saved book detail
  app.get("/api/books/:id", ({ params }, res) => {
    Book.findOne({ _id: params.id })
      .then(book => res.json(book))
      .catch(err => res.status(400).json(err));
  });

  // Delete saved book
  app.delete("/api/books/:id", ({ params }, res) => {
    Book.deleteOne({ _id: params.id })
      .then(deletedBook => res.json(deletedBook))
      .catch(err => res.status(400).json(err));
  });

  // Search Google for Book
  app.get("/api/search/:terms", ({ params }, res) => {
    const apiKey = "AIzaSyB_iJaY0R_CTYUQRcH_oAGEHE9klqg9Vrs";
    var queryUrl =
      "https://www.googleapis.com/books/v1/volumes?q=" +
      params.terms +
      "&apiKey=" +
      apiKey;

    axios
      .get(queryUrl)
      .then(results => res.json(results.data.items))
      .catch(err => res.status(400).json(err));
  });
};
