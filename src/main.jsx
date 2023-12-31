import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import AllBooks from "./Components/AllBooks/AllBooks";
import BorrowedBooks from "./Components/BorrowedBooks/BorrowedBooks";
import AddBook from "./Components/Addbooks/AddBook";
import SignIn from "./Components/SignIn/SignIn";
import Root from "./Components/Root/Root";
import Category from "./Components/Category/Category";
import BookKids from "./Components/BookKids/BookKids";
import Signup from "./Components/Singup/Signup";
import AuthProvider from "./Components/AuthProvider/AuthProvider";
import KidDetails from "./Components/KidDetails/KidDetails";
import PrivateRouter from "./Components/PrivateRouter/PrivateRouter";
import Read from "./Components/Read/Read";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Update from "./Components/Update/Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/allbooks",
        element: (
          <PrivateRouter>
            <AllBooks />
          </PrivateRouter>
        ),
        loader: () =>
          fetch("https://eleveen-server-assignment.vercel.app/allbooks"),
      },
      {
        path: "/borrowedbooks",
        element: (
          <PrivateRouter>
            <BorrowedBooks />
          </PrivateRouter>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRouter>
            <Update />
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(
            `https://eleveen-server-assignment.vercel.app/bookupdate/${params.id}`
          ),
      },
      {
        path: "/addbooks",
        element: (
          <PrivateRouter>
            <AddBook />{" "}
          </PrivateRouter>
        ),
      },
      {
        path: "/read/:id",
        element: <Read />,
        loader: ({ params }) =>
          fetch(
            `https://eleveen-server-assignment.vercel.app/details/${params.id}`
          ),
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/bookKids/:category",
        element: <BookKids />,
        loader: ({ params }) =>
          fetch(
            `https://eleveen-server-assignment.vercel.app/kids/${params.category}`
          ),
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRouter>
            <KidDetails />{" "}
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(
            `https://eleveen-server-assignment.vercel.app/details/${params.id}`
          ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />{" "}
    </AuthProvider>
  </React.StrictMode>
);
