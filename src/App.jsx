import React from "react";
import allProcuct from "./component/axios/sub";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Logic from "../src/component/LogicTest";
const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Logic />
    </QueryClientProvider>
  );
};

export default App;
