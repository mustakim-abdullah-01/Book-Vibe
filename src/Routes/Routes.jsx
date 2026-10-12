import { createBrowserRouter } from "react-router";
import App from "../App/App";
import HomePage from "../Pages/Home/HomePage";
import ListedBookPage from "../Pages/BookList/ListedBookPage";

import Error from "../Pages/Error/Error";
import BookDetail from "../Pages/Home/AllBooks/BookDetail/BookDetail";
import ReadingListPage from "../Pages/BookList/ReadingList/ReadingListPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "/listed-books",
        Component: ListedBookPage,
      },
      {
        path: "/read-list",
        Component: ReadingListPage,
      },
      {
        path: "/book-details/:id",
        Component: BookDetail,
        loader: () => fetch("/booksData.json"),
      },
    ],
    errorElement: <Error />,
  },
]);
