import { getSuggestedQuery } from "@testing-library/react";
import React, { useState } from "react";

function Search({ getQuery }) {
  const [text, setText] = useState("");
  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };
  return (
    <section className="search">
      <form onSubmit={e=> e.preventDefault()} action="">
        <input
          type="text"
          className="form-control"
          placeholder="Search Character"
          value={text}
          onChange={(e) => onChange(e.target.value)}
        />
      </form>
    </section>
  );
}

export default Search;
