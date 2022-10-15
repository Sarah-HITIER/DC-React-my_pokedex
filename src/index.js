import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { MainList, TypesList, Favoris, Item } from "containers";

import "./index.css";

import { ThemeProvider } from "@mui/material";
import { theme } from "./themes/theme.js";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import reportWebVitals from "./reportWebVitals";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <MainList /> },
            { path: "/types-list", element: <TypesList /> },
            { path: "/favorites", element: <Favoris /> },
            { path: "/:name", element: <Item /> }
        ]
    }
]);

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
