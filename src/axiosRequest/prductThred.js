import { instance } from "./axios";

const allProduct = async () => {
  try {
    const all = await instance.get("/products");
    return all.data.products;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export {allProduct}