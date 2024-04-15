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
        <img className='img50' src='https://www.leecosteel.com/pub/media/q_t-tempering-steel-plate.jpg'></img>
        <div className='text121'>

        </div>
        <div className='too'>
          <div>
            <h5 className='mmm'>
              AR 600 has a nominal hardness of 600 HBW and a uniquely high toughness for such a hard steel. While targeted at more severe wear conditions, AR 600 can still be cut and welded, making it an excellent choice for high-performance applications. AR 600 has been successfully used in cement plants for concrete brick molds, tables and compactors; as liner plates and screed plates in material handling and mineral processing; as liners for stationary concrete mixers; and as hammers and knives in recycling and waste fragmentation </h5></div><div className='col'>
            <h6 className='hhh' style={{ color: 'black' }}>
              Properties of AR600 Steel Plate: </h6>
            <p className='ffff' style={{ color: 'black' }}>
              <ul>
                <li>
                  AR600 plate provides excellent properties in abrasion resistance, hardness and toughness. This quenched and
                  tempered product excels in downstream fabrication processes like laser cutting and plasma cutting, and has limited
                  bending capability. This product is used widely in mining, concrete, aggregate and various other industries where ultra
                  high hard steel is required.</li>
                <li>
                  AR 600 has a nominal hardness of 600 HBW and a uniquely high toughness for such a hard steel. While targeted at more severe wear conditions, AR 600 can still be cut and welded, making it an excellent choice for high-performance applications. Hardox® 600 has been successfully used in cement plants for concrete brick molds, tables and compactors; as liner plates and screed plates in material handling and mineral processing; as liners for stationary concrete mixers; and as hammers and knives in recycling and waste fragmentation.</li></ul>
            </p>
            <div>
              <h3 style={{
                display: "flex",
                justifyContent: "center",
                color: "grey"
              }}>
                Various properties of AR600 Steel plates
              </h3>
              <Card sx={{
                minWidth: "450px",



                overflowY: "auto", // Enable vertical scroll if content overflows

                border: "1px solid rgba(211,211,211,0.6)",

                overflowX: "auto", // Enable vertical scroll if content overflows
              }}>
                <center> <CardHeader sx={{
                  minWidth: 300
                }}
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
                  minWidth: 1320,
                  maxHeight: 570,
                  backgroundColor: "rgba(211,211,211,0.4)"
                }}>

                  <Collapse in={open} timeout="auto"
                    unmountOnExit>
                    <CardContent className='sssss' >
                      <Table responsive>
                        <thead>
                          <tr>
                            <th><center>Properties</center></th>
                            <th><center>Values</center></th>


                          </tr>
                        </thead>

                        <tbody>
                          <tr>

                            <td><center>Surface Hardness</center></td>
                            <td><center>570-650 HBW(aim 550 HBW)</center></td>


                          </tr>
                          <tr>

                            <td><center>Yield Strength</center></td>
                            <td><center>220 ksi(1827MPa)</center></td>


                          </tr>
                          <tr>

                            <td><center>Tensile Strength</center></td>
                            <td><center>265 Ksi(1827Mpa)</center></td>


                          </tr>
                          <tr>

                            <td><center>Charpy Impacts (@-40 F)</center></td>

                            <td><center>23 ft-lbs(31.2J)Longitudinal, 18 ft-lbs(24.4J)transverse</center></td>




                          </tr>
                          <tr>

                            <td><center>Bend Radius</center></td>

                            <td><center>Material is formable based on application and condition</center></td>



                          </tr>



                        </tbody>
                      </Table>

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
            <h6 className='hhh' style={{ color: 'black' }}>Advantages of AR600 plate: </h6>
            <p className='ffff' style={{ color: 'black' }}>
              <ul>
                <li>                High Hardness:</li>

                <li>
                  Excellent Abrasion Resistance</li>
                <li> Extended Service Life</li>

                <li> Impact Resistance</li>

                <li>Reduced Maintenance Costs</li>

                <li>Versatility</li>

                <li> Weldability</li>
              </ul>
              <p className='ffff' style={{ color: 'black' }}> AR600 plates are used in a wide variety of industries, including mining, construction, agriculture, manufacturing, and transportation. Some common applications of AR600 plates include:
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

                  <i> AR600 plates are a versatile and durable material that can be used in a wide range of applications. They are known for their high resistance to wear, abrasion, and impact, making them ideal for use in harsh environments.</i></ul>
              </p>
            </p>



            <p></p></div></div></div></div>
  )
}

export default AR600
