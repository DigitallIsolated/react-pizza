import React from "react";
import Categories from "./content/Categories";
import Sort from "./content/Sort";
import ContentTitle from "./content/ContentTitle";
import PizzaCardsList from "./content/PizzaCardsList";

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