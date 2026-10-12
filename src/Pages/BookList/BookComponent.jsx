import { BookBookmark, CalendarDays, SquareText } from "lucide-react";
import { Link } from "react-router";

const BookComponent = ({ book }) => {
  return (
    <div>
      <div
        key={book.bookId}
        className="flex max-lg:flex-col items-center gap-6 p-6 my-6 border rounded-2xl border-[#131313]/15"
      >
        <div className="px-12.5 py-7.5 max-h-57.5 max-w-57.5 rounded-2xl bg-[#131313]/5 flex justify-center items-center">
          <img
            className="h-auto shadow-2xl lg:max-h-44"
            src={book.image}
            alt=""
          />
        </div>
        <div>
          <div className="w-full">
            <h3 className="mb-4 text-2xl font-bold fpd">{book.bookName}</h3>

            <p className="mb-4">By: {book.author}</p>

            <div className="flex items-center gap-4 mb-4 max-md:flex-col">
              <p className="flex flex-wrap items-center gap-4 max-md:flex-col">
                <span className="font-bold">Tag</span>
                <span className="flex items-center gap-3 max-md:flex-col">
                  {book.tags.map((tag, index) => (
                    <span
                      key={index}
                      className=" badge badge-success badge-soft"
                    >
                      #{tag}
                    </span>
                  ))}
                </span>
              </p>
              <p className="flex items-center justify-center gap-1 max-md:flex-col">
                <CalendarDays size={16} />
                Year of Publishing: {book.yearOfPublishing}
              </p>
            </div>

            <div className="flex items-start gap-4 md:items-center max-md:flex-col">
              <p className="flex items-center gap-2">
                <BookBookmark size={16} />
                <span>Publisher: {book.publisher}</span>
              </p>
              <p className="flex items-center gap-2">
                <SquareText size={16} />
                <span>Page {book.totalPages}</span>
              </p>
            </div>
          </div>
          <div className="w-full divider"></div>
          <div className="justify-center gap-3 max-md:flex max-md:flex-wrap">
            <p className="badge badge-info badge-soft badge-lg">
              Category:{book.category}
            </p>
            <p className="badge badge-accent badge-soft badge-lg">
              Rating:{book.rating}
            </p>
            <Link
              to={`/book-details/${book.bookId}`}
              className="btn btn-success btn-md"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookComponent;
