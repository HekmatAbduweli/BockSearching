export default function Bookcards({ book }) {
  return (
    <>
      <p>Title:{book.title}</p>
      <p>
        Author:
        {book.author_name ? book.author_name.join(", ") : "Unknown"}
      </p>
    </>
  );
}
