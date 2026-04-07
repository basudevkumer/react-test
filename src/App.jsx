import React, { useState } from "react";

const App = () => {
  const [user, setUser] = useState("User 1");

  return (
    <div className="p-10">
      <h1 className="text-2xl fomt-medium">{user}</h1>
      <button
        className="bg-pink-500 px-3 py-2 rounded-lg"
        onClick={(e) => setUser("User 1")}
      >
        User 1
      </button>
      <button
        className="bg-pink-500 px-3 py-2 rounded-lg"
        onClick={(e) => setUser("User 2")}
      >
        User 2
      </button>

      <input type="text" key={user} className="border" />
    </div>
  );
};

export default App;
