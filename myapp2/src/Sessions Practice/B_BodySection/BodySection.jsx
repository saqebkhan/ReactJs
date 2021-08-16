import React from 'react';
import "./BodyComponent.css"
import { Carousel } from 'react-bootstrap';


const BodySection = () => {
    return (
        <div>
            <center>
              <br />
              <br />
              <br />
              <br />

            <Carousel>
  <Carousel.Item>
    <img
      style={{height:"500px"}}
      className="d-block w-100"
      src="images.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 style={{color:"black"}}>First slide label</h3>
      <p style={{color:"black"}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      style={{height:"500px"}}
      className="d-block w-100"
      src="logo192.png"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 style={{color:"black"}}>Second slide label</h3>
      <p style={{color:"black"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      style={{height:"500px"}}
      className="d-block w-100"
      src="Image2.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            
            <p class="a">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sit sapiente, tempora reiciendis enim eum asperiores eius distinctio doloremque voluptates ducimus autem maiores, accusantium harum corporis adipisci nemo. Non nesciunt corporis eum perspiciatis doloribus placeat. Ab voluptatibus suscipit, eum blanditiis alias iste perspiciatis! Voluptate eum ex sit aut nemo consectetur.</p>
            <p class="b">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ut repellendus in dolorum sapiente reprehenderit ipsum ex quae perferendis repellat laboriosam ratione, libero incidunt, reiciendis perspiciatis impedit porro est. Qui amet cum aut? Dolor laborum natus vero accusamus tempore facilis doloremque, expedita placeat doloribus ipsum! Sit a autem sint harum culpa alias, illum blanditiis qui facilis repudiandae. Officiis temporibus iusto ipsum. Doloremque dolorem illum ipsam alias, consequatur labore a aspernatur eligendi veniam facere eius nam deleniti repudiandae laboriosam quidem! Quasi, non modi. Et quas ea dicta eveniet rem, sunt aspernatur doloribus qui ipsa molestiae adipisci repellat odio facilis, distinctio expedita.</p>

            

            <img src="" alt="FB" />
            <img src="" alt="Twitter" />
            <img src="" alt="Instagram" />
            
            </center>
        </div>
    );
};

export default BodySection;