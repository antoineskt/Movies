import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Vite + React</h1>
      <div className="bg-red-700">
        <button bg-red-700 onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p>WESH</p>
      <p>Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
