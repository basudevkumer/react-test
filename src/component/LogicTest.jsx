import React, { useEffect, useMemo, useState } from "react";
import useAllProduct from "./useAllProduct";
import Cart from "./cart";

const LogicTest = () => {
  const { data, isLoading, isError } = useAllProduct();

  const [search, setSearch] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const [triger, setTrgier] = useState("");

  const handleClicked = () => {
    setTrgier(debouncedValue);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setTrgier(debouncedValue);
    }
  };

  const searchFilteredData = useMemo(() => {
    if (!triger.trim()) return null;

    const keyword = triger.split(" ").filter(Boolean);

    const f = data?.filter((items) => {
      const text = `
      ${items?.title}
      ${items?.description}
      ${items?.category}
      ${items?.brand}
      ${items?.tags?.join(" ")}
    `.toLowerCase();

      return keyword.every((k) => text.includes(k.toLocaleLowerCase()));
    });

    console.log(f);
  }, [triger, data]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(search);
    }, 1000);

    return () => clearTimeout(timeoutId); // cleanup previous timeout
  }, [search]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="max-w-[1320px] mx-auto my-15">
      <div className="grid grid-cols-4 gap-x-5">
        <div className="flex items-start flex-col gap-3">
          <div className="flex gap-x-2">
            <input
              type="text"
              className="p-2 border  rounded"
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
            <button
              className="px-4 py-2 bg-red-500 rounded text-white cursor-pointer "
              onClick={handleClicked}
            >
              Search
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8 col-span-3">
          {data?.map((items, index) => {
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
