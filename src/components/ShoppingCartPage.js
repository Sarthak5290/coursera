import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../redux/actions/cartActions';
import './ShoppingCartPage.css';

const ShoppingCartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const totalCost = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="shopping-cart">
      <header>
        <h1>Paradise Nursery</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/products">Products</a>
        </nav>
      </header>
      <div className="cart-items">
        {cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.thumbnail} alt={item.name} />
            <h2>{item.name}</h2>
            <p>${item.price}</p>
            <button onClick={() => handleIncrease(item.id)}>+</button>
            <button onClick={() => handleDecrease(item.id)}>-</button>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <p>Total Items: {cart.reduce((acc, item) => acc + item.quantity, 0)}</p>
        <p>Total Cost: ${totalCost.toFixed(2)}</p>
        <button>Checkout</button>
        <button>Continue Shopping</button>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
