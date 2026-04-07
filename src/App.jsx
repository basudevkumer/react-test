import React, { useState } from "react";

const App = () => {
  function Child({ count, setCount }) {
    return (
      <div>
        <h3 className="text-xl font-bold ml-5 mb-3">{count}</h3>
        <button onClick={() => setCount(count + 1)} className="py-2 px-3 bg-rose-500 text-white rounded-lg">Increment</button>
      </div>
    );
  }

  const [count, setCount] = useState(0);
  return <div className="p-10">
    <Child count={count} setCount={setCount}/>
    <Child count={count} setCount={setCount}/>
    <Child count={count} setCount={setCount}/>
    <Child count={count} setCount={setCount}/>
    <Child count={count} setCount={setCount}/>
    <Child count={count} setCount={setCount}/>
  </div>;
};

export default App;
