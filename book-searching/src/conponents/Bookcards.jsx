export default function Bookcards({ book }) {
  return (
    <>
      <h3>Title:{book.title}</h3>
      <p>
        <span>First Published:</span> {book.first_publish_year}
      </p>
      <p>
        <span>Author:</span>
        {book.author_name ? book.author_name.join(", ") : "Unknown"}
      </p>
      <p>
        <span>Average Rating:</span>{" "}
        {book.ratings_average
          ? book.ratings_average.toFixed(2)
          : "Not Available"}
      </p>
      {book.id_amazon && (
        <a
          href={`https://www.amazon.com/s?k=${book?.isbn?.[0]}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy on Amazon
        </a>
      )}
    </>
  );
}
