import { useState, useEffect } from "react";

import "./styles/styles.scss";
import Searchresult from "./conponents/Searchresult";

export default function App() {

  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const JamesBondFetch = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://openlibrary.org/search.json?q=James+Bond`
        );
        const data = await response.json();
        if (data != 0) {
          setBooks(data.docs);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    JamesBondFetch();
  }, []);

  const DataFetch = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${query}`
      );
      const data = await response.json();
      if (data != 0) {
        setBooks(data.docs);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const inputResult = (event) => {
    setQuery(event.target.value);
  };

  const searching = () => {
    if (query.length < 3) {
      alert("you must have at least three characters!");
      return;
    }
    DataFetch();
  };

  useEffect(() => {
    if (books != null) {
      console.log(books);
    }
  }, [books]);

  return (
    <>
        <nav>
          <h1>Book searching</h1>
          <div className="search-bar">
            <input type="text" value={query} onChange={inputResult} />
            <button onClick={searching}>Search</button>
          </div>
          {loading && <p>Loading...</p>}
        </nav>
      <Searchresult books={books} />
    </>
  );
}
