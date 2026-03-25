import React, { useMemo, useState } from "react";
import useAllProduct from "./useAllProduct";
import Cart from "./cart";
import { number } from "zod";

const LogicTest = () => {
  const [discount, setDiscount] = useState([]);

  const discountRanges = [
    { label: "0%-10%", value: "0-10" },
    { label: "11%-20%", value: "11-20" },
    { label: "21%-30%", value: "21-30" },
    { label: "31%-40%", value: "31-40" },
    { label: "41%-50%", value: "41-50" },
    { label: "51% or more", value: "51-100" },
  ];

  const { data, isLoading, isError } = useAllProduct();

  const handleChages = (e) => {
    let { checked, value } = e.target;

    if (checked) {
      setDiscount((prev) => [...prev, value]);
    } else {
      setDiscount((prev) => prev.filter((items) => value !== items));
    }
  };

  const filterRange = useMemo(() => {
    if (!data) return [];
    if (discount.length === 0) return data;

    // const [min, max] = discount.split("-").map((items) => items);
    const ranger = discount.map((items) => {
      const [min, max] = items.split("-").map(Number);
      return { min, max };
    });

    const discountFilter = data?.filter((items) => {
      return ranger.some((r) => {
        return (
          items.discountPercentage > r.min && items.discountPercentage < r.max
        );
      });
    });

    return discountFilter;
    
  }, [discount, data]);

  return (
    <div className="max-w-[1320px] mx-auto my-15">
      <div className="grid grid-cols-4 gap-x-5">
        <div className="flex items-start flex-col gap-3">
          {discountRanges.map((range) => (
            <label key={range.value} className="flex gap-x-3 cursor-pointer">
              <input
                type="checkbox"
                value={range.value}
                onChange={handleChages}
                checked={discount.includes(range.value)}
              />
              {range.label}
            </label>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-8 col-span-3">
          {filterRange?.map((items, index) => {
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
