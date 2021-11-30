import "./assets/scss/app.scss";
import { useSelector } from "react-redux";
import { getCart } from "./redux/cartSlice";
import Header from "./components/pages/home/header/Header";
import { Route, Routes } from "react-router-dom";
import CartEmpty from "./components/pages/cart/CartEmpty";
import HomePage from "./components/pages/home/HomePage";
import Cart from "./components/pages/cart/Cart";

function App() {
  const cart = useSelector(getCart);

  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route
          path={"/cart"}
          element={cart.length === 0 ? <CartEmpty /> : <Cart />}
        />
      </Routes>
    </div>
  );
}

export default App;
