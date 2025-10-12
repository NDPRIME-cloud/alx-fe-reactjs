import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";
import "@testing-library/jest-dom";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    const todos = screen.getAllByTestId("todo-item");
    expect(todos.length).toBe(2);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByTestId("input");
    const form = screen.getByTestId("form");

    fireEvent.change(input, { target: { value: "Write tests" } });
    fireEvent.submit(form);

    expect(screen.getByText("Write tests")).toBeInTheDocument();
  });

  test("toggles a todo completion", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");
    fireEvent.click(todo);
    expect(todo).toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const deleteBtn = screen.getAllByTestId("delete-btn")[0];
    fireEvent.click(deleteBtn);
    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});
