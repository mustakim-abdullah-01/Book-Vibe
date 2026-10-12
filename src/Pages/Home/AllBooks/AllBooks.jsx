import { use } from "react";
import BookCard from "./BookCard/BookCard";

const booksDataPromise = fetch("/booksData.json").then((res) => res.json());
const AllBooks = () => {
  const booksData = use(booksDataPromise);

  return (
    <>
      {/* Section Header */}
      <h2 className="text-4xl font-bold text-center mt-25 fpd">Books</h2>

      {/* All Books */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {booksData.map((book) => {
          return <BookCard key={book.bookId} book={book} />;
        })}
      </div>
    </>
  );
};

export default AllBooks;
