import React, { useReducer, useRef } from "react";
// import API from "../../utils/API";
import { useStoreContext } from "../utils/GlobalState";
import API from "../utils/API";

const Home = () => {
  // allow access to context
  const [state, dispatch] = useStoreContext();

  const inputRef = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    console.log(inputRef.current.value);

    API.searchBook(inputRef.current.value)
      .then(result => {
        console.log(result);
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="jumbotron text-center">
            <div className="container">
              <h1 className="display-4">Google Search Books</h1>
              <p className="lead">Forget books, hit the gym instead</p>
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
          <div>results shit</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
