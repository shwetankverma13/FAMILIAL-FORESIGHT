import React from "react";
import Card from "./card";
import Navbar1 from "./navbar";
import Footer from "./footer";

const App = () => {
  return (
    <div>
      <div
        style={{
          marginBottom: "20px",
          backgroundImage:
            "url(" + "https://wallpaperaccess.com/full/2741780.jpg" + ")",
        }}
      >
        <Navbar1 />
        <br />
        <h1 style={{ color: "#ffffff", fontFamily: "Carter One" }}>
          WE WOULD LOVE TO HEAR FROM YOU!!
        </h1>
        <br />
        <Card />
      </div>
      <Footer />
    </div>
  );
};

export default App;
