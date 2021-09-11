import React from "react";
import Footer from "./footer";

const About = () => {
  return (
    <div>
      <div
        style={{
          marginBottom: "20px",
          backgroundImage:
            "url(" + "https://wallpaperaccess.com/full/2741780.jpg" + ")",
        }}
      >
        <h1 style={{ color: "#ffffff", fontFamily: "Carter One" }}>ABOUT US</h1>
        <br></br>
        <div
          style={{
            border: "2px solid white",
            width: "500px",
            textAlign: "center",
            margin: "auto",
            paddding: "100px",
            backgroundColor: "black",
          }}
        >
          <p
            style={{
              color: "white",
              textAlign: "center",
              paddingTop: "5px",
              paddingLeft: "20px",
              paddingRight: "20px",
              //fontFamily: "Staatliches",
            }}
          >
            We have built a tool for all the parents to monitor their children
            activities on the internet.
            <br></br>
            <br></br>
            The parents will be able to see what their children searched up on
            the internet, because their is no way of deleting the history.
            <br></br>
            <br></br>
            It also restricts the children from searching inappropriate content
            on the Internet.
            <br></br>
            <br></br>
            <br></br>
            <img
              style={{ height: "250px", margin: "auto" }}
              src="https://images.news18.com/ibnlive/uploads/2021/07/1627190797_family.jpg"
              alt="family"
            ></img>
          </p>
        </div>

        <br></br>
      </div>

      <Footer />
    </div>
  );
};

export default About;
