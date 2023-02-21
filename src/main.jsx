import React from "react";
import ReactDOM from "react-dom";
import App, {
  loader as AppLoader,
} from "./app";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "file/:fileId",
    element: <App />,
    loader: AppLoader,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
);
