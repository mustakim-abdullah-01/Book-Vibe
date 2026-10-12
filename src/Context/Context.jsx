import { createContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

//
//

export const bookContext = createContext();

//
//

const ContextProvider = ({ children }) => {
  //

  const [wishlist, setWishlist] = useState([]);
  const [readList, setReadList] = useState([]);

  //

  const handleWishlist = (expectedBook) => {
    //

    const bookInWishlist = wishlist.find(
      (listedBook) => listedBook.bookId === expectedBook.bookId,
    );
    //

    const bookMarkedAsRead = readList.find(
      (book) => book.bookId === expectedBook.bookId,
    );
    //

    if (bookMarkedAsRead) {
      return toast(`${expectedBook.bookName} is already marked as read`);
    }
    //
    //
    else if (bookInWishlist) {
      return toast("This Book is already wishlisted");
    }
    //
    //
    else {
      toast(`${expectedBook.bookName} is added to the Wishlist`);
      setWishlist([...wishlist, expectedBook]);
    }

    //
  };

  //

  const handleReadList = (expectedBook) => {
    //

    const bookInReadlist = readList.find(
      (book) => book.bookId === expectedBook.bookId,
    );

    const bookInWishlist = wishlist.find(
      (book) => book.bookId === expectedBook.bookId,
    );

    if (bookInReadlist) {
      //
      return toast("This book is already marked as read ");
      //
    }

    //
    else if (bookInWishlist) {
      //
      const excludeFromWishlist = wishlist.filter(
        (book) => book.bookId !== expectedBook.bookId,
      );
      setWishlist(excludeFromWishlist);
      setReadList([...readList, expectedBook]);
      toast(`${expectedBook.bookName} is marked as read`);
      //
    }

    //
    else {
      //
      setReadList([...readList, expectedBook]);
      toast(`${expectedBook.bookName} is marked as read`);
      //
    }
  };

  //

  const value = {
    handleWishlist,
    wishlist,
    handleReadList,
    readList,
  };

  //

  return (
    <div>
      <bookContext.Provider value={value}>{children}</bookContext.Provider>
      <ToastContainer />
    </div>
  );

  //
};

export default ContextProvider;
