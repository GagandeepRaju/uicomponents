import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const SignInUpForm = () => {
  return (
    <Container>
      <Form>
        <h1>Welcome back</h1>
        <h6>Welcome back! Please enter your details.</h6>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Row>
            <Col>
              <Form.Check type="checkbox" label="Remember for 30 Days" />
            </Col>
            <Col>
              <Button type="button" variant="light">
                Forget Password
              </Button>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-3">
          <Col>
            <Row>
              <Button type="submit" variant="dark">
                Sign In
              </Button>
            </Row>
          </Col>
        </Form.Group>
        <Form.Group className="mb-3">
          <Col>
            <Row>
              <Button type="submit" variant="light">
                Sign In With Google
              </Button>
            </Row>
          </Col>
        </Form.Group>
        <Form.Group className="mb-3">
          <Row>
            <Col>
              <h6>Don't have an account?</h6>
            </Col>
            <Col>
              <Button type="button" variant="light">
                Sign Up For Free
              </Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default SignInUpForm;
