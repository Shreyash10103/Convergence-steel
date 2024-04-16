import React from 'react'
import img1 from '../im5.jpg'
import img2 from '../im6.jpg'
import { useState } from "react";
import Card from "@mui/material/Card";
import Collapse from "@mui/material/Collapse";
import CardHeader from "@mui/material/CardHeader";
import Container from "@mui/material/Container";
import CardContent from "@mui/material/CardContent";
import KeyboardArrowDownIcon from
  "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from
  "@mui/icons-material/KeyboardArrowUp";
import IconButton from "@mui/material/IconButton";

const AR500 = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);

  return (
    <div className='contain32'>

      <div>
        <img className='img50' src='https://149893212.v2.pressablecdn.com/wp-content/uploads/double-oxyfuel-burn-zoom-vertical-img.jpg'></img>

        <div className='too'>
          <div>
            <h5 className='mmm'>
              AR500 grade plates are a type of abrasion-resistant steel plate that are known for their extremely high hardness and toughness. They have a Brinell hardness of 475-544 BHN, which makes them ideal for use in applications where there is a very high risk of wear and tear. AR500 plates are also known for their good formability and weldability, although they can be more difficult to machine and cut than other grades of steel plates.</h5>
            <div className='col'>
              <h6 className='hhh' style={{ color: 'black' }}>
                Properties of AR500 Steel Plate: </h6>
              <p className='ffff' style={{ color: 'black' }}>

                AR500 steel has more surface hardness than AR450, good ductility and formability, as well as being impact resistant. Some other important characteristics can be found below:<br />
                <ul><li>
                  Welding = Decent</li>
                  <li>Machining = Good</li>
                  <li>Abrasion Resistance = Excellent</li>
                  <li>Corrosion Resistance = Good</li>
                  <li>Forming = Fair</li>



                </ul>

              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 style={{
            display: "flex",
            justifyContent: "center",
            color: "grey"
          }}>
            Various properties of AR500 Steel plates
          </h3>


          <Card sx={{
            minWidth: 300,
            border: "1px solid rgba(211,211,211,0.6)",
            minWidth: "450px",



            overflowY: "auto", // Enable vertical scroll if content overflows

            border: "1px solid rgba(211,211,211,0.6)",

            overflowX: "auto", // Enable vertical scroll if content overflows
          }}>
            <center> <CardHeader
              title="Mechanical Properties"
              action={
                <IconButton
                  onClick={() => setOpen(!open)}
                  aria-label="expand"
                  size="small"
                >
                  {open ? <KeyboardArrowUpIcon />
                    : <KeyboardArrowDownIcon />}
                </IconButton>
              }
            ></CardHeader></center>
            <div style={{
              backgroundColor: "rgba(211,211,211,0.4)",
              minWidth: 1310,
              maxHeight: 470,
            }}>
              <Collapse in={open} timeout="auto"
                unmountOnExit>
                <CardContent>
                  <center><img src={img1}></img></center>
                  <Container sx={{
                    height: 100,
                    lineHeight: 2
                  }}>

                  </Container>
                </CardContent>
              </Collapse>
            </div>
          </Card>
          <Card sx={{
            minWidth: 300,
            border: "1px solid rgba(211,211,211,0.6)",
            minWidth: "450px",



            overflowY: "auto", // Enable vertical scroll if content overflows

            border: "1px solid rgba(211,211,211,0.6)",

            overflowX: "auto", // Enable vertical scroll if content overflows
          }}>
            <center><CardHeader
              title="Chemical Composition"
              action={
                <IconButton
                  onClick={() => setOpen1(!open1)}
                  aria-label="expand"
                  size="small"
                >
                  {open1 ? <KeyboardArrowUpIcon />
                    : <KeyboardArrowDownIcon />}
                </IconButton>
              }
            ></CardHeader></center>
            <div style={{
              backgroundColor: "rgba(211,211,211,0.4)",
              minWidth: 1310,
              maxHeight: 510,
            }}>
              <Collapse in={open1} timeout="auto"
                unmountOnExit>
                <CardContent>
                  <center><img src={img2}></img></center>
                  <Container sx={{
                    height: 100,
                    lineHeight: 2
                  }}>

                  </Container>
                </CardContent>
              </Collapse>
            </div>
          </Card>
        </div>
        <div>

          <div className='to' style={{ color: 'black' }}>
            <h6 className='hhh'>  Advantages of AR500 Plates </h6>
            <p className='ffff'>AR500 plates offer a number of advantages over other types of steel plates, including:<br />
              <br /><ul>
                <li>Extremely high hardness and toughness</li>
                <li>Good formability and weldability
                </li>
                <li>Excellent resistance to wear and tear</li>
                <li>Long service life</li>
                <li>Low maintenance costs</li></ul>
              <br />
              <p className='ffff' style={{ color: 'black' }}> AR500 plates are used in a wide variety of industries, including mining, construction, agriculture, manufacturing, and transportation. Some common applications of AR500 plates include:</p>
              <ul>
                <li> Chute liners</li>
                <li> Hopper liners</li>
                <li> Conveyor belt liners</li>
                <li>  Crusher liners</li>
                <li> Truck beds</li>
                <li>  Wear plates for bulldozers and excavators</li>
                <li> Buckets for wheel loaders</li>














                <li>Blades for graders</li>

                <li>Armor plating for heavy machinery</li>
                <li>Liners for concrete mixers</li>
                <li>Plow blades</li>
                <li>Tiller blades</li>
                <li>Grain auger blades</li>
                <li>Harvester blades</li>
                <li>Manure spreader blades</li>
                <li>Wear plates for stamping presses</li>
                <li>Dies and punches for metal forming</li>
                <li>Blades for shearing and cutting machines</li>
                <li>Liners for mixing and grinding machines</li>
                <li>Chutes and hoppers for material handling systems</li>
                <li>Liners for dump truck beds</li>
                <li>Armor plating for security vehicles</li>
                <li>Wear plates for truck beds and trailers</li>
                <li>Liners for railcars</li><br />

                <i> AR500 plates are a versatile and durable material that can be used in a wide range of applications. They are known for their high resistance to wear, abrasion, and impact, making them ideal for use in harsh environments.</i></ul></p>
            <div></div></div>
        </div>
      </div>
    </div>
  )
}

export default AR500
