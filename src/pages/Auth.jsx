import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { loginAPI, registerAPI } from '../services/allAPI';

function Auth({insideRegister}) {

  
  const [userData,setUserData]=useState({name:"",email:"",password:""})
  console.log(userData);
  const navigate=useNavigate()

 const handleRegister = async () => {
    const { name, email, password } = userData

    if (name && email && password) {
      try {
        const result = await registerAPI(userData)
        console.log(result);
        if (result.status == 200) {
          toast.success(`registered successfully `)
          navigate('/login')
          setUserData({ name: "", email: "", password: "" })
        }
        else {
          if (result.status == 406) {
            toast.error(result.response.data)
            setUserData({ name: "", email: "", password: "" })

          }
        }


      }
      catch (err) {
        console.log(err);

      }
    }
    else {
      toast.warning("Fill the form completely")
    }

  }

  // login 
const handlelogin = async () => {
  if (userData.email && userData.password) {
    try {
      const result = await loginAPI(userData);
      console.log(result);

      if (result.status === 200) {
        sessionStorage.setItem("user", JSON.stringify(result.data.user));
        sessionStorage.setItem("token", result.data.token);

        const userInfo = result.data.user;

        if (userInfo?.userType?.toLowerCase() === "admin") {
          navigate("/admin");   
        } else {
          navigate("/home");
        }

        setUserData({ name: "", email: "", password: "" });
      } else {
        if (result.status === 404) {
          toast.error(result.response.data);
          setUserData({ name: "", email: "", password: "" });
        }
      }
    } catch (err) {
      console.log(err);
    }
  } else {
    toast.warning("Enter Email and Password");
  }
};


  return (
    <>
<div
  className="d-flex justify-content-center align-items-center"
  style={{
    minHeight: "100vh",
   
    padding: "25px",
    fontFamily: "Poppins",
  }}
>
  <div
    style={{
      width: "95%",
      maxWidth: "26rem",
      padding: "3rem 2.5rem",
      borderRadius: "35px",
      background: "rgba(255, 255, 255, 0.75)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      border: "2px solid rgba(255, 255, 255, 0.5)",
      boxShadow: "0 20px 45px rgba(0,0,0,0.15)",
      transition: "transform 0.4s ease",
    }}
  >
    <h2
      className="text-center fw-bold mb-4"
      style={{
       color: "#004aad",
        fontSize: "32px",
        letterSpacing: "1.8px",
        textShadow: "0px 3px 6px rgba(224,88,43,0.25)",
      }}
    >
      {insideRegister ? "CREATE ACCOUNT" : "WELCOME "}
    </h2>

    <form>
      {insideRegister && (
        <div className="mb-3">
          <input
            type="text"
            placeholder="Full Name"
            className="form-control"
            style={{
              padding: "14px",
              borderRadius: "14px",
              border: "1px solid #d0d0d0",
              background: "rgba(255,255,255,0.9)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              transition: "0.3s",
            }}
            value={userData.name}
            onChange={(e) =>
              setUserData({ ...userData, name: e.target.value })
            }
            onFocus={(e) => (e.target.style.boxShadow = "0 0 12px rgba(224,88,43,0.35)")}
            onBlur={(e) => (e.target.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)")}
          />
        </div>
      )}

      <div className="mb-3">
        <input
          type="email"
          placeholder="Email Address"
          className="form-control"
          style={{
            padding: "14px",
            borderRadius: "14px",
            border: "1px solid #d0d0d0",
            background: "rgba(255,255,255,0.9)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            transition: "0.3s",
          }}
          value={userData.email}
          onChange={(e) =>
            setUserData({ ...userData, email: e.target.value })
          }
          onFocus={(e) => (e.target.style.boxShadow = "0 0 12px rgba(224,88,43,0.35)")}
          onBlur={(e) => (e.target.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)")}
        />
      </div>

      <div className="mb-3">
        <input
          type="password"
          placeholder="Password"
          className="form-control"
          style={{
            padding: "14px",
            borderRadius: "14px",
            border: "1px solid #d0d0d0",
            background: "rgba(255,255,255,0.9)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            transition: "0.3s",
          }}
          value={userData.password}
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
          onFocus={(e) => (e.target.style.boxShadow = "0 0 12px rgba(224,88,43,0.35)")}
          onBlur={(e) => (e.target.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)")}
        />
      </div>

      <div className="d-grid">
        <button
          type="button"
          className="btn"
          style={{
            background: "linear-gradient(135deg, rgb(224, 88, 43), #ff7b4a)",
            color: "white",
            borderRadius: "14px",
            padding: "12px",
            fontSize: "18px",
            fontWeight: "600",
            letterSpacing: "0.6px",
            transition: "0.4s",
            boxShadow: "0px 8px 18px rgba(224,88,43,0.35)",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "translateY(-3px)";
            e.target.style.boxShadow = "0px 12px 20px rgba(224,88,43,0.5)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0px)";
            e.target.style.boxShadow = "0px 8px 18px rgba(224,88,43,0.35)";
          }}
          onClick={insideRegister ? handleRegister : handlelogin}
        >
          {insideRegister ? "Sign Up" : "Login"}
        </button>
      </div>

      <p
        className="text-center mt-4"
        style={{
          fontSize: "15px",
          color: "#444",
          opacity: "0.85",
        }}
      >
        {insideRegister ? (
          <>
            Already have an account?
            <Link
              to="/login"
              style={{
                color: "rgb(224, 88, 43)",
                fontWeight: "600",
              }}
            >
              {" "}
              Login
            </Link>
          </>
        ) : (
          <>
            Don’t have an account?
            <Link
              to="/register"
              style={{
                color: "#004aad",
                fontWeight: "600",
              }}
            >
              {" "}
              Register
            </Link>
          </>
        )}
      </p>
    </form>
  </div>
</div>

    </>
  )
}

export default Auth