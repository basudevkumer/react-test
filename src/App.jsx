import React, { useState } from "react";
import { UserContext } from "./useContexts/useContext";
import Clind from "./component/Clind";

const App = () => {
  const [user, setUser] = useState("BK ROy");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Clind/>
    </UserContext.Provider>
  );
};

export default App;
