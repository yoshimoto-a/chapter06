/*言語のカテゴリー*/
import "./index.css";
import React from "react";

export const Categories = ({ categories }) => (
  <div className="flex flex-wrap">
    {categories.map((category, index) => (
      <div
        className="border border-solid border-blue-500 rounded text-blue-500 text-xs px-2 py-1 mr-2"
        key={index}
      >
        {category}
      </div>
    ))}
  </div>
);
