# Google Books Search

This MERN stack application leverages the Google Books API to allow the user to search for books. If a user finds a book they like or want to read, they can add it to their 'saved books' list, which is stored in MongoDB for later access.

## Technologies Used

* [MongoDB](https://www.mongodb.com/)
* [Express](https://expressjs.com/)
* [React](https://reactjs.org/)
* [NodeJS](https://nodejs.org/)
* [Google Books API](https://developers.google.com/books)

## Code Snippets

The following code snippet shows the methods associated with the functional component `Home`, where search and results are handled.

```javascript
  const [state, dispatch] = useStoreContext();

  const inputRef = useRef();

  useEffect(() => {
    loadSearch([]);
  }, []);

  function loadSearch(results) {
    dispatch({ type: "bookSearch", results: results });
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(inputRef.current.value);

    API.searchBook(inputRef.current.value)
      .then(result => {
        console.log(result);
        loadSearch(result.data);
      })
      .catch(err => console.log(err));
  };

  function handleClick(book) {
    console.log(book);
    API.saveBook(book).then(() => {
      console.log("added succefulu");
    });
  }
  ```

  The following code snippet shows the Express route for searching Google books:

  ```javascript
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
  ```

  ## Authors

  * Arman Riahi
    * [LinkedIn](https://www.linkedin.com/in/arman-riahi/)
    * [GitHub](https://github.com/namrataffy)

* Amanda Atkins
    * [Portfolio](https://digitalrainstorm.com)
    * [LinkedIn](https://linkedin.com/in/amandalatkins)
    * [GitHub](https://github.com/amandalatkins)