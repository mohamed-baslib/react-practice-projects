import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  let colorClass = "gray";
  if (count > 0) colorClass = "green";
  else if (count < 0) colorClass = "red";

  return (
      <div className="counter-box">
      <h1 className={colorClass}>Counter</h1>
        <p className="text">({count})</p>
        <button onClick={() => setCount(count + 1)}>Plus</button>
        <button onClick={() => setCount(count - 1)}>Min</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
  );
}

export default App;
