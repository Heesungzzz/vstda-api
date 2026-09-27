const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan("dev"));
app.use(express.json());

let todoItems = [
  { todoItemId: 0, name: "an item", priority: 3, completed: false },
  { todoItemId: 1, name: "another item", priority: 2, completed: false },
  { todoItemId: 2, name: "a done item", priority: 1, completed: true }
];

app.get("/", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.get("/api/TodoItems", (req, res) => {
  res.status(200).json(todoItems);
});

app.get("/api/TodoItems/:id", (req, res) => {
  const item = todoItems.find(
    todo => todo.todoItemId === Number(req.params.id)
  );

  res.status(200).json(item);
});

app.post("/api/TodoItems", (req, res) => {
  todoItems.push(req.body);
  res.status(201).json(req.body);
});

app.delete("/api/TodoItems/:id", (req, res) => {
  const id = Number(req.params.id);
  const item = todoItems.find(todo => todo.todoItemId === id);

  todoItems = todoItems.filter(todo => todo.todoItemId !== id);

  res.status(200).json(item);
});

module.exports = app;
