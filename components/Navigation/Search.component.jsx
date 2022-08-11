import React, { Fragment } from "react";
import Image from "next/image";

function Search() {
  return (
    <Fragment>
      <form className="custom-form">
        <input className="custom-search" type="text" name="search" />
        <input className="search-button" type="submit" />
      </form>
    </Fragment>
  );
}

export default Search;
