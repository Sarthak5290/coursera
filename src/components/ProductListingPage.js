import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";
import "./ProductListingPage.css";

const ProductListingPage = () => {
  const dispatch = useDispatch();
  const plants = [
    { id: 1, name: "Aloe Vera", price: 15, thumbnail: "path/to/aloe-vera.jpg" },
    {
      id: 2,
      name: "Spider Plant",
      price: 10,
      thumbnail: "path/to/spider-plant.jpg",
    },
    {
      id: 3,
      name: "Snake Plant",
      price: 20,
      thumbnail: "path/to/snake-plant.jpg",
    },
    {
      id: 4,
      name: "Peace Lily",
      price: 25,
      thumbnail: "path/to/peace-lily.jpg",
    },
    { id: 5, name: "Fern", price: 18, thumbnail: "path/to/fern.jpg" },
    { id: 6, name: "Cactus", price: 12, thumbnail: "path/to/cactus.jpg" },
  ];

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  return (
    <div className="product-listing">
      <header>
        <h1>Paradise Nursery</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/cart">Cart</a>
        </nav>
      </header>
      <div className="products">
        {plants.map((plant) => (
          <div className="product-card" key={plant.id}>
            <img src={plant.thumbnail} alt={plant.name} />
            <h2>{plant.name}</h2>
            <p>${plant.price}</p>
            <button onClick={() => handleAddToCart(plant)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;
