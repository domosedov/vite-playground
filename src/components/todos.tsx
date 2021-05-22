import React, { FC } from "react";
import { createEffect, createEvent, createStore, split } from "effector";
import { useStore } from "effector-react";
import isEqual from "react-fast-compare";

import { HttpError, httpClient, isHttpError } from "../lib/http-client";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const errTodo: Todo[] = [
  { id: 666, userId: 1, completed: true, title: "Sasai" },
];

const fetch5TodosFx = createEffect<void, Array<Todo>, HttpError>(async () => {
  throw new Error("Bomb!💣");
  const { data } = await httpClient.get<Array<Todo>>(
    "https://jsonplaceholder.typicode.com/todos?_limit=5"
  );
  return data;
});

const fetch10TodosFx = createEffect<void, Array<Todo>, HttpError>(async () => {
  const { data } = await httpClient.get<Array<Todo>>(
    "https://jsonplaceholder.typicode.com/todos?_limit=10"
  );
  return data;
});

const fetchTodosErr = createEvent<HttpError>();
const unknownError = createEvent<Error>();

split({
  source: fetch5TodosFx.failData,
  match: {
    httpErr: (err) => isHttpError(err),
  },
  cases: {
    httpErr: fetchTodosErr,
    __: unknownError,
  },
});

const todos$ = createStore<Array<Todo>>([], {
  updateFilter: (next, prev) => !isEqual(next, prev),
})
  .on(fetch5TodosFx.doneData, (_, todos) => todos)
  .on(fetch10TodosFx.doneData, (_, todos) => todos)
  .on(fetchTodosErr, () => errTodo);

fetchTodosErr.watch((p) => console.log("http", p));
unknownError.watch((p) => console.log("unknown", p));

export const Todos: FC = () => {
  const todos = useStore(todos$);
  return (
    <div className="bg-indigo-300">
      <h1>Todos</h1>
      <div className="flex space-x-4">
        <button
          className="px-8 py-4 bg-indigo-700 text-white"
          onClick={async () => await fetch5TodosFx()}
        >
          Fetch 1
        </button>
        <button
          className="px-8 py-4 bg-indigo-700 text-white"
          onClick={async () => await fetch5TodosFx()}
        >
          Fetch 2
        </button>
        <button
          className="px-8 py-4 bg-indigo-700 text-white"
          onClick={async () => await fetch10TodosFx()}
        >
          Fetch 3
        </button>
      </div>
      <div>{Math.random()}</div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};
