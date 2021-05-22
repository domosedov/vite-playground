import React, { FC } from "react";
import { useRoutes } from "react-router-dom";

import { Dashboard } from "./dashboard";
import { Form } from "./form";
import { Todos } from "./todos";

export const Routes: FC = () => {
  return useRoutes([
    {
      path: "/",
      element: (
        <div>
          <h1>Home</h1>
        </div>
      ),
    },
    { path: "todos", element: <Todos /> },
    { path: "form", element: <Form /> },
    {
      path: "dashboard",
      element: <Dashboard />,
      children: [
        { path: "/", element: <div>Dashboard home</div> },
        { path: "me", element: <div>Dashboard me</div> },
      ],
    },
    { path: "*", element: <div>Not found</div> },
  ]);
};
