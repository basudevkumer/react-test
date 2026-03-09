import { useQuery } from "@tanstack/react-query";
import { allProduct } from "../axiosRequest/prductThred";

const useAllProduct = () => {
    return useQuery({
   queryKey: ["alldata"],
   queryFn: allProduct
    })
};

export {useAllProduct}