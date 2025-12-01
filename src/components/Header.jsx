import React from 'react';
import { useContext } from 'react';
import {  Button  } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router';
import { UserContext } from "../context/UserContext";

function Header() {
    const navigate = useNavigate();
  const { user, isAdmin, logoutUser } = useContext(UserContext);

    const handleLogout = () => {
    logoutUser();
    navigate("/", { replace: true });
  };
  return (
    <>
    <nav
  className="d-flex align-items-center justify-content-between px-4"
  style={{ background: "#046606ff", height: "80px" }}
>
  <div className="d-flex align-items-center">
    <img
      src="https://images.scalebranding.com/e-tech-logo-b3e21b1c-032e-40af-97d7-ea7b462f4557.jpg"
      alt="logo"
      style={{ width: "55px", height: "55px", borderRadius: "50%" }}
    />
    <h3 className="ms-3 text-white fw-bold">Raynott</h3>
  </div>

  <div className="flex-grow-1 d-flex justify-content-center">
    <input
      type="text"
      placeholder="Search by product name"
      style={{
        width: "450px",
        padding: "12px 18px",
        borderRadius: "30px",
        border: "none",
        outline: "none",
        fontSize: "16px",
      }}
    />
  </div>

  <div
    className="d-flex align-items-center"
    style={{ gap: "35px", marginRight: "10px" }}
  >
    <Link to="/Wishlist">
      <i className="fa-solid fa-heart fa-xl" style={{ color: "red" }}></i>
    </Link>

    <Link to="/Cart">
      <i
        className="fa-solid fa-cart-shopping fa-xl"
        style={{ color: "#35e03bff" }}
      ></i>
    </Link>

    <Button
      style={{
        background: "#09b92fff",
        border: "none",
        borderRadius: "40px",
        padding: "8px 25px",
      }}
      onClick={handleLogout}
    >
      Logout
    </Button>
  </div>
</nav>



    </>
  );
}

export default Header;











