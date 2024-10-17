import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <>
      <Container className='d-flex justify-content-center align-items-center py-5 px-4'>
        <Row className='mt-5 d-flex justify-content-center align-items-center'>
          <Col md={6}>
            <h3 className='mt-md-5 '>Welcome to<span className='text-warning'>Media Player</span></h3>
            <p style={{ textAlign: 'justify' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus a excepturi explicabo accusamus dicta ipsam nesciunt perspiciatis fugit, nihil deleniti ea labore odio nostrum repudiandae unde sed quas beatae itaque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque totam aspernatur natus cumque voluptatem maxime eaque, modi, explicabo rerum voluptatibus velit inventore quidem asperiores cum sit. Ab facere consequuntur eius?</p>
            <Link to={'/home'}><button className='btn btn-warning mt-5'>Get Started</button></Link>
          </Col>
          <Col md={1}></Col>
          <Col md={5} className='d-flex justify-content-center mt-5 mt-md-0'>
            <img src="https://media1.giphy.com/media/ZbNsGOcXHfvAPEirTt/giphy.gif?cid=6c09b952cj8c9rf6xkbd2e99302852izrk1oea38jbu75et3&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s" alt="" className='w-75' />
          </Col>
        </Row>
      </Container>





      <Container className='mt-5'>
        <h2 className='text-center'>Features</h2>
        <Row >
          <Col md={1}></Col>
          <Col md={10}>
            <Row className='mt-5 d-flex justify-content-center align-items-center'>
              <Col md={4} className='p-3'>
                <Card style={{ width: '100%' }} className='p-3'>
                  <Card.Img variant="top" src="https://i.pinimg.com/originals/b4/9c/4f/b49c4fa087955725a77d38c7ad4fe0eb.gif" className='w-100%' height={'300px'} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card></Col>
              <Col md={4} className='p-3'>
                <Card style={{ width: '100%' }} className='p-3'>
                  <Card.Img variant="top" src="https://cdn.dribbble.com/users/10708/screenshots/1279469/player_i7drib.gif" className='w-100%' height={'300px'} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card></Col>
              <Col md={4} className='p-3'>
                <Card style={{ width: '100%' }} className='p-3'>
                  <Card.Img variant="top" src="https://media0.giphy.com/media/XZP2eyJQroePQWiJVE/giphy.gif?cid=6c09b952dl37h7kkn109y3rbnae3xzqq4rnz7ab6jfapqtp5&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g" className='w-100%' height={'300px'}  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card></Col>
            </Row>

          </Col>
          <Col md={1}></Col>
        </Row>
      </Container>







      <div className="container">
        <div className="row p-md-5 p-3">
          <div className="col border border-secondary border-2 rounded p-md-5 p-3">
            <div className="row">
              <div className="col-md-6">
                <h2>Simple Fast and Powerful</h2>
                <p><span className='fs-4'>Play Everything</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque consequuntur dolores dignissimos quisquam ipsam quidem eligendi </p>
                <p className='mt-2'><span className='fs-4'>Play Everything</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque consequuntur dolores dignissimos quisquam ipsam quidem eligendi</p>
                <p className='mt-2'><span className='fs-4'>Play Everything</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque consequuntur dolores dignissimos quisquam ipsam quidem eligendi</p>
              </div>
              <div className="col-md-6 mt-5">
              <iframe width="100%" height="360" src="https://www.youtube.com/embed/tOM-nWPcR4U" title="Illuminati|Aavesham|Jithu Madhavan|Fahadh Faasil|Sushin Shyam,Dabzee,Vinayak| Nazriya|Anwar Rasheed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing
