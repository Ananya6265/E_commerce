import React, { useEffect, useState } from "react";
import { getproductAPI } from "../services/allAPI";
import Header from "../components/Header";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const result = await getproductAPI();
    if (result.status === 200) {
      setProducts(result.data);
    } else {
      console.log("Error fetching products");
    }
  };

  return (
    <>
      <Header insideHome={true} />

      <div className="container mt-4">
        <div className="row">
          {products.length > 0 ? (
            products.map((item) => (
              <div className="col-md-4" key={item._id}>
                <Card
                  className="shadow-sm recipe-card mt-4"
                  style={{
                    borderRadius: "20px",
                    overflow: "hidden",
                    border: "none",
                    background: "#ffffff",
                    transition: "0.3s ease-in-out",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={item.image}
                    style={{
                      width: "100%",
                      height: "240px",
                      objectFit: "cover",
                    }}
                  />

                  <Card.Body className="text-center" style={{ padding: "22px" }}>
                    <Card.Title
                      className="fw-bold"
                      style={{
                        color: "#018417ff",
                        fontSize: "22px",
                        marginBottom: "15px",
                      }}
                    >
                      {item.title}  
                    </Card.Title>

                    <p>Price: ₹{item.price}</p>
                    <p>Rating: {item.rating} ⭐</p>

                    <Link to={`/view/${item._id}`} state={{ item }}>
                      <Button
                        className="fw-bold text-white mb-3"
                        style={{
                          width: "100%",
                          background: "#097805ff",
                          borderRadius: "10px",
                          padding: "10px",
                        }}
                      >
                        View Product
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </div>
            ))
          ) : (
            <h4 className="text-center mt-5">No Products Added</h4>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
