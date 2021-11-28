import React from "react";
import PizzaCardItem from "./PizzaCardItem";

const PizzaCardsList = ({ list }) => {
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