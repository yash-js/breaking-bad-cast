import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/ui/Header";
import axios from "axios";
import CharacterGrid from "./components/characters/CharacterGrid";
import Search from "./components/ui/Search";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      let result = await axios(
        query.length < 1
          ? `https://www.breakingbadapi.com/api/characters`
          : `https://www.breakingbadapi.com/api/characters?name=${query}`
      );

      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <p
        style={{
          color: "white",
          textAlign: "center",
          fontWeight: "800",
          padding: "35px",
        }}
      >
        Breaking Bad is an American neo-Western crime drama television series
        created and produced by Vince Gilligan.
      </p>

      <Search getQuery={(q) => setQuery(q)} />
      <em style={{ textAlign: "center", paddingBottom: "20px" }}>
        Breaking Bad's cast and their info is listed below
      </em>
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
