import React, { Component } from "react";
import "./todolist.css";

class TodoList extends Component {
  state = {
    todoList: [
      { id: "1", todo: "Item 1", completed: false },
      { id: "2", todo: "Item 2", completed: true },
      { id: "3", todo: "Item 3", completed: false },
    ],
    inputValue: "",
  };

  handleItemClick = (item) => {
    const { id, completed } = item;
    const { todoList } = this.state;
    const index = todoList.indexOf(item);
    if (completed) {
      // remove
      const newtodoList = todoList.filter((m) => id !== m.id);
      this.setState({ todoList: newtodoList });
    } else {
      // finished
      const newTodoLists = [...todoList];
      newTodoLists[index].completed = true;
      this.setState({ todoList: newTodoLists });
    }
  };
  typingInput = (e) => {
    const inputValue = e.target.value;
    this.setState({ inputValue });
  };
  addTodoItem = () => {
    const { todoList, inputValue } = this.state;
    const nextIndex = (todoList.length + 1).toString();
    const todoItem = { id: nextIndex, todo: inputValue, completed: false };

    const list = [...todoList];
    list.push(todoItem);
    console.log(todoItem);

    this.setState({ inputValue: "", todoList: list });
  };

  render() {
    const { todoList } = this.state;
    return (
      <div className="todo-main-container">
        <div id="todo-container">
          <div id="todo-title">Add To-do Item</div>
          <div className="input-item">
            <input
              id="todo-input"
              value={this.state.inputValue}
              onChange={this.typingInput}
              placeholder="Enter Todo Item"
            />
            <button id="add-button" onClick={this.addTodoItem}>
              Add
            </button>
          </div>
        </div>

        <div id="todo-items">
          {todoList.length === 0 ? (
            <span>No pending task!</span>
          ) : (
            <span>
              Finished {todoList.filter((m) => m.completed).length} of{" "}
              {todoList.length}
            </span>
          )}
          <ul>
            {this.state.todoList.map((item) => (
              <li
                className={`todo-item ${item.completed ? "todo-complete" : ""}`}
                key={item.id}
                onClick={() => this.handleItemClick(item)}
              >
                {item.todo}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
export default TodoList;
