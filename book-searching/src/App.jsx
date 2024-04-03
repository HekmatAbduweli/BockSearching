import { useState, useEffect } from "react";

import "./App.css";

export default function App() {
  const [info, setInfo] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const DataFetch = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${info}`
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
    setInfo(event.target.value);
  };

  const searching = () => {
    DataFetch();
  };

  useEffect(() => {
    if (books != null) {
      console.log(books);
    }
  }, [books]);

  return (
    <>
      <h1>Book searching</h1>
      <input type="text" value={info} onChange={inputResult} />
      <button onClick={searching}>Search</button>
      {loading && <p>Loading...</p>}
    </>
  );
}
