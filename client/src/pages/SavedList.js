import React, { useEffect } from "react";
import { useStoreContext } from "../utils/GlobalState";
import API from "../utils/API";

const SavedList = () => {
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    loadBooks();
  }, []);

  function loadBooks() {
    API.getBooks()
    .then(results => {
      dispatch({type: "loadSaved", books: results.data });
    });
  }

  function handleClick(id) {
    API.deleteBook(id)
    .then(() => {
      loadBooks();
    });
  }

  return (
    <div className="container">
        <div className="row">
          <div className="col-12">

            <div className="jumbotron text-center">
              <div className="container">
                <h1 className="display-4">Your Saved Books</h1>
                <p className="lead">Forget books, hit the gym instead</p>
              </div>
            </div>

            <table className="table">
              <tbody>
                {state.map(book => {
                    return (
                      <tr key={book._id}>
                        <td>
                          <img src={book.image} alt={book.title}/>
                        </td>
                        <td>
                          <h5>{book.title}</h5>
                          <p>{book.description}</p>
                        </td>
                        <td>
                          <a href={book.link} className="btn btn-primary" target="_blank">View</a>
                          <a href="#" onClick={() => handleClick(book._id)} class="btn btn-danger">Remove</a>
                        </td>
                      </tr>
                    );
                })}
                </tbody>
            </table>

          </div>
        </div>
    </div>
  );
};

export default SavedList;
