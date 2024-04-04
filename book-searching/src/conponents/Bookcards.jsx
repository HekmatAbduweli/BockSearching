export default function Bookcards({ book }) {
  return (
    <>
      <p>Title:{book.title}</p>
      <p>
        <strong>First Published:</strong> {book.first_publish_year}
      </p>
      <p>
        Author:
        {book.author_name ? book.author_name.join(", ") : "Unknown"}
      </p>
      <p>
        <strong>Average Rating:</strong>{" "}
        {book.ratings_average
          ? book.ratings_average.toFixed(2)
          : "Not Available"}
      </p>
      {book.id_amazon && (
        <a
          href={`https://www.amazon.com/s?k=${book.id_amazon}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy on Amazon
        </a>
      )}
    </>
  );
}
