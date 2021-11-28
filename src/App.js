import "./assets/scss/app.scss";
import Header from "./components/pages/home/header/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import HomePage from "./components/HomePage";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCart } from "./redux/cartSlice";
import CartEmpty from "./components/pages/cart/CartEmpty";
import Cart from "./components/pages/cart/Cart";

function App() {
  const [list, setList] = useState([]);

  const cart = useSelector(getCart);

  useEffect(() => {
    axios
      .get("http://localhost:3000/db.json")
      .then((res) => setList(res.data.pizzas));
  }, [list]);

  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path={"/"} element={<HomePage list={list} />} />
        <Route
          path={"/cart"}
          element={cart.length === 0 ? <CartEmpty /> : <Cart />}
        />
      </Routes>
    </div>
  );
}

export default App;
