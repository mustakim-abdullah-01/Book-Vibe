import { createBrowserRouter } from "react-router";
import App from "../App/App";
import HomePage from "../Pages/Home/HomePage";
import ListedBookPage from "../Pages/BookList/ListedBookPage";
import ReadingListPage from "../Pages/ReadingList/ReadingListPage";
import Error from "../Pages/Error/Error";
import BookDetail from "../Pages/Home/AllBooks/BookDetail/BookDetail";

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
        path: "/books",
        Component: ListedBookPage,
      },
      {
        path: "/read",
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
