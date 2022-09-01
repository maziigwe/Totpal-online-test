import logo from "./logo.svg";
import "./App.css";

import Home from "./components/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoList from './components/todoList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/todo" element={<TodoList />} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <header className="App-header">
    //     <Home/>
    //   </header>
    // </div>
  );
}

export default App;
