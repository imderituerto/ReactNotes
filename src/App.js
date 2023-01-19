
import './App.css';

function App() {
  
  // javascript goes here
  let counter = 0;

  const incrementCounter = () => {
    counter += 1;
  }
  
  return (
    <div className="blue">
    <h1>Hello world!</h1>
    <p>Welcome to my React app.</p>
    </div>
  );
}

export default App;
