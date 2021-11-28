import "./assets/scss/app.scss";
import Header from "./components/pages/home/header/Header";
import Categories from "./components/pages/home/content/Categories";
import Sort from "./components/pages/home/content/Sort";
import ContentTitle from "./components/pages/home/content/ContentTitle";
import PizzaCardsList from "./components/pages/home/content/PizzaCardsList";
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/db.json")
      .then((res) => setList(res.data.pizzas));
  }, [list]);

  return (
    <Router>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <ContentTitle />
            <PizzaCardsList list={list} />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
