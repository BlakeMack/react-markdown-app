import React from "react";
import ReactDOM from "react-dom";
import App, {
  loader as AppLoader,
} from "./app";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ContextProvider } from './context';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "file/:contactId",
    element: <App />,
    loader: AppLoader,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ContextProvider>
);
