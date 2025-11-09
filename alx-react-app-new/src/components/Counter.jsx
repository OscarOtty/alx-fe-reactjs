import React, { useState } from 'react';

/**
 * A functional component that implements a simple counter.
 * It uses the useState hook to manage the count state
 * and provides buttons to increment, decrement, and reset the count.
 */
function Counter() {
  // 1. Initialize state using useState.
  // 'count' is the current state value, and 'setCount' is the function to update it.
  const [count, setCount] = useState(0);

  // Helper functions for clarity (optional, but good practice)
  const increment = () => {
    // 2. Increment the count by 1
    setCount(count + 1);
  };

  const decrement = () => {
    // 3. Decrement the count by 1
    // You might want to add a check here, e.g., to prevent going below zero.
    setCount(count - 1);
  };

  const reset = () => {
    // 4. Reset the count to its initial value (0)
    setCount(0);
  };

  return (
    <div>
      {/* Display the current count */}
      <h2>Counter Application</h2>
      <p>
        **Current Count:** **{count}**
      </p>

      {/* Buttons with onClick handlers calling the state update functions */}
      <button onClick={increment} style={{ marginRight: '10px' }}>
        Increment
      </button>
      <button onClick={decrement} style={{ marginRight: '10px' }}>
        Decrement
      </button>
      <button onClick={reset}>
        Reset
      </button>

      {/* Alternative concise implementation for onClick handlers: */}
      {/* <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button> 
      */}
    </div>
  );
}

export default Counter;
