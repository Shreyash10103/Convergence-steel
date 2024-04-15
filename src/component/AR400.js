import React from 'react'
import img1 from '../pi1.jpg'
import img2 from '../pi2.jpg'
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
import { useTable } from 'react-table';

const AR400 = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);




  return (
    <div className='contain32'>

      <div>
        <img className='img50' src='https://4.imimg.com/data4/WB/JU/MY-731101/abrasion-resistant-ar400-ar500-ar450-steel-plates.jpg'></img>
        <div className='text121'>

        </div>
        <div className='too'>
          <div>
            <h5 className='mmm'>
              AR400 grade plates are a type of abrasion-resistant steel plate that is known for its high hardness and toughness. They have a Brinell hardness of 360-440 BHN, which makes them ideal for use in applications where there is a high risk of wear and tear. AR400 plates are also known for their good formability and weldability.</h5>
            <div className='col'>
              <h6 className='hhh' style={{ color: 'black' }}>
                Properties of AR400 Steel Plate: </h6>
              <p className='ffff' style={{ color: 'black' }}>

                In addition to its general characteristics of being formable, while maintaining good abrasion resistance, AR400 steel also has the following mechanical properties:<br />
                <ul><li>
                  Machining = Fair</li>
                  <li> Bending = Good</li>
                  <li>  Corrosion Resistance = Good</li>
                  <li>Welding = Excellent</li>
                  <li>Wear Resistance = Great</li>
                  <li>Excellent resistance to both impact and sliding abrasion at a moderate cost.</li>
                  Recommended for: liners for mining and material handling equipment like dump trucks, material transfer chutes, storage bins, buckets, and hopper
                </ul>

              </p>
            </div>
          </div>
        </div>

        <div className='headdd'>
          <h3 style={{
            display: "flex",
            justifyContent: "center",
            color: "grey"
          }}>
            Various properties of AR400 Steel plates
          </h3>


          <Card sx={{
            minWidth: 300,
            border: "1px solid rgba(211,211,211,0.6)",
            minWidth: "450px",



            overflowY: "auto", // Enable vertical scroll if content overflows
            alignItems: "center",

            border: "1px solid rgba(211,211,211,0.6)",

            overflowX: "auto", // Enable ve
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
              backgroundColor: "rgba(211,211,211,0.4)",
              minWidth: 1310,
              maxHeight: 590,
              alignItems: "center",
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
            alignItems: "center",

            border: "1px solid rgba(211,211,211,0.6)",

            overflowX: "auto", // Enable ve
          }}>
            <center> <CardHeader
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
              maxHeight: 550,
              alignItems: "center",
            }}>
              <Collapse in={open1} timeout="auto"
                unmountOnExit>
                <CardContent>
                  <center><img src={img2}></img></center>
                  {/* <table {...getTableProps}>
                    <thead>
                      {
                        headerGroups.map(hg => {
                          <tr {...hg.getHeaderProps}>

                          </tr>
                        })
                      }
                      <tr>
                        <th>Brand</th>
                        <th>Mill </th>
                        <th>Mill Route</th>
                        <th>Heat treatment</th>
                        <th>Thickness(mm)</th>

                        <th>Chemical composition
                          <tr>
                            <th>CEV</th>
                            <th>C</th>
                            <th>Si</th>
                            <th>Mn</th>
                            <th>P</th>
                            <th>S</th>
                            <th>Als</th>
                            <th>Ti</th>
                            <th>Cr</th>
                            <th>Ni</th>
                            <th>B</th>

                          </tr>
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {data().map((i, index) => (
                        <tr key={index}>
                          <td>{i.brand}</td>
                          <td>{i.mill}</td>
                          <td>{i.millr}</td>
                          <td>{i.heat}</td>
                          <td>{i.thickness.min} - {i.thickness.max}</td>

                          <tr>
                            <td>{i.cev.min} - {i.cev.max}</td>
                            <td>{i.c}</td>
                            <td>{i.si}</td>
                            <td>{i.mn}</td>
                            <td>{i.p}</td>
                            <td>{i.s}</td>
                            <td>{i.al}</td>
                            <td>{i.ti}</td>
                            <td>{i.cr}</td>
                            <td>{i.ni}</td>
                            <td>{i.mo}</td>
                            <td>{i.b}</td>
                          </tr>
                        </tr>
                      ))}
                    </tbody>





                  </table> */}
                  <Container sx={{
                    height: 100,
                    lineHeight: 2,
                    alignItems: "center",

                  }}>

                  </Container>
                </CardContent>
              </Collapse>
            </div>
          </Card>
        </div>
        <div>

          <div className='to' style={{ color: 'black' }}>
            <h6 className='hhh'>  Advantages of AR400 Plates </h6>
            <p className='ffff'>AR400 plates offer a number of advantages over other types of steel plates, including:<br />
              <br /><ul>
                <li>High hardness and toughness</li>
                <li>Good formability and weldability
                </li>
                <li>Excellent resistance to wear and tear</li>
                <li>Long service life</li>
                <li>Low maint</li></ul>
              <br />
              <p className='ffff' style={{ color: 'black' }}> AR400 plates are used in a wide variety of industries, including mining, construction, agriculture, manufacturing, and transportation. Some common applications of AR400 plates include:</p>
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

                <i> AR400 plates are a versatile and durable material that can be used in a wide range of applications. They are known for their high resistance to wear, abrasion, and impact, making them ideal for use in harsh environments.</i></ul></p>
            <div></div></div>
        </div>
      </div >
    </div >
  )
}

export default AR400
