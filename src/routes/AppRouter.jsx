import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import BrowseBooks from "../pages/BrowseBooks";
import BookDetails from "../pages/BookDetails";
import AddBook from "../pages/AddBook";
import NotFound from "../pages/NotFound";
import Layout from "../components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "browse-books",
        element: <BrowseBooks />,
      },
      {
        path: "books/:category",
        element: <BrowseBooks />,
      },
      {
        path: "book/:id",
        element: <BookDetails />,
      },
      {
        path: "add-book",
        element: <AddBook />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
