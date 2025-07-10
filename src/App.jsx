import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setflag] = useState(0);
  function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i < n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  return (
    <div>
      <div className="container">
        <button
          disabled={counter == 0}
          onClick={() => setflag(counter - 1)}
          data-testid="minusonebtn"
        >
          -
        </button>
        <button onClick={() => setflag(counter + 1)} data-testid="plusonebtn">
          +
        </button>
        <div>
          <button onClick={() => setflag(0)} data-testid="resetbtn">
            reset
          </button>
        </div>

        <span data-testid="counter">{counter}</span>
        <div>
          <span data-testid="odd-or-even">
            {counter % 2 == 0 ? <p>Even</p> : <p>Odd</p>}
          </span>
          <span data-testid="is-prime">
            {isPrime(counter) ? <p>True</p> : <p>False</p>}
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
