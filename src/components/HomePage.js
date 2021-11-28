import React from "react";
import Categories from "./pages/home/content/Categories";
import Sort from "./pages/home/content/Sort";
import ContentTitle from "./pages/home/content/ContentTitle";
import PizzaCardsList from "./pages/home/content/PizzaCardsList";

const HomePage = ({ list }) => {
  return (
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
  );
};

export default HomePage;