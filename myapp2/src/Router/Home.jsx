import React from "react";
import { Carousel, Card, Button, Row, Col} from "react-bootstrap";

export const Home = () => {
  return (
    <div>
      <h1>Welcome To Home</h1>

      <Carousel>
        <Carousel.Item>
          <img
            style={{ height: "500px" }}
            className="d-block w-100"
            src="https://i.pinimg.com/originals/cd/7b/5c/cd7b5c8d4687b5c98a445127926a56e2.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "500px" }}
            className="d-block w-100"
            src="https://wallpapercave.com/wp/wp2174944.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "500px" }}
            className="d-block w-100"
            src="https://wc.wallpaperuse.com/wallp/7-79304_s.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br />
      <h2 style={{}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, delectus.</h2>
      <br/>
      
      <Row>
      <Col md={1}></Col>
        <Col md={3}>
      <Card style={{backgroundColor:"yellow"}}>
  <Card.Header as="h5">Featured</Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="outline-primary">Go somewhere</Button>
  </Card.Body>
</Card>
</Col>
<Col md={3}>
      <Card style={{backgroundColor:"yellow"}}>
  <Card.Header as="h5">Featured</Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="outline-primary">Go somewhere</Button>
  </Card.Body>
</Card>
</Col>
<Col md={3}>
      <Card style={{backgroundColor:"yellow"}}>
  <Card.Header as="h5">Featured</Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="outline-primary">Go somewhere</Button>
  </Card.Body>
</Card>
</Col>
</Row>
<br/>
<div style={{backgroundColor:"red" ,color:"white"}}>
  <img src="pp1.jpg" alt="" style={{float:"right"}}/>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In eaque
        architecto tempora magnam, dolor unde assumenda maiores? Iure, nostrum
        accusamus. Rerum veritatis dolores delectus? Ipsam illo explicabo nihil
        dolorum, vel repudiandae eaque, nostrum molestias mollitia, libero
        quisquam rerum rem cum. Quasi, molestiae. Possimus pariatur, optio
        libero, minima minus eligendi adipisci autem hic cumque iste laudantium
        ipsam aperiam obcaecati, excepturi consequuntur error nesciunt eveniet.
        Rerum eius quas magnam, tempora ad quasi voluptatibus, fugiat quia
        maiores itaque magni? Quisquam, quos ratione, accusantium deleniti fugit
        eius laboriosam, neque explicabo repudiandae amet voluptates sunt aut
        cupiditate quia nihil deserunt nesciunt architecto? Odio amet quibusdam
        voluptatum adipisci aliquam? Rerum fugit molestiae voluptas blanditiis!
        Architecto quos totam quisquam soluta in, esse praesentium odit
        exercitationem natus facere expedita cupiditate hic numquam corporis,
        veniam atque eveniet suscipit! Inventore distinctio eum minima veritatis
        est sit minus? Aspernatur odit ipsum, iure recusandae distinctio
        expedita! Veniam molestias libero, ipsam molestiae beatae corrupti
        repellat animi quas, accusantium a quae perferendis corporis doloremque
        aliquid quod laboriosam aliquam consequuntur, non nemo blanditiis cum
        iste. Obcaecati ducimus reiciendis optio harum eos ipsum? Aperiam
        asperiores sequi commodi debitis exercitationem, voluptatem illo
        corrupti consequatur numquam aliquam doloribus, libero sed enim
        provident culpa molestias soluta ad repudiandae rerum. Voluptatibus odit
        similique sequi aliquid illum nam eum perspiciatis quas? Quibusdam
        nostrum porro labore laboriosam atque, itaque ad error consequuntur
        iusto quis vel, totam ex nisi, eos sequi accusamus aperiam neque quas
        nam ipsum saepe odio aliquam? Debitis, fuga. Sunt voluptatem, vitae
        placeat fugit iste laudantium qui saepe magnam alias dolorum optio
        reprehenderit aperiam, provident nam quae vel iure fuga tenetur minus
        eum. Quod, cum eligendi. Temporibus cum assumenda totam dignissimos
        voluptatibus distinctio, laudantium nobis sapiente similique quia
        dolorum. Quia officia reiciendis deleniti earum pariatur nam deserunt
        libero cum quas recusandae rem, vitae adipisci totam autem sed
        repellendus iste. Incidunt.
      </p>
      </div>
      </div>
  );
};

export default Home;
