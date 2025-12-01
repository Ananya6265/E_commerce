import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Header from "../components/Header";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const updateCart = (newData) => {
    setCart(newData);
    localStorage.setItem("cart", JSON.stringify(newData));
  };

  const handleDecrement = (id) => {
    const updated = cart
      .map((pro) =>
        pro.id === id
          ? {
              ...pro,
              quantity: pro.quantity - 1,
              totalPrice: (pro.quantity - 1) * pro.price,
            }
          : pro
      )
      .filter((pro) => pro.quantity > 0);

    updateCart(updated);
  };

  const handleIncrement = (id) => {
    const updated = cart.map((pro) =>
      pro.id === id
        ? {
            ...pro,
            quantity: pro.quantity + 1,
            totalPrice: (pro.quantity + 1) * pro.price,
          }
        : pro
    );

    updateCart(updated);
  };

  const removeItem = (id) => {
    const updated = cart.filter((pro) => pro.id !== id);
    updateCart(updated);
  };

  const emptyCart = () => {
    updateCart([]);
  };

  const checkout = () => {
    alert("Your order has been placed successfully!");
    updateCart([]);
  };

  return (
    <>
      <Header />

      {cart.length > 0 ? (
        <div className="row">
          <div className="col-8">
            <h2
              className="text-success fw-bold mt-3"
              style={{ fontFamily: "Playfair Display", marginLeft: "550px" }}
            >
              Cart Summary
            </h2>

            <Card className="ps-2 m-3">
              <table>
                <thead>
                  <tr>
                    <th className="p-5">#</th>
                    <th className="p-5">Title</th>
                    <th className="p-5">Image</th>
                    <th className="p-5">Quantity</th>
                    <th className="p-5">Price</th>
                    <th className="p-5">...</th>
                  </tr>
                </thead>

                {cart.map((pro, index) => (
                  <tbody key={pro.id}>
                    <tr>
                      <td className="p-5">{index + 1}</td>
                      <td className="p-5">{pro.title || pro.name}</td>

                      <td className="p-5">
                        <img
                          style={{ height: "50px" }}
                          src={pro.thumbnail || pro.image}
                          alt=""
                        />
                      </td>

                      <td className="p-4">
                        <button onClick={() => handleDecrement(pro.id)}>-</button>
                        <button>{pro.quantity}</button>
                        <button onClick={() => handleIncrement(pro.id)}>+</button>
                      </td>

                      <td className="p-5">{pro.totalPrice}</td>

                      <td
                        className="p-5"
                        style={{ color: "red", cursor: "pointer" }}
                        onClick={() => removeItem(pro.id)}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </Card>

            <div className="m-2 p-2">
              <button className="btn btn-warning ps-3" onClick={emptyCart}>
                Empty Cart
              </button>

              <Link to={"/home"}>
                <button className="btn btn-warning ps-3 m-4">Shop More</button>
              </Link>
            </div>
          </div>

          <div className="col-lg-4" style={{ marginTop: "80px" }}>
            <Card style={{ width: "22rem" }}>
              <Card.Body>
                <h3>
                  Total Items: <span className="text-danger">{cart.length}</span>
                </h3>

                <h2>
                  Total Amount:{" "}
                  <span className="text-danger">
                    {cart.reduce((sum, p) => sum + p.totalPrice, 0)}
                  </span>
                </h2>

                <button
                  onClick={checkout}
                  className="btn text-dark"
                  style={{ backgroundColor: "#f8a90bff" }}
                >
                  CheckOut
                </button>
              </Card.Body>
            </Card>
          </div>
        </div>
      ) : (
        <div>
          <img
            style={{
              height: "450px",
              width: "400px",
              marginLeft: "450px",
            }}
            src="https://static.vecteezy.com/system/resources/previews/005/006/007/non_2x/no-item-in-the-shopping-cart-click-to-go-shopping-now-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg"
            alt=""
          />

          <h2
            style={{
              fontFamily: "dancingscript",
              color: "red",
              marginLeft: "530px",
            }}
          >
            Your Cart is Empty
          </h2>

          <Link to="/home">
            <button
              className="btn mt-3 my-3"
              style={{
                marginLeft: "590px",
                backgroundColor: "#f8990bff",
                borderRadius: "25px",
                color: "white",
              }}
            >
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </>
  );
}

export default Cart;
