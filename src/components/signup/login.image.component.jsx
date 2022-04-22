// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import "./form.css";

const LoginImage = () => {
  return (
    <Container id="loginContainer">
      <div id="firstdiv"></div>
      <div id="logindiv">
        <p id="loginP">
          "We've been using Untitled to kick start every new project and can't
          imagine working without it."
        </p>
        <div className="container">
          <div className="item item-1">Andi Lane</div>
          <div className="item item-2">
            <h2>Andi Lane</h2>
            <h2>Andi Lane</h2>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LoginImage;

// <Card id="card">
//         <Card.Body>
//           <Card.Title>Card Title</Card.Title>
//           <Card.Text>
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </Card.Text>
//           <Button variant="primary">Go somewhere</Button>
//         </Card.Body>
//       </Card>
