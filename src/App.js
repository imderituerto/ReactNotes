
import './App.css';
import { useState } from 'react';

function App() {
  
  // javascript goes here
  let [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    counter += 1;
  }
  
  return (
    <div className="blue">
      <h1>Hello world!</h1>
      <p>Welcome to my React app.</p>
      <hr />
      <p>The current value of the counter is {counter}</p>
      <button onClick={incrementCounter}>Increment counter</button>
    </div>
  );
}

export default App;
