import { useContext } from "react";
import { bookContext } from "../../../Context/Context";
import BookComponent from "../BookComponent";

const ReadingListPage = () => {
  const { readList } = useContext(bookContext);

  return (
    <div className="mt-8">
      {readList.map((book) => (
        <BookComponent key={book.bookId} book={book} />
      ))}
    </div>
  );
};

export default ReadingListPage;
