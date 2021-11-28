import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getActive,
  getList,
  setActiveIndex,
} from "../../../../redux/categoriesSlice";

const Categories = () => {
  const list = useSelector(getList);
  const activeIndex = useSelector(getActive);

  const dispatch = useDispatch();

  return (
    <div className="categories">
      <ul>
        {list.map((category, index) => (
          <li
            className={index === activeIndex ? "active" : null}
            onClick={() => dispatch(setActiveIndex(index))}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
