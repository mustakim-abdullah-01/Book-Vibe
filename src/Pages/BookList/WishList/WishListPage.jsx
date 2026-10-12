import { useContext } from "react";
import { bookContext } from "../../../Context/Context";
import BookComponent from "../BookComponent";

const WishListPage = () => {
  const { wishlist } = useContext(bookContext);

  return (
    <div className="mt-8">
      {wishlist.map((book) => (
        <BookComponent key={book.bookId} book={book} />
      ))}
    </div>
  );
};

export default WishListPage;
