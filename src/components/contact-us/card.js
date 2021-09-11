import React from "react";
import Data from "./data";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Card } from "react-bootstrap";

const App = () => {
  return (
    <div>
      <div className="flexbox">
        {Data.map((curr) => {
          const { img, txt1, txt2, txt3, loc } = curr;

          return (
            <div className="abc">
              <Card
                style={{
                  width: "18rem",
                  padding: "10px",
                  border: "3px yellow solid",
                }}
              >
                <Card.Img className="imgg" variant="top" src={img} />
                <Card.Body>
                  <Card.Title className="h11">{txt1}</Card.Title>
                  <Card.Text className="h22">{txt2}</Card.Text>
                  <Card.Text className="h33">
                    <a href={loc}>{txt3}</a>
                  </Card.Text>
                </Card.Body>
              </Card>

              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
