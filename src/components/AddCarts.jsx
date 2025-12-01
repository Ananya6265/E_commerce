import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { addProductAPI } from '../services/allAPI';
import { toast } from 'react-toastify';
function AddCarts() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [rating, setRating] = useState(0);

const [form, setForm] = useState({
    title: "",
    price: "",
    image: "",
    rating: 0,
  });


  const handleStar = () => {
    setForm((prev) => ({
      ...prev,
      rating: prev.rating < 5 ? prev.rating + 1 : 1,
    }));
  };

  const updateForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  
  const handleUpload = async () => {
    const { title, price, image, rating } = form;

    if (!title || !price || !image || rating === 0) {
      toast.error("Please fill all fields and give a rating!");
      return;
    }

    const body = {
      title,
      price,
      image,
      rating,
    };

    try {
      const response = await addProductAPI(body);
      console.log("UPLOAD DATA:", body);

      toast.success("Product Added Successfully!");
      handleClose();
      setForm({ title: "", price: "", image: "", rating: 0 });

    } catch (err) {
      toast.error("Upload failed!");
      console.log(err);
    }
  };
  return (
    <>
      <div className="d-flex justify-content-end px-3">
        <Button
          onClick={handleShow}
          className="fw-bold text-white"
          style={{
            background: 'linear-gradient(135deg, #29e11cff, #045609ff)',
            border: 'none',
            borderRadius: '14px',
            padding: '10px 22px',
            boxShadow: '0px 6px 20px rgba(0,0,0,0.25)',
            transition: '0.3s',
            marginTop: '50px',
            marginRight: '70vh'
          }}
        >
          Add items
        </Button>

        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
          <div>
            <Modal.Header closeButton style={{ backgroundColor: "#1e293b", borderBottom: "none" }}>
              <Modal.Title
                style={{
                  fontFamily: 'Space Grotesk',
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#ffffff"
                }}
              >
                Product Details
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <div className="row">

                <div className="col-9">
                  <input className="form-control" type="text"  name="title" placeholder="Title" value={form.title}
                  onChange={updateForm} />

                  <input className="form-control mt-3" type="text" name="price" placeholder="Price" value={form.price}
                  onChange={updateForm}  />

                  <input className="form-control mt-3" type="text" name="image"  placeholder="Image URL" value={form.image}
                  onChange={updateForm} />

                  <div style={{ marginTop: "10px" }}>
                    <button className="btn btn-warning" onClick={handleStar}>
                      Rating
                    </button>

                    <span style={{ marginLeft: "10px", fontSize: "20px", color: "#ebcd0eff" }}>
                      {[...Array(form.rating)].map((_, i) => (
                        <i key={i} className="fa-solid fa-star"></i>
                      ))}
                    </span>
                  </div>
                </div>

              </div>
            </Modal.Body>

            <Modal.Footer style={{ borderTop: "none" }}>
              <Button onClick={handleClose} style={{ width: "5rem" }} variant="secondary">
                Cancel
              </Button>
              <Button style={{ width: "5rem", marginRight: "2rem" }} variant="primary"  onClick={handleUpload}>
                Upload
              </Button>
            </Modal.Footer>
          </div>
        </Modal>

      </div>
    </>
  );
}

export default AddCarts;
