import { useState } from 'react';

function App() {

  //Hello this is a test comment.
  const [count, setCount] = useState(5);

  function incrementUnsafely() {
    setCount(count + 1) // 5 + 1
    setCount(count + 1) // 5 + 1
    setCount(count + 1) // 5 + 1
    setCount(count + 1) // 5 + 1
    setCount(count + 1) // 5 + 1
    setCount(count + 1) // 5 + 1
  }

  function incrementSafely() {
    setCount(prev => prev + 1); // 5 + 1
    setCount(prev => prev + 1); // (6) + 1
    setCount(prev => prev + 1);// (7) + 1
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
  }

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={incrementSafely}>Increment (safe)</button>
      <button onClick={incrementUnsafely}>Increment (risky)</button>
    </div>
  );

}

export default App;