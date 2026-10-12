import { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import { bookContext } from "../../../../Context/Context";

const BookDetail = () => {
  const { handleWishlist, handleReadList } = useContext(bookContext);
  //

  const params = useParams();
  //

  const { id } = params;
  //

  const booksData = useLoaderData();
  //

  const expectedBook = booksData.find((book) => book.bookId === Number(id));
  //

  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = expectedBook;
  //

  return (
    <div className="flex items-center justify-between mx-auto mb-12 max-lg:flex-col max-w-11/12 gap-12">
      {/* Book Image */}

      <div className="max-h-177.75 md:p-18.5 md:bg-base-200 rounded-2xl">
        <img
          className="shadow-xl max-h-141 rounded-2xl"
          src={image}
          alt={bookName}
        />
      </div>

      {/* Book Information */}

      <div>
        {/* Book details */}

        <div>
          <h2 className="fpd text-[40px] font-bold mb-4">{bookName}</h2>
          <p className="text-xl font-medium">By : {author}</p>
          <div className="divider"></div>
          <p className="text-xl font-medium bort">{category}</p>
          <div className="divider"></div>
          <p className="max-w-137.25">
            <strong>Review : </strong>
            <span className="text-[#131313]/70">{review}</span>
          </p>
          <p className="flex items-center gap-4 mt-6">
            <strong>Tag</strong>
            <span className="flex items-center gap-3">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-green-500 bg-green-100 badge badge-soft badge-success"
                >
                  #{tag}
                </span>
              ))}
            </span>
          </p>
        </div>

        <div className="divider"></div>

        {/* Book Information Section */}

        <div className="flex gap-15">
          {/* Information Names */}

          <div className="space-y-3 text-[#131313]/70">
            <p>Number of Pages:</p>
            <p>Publisher:</p>
            <p>Year Of Publishing:</p>
            <p>Rating:</p>
          </div>

          {/* Information */}

          <div className="space-y-3">
            <p>
              <strong>{totalPages}</strong>
            </p>
            <p>
              <strong>{publisher}</strong>
            </p>
            <p>
              <strong>{yearOfPublishing}</strong>
            </p>
            <p>
              <strong>{rating}</strong>
            </p>
          </div>
        </div>

        {/* Buttons */}

        <div className="flex gap-4 mt-8 max-md:flex-col">
          <button
            onClick={() => handleReadList(expectedBook)}
            className="text-lg rounded-lg btn btn-outline h-13"
          >
            Mark as Read
          </button>
          <button
            onClick={() => handleWishlist(expectedBook)}
            className="text-lg rounded-lg btn btn-primary h-13"
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );

  //
};

export default BookDetail;
