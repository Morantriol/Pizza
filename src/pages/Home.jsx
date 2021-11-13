import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Categories,
  SortPopup,
  PizzaBlock,
  PizzaLoadingBlock,
} from "../components";

import { setCategory, setSortBy } from "../redux/actions/filters";
import { fetchPizzas } from "../redux/actions/pizzas";
import { addPizzaToCart } from "../redux/actions/cart";

const categoryNames = [
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

const typeNames = [
  { name: "популярности", type: "rating", order: "desc" },
  { name: "цене", type: "price", order: "desc" },
  { name: "алфавиту", type: "name", order: "asc" },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [category, sortBy]);

  const handleOnClickCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const handleOnClickSortType = useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const handleAddPizzaToCart = (obj) => {
    dispatch(addPizzaToCart(obj));
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={handleOnClickCategory}
          categories={categoryNames}
        />
        <SortPopup
          activeSortType={sortBy.type}
          onClickSortType={handleOnClickSortType}
          popupCategories={typeNames}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          isLoaded
            ? items.map((item) => (
                <PizzaBlock
                  key={item.id}
                  id={item.id}
                  isLoading={true}
                  onClickAddPizza={handleAddPizzaToCart}
                  name={item.name}
                  imageUrl={item.imageUrl}
                  price={item.price}
                  types={item.types}
                  sizes={item.sizes}
                  addedCount={
                    cartItems[item.id] && cartItems[item.id].items.length
                  }
                />
              ))
            : Array(12)
                .fill(0)
                .map((_, index) => <PizzaLoadingBlock key={index} />)
          /* Переделать создание пустого масива как в сникерсах */
        }
      </div>
    </div>
  );
}

export default Home;
