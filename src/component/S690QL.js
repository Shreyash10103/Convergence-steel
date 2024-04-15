import React from 'react'
import img1 from '../im9.jpg'
import img2 from '../im10.jpg'
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




const S690QL = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  return (
    <div className='contain32'>

      <div>
        <img className='img50' src='https://www.marcsteelindia.com/wp-content/uploads/2016/12/S690ql-steel-plates.jpg'></img>
        <div className='text121'>

        </div>
        <div className='too'>
          <div>
            <h5 className='mmm'>
              S690QL plates are a good choice for applications where high strength and lightweight construction are required. They are particularly well-suited for use in structural applications, where they can help to reduce material usage, transportation costs, and energy consumption. This steel is used in other applications such as heavy transportation, construction industry, machine building, and lifting equipment. We deliver products in customizable options to meet customer-specified requirements. </h5></div><div className='col'>
            <h6 className='hhh' style={{ color: 'black' }}>
              Properties of S690QL Steel Plate: </h6>
            <p className='ffff' style={{ color: 'black' }}>

              S690QL plates have higher payload capacity and are energy efficient, hence can be used in leaner structures. This steel is used in other applications such as heavy transportation, construction industry, machine building, and lifting equipment.They have good forming and welding properties. S690QL plates have higher payload capacity and are energy efficient, hence can be used in leaner structures. This steel is used in other applications such as heavy transportation, construction industry, machine building, and lifting equipment. We deliver products in customizable options to meet customer-specified requirements. <br /> <br />
              <ul><li>
                Thickness : 8-50 mm</li>
                <li>Width : 1,500mm to 2,500mm</li>
                <li>Length : 6,000mm to 12,000mm</li>
                <li>Heat Treatment : Q+T(quenched and Tempered )</li><li>Grade : S690QL EN10137-2 EN10025-6:2004, A709-100, DILLIMAX 690, NAXTRA 70, WELDOX 700, E690, JFE HITEN 780LE, ALFORM 700, S690 Q, S690 QL, S690 QL 1</li><br /></ul>
              Overall S690QL plates are a good choice for applications where high strength and lightweight construction are required. They are particularly well-suited for use in structural applications, where they can help to reduce material usage, transportation costs, and energy consumption.

              Note: S690QL plates are also known as EN 10025-6 Grade S690QL plates.</p></div>
          <h3 style={{ display: "flex", justifyContent: "center", color: "grey" }}>
            Various properties of S690QL Steel plates
          </h3>
          <Card sx={{
            minWidth: "450px",



            overflowY: "auto", // Enable vertical scroll if content overflows

            border: "1px solid rgba(211,211,211,0.6)",

            overflowX: "auto", // Enable vertical scroll if content overflows
          }}>
            <center><CardHeader
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
              maxHeight: 795,
              backgroundColor: "rgba(211,211,211,0.4)"
            }}>
              <Collapse in={open} timeout="auto"
                unmountOnExit>
                <CardContent>
                  <center><img src={img1}></img></center>

                  <Container sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 100,
                    lineHeight: 2,
                    textAlign: "center",
                  }}>

                  </Container>
                </CardContent>
              </Collapse>
            </div>
          </Card>
          <Card sx={{
            minWidth: 300,
            border: "1px solid rgba(211,211,211,0.6)"
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
              backgroundColor: "rgba(211,211,211,0.4)"
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
          <div className='to' style={{ color: 'black' }}>
            <h6 className='hhh'>  Advantages of S690QL Plates: </h6>
            <p className='ffff'>S690QL plates offer a number of advantages over other types of steel plates, including:<br />
              <ul>
                <li>    High yield strength

                </li>
                <li>Toughness

                </li><li>Weldability

                </li><li>Lightweight construction

                </li><li>Reduced material usage

                </li><li>Lower transportation costs

                </li><li>Increased energy efficiency</li></ul>
            </p>
            <p className='ffff' style={{ color: 'black' }}> S690QL plates are used in a wide variety of industries, including construction, energy, transportation, and manufacturing. Some common applications of S690QL plates include:<br />
              <ul>
                <li>    Structural beams and columns

                </li><li>Bridge girders

                </li><li>Crane booms

                </li><li>Offshore platforms

                </li><li>Wind turbine towers

                </li><li>Pressure vessels

                </li><li>Excavators and other heavy machinery</li>

                <li>Truck and trailer frames

                </li><li>Railway cars</li></ul>
              <i>S690QL plates are a versatile and durable material that can be used in a wide range of applications. They are known for their high strength, toughness, and weldability, making them ideal for use in demanding environments.</i></p>
          </div>


        </div>


      </div>

    </div>
  )
}

export default S690QL
