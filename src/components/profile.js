import React, { useState, useLayoutEffect } from "react";

import Button from "@material-ui/core/Button";
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Image
} from "react-bootstrap";

import "./styles.css";
import mountain from "./images/patrick-fore.jpg";
import andy from "./images/andy.jpg";

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

export default function Profile(props) {
  const [width, height] = useWindowSize()

  const jumboStyle = {
    color: "white",
    backgroundImage: `url(${mountain}) `,
    //backgroundattachment: fixed = image scroll dissapears as you scroll!
    backgroundAttachment: 'fixed',
    backgroundSize: "auto",
    backgroundPosition: "center center",
    backgroundRepeat: 'no-repeat',
    height: "100vh",
    fontFamily: "Consolas",
    fontSize: "1vw",
    display: "flex",
    position: "relative",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center"
  };

  const centerImage = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderTop: "2px solid",
    color: "white"
  }

  const flexOne = {
    alignItems: "stretch",
    position: 'relative',
    display: 'flex',
    minWidth: "5%",
    flexDirection: "row",
    justifyContent: "center",
    flex: "1",
    fontFamily: "Consolas"
  }

  const trueWidth = `${width}px`
  const trueHeight = `${height}px`


  //overflow-x css property deals with extra whitespace produced by "left" property here
  return (
    <div style={{ backgroundColor: 'Black', zoom: "0.5", height: { height }, width: { width }, overflowX: "hidden", overflowY: "hidden" }}>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
      <link href="https://fonts.googleapis.com/css?family=Comfortaa:300,400" rel="stylesheet"></link>
      <div>
        <Jumbotron style={jumboStyle}>
          <br />
          <br />
          <div stlye={{ textAlign: "center" }}>
            <h1 style={{ fontSize: "350%", height: { trueHeight }, width: { trueWidth } }}>Hi I'm Andy!</h1>
            <div>
              <p style={{ fontSize: "130%" }}>
                BCIT Graduate - Full-Stack Dev - Information Technology
                </p>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <img src={require('./images/react.png')} style={{ width: '10%', height: '60%', marginRight: "2%" }} />
            <img src={require('./images/node.png')} style={{ width: '4%', height: '70%', marginRight: "2%" }} />
            <img src={require('./images/angular.png')} style={{ width: '5%', height: '90%', marginRight: "2%" }} />
            <img src={require('./images/mysql.png')} style={{ width: '5%', height: '80%', marginRight: "2%" }} />
            <img src={require('./images/python.png')} style={{ width: '6%', height: '70%', marginRight: "2%" }} />
            <img src={require('./images/mongo.jpg')} style={{ width: '4%', height: '70%', marginRight: "2%" }} />
            <img src={require('./images/amazon.png')} style={{ width: '6%', height: '70%', marginRight: "2%" }} />
            <img src={require('./images/agile.png')} style={{ width: '6%', height: '80%' }} />
          </div>
        </Jumbotron>
      </div>
      <br />
      <div style={flexOne}>
        <div style={{ width: '75%', height: '40%' }}>
          <div style={centerImage}>
            <Image style={{ width: '27%', height: '95%' }} src={andy} roundedCircle />
            <div style={{ color: "white", marginTop: "-0.6%" }}>
              <p style={{ fontSize: "2vw" }}>Andy Luo</p>
            </div>
          </div>
          <div style={{ textAlign: "center", fontSize: "1.2vw", color: "white", borderBottom: "2px solid", }}>
            <p>
              First and foremost, thank you for stopping by!
              </p>
            <p>
              Currently, I'm looking for entry/junior level oppurtunuties in development or IT.
              </p>
            <p>
              I'm a recent graduate of BCITs Computer Science program who majored in IT. Much of my education was distrubted as 60% IT infrastructure technologies such as
              database creation/management, cloud services, ADDS and DevOps. However, the other 40% was comprised of development courses utlizing languages such as Javascript, Python, SQL and some C.
                </p>
            <p>
              As of now, I'm primarily focusing on expanding my full-stack development capabilities. I have created several small-medium projects utilizing different technologies but the MERN stack is what I'm most familiar with. However, I really want to learn all the different technologies this industry has to offer!
              I've been experimenting with GraphQL and ApolloClient recently which I find very intuitive.
                </p>
          </div>
        </div>
      </div>
    <br/>
    <br/>
    <div style={flexOne}>
      <div>
        <p style={{ fontSize: "2.2vw", color:"white" }}>Personal Projects</p>
      </div>
    </div>
    <br/>
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
    <Row style={{color:"white", fontFamily:"Consolas"}} className="align-items-center">
      <Col xs={6} md={1}>
      </Col>
      <Col xs={6} md={4}>
        <p style={{fontSize:"1.4vw", borderBottom:"1px solid"}}>Cardstagram (MERN stack application)</p>
        <p style={{fontSize:"1vw"}}>
        A web application which allows the user to view, search for and create cards. Cards can be created through the usage of a form which contain the fields 
        Title, Author, ImageURL, description and dimensions. After form submission, the data is logged in to the Mongo database and should be viewable/searchable 
        on the main landing page of the application. Technologies used include MongoDB, React/Redux, Express, Node, and Apolloclient for routing.
        </p>
        <a style={{borderBottom:"1px solid", fontSize:"1.4vw"}}>
          Link to project!
        </a>
      </Col>
      <Col md={1}></Col>
      <Col xsOffSet={2} xs={1}>
        <img src={require('./images/mern.gif')} style={{ width: '500%', height: '1000%'}}/>
      </Col>
    </Row>
    </div>
    <br/>
    <br/>
    <Row style={{color:"white", fontFamily:"Consolas"}} className="align-items-center">
      <Col xs={6} md={1}>
      </Col>
      <Col xsOffSet={2} xs={1}>
        <img src={require('./images/shoppingCart.gif')} style={{ width: '500%', height: '1000%'}}/>
      </Col>
      <Col md={4}></Col>
      <Col xs={6} md={4}>
        <p style={{fontSize:"1.4vw", borderBottom:"1px solid"}}>Mr.Miyagi's Katana Store (Angular Shopping Cart)</p>
        <p style={{fontSize:"1vw"}}>
        An angular web application which allows you to shop for swords! This app includes: a form for inputing your shipping details (includes required fields), a dropdown containing the available items for sale 
        + quantity indication and order details displaying your shipping info, sub-total, applicable taxes and grand total. You are able to delete items from the order details and the price gets updated.
        </p>
        <a style={{borderBottom:"1px solid", fontSize:"1.4vw"}}>
          Link to project!
        </a>
        </Col>
    </Row>

    </div>
  );
}
