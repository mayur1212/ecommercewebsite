import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setPriceRange } from "../features/productSlice"; // ✅ create this in productSlice

const Filter = () => {
  const [priceRange, setPriceRangeState] = useState("");
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setPriceRangeState(value);
    dispatch(setPriceRange(value)); // ✅ dispatch correct action
  };

  return (
    <div className="p-6 bg-red-100 flex justify-between items-center rounded shadow">
      <h2 className="text-lg font-semibold text-red-700">Filters</h2>
      <select
        value={priceRange}
        onChange={handleFilterChange}
        className="p-2 border border-red-400 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        <option value="">All Prices</option>
        <option value="low">Below $50</option>
        <option value="mid">$50 - $150</option>
        <option value="high">Above $150</option>
      </select>
    </div>
  );
};

export default Filter;
