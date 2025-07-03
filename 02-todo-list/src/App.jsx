import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import App from "../../01-light-switch/src/App";

export default function App() {
  const [todo, setTodos] = useState([
    {
      "id": 1,
      "title": "Wash the car",
      "dateDue": new Date("2025-07-20"),
      "urgency": 3,
      "done": false
    },
    {
      "id": 2,
      "title": "Wash the restroom",
      "dateDue": new Date("2025-07-21"),
      "urgency": 2,
      "done": false
    },
    {
      "id": 3,
      "title": "Clean the room",
      "dateDue": new Date("2025-07-19"),
      "urgency": 5,
      "done": false
    }
  ]);

  const toDisplay = [<p> Red </p>, <p> Blue </p>, <p> Green </p>];
  const renderToDos = () => {
    let jsx = [];
    for(let t of todo) {
      jsx.push(<li key={t.id}></li>);
    }
};

  return (<>
    <div className="container">
      <h2> To Do List</h2>
      {toDisplay}
    </div>
  </>);

}