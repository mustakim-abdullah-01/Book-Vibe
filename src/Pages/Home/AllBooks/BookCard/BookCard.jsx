import { Star } from "lucide-react";
import { Link } from "react-router";

const BookCard = ({ book }) => {
  const { bookId, bookName, author, image, rating, category, tags } = book;

  return (
    <>
      <Link
        to={`/book-details/${bookId}`}
        className="pt-5 shadow-md card bg-base-100"
      >
        <figure className="p-3">
          <img className="rounded-lg h-80" src={image} />
        </figure>
        <div className="card-body">
          <div className="flex gap-3">
            {tags.map((tag, index) => (
              <div key={index} className="text-green-600 bg-green-200 badge">
                {tag}
              </div>
            ))}
          </div>
          <div className="divider"></div>
          <h2 className="text-2xl card-title fpd">{bookName}</h2>
          <p className="mb-0.5 text-lg ">{author}</p>
          <div className="justify-between card-actions">
            <div className="">{category}</div>
            <div className="flex items-center justify-center gap-1">
              <div>{rating}</div>
              <Star size={14} />
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BookCard;

// {
//   "bookId": 9,
//   "bookName": "The Girl on the Train",
//   "author": "Paula Hawkins",
//   "image": "https://i.ibb.co.com/P6hfCmJ/Whats-App-Image-2024-05-22-at-11-21-25-2e21ae46.jpg",
//   "review": "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.",
//   "totalPages": 316,
//   "rating": 4.2,
//   "category": "Mystery",
//   "tags": [
//       "Suspense",
//       "Psychological"
//   ],
//   "publisher": "Riverhead Books",
//   "yearOfPublishing": 2015
// }
