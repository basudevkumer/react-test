import React, { useState } from "react";

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // const [fullName, setFullName] = useState(""); its a wrong approach
  const fullName = firstName + " " + lastName; // good approach
  return (
    <div className="p-10">
      <input
        type="text"
        className="border"
        placeholder="first name"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        className="border"
        placeholder="Last name"
        onChange={(e) => setLastName(e.target.value)}
      />
      <p className="text-lg px-5">{fullName}</p>
    </div>
  );
};

export default App;
