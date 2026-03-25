import React, { useMemo, useState } from "react";
import useAllProduct from "./useAllProduct";
import Cart from "./cart";

const LogicTest = () => {
  const [hasBrand, setHasBrand] = useState([]);

  const { data, isLoading, isError } = useAllProduct();

  const filterByBrand = useMemo(() => {
    if (!data) return [];

    if (hasBrand.length === 0) {
      return data;
    }

    const filteredData = data?.filter((items) => {
      return hasBrand.includes(items?.brand);
    });

    return filteredData;
  }, [hasBrand, data]);

  const brand = [
    ...new Set(data?.map((items) => items?.brand)?.filter(Boolean)),
  ];

  const handleChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setHasBrand((prev) => [...prev, value]);
    } else {
      setHasBrand((prev) => prev?.filter((items) => items !== value));
    }
  };

  return (
    <div className="max-w-[1320px] mx-auto my-15">
      <div className="grid grid-cols-4 gap-x-5">
        <div className="flex  items-start  flex-col gap-3">
          {brand?.map((items, index) => {
            return (
              <label key={index} className="flex gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  value={items}
                  onChange={handleChange}
                  checked={hasBrand.includes(items)}
                />
                {items}
              </label>
            );
          })}
        </div>
        <div className="grid grid-cols-3 gap-8 col-span-3">
          {filterByBrand?.map((items, index) => {
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
