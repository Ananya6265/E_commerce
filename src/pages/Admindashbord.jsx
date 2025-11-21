import React, { useEffect, useState } from "react";
import Header from '../components/Header'
import AddCarts from '../components/AddCarts'
import { Table, Button, Image } from "react-bootstrap";
import { getproductAPI,deleteProductAPI } from "../services/allAPI";

function Admindashbord() {


  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const result = await getproductAPI();
    if (result.status === 200) {
      setProducts(result.data);
    } else {
      console.log("Failed to load products");
    }
  };

  const handleDelete = async (id) => {
    const result = await deleteProductAPI(id);
    if (result.status === 200) {
      alert("Product deleted!");
      fetchProducts(); 
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
    <Header/>

    <div>
        <AddCarts/>
    </div>

    <div className="container mt-5">
      <h2 className="mb-4 text-center">Admin Product List</h2>

      <Table striped bordered hover className="shadow">
        <thead className="table-dark">
          <tr>
            <th>SL No</th>
            <th>Image</th>
            <th>Title</th>
            <th>Price (₹)</th>
            <th>Rating</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {products.length > 0 ? (
            products.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>

                <td>
                  <Image
                    src={item.image}
                    width="70"
                    height="70"
                    rounded
                    style={{ objectFit: "cover" }}
                  />
                </td>

                <td>{item.title}</td>

                <td>{item.price}</td>

                <td>
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <i key={i} className="fa-solid fa-star text-warning"></i>
                  ))}
                </td>

                <td>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">
                No products found
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    
    </div>
    </>
  )
}

export default Admindashbord