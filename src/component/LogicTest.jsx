import React, { useMemo, useState } from "react";
import useAllProduct from "./useAllProduct";
import Cart from "./cart";

const LogicTest = () => {
  const [categoryItems, setCategoryItems] = useState("");
  const { data, isLoading, isError } = useAllProduct();

  const categoryFilter = useMemo(() => {
    if (!data) {
      return [];
    }

    if (categoryItems === "all" || categoryItems === "") {
      return data;
    }
    const filteredProduct = data?.filter(
      (items) => items.category === categoryItems,
    );

    return filteredProduct;
  }, [categoryItems, data]);

  console.log(categoryFilter);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleClicked = (value) => {
    setCategoryItems(value);
  };

  return (
    <div className="max-w-[1320px] mx-auto my-15">
      <div className="grid grid-cols-4 gap-x-5">
        <div className="flex  items-start  flex-col gap-5">
          <button onClick={() => handleClicked("all")}>All</button>
          {[...new Set(data?.map((items) => items?.category))]?.map(
            (items, index) => {
              return (
                <button
                  key={index}
                  onClick={() => handleClicked(items)}
                  className="cursor-pointer"
                >
                  {items}
                </button>
              );
            },
          )}
        </div>
        <div className="grid grid-cols-3 gap-8 col-span-3">
          {categoryFilter?.map((items, index) => {
            return (
              <Cart key={index} img={items?.thumbnail} title={items?.title} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LogicTest;
