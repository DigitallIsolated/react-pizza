import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getList } from "../../../../redux/categoriesSlice";

const Categories = () => {
  const list = useSelector(getList);

  const [activeIndex, setActiveIndex] = useState(0);


  return (
    <div className="categories">
      <ul>
        {list.map((category, index) => (
          <li
            className={index === activeIndex ? "active" : null}
            onClick={() => setActiveIndex(index)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
