import React, { useState } from "react";

const App = () => {
  const [status, setStatus] = useState("idle");
  return (
    <div>
      <p className="text-lg px-5">{status}</p>
      <button onClick={() => setStatus("Success")} className="px-3 py-1.5 border ">success</button>
      <button onClick={() => setStatus("Start")} className="px-3 py-1.5 border ml-3">Start</button>
    </div>
  );
};

export default App;
