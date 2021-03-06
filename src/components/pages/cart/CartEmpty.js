import React from "react";

import emptyCart from "../../../assets/img/empty-cart.png";
import {Link} from "react-router-dom";

const CartEmpty = () => {
  return (
    <div className={"wrapper"}>
      <div className="container container--cart">
        <div className="cart cart--empty">
          <h2>
            Корзина пустая <icon>😕</icon>
          </h2>
          <p>
            Вероятней всего, вы еще не заказали пиццу.
            <br />
            Для того, чтобы заказать пиццу, перейди на главную страницу.
          </p>
          <img src={emptyCart} alt="Empty cart" />
          <div className="button button--black">
            <Link to={'/'}>
              <span>Вернуться назад</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartEmpty;
