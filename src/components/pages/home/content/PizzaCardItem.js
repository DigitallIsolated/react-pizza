import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { addCount, addToCart, setTotalPrice } from "../../../../redux/cartSlice";

const PizzaCardItem = ({ name, types, imgUrl, sizes, price }) => {

  const [activeIndexSize, setActiveIndexSize] = useState(0);
  const [activeIndexType, setActiveIndexType] = useState(0);

  const dispatch = useDispatch();

  const add = () => {
    dispatch(addCount());
    dispatch(setTotalPrice(price));
    dispatch(
      addToCart({
        name: name,
        type: types[activeIndexType],
        size: sizes[activeIndexSize],
        imgUrl: imgUrl,
        price: price,
        count: 1
      })
    );
  };

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imgUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {types.map((type, index) => (
            <li
              className={index === activeIndexType ? "active" : null}
              onClick={() => setActiveIndexType(index)}
            >
              {type === 0 ? "тонкое" : "традиционное"}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((size, index) => (
            <li
              className={index === activeIndexSize ? "active" : null}
              onClick={() => setActiveIndexSize(index)}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <Button
          size={"large"}
          onClick={add}
          variant={"outlined"}
          style={{
            borderColor: "#F24701",
            color: "#F24701",
            width: "90px",
            textTransform: "none",
          }}
        >
          Добавить
        </Button>
      </div>
    </div>
  );
};

export default PizzaCardItem;
