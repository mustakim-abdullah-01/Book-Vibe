import { use } from "react";
import BooksSectionHeader from "./BookSectionHeader/BooksSectionHeader";
import BookCard from "./BookCard/BookCard";

const booksDataPromise = fetch("/booksData.json").then((res) => res.json());
const AllBooks = () => {
  const booksData = use(booksDataPromise);

  return (
    <>
      {/* Section Header */}
      <BooksSectionHeader />

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
