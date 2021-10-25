import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Row, Button, Container, Col } from "react-bootstrap";

const SignIn = () => {
    const history = useHistory();

    const onSignIn = async() => {
      // const response = await axios.get("http://localhost:8080/api/auth/google");
      // console.log(response.data);
      history.push("/some-link");
    }

  return (
    <Container>
      <h1>Sign In Page</h1>
      <Row className="py-5">
        <Col md={6}>
          {/* <Button variant="primary" onClick={onSignIn}>Signin with Google</Button> */}
          <a href="http://localhost:8000/api/auth/google" className="btn btn-primary">Signin with Google</a>
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;
