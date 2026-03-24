import { useQuery } from "@tanstack/react-query";
import allProcuct from "./axios/sub";

const useAllProduct = () => {
  return useQuery({ queryKey: ["products"], queryFn: allProcuct });
};

export default useAllProduct;
