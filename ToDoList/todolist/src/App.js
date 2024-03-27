import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todos from "./ToDos";
import Todo from "./ToDo";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Todos />} />
          <Route path="/todo/:id" element={<Todo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
