import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Google Books
      </a>
      <a className="nav-link" href="/home">
        Search
      </a>
      <a className="nav-link" href="/saved">
        Saved
      </a>
    </nav>
  );
}

export default Nav;
