import { useState, useEffect } from "react";

import "./App.css";

export default function App() {
  const [info, setInfo] = useState("");

  const DataFetch = async () => {
    try {
      const response = await fetch(`https://openlibrary.org/search.json`);
      const data = await response.json();
      setInfo(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const inputResult = (event) => {
    setInfo(event.target.value);
  };

  const searching = () => {
    console.log(info);
  };

  return (
    <>
      <h1>Book searching</h1>
      <input type="text" value={info} onChange={inputResult} />
      <button onClick={searching}>Search</button>
    </>
  );
}
