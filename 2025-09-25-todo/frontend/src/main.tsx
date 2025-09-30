import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import App from "./components/App";
import TodosPage from "./components/TodosPage";

const theme = createTheme({
  palette: { primary: { main: "#1976d2" } },
});

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <TodosPage /> },  // TODO leht otse /
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
