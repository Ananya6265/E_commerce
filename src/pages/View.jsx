import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

function View() {
  const { state } = useLocation();
  const product = state?.item;

  if (!product) {
    return <h3 className="text-center mt-5">Product not found</h3>;
  }

  return (
    <div className="container mt-5">

      <Card className="shadow-lg" style={{ borderRadius: "20px" }}>
        <div className="row g-0">

          {/* Product Image */}
          <div className="col-md-6">
            <Card.Img
              src={product.image}
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                borderRadius: "20px 0 0 20px",
              }}
            />
          </div>

          {/* Product Details */}
          <div className="col-md-6 d-flex flex-column justify-content-center p-4">

            <h2 className="fw-bold">{product.title}</h2>

            <h4 className="text-success mt-3">₹ {product.price}</h4>

            {/* Rating */}
            <div className="mt-3">
              <h5>Rating:</h5>
              <span style={{ color: "#f7b731", fontSize: "22px" }}>
                {[...Array(product.rating)].map((_, i) => (
                  <i key={i} className="fa-solid fa-star"></i>
                ))}
              </span>
            </div>

            {/* Back Button */}
            <Link to="/home">
              <Button className="mt-4" variant="dark">
                Back to Home
              </Button>
            </Link>

          </div>
        </div>
      </Card>

    </div>
  );
}

export default View;
