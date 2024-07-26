import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Cardimg from "../../assets/image/lorumipsumlogo.jpeg";

const Api = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/25")
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <div>
      <div className="apiprac-01">
        <Card
          className="CARDS_API-0123"
          style={{
            width: "18rem",
            margin: "2rem",
            border: "solid",
            borderWidth: ".5px",
          }}
        >
          <Card.Img className="card_apiprac_img" variant="top" src={Cardimg} />
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.body}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card
          className="CARDS_API-0123"
          style={{
            width: "18rem",
            margin: "2rem",
            border: "solid",
            borderWidth: "0.5px",
          }}
        >
          <Card.Img className="card_apiprac_img" variant="top" src={Cardimg} />
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.body}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card
          className="CARDS_API-0123"
          style={{
            width: "18rem",
            margin: "2rem",
            border: "solid",
            borderWidth: "0.5px",
          }}
        >
          <Card.Img className="card_apiprac_img" variant="top" src={Cardimg} />
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.body}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card
          className="CARDS_API-0123"
          style={{
            width: "18rem",
            margin: "2rem",
            border: "solid",
            borderWidth: "0.5px",
          }}
        >
          <Card.Img className="card_apiprac_img" variant="top" src={Cardimg} />
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.body}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Api;
