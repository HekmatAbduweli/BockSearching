import Bookcards from "./Bookcards";

export default function Searchresult({ books }) {
  return (
    <ul>
      {books.map((book, index) => (
        <li key={index}>
          <Bookcards book={book}/>
        </li>
      ))}
    </ul>
  );
}
