import React, { useReducer, useRef, useEffect } from "react";
// import API from "../../utils/API";
import { useStoreContext } from "../utils/GlobalState";
import API from "../utils/API";

const Home = () => {
  // allow access to context
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

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="jumbotron text-center">
            <div className="container">
              <h1 className="display-4">Google Search Books</h1>
              <p className="lead">Search for a book!</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <form onSubmit={handleSubmit}>
            <div className="form-group mx-sm-3 mb-2">
              <input
                type="text"
                className="form-control"
                id="bookSearchInput"
                placeholder="Search book title"
                ref={inputRef}
              ></input>
              <button type="submit" className="btn btn-primary mb-2">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <table className="table">
            <tbody>
              {state.map(book => {
                if (book.volumeInfo.imageLinks && book.volumeInfo.authors) {
                  return (
                    <tr key={book.id}>
                      <td>
                        <img
                          src={book.volumeInfo.imageLinks.thumbnail}
                          alt={book.title}
                        />
                      </td>
                      <td>{book.volumeInfo.title}</td>
                      <td>
                        <h5>{book.title}</h5>
                        <p>
                          by{" "}
                          <strong>{book.volumeInfo.authors.join(" ")}</strong>
                        </p>
                        <p>{book.volumeInfo.description}</p>
                      </td>
                      <td>
                        <a
                          href="#"
                          onClick={() =>
                            handleClick({
                              title: book.volumeInfo.title,
                              authors: book.volumeInfo.authors.join(" "),
                              description: book.volumeInfo.description,
                              image: book.volumeInfo.imageLinks.thumbnail,
                              link: book.volumeInfo.previewLink
                            })
                          }
                          className="btn btn-primary"
                        >
                          Add
                        </a>
                        <a
                          href={book.volumeInfo.previewLink}
                          className="btn btn-secondary"
                          target="_blank"
                        >
                          Google
                        </a>
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
