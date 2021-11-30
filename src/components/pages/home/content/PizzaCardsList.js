import React, { useEffect, useState } from "react";
import PizzaCardItem from "./PizzaCardItem";
import axios from "axios";
import { useSelector } from "react-redux";
import { getActiveIndex } from "../../../../redux/sortSlice";

const PizzaCardsList = () => {
  const [list, setList] = useState([]);

  const activeIndexSort = useSelector(getActiveIndex);

  const sortingList = (array, index) => {
    switch (index) {
      case 0: {
        return array.sort((a, b) => b.rating - a.rating);
      }
      case 1: {
        return array.sort((a, b) => a.price - b.price);
      }
      case 2: {
        return array.sort((a, b) => (a.name > b.name ? 1 : -1));
      }
      default: {
        return;
      }
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/db.json")
      .then((res) => setList(sortingList(res.data.pizzas, activeIndexSort)));
  }, [list, activeIndexSort]);

  return (
    <div className={"content__items"}>
      {list.map((item) => (
        <PizzaCardItem
          name={item.name}
          price={item.price}
          sizes={item.sizes}
          types={item.types}
          imgUrl={item.imageUrl}
        />
      ))}
    </div>
  );
};

export default PizzaCardsList;
