import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div style={{ fontFamily: "Poppins" }}>
      <section
        style={{
          background: "linear-gradient(135deg, #70ff33ff, #055d08ff)",
          padding: "100px 20px",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <h1
          style={{
            fontSize: "55px",
            fontWeight: "800",
            letterSpacing: "1px",
          }}
        >
          Welcome to <span style={{ color: "#004aad" }}>Raynott </span>
        </h1>
        <p
          style={{
            fontSize: "20px",
            marginTop: "15px",
            maxWidth: "750px",
            margin: "auto",
            lineHeight: "1.6",
          }}
        >
          Your one-stop destination for Electronics, Gadgets, and Tech Essentials. 
          Shop trusted brands with fast delivery & secure checkout!
        </p>

        <Link to="/login">
          <button
            style={{
              marginTop: "30px",
              padding: "14px 35px",
              background: "#004aad",
              border: "none",
              color: "#fff",
              borderRadius: "30px",
              fontSize: "18px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.background = "#00347a")}
            onMouseLeave={(e) => (e.target.style.background = "#004aad")}
          >
            Start Shopping
          </button>
        </Link>
      </section>

      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2
          style={{
            fontWeight: "700",
            fontSize: "32px",
            marginBottom: "30px",
            color: "#222",
          }}
        >
          Shop by Categories
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "30px",
          }}
        >
          {[
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfimUltU_6MWV0cJytjHiDHqYC83M3ZOfugA&s" alt="" width={'150px'} /> ,
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_DDuSpGueZnFZlGToYrjLewhKjokpb0O69A&s" alt=""  width={'150px'} />  ,
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdTy1GgVXxstu6X0ycvWsChoQJRAYlAqa3ng&s" alt=""  width={'150px'} />   ,
             <img src="https://m.media-amazon.com/images/I/51a0a6RWGAL.jpg" alt=""  width={'150px'} /> ,
            <img src="https://5.imimg.com/data5/LW/JZ/HW/SELLER-40425160/mobile-accessories-500x500.jpg" alt="" width={'150px'}  />  ,
          ].map((item) => (
            <div
              key={item}
              style={{
                background: "#fff",
                width: "200px",
                padding: "25px",
                borderRadius: "20px",
                boxShadow: "0px 10px 25px rgba(0,0,0,0.1)",
                fontWeight: "600",
                fontSize: "18px",
                cursor: "pointer",
                transition: "0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          background: "#f8f8f8",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontWeight: "700",
            fontSize: "32px",
            marginBottom: "20px",
          }}
        >
          Why Choose Raynott ?
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "35px",
          }}
        >
          {[
            { title: "Fast Delivery", desc: "Get products delivered quickly." },
            { title: "Secure Payments", desc: "Trusted & safe transactions." },
            { title: "Top Brands", desc: "Shop premium tech products." },
            { title: "24/7 Support", desc: "We’re here to help anytime." },
          ].map((feature) => (
            <div
              key={feature.title}
              style={{
                background: "#fff",
                width: "260px",
                padding: "25px",
                borderRadius: "20px",
                boxShadow: "0px 8px 20px rgba(0,0,0,0.08)",
                transition: "0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0px)")}
            >
              <h3 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "10px" }}>
                {feature.title}
              </h3>
              <p style={{ color: "#555" }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer
        style={{
          background: "#004aad",
          padding: "25px",
          color: "#fff",
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        © {new Date().getFullYear()} Raynott E-Tech. All Rights Reserved.
      </footer>
    </div>
  );
}

export default Landing;
