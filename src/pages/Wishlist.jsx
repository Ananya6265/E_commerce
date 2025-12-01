import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
import Header from "../components/Header";

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  // Load wishlist + cart from localStorage
  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];

    setWishlist(savedWishlist);
    setCart(savedCart);
  }, []);

  // Save wishlist to localStorage
  const updateWishlist = (newData) => {
    setWishlist(newData);
    localStorage.setItem("wishlist", JSON.stringify(newData));
  };

  // Save cart to localStorage
  const updateCart = (newData) => {
    setCart(newData);
    localStorage.setItem("cart", JSON.stringify(newData));
  };

  // Remove item from wishlist
  const removeFromWishlist = (id) => {
    const updated = wishlist.filter((pro) => pro.id !== id);
    updateWishlist(updated);
  };

  // Add to cart + remove from wishlist
  const handleCart = (pro) => {
    const updatedCart = [...cart, pro];
    updateCart(updatedCart);
    removeFromWishlist(pro.id);
  };

  return (
    <>
      <Header />

      <div className="container">
        <h1 className="text-danger my-3">Wishlist</h1>

        {wishlist.length > 0 ? (
          <Row className="mt-4 de-flex justify-content-center">
            {wishlist.map((pro) => (
              <Col xl={3} lg={4} md={6} xs={12} className="mb-5 me-2" key={pro.id}>
                <Card style={{ width: "16rem" }}>
                  <Card.Img
                    variant="top"
                    src={pro.thumbnail || pro.image}
                    onError={(e) =>
                      (e.target.src =
                        "https://via.placeholder.com/300?text=No+Image")
                    }
                  />

                  <Card.Body>
                    <Card.Title
                      style={{
                        fontFamily: "Playfair Display",
                        color: "#2C2C2C",
                        fontSize: "1.3rem",
                        textAlign: "center",
                      }}
                    >
                      {pro.title || pro.name}
                    </Card.Title>

                    <div className="mt-3 d-flex justify-content-between">
                      <button
                        className="btn btn-outlined"
                        onClick={() => removeFromWishlist(pro.id)}
                      >
                        <i
                          style={{ color: "red" }}
                          className="fa-solid fa-heart-circle-xmark fa-xl"
                        ></i>
                      </button>

                      <button
                        className="btn btn-outlined"
                        onClick={() => handleCart(pro)}
                      >
                        <i
                          style={{ color: "green" }}
                          className="fa-solid fa-cart-plus fa-xl"
                        ></i>
                      </button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <div className="text-center">
            <img
              src="https://png.pngtree.com/png-vector/20221121/ourmid/pngtree-comicstyle-wishlist-icon-with-splash-effect-health-sign-add-vector-png-image_41870708.jpg"
              alt=""
              width="350"
            />
            <h3 className="mt-3">Your wishlist is empty!</h3>
          </div>
        )}
      </div>
    </>
  );
}

export default Wishlist;
