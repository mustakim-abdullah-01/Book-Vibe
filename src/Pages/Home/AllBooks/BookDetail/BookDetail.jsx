import { useLoaderData, useParams } from "react-router";

const BookDetail = () => {
  const params = useParams();

  const { id } = params;

  const booksData = useLoaderData();

  const expectedBook = booksData.find((book) => book.bookId === Number(id));

  const {
    bookId,
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

  return (
    <div className="flex justify-center items-center">
      {/* <h1>BookDetail</h1> */}
      <div className="max-h-177.75 p-18.5  ">
        <img
          className="max-h-141 shadow-xl rounded-xl"
          src={image}
          alt={bookName}
        />
      </div>
      <div>
        <h2 className="fpd text-[40px] font-bold mb-4">{bookName}</h2>
        <p className="font-medium text-xl mb-10">By : {author}</p>
        <p className="font-medium text-xl mb-10">{category}</p>
        <p className="maw-[549px]">{review}</p>
      </div>
    </div>
  );
};

export default BookDetail;

// {
//   "bookId": 1,
//   "bookName": "The Great Gatsby",
//   "author": "F. Scott Fitzgerald",
//   "image": "https://i.ibb.co.com/khHN7Pk/9780143454212.jpg",
//   "review": "The Great Gatsby by F. Scott Fitzgerald is a beautifully written classic that explores wealth, love, ambition, and the American Dream. The story follows Nick Carraway as he becomes involved in the glamorous but complicated world of Jay Gatsby, a mysterious millionaire who spends his fortune throwing extravagant parties in the hope of attracting Daisy Buchanan. What I found most interesting about the novel is the contrast between the characters' luxurious lifestyles and the loneliness and disappointment hidden beneath them. Gatsby's determination to recreate his past with Daisy is both romantic and tragic, showing how dangerous it can be to become obsessed with an idealized version of the past. Fitzgerald's prose is elegant and full of symbolism, and the atmosphere of the 1920s is vividly presented. The story is fairly short, but it deals with surprisingly complex themes such as social class, materialism, obsession, and the limits of ambition. Some readers may find the pacing slow, especially in certain descriptive sections, but the emotional impact becomes stronger as the story progresses. Overall, The Great Gatsby is a memorable and bittersweet novel that offers much more than its simple love story suggests.",
//   "totalPages": 192,
//   "rating": 4.5,
//   "category": "Classic",
//   "tags": ["Fiction", "Romance"],
//   "publisher": "Scribner",
//   "yearOfPublishing": 1925
// }
