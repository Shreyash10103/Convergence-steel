import React from 'react'
import { useState } from "react";
import Card from "@mui/material/Card";
import Collapse from "@mui/material/Collapse";
import CardHeader from "@mui/material/CardHeader";
import Container from "@mui/material/Container";
import CardContent from "@mui/material/CardContent";
import '../styles/aaaaa.css'
import KeyboardArrowDownIcon from
  "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from
  "@mui/icons-material/KeyboardArrowUp";
import IconButton from "@mui/material/IconButton";
import { Table } from 'react-bootstrap';

const AR600 = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  return (
    <div className='contain32'>

      <div>
        <img className='img50' src='https://aakashsteelmart.com/wp-content/uploads/images/plate-sheet-coil/abrasion-resistant-plate-kazakhstan.jpg'></img>

        <div className='too'>
          <div>
            <h5 className='mmm'>
              AR 550 steel plates has a nominal hardness of 550 HBW and toughness close to AR 500. It gives higher wear resistance, but not at the expense of crack integrity. AR 550 offers wear life improvements when replacing lower hardness steel grades or manganese steels. Typical applications include liner plates for crushers, chutes and other processing equipment, or hammers in recycling.  </h5></div><div className='col'>
            <h6 className='hhh' style={{ color: 'black' }}>
              Properties of AR550 Steel Plate: </h6>
            <p className='ffff' style={{ color: 'black' }}>
              <ul>
                <li>
                  AR550 plate provides excellent properties in abrasion resistance, hardness and toughness. This quenched and
                  tempered product excels in downstream fabrication processes like laser cutting and plasma cutting, and has limited
                  bending capability. This product is used widely in mining, concrete, aggregate and various other industries where ultra
                  high hard steel is required.</li>
                <li>
                  AR550 plate provides excellent properties in abrasion resistance, hardness and toughness. This quenched and
                  tempered product excels in downstream fabrication processes like laser cutting and plasma cutting, and has limited
                  bending capability. This product is used widely in mining, concrete, aggregate and various other industries where ultra
                  high hard steel is required.</li></ul>
            </p>
            <div>
              <h3 style={{
                display: "flex",
                justifyContent: "center",
                color: "grey"
              }}>
                Various properties of AR550 Steel plates
              </h3>
              <Card sx={{
                minWidth: "450px",



                overflowY: "auto", // Enable vertical scroll if content overflows

                border: "1px solid rgba(211,211,211,0.6)",

                overflowX: "auto", // Enable vertical scroll if content overflows
              }}>
                <center><CardHeader sx={{
                  minWidth: 300
                }}
                  title="Mechanical and Chemical Properties"
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
                  minWidth: 1320,
                  maxHeight: 570,
                  backgroundColor: "rgba(211,211,211,0.4)"
                }}>

                  <Collapse in={open} timeout="auto"
                    unmountOnExit>
                    <CardContent className='sssss' >
                      <center>  <img src='https://www.researchgate.net/publication/293043862/figure/tbl1/AS:669042121658368@1536523480014/Mechanical-properties-of-cast-iron-with-vermicular-and-globular-type-graphite.png'></img></center>

                      <Container sx={{
                        height: 0,
                        lineHeight: 2
                      }}>

                      </Container>
                    </CardContent>
                  </Collapse>
                </div>
              </Card>

            </div>
            <p className='ffff' style={{ color: 'black' }}>AR550 plates offer a number of advantages over other types of steel plates, including:<br />
              <br /><ul>
                <li>Extremely high hardness and toughness</li>
                <li>Good formability and weldability
                </li>
                <li>Good Abrasion Resistance</li>
                <li>Long service life</li>
                <li>Low maintenance costs</li></ul>
              <br /></p>
            <p className='ffff' style={{ color: 'black' }}> AR550 plates are used in a wide variety of industries, including mining, construction, agriculture, manufacturing, and transportation. Some common applications of AR550 plates include:
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

                <i> AR550 plates are a versatile and durable material that can be used in a wide range of applications. They are known for their high resistance to wear, abrasion, and impact, making them ideal for use in harsh environments.</i></ul>
            </p>

            <p></p></div></div></div></div>
  )
}

export default AR600
