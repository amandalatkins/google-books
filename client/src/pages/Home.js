import React, { useReducer, useRef } from "react";
// import API from "../../utils/API";
import { useStoreContext } from "../utils/GlobalState";

const Home = () => {
  // allow access to context
  const [state, dispatch] = useStoreContext();

  const inputRef = useRef();

  return (
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="jumbotron text-center">
            <div class="container">
              <h1 class="display-4">Google Search Books</h1>
              <p class="lead">Forget books, hit the gym instead</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <form>
            <div class="form-group mx-sm-3 mb-2">
              <input
                type="text"
                class="form-control"
                id="bookSearchInput"
                placeholder="Search book title"
                ref={inputRef}
              ></input>
              <button type="submit" class="btn btn-primary mb-2">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <div>results shit</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
