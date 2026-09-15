import { createBrowserRouter } from "react-router";
import App from "../App/App";
import HomePage from "../Pages/HomePage";
import ListedBookPage from "../Pages/ListedBookPage";
import ReadingListPage from "../Pages/ReadingListPage";
import Error from "../ErrorPage/Error";

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
    ],
    errorElement: <Error />,
  },
]);
