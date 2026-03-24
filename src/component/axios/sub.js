import instance from "./base";

const allProcuct = async () => {
  try {
    const respons = await instance.get("/products");
    return respons.data.products;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default allProcuct;
