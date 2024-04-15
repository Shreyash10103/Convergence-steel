import React from 'react';
import "../styles/ProductItem.css"
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Products from './Products';


import Calculator from './Calculator.js'
import 'bootstrap/dist/css/bootstrap.css';
const ProductItems = () => {
  const items = [
    {
      item_image: 'data:image/jpeg;base64,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',
      rating: {
        stars: 4.5,
        noOfReviews: 1400,
      },
      item_name: 'AR400',
      description: 'AR400 steel is designed to withstand wear and abrasion, making it suitable for applications where the material comes into contact with abrasive materials or surfaces.',
    },
    {
      item_image: 'data:image/jpeg;base64,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',
      rating: {
        stars: 4.7,
        noOfReviews: 1000,
      },
      item_name: 'AR450',
      description: 'The "AR" still stands for "abrasion-resistant," and the number 450 indicates a higher Brinell hardness number compared to AR400. AR450 steel is designed to provide even greater resistance to wear and abrasion in challenging environments.',
    },
    {
      item_image: 'https://149893212.v2.pressablecdn.com/wp-content/uploads/AR500-Image-3.jpg',
      rating: {
        stars: 4.9,
        noOfReviews: 1400,
      },
      item_name: 'AR500',
      description: 'AR500 steel plate is another grade of abrasion-resistant steel that is known for its high hardness and toughness, 500 indicates the Brinell hardness number, signifying its high level of hardness.',
    },
    {
      item_image: 'https://aakashsteelmart.com/wp-content/uploads/images/plate-sheet-coil/abrasion-resistant-plate-philippines.jpg',
      rating: {
        stars: 4.8,
        noOfReviews: 1000,
      },
      item_name: 'AR550',
      description: 'AR 550 offers wear life improvements when replacing lower hardness steel grades or manganese steels. Typical applications include liner plates for crushers, chutes and other processing equipment',
    },
    {
      item_image: 'https://5.imimg.com/data5/SELLER/Default/2023/8/337001348/DZ/GR/IB/2436862/wear-resistant-steel-ar-600-500x500.jpg',
      rating: {
        stars: 4.6,
        noOfReviews: 1200,
      },
      item_name: 'AR600',
      description: 'Similar to other abrasion-resistant steels, the "AR" in AR600 stands for "abrasion-resistant," and the number 600 indicates the Brinell hardness number, reflecting the materials high level of hardness.',
    },
    {
      item_image: 'https://5.imimg.com/data5/SELLER/Default/2022/12/KP/TT/IU/8842790/s690ql-steel-plate-500x500.png',
      rating: {
        stars: 4.8,
        noOfReviews: 1000,
      },
      item_name: 'S690QL Grade',
      description: 'S690QL grade plates are a type of high-strength, low-alloy (HSLA) steel plate that is known for its high yield strength, toughness, and weldability.It is used in applications where high strength and lightweight construction are required.',
    },



  ];

  return (
    <>
      <Products />
      <h3><center>AR Steel Plates</center></h3>

      <div>
        <div className='ppp'>
          <div className='row'>
            <div className='col-lg-6'>
              <p> Convergence Steel's AR (Abrasion Resistant) steel plate is a high-quality product designed to withstand the rigors of abrasive wear and impact, making it an ideal solution for applications requiring durability and longevity. <p className='ffff' style={{ fontWeight: 'bold' }}>About AR Steel Plates:</p>AR steel plate stands for Abrasion Resistant steel plate. It is a type of steel specifically designed to withstand abrasive wear and impact, making it suitable for use in demanding applications where durability and resistance to wear are critical factors. Convergence Steel Products, as a manufacturer or distributor, likely offers AR steel plates as part of their product line.</p>
            </div>

            <div className='col-lg-6'>
              <img className='mn' src='https://www.raexsteel.com/-/media/images/raex/raex-new/abrasion-resistant-steel/1920x1080-raex-abrasion-resistant-steel.jpg?m=20220630143459'></img>
            </div>
          </div>
          <p><p className='ffff' style={{ fontWeight: 'bold' }}>
            How the Quenched & Tempered Process Creates AR Plate</p>
            AR material is produced by quenching and tempering forged steel blocks, or ingots. During this process, the grain structure is changed to increase toughness and encourage formability (or, to be less brittle), and results in through-hardening of the material.

            Quenching and tempering (Q&T) is a two-part process:<br />


            <u>Quenching </u> occurs when steel brought to a high temperature – usually between 1,500-1,650-degrees Fahrenheit – is rapidly cooled with water. This process causes crystal structures to form within the steel, increasing hardness.
            <br />
            <u>Tempering </u> is the process of re-heating quenched steel to a below-critical temperature (around 300-700-degrees Fahrenheit), and then allowing the plate to cool in normal air temperatures.

            Reheating the material breaks down the crystal structures formed during the quenching process, while the long cooling allows the crystal structures to refrom – maintaining most of the strength and hardness, but adding to overall ductility.
            <p className='ffff' style={{ fontWeight: 'bold' }}>
              Mechanical Properties of AR steel plates:</p>
          </p>

          <Table responsive>
            <thead>
              <tr>
                <th>Grade</th>
                <th>Thickness S(mm)</th>
                <th>Yield Strength Rp0,2(N/mm2)

                </th>
                <th>Rm(N/mm2)</th>
                <th>Elongation A5%</th>
                <th>Impact Strength KV-20C</th>

              </tr>
            </thead>
            <tbody>
              <tr>
                <td>AR400</td>
                <td>2,5-12</td>
                <td>1050</td>
                <td>1250</td>
                <td>10,0</td>
                <td>25</td>
              </tr>
              <tr>
                <td>AR450</td>
                <td>2,5-12</td>
                <td>1200</td>
                <td>1500</td>
                <td>8,0</td>
                <td>20</td>
              </tr>
              <tr>
                <td>AR500</td>
                <td>2,5-12</td>
                <td>1250</td>
                <td>1600</td>
                <td>6,0</td>
                <td>20</td>
              </tr>
              <tr>
                <td>AR550</td>
                <td>2,5-12</td>
                <td>1400</td>
                <td>1800</td>
                <td>10,0</td>
                <td>22</td>
              </tr>
              <tr>
                <td>AR600</td>
                <td>2,5-12</td>
                <td>1550</td>
                <td>2100</td>
                <td>8,5</td>
                <td>13</td>
              </tr>
            </tbody>
          </Table>



          <p><p className='ffff' style={{ fontWeight: 'bold' }}>
            Here are some key features and characteristics of AR steel plate:</p>

            <ul className='ffff'>
              <li>
                <u>High Hardness</u>: AR steel plate is manufactured through a special heat treatment process that increases its hardness significantly. This hardness helps it resist deformation and denting when subjected to abrasive forces.
              </li>
              <li>
                <u>Abrasion Resistance</u>: As the name suggests, AR steel plate exhibits exceptional resistance to abrasion, which is the process of wearing away the surface of a material due to frictional forces. This property is particularly important in industries such as mining, construction, and material handling where equipment is subjected to constant abrasive wear.
              </li>
              <li>
                <u>Impact Resistance</u>: In addition to its abrasion resistance, AR steel plate also offers good impact resistance. This means it can withstand the force of impacts from rocks, debris, or other materials without deforming or cracking, providing long-lasting protection to equipment and structures.
              </li>
              <li>
                <u>Versatility</u>: AR steel plate is available in various grades and thicknesses to suit different applications. Different grades offer varying levels of hardness and abrasion resistance, allowing users to select the most appropriate grade for their specific needs.
              </li>
              <li>
                <u>Weldability</u>: While AR steel plate is generally harder than conventional structural steels, it is still weldable using appropriate welding techniques and procedures. This allows for the fabrication of customized components and structures according to project requirements.
              </li>
              <li>
                <u>Cost-Effective</u>: Despite its initial higher cost compared to standard steel plates, AR steel plate offers significant cost savings over time due to its extended service life and reduced need for maintenance and replacement.
              </li>
            </ul>
            <br /><br />
            <p className='ffff' style={{ fontWeight: 'bold' }}>Weight Calculator</p>
            <div className='row'>
              <div className='col-lg-8'>
                <Calculator />

              </div>
              <div className='col-lg-4'>
                <img className="fd " src="https://www.maiak-m.bg/UserFiles/pictures/24D97292-E8D9-F31B-8A1A-B0CE2C77D62F.png?h=206&cache"></img>
              </div>
            </div>
            <br />
            <p className='ffff' style={{ fontWeight: 'bold' }}>

              Applications of AR steel plates:</p> AR steel plate finds applications in a wide range of industries including mining, construction, agriculture, recycling, forestry, and manufacturing. It is used to manufacture wear-resistant components such as buckets, liners, chutes, crushers, hoppers, and conveyor systems, among others.</p><p className='ffff' style={{ fontWeight: 'bold' }}>
            Select your Product from list below: </p>



          <br />
        </div>
        <div className='items'>
          {items.map((item, index) => (
            <div key={index} className="item-container"><Link to={item.item_name} className='ddddddd'>
              <img className="item-image" src={item.item_image} alt="item image" />

              <div className="product_type">{item.item_name}</div>
              <div className="Product_description">{item.description}</div>
            </Link>

            </div>


          ))}

        </div >
      </div >
    </>
  );
};

export default ProductItems;
