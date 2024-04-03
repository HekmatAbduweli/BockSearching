import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const DataFetch = async () => {
    try {
      const response = await fetch(`https://openlibrary.org/search.json`);
      if (response.ok) {
        console.log("fetching success");
      } else {
        console.log("fetching failed");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    DataFetch()
  },[]);
}

export default App;
