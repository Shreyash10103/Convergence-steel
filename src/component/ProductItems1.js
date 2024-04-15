import React from 'react'
import Products from './Products'

import "../styles/ProductItem1.css"
import img from '../picn1.jpg'
import { Table } from 'react-bootstrap'


const ProductItems1 = () => {
  const items = [
    {
      "name": " CRGO M3(0.23mm)",
      "image": " https://www.alligator-global.com/img/crgo-crngo.jpg",
      "description": "Convergence Steel's CRGO M3 grade has a precise thickness of 0.23mm, delivers exceptional magnetic properties and reliability, meeting stringent industry standards for electrical steel applications permeability and low core losses.It stands as a pinnacle of precision engineering, guaranteeing superior magnetic characteristics essential for demanding electrical steel applications"
    },
    {
      "image": "https://image.made-in-china.com/2f0j00tKDlfhkdZcgZ/Factory-Price-M4-Grade-CRGO-Electrical-Steel-Silicon-Steel-Sheet-in-Coils-for-Transformer.webp",
      "name": "CRGO M4(0.27mm)",
      "description": "CRGO (Cold Rolled Grain Oriented) M4 grade has a precise thickness of 0.27mm steel coils are specialized electrical steel coils used in transformers and electrical equipment. With low core losses, high magnetic permeability, and excellent electrical conductivity, CRGO steel coils enhance energy efficiency and magnetic performance.It is specifically engineered to minimize energy loss and enhance the efficiency of electrical devices."
    }/*, {
      "image": "https://www.tradeindia.com/_next/image/?url=https%3A%2F%2Ftiimg.tistatic.com%2Ffp%2F1%2F362%2Fcrgo-slit-coils-319.jpg&w=750&q=75",
      "name": "CRGO M5(0.30mm)",
      "description": "CRGO M5 grade coil is made through a cold rolling process, which enhances its magnetic properties and reduces power loss when used in transformers.M5 grade indicates a specific level of magnetic induction and core loss characteristics, ensuring efficient performance in electrical applications."
    },
    {
      "name": "CRGO M6(0.35mm)",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzSyeVgaEcZhWD0rLnu9Z2KxGxb_A2lDyNFQ&usqp=CAU",
      "description": "CRGO M6 is a type of electrical steel renowned for its superior magnetic properties, making it ideal for transformer cores and other critical electrical applications. With its high magnetic permeability and low core loss, CRGO M6 is specifically engineered to minimize energy loss and enhance the efficiency of electrical devices.",

    },*/
  ]

  return (

    <div>
      <Products />
      <h3><center>CRGO</center></h3>


      <div className='ppp'>
        <div className='row'>
          <div className='col-lg-6'>
            <p>Convergence Steel is a leading player in the industrial sector, specializing in the production and distribution of premium-grade CRGO (Cold Rolled Grain Oriented) coils.

              <p className='ffff' style={{ fontWeight: 'bold' }}>About CRGO Coils:</p>

              CRGO coils are a specialized form of electrical steel that find extensive application in the manufacturing of power transformers, electrical motors, and other electromagnetic devices. These coils are meticulously engineered to exhibit superior magnetic properties, low core loss, and high permeability, making them indispensable in modern electrical infrastructure.<br /><u>Uses in transformer:  </u>CRGO steel has high electrical resistivity and high magnetic properties in the rolling direction. It reduces core losses in transformers and increases corrosion resistance. The core makes up the bulk of the transformer so the material used must be integral to the overall performance of the transformer</p>

          </div>

          <div className='col-lg-6'><div ><center>
            <img className='mn' src='https://m.gescosteel.com/photo/gescosteel/editor/20220530172536_80556.jpg'></img></center>
          </div></div>


          <p>
            <div>
              <p className='ffff' style={{ fontWeight: 'bold' }}>Importance physical properties of CRGO Coils:</p>
              <Table striped="columns">
                <thead>
                  <tr>
                    <th>Properties</th>
                    <th>Values</th>

                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Density gm/cc</td>
                    <td>7.65</td>

                  </tr>
                  <tr>
                    <td>Silicon content %</td>
                    <td>3.10</td>
                  </tr>
                  <tr>
                    <td>Resistivity micro Ohm-centimeter</td>
                    <td>48.00</td>

                  </tr>
                  <tr>
                    <td>Ultimate Tensile Strength 0° to Rolling Direction Kg/mm²</td>
                    <td>32.60</td>

                  </tr>
                  <tr>
                    <td>Ultimate Tesile Strength 90° to Rolling Direction Kg/mm²</td>
                    <td>38.20</td>

                  </tr>
                  <tr>
                    <td>Slacking factor % M4(0.27mm)</td>
                    <td>96.00</td>

                  </tr>
                  <tr>
                    <td>Slacking factor % M5(0.30mm)</td>
                    <td>96.50</td>

                  </tr>
                  <tr>
                    <td>Slacking factor % M6(0.35mm)</td>
                    <td>97.00</td>

                  </tr>
                </tbody>
              </Table>
              <br />

              <p className='ffff' style={{ fontWeight: 'bold' }}>Electrical Properties of CRGO & Hi - B CRGO Grades</p>
              <p className='ffff'>
                Core Loss details of popularly used CRGO steel
                Manufacturing mills of CRGO Steel guarantee the core loss figure at flux density of 1.5 Tesla in case of CRGO conventional grain oriented steel and at 1.7 Tesla in case of CRGO HI-B-Steel and CRGO HI-B-LS Steel.
              </p>

              <div className='mvc'>

                <img className='cc' src={img} alt="description" /></div>
              <p>
                Grain oriented electrical steel is an important material in the production of energy efficient transformers and large, high performance generators. In the form of laminated, wound or punched sheets, it is the essential core material of distribution transformers, power transformers and small transformers</p>

              <p>
                Grain-oriented electrical steel usually has a silicon level of 3% of the crystal orientation relative to the sheet. It is used for the cores of power and distribution transformers, cold-rolled grain-oriented steel is often abbreviated to CRGO.</p>
              <p>
                Core laminations are the main part of an electrical transformer, and this attribute to 70% of a transformer cost. These core laminations are required to be cut from special steel called as Cold Rolled Grain Oriented Electrical Steel or popularly known as CRGO. The CRGO is a special quality of steel which have a special grain surface and comes in a thickness of <u>0.23 mm, 0.27 mm, 0.30 mm, 0.35 mm.(generally called M3, M4, M5 & M6).</u>  Lower the thickness of material better is the quality of material.</p>


              The Quality of CRGO is measured in terms of lower losses of electrical current, which flow in the core. The proper design of core and good quality of core material do a best job in combination. Mainly the core losses are measured in Watts per Kg.

              Every type of steel has “grains” which consist of “domains”. These “domains” are nothing but electrical charges oriented in any random direction. Therefore if a transformer were to be made of Mild Steel used as core material, the core loss would be approx. 16 to 17 w/kg at 1.5T/50Hz and the size of the transformer would be approx. 18 to 20 times the size of a transformer manufactured with GO steels
              <br /><br />
              <p className='ffff' style={{ fontWeight: 'bold' }}> Hi - CRGO Grades :</p>
              <Table responsive>
                <thead>
                  <tr>
                    <th colSpan='2'><center>Thickness</center>

                    </th>
                    <th><center>Grade</center></th>
                    <th colSpan='6'><center>Core Loss</center></th>
                    <th><center>Lamination Factor</center></th>


                  </tr>
                  <tr>
                    <th>mm

                    </th>
                    <th>mil

                    </th>
                    <th></th>
                    <th colSpan='1'><center>Max.<br />W(W/Kg)</center></th>
                    <th colSpan='4'><center>Typical<br />W(W/Kg)</center></th>
                    <th colSpan='1'><center>Typical<br />B(T)</center></th>
                    <th><center>Typical <br />% </center></th>


                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td rowSpan='4'>0.23</td>
                    <td rowSpan='4'>9</td>
                    <td><center>23-H85</center></td>
                    <td><center>0.85</center></td>
                    <td><center>0.57</center></td>
                    <td><center>0.78</center></td>
                    <td><center>0.34</center></td>
                    <td><center>0.46</center></td>
                    <td><center>1.91</center></td>
                    <td><center>97.5</center></td>
                  </tr>
                  <tr>

                    <td><center>23-90</center></td>
                    <td><center>0.90</center></td>
                    <td><center>0.58</center></td>
                    <td><center>0.80</center></td>
                    <td><center>0.35</center></td>
                    <td><center>0.48</center></td>
                    <td><center>1.91</center></td>
                    <td><center>97.5</center></td>
                  </tr>
                  <tr>

                    <td><center>23-95</center></td>
                    <td><center>0.95</center></td>
                    <td><center>0.64</center></td>
                    <td><center>0.90</center></td>
                    <td><center>0.38</center></td>
                    <td><center>0.53</center></td>
                    <td><center>1.92</center></td>
                    <td><center>97.2</center></td>

                  </tr>
                  <tr>

                    <td><center>23M-OH</center></td>
                    <td><center>1.00</center></td>
                    <td><center>0.66</center></td>
                    <td><center>0.93</center></td>
                    <td><center>0.39</center></td>
                    <td><center>0.54</center></td>
                    <td><center>1.92</center></td>
                    <td><center>97.2</center></td>

                  </tr>
                  <tr>
                    <td rowSpan='4'>0.27</td>
                    <td rowSpan='4'>11</td>
                    <td><center>27-H90</center></td>
                    <td><center>0.90</center></td>
                    <td><center>0.62</center></td>
                    <td><center>0.84</center></td>
                    <td><center>0.38</center></td>
                    <td><center>0.53</center></td>
                    <td><center>1.92</center></td>
                    <td><center>98.0</center></td>
                  </tr>
                  <tr>

                    <td><center>27-H95</center></td>
                    <td><center>0.95</center></td>
                    <td><center>0.65</center></td>
                    <td><center>0.88</center></td>
                    <td><center>0.39</center></td>
                    <td><center>0.52</center></td>
                    <td><center>1.91</center></td>
                    <td><center>98.0</center></td>
                  </tr>
                  <tr>

                    <td><center>27M-OH</center></td>
                    <td><center>1.03</center></td>
                    <td><center>0.72</center></td>
                    <td><center>0.99</center></td>
                    <td><center>0.43</center></td>
                    <td><center>0.59</center></td>
                    <td><center>1.91</center></td>
                    <td><center>98.1</center></td>
                  </tr>
                  <tr>

                    <td><center>27M-1H</center></td>
                    <td><center>1.09</center></td>
                    <td><center>0.74</center></td>
                    <td><center>1.03</center></td>
                    <td><center>0.44</center></td>
                    <td><center>0.61</center></td>
                    <td><center>1.91</center></td>
                    <td><center>98.1</center></td>
                  </tr>

                </tbody>
              </Table>
              <br />


            </div>
            <p className='ffff' style={{ fontWeight: 'bold' }}> CRGO BIS Standard Grade, Mill Equivalent Grades Of Various CRGO Producing Mills: </p>
            <p>Under IS standard IS 3024: 2015, every grain-oriented electrical steel sheet and strip (CRGO) is required to be included in the ISI Certification Scheme. </p>
            <Table responsive>
              <thead>
                <tr>
                  <th ><center>New Grades of CRGO as per BIS</center>

                  </th>
                  <th><center>AK Steel</center></th>
                  <th><center>COGENT</center></th>
                  <th><center>JFE</center></th>
                  <th><center>NIPPON</center></th>
                  <th><center>POSCO</center></th>
                  <th><center>TIKES</center></th>


                </tr>

              </thead>
              <tbody>
                <tr>

                  <td><center>23HP85d</center></td>
                  <td><center>TCH 0DR</center></td>
                  <td><center>M085-23P</center></td>
                  <td><center>23JGSD85</center></td>
                  <td><center>23ZDKH85</center></td>
                  <td><center>23PHD85</center></td>
                  <td><center>H 085-23</center></td>

                </tr>
                <tr>

                  <td><center>23HP 90d</center></td>
                  <td><center>TCH 0 C</center></td>
                  <td><center>M090-23P</center></td>
                  <td><center>23JGSD90</center></td>
                  <td><center>23ZDKH95</center></td>
                  <td><center>23PHD90</center></td>
                  <td><center>H 090-23</center></td>

                </tr>
                <tr>

                  <td><center>23CG 110</center></td>
                  <td><center>23M3 110</center></td>
                  <td><center>M110-23S</center></td>
                  <td><center>23JG 110</center></td>
                  <td><center></center></td>
                  <td><center></center></td>
                  <td><center>C 110-23</center></td>

                </tr>
                <tr>

                  <td><center>27HP 90d</center></td>

                  <td><center>TCH 1DR</center></td>

                  <td><center>M090-27P</center></td>

                  <td><center>27JGSD90</center></td>
                  <td><center>27ZDKH90</center></td>
                  <td><center>27PHD 90</center></td>
                  <td><center>H 090-27</center></td>


                </tr>
                <tr>

                  <td><center>27HP 95d</center></td>

                  <td><center></center></td>

                  <td><center>M095-27P</center></td>

                  <td><center>27JGSD95</center></td>
                  <td><center>27ZDKH95</center></td>
                  <td><center>27PHD 95</center></td>
                  <td><center>H 095-27</center></td>


                </tr>
                <tr>

                  <td><center>27HP 100</center></td>

                  <td><center>TCH1C</center></td>

                  <td><center>M100-27P</center></td>

                  <td><center>27JGH100</center></td>
                  <td><center>27MOH</center></td>
                  <td><center>27PHD 100</center></td>
                  <td><center>H 103-27</center></td>


                </tr>
                <tr>

                  <td><center>27HP 110</center></td>

                  <td><center></center></td>

                  <td><center></center></td>

                  <td><center>27JGH110</center></td>
                  <td><center>27H 110</center></td>
                  <td><center>27PG 110</center></td>



                </tr>
                <tr>

                  <td><center>27CG 120 </center></td>

                  <td><center>27M4 120</center></td>

                  <td><center>M120-27S</center></td>

                  <td><center>27M4</center></td>
                  <td><center>27PG 120</center></td>
                  <td><center>C 120-27</center></td>




                </tr>
                <tr>

                  <td><center>27CG 130 </center></td>

                  <td><center>27M4 130</center></td>

                  <td><center>M130-27S</center></td>

                  <td><center>27JG 130 </center></td>
                  <td><center></center></td>
                  <td><center></center></td>
                  <td><center>C 130-27</center></td>




                </tr>





              </tbody>
            </Table>

            <p className='ffff' style={{ fontWeight: 'bold' }}><br />Key Features of Convergence Steel's CRGO Coils:
            </p>

            <ul className='ffff'>
              <li>
                <u>High Magnetic Flux Density:</u> Convergence Steel's CRGO coils are engineered to provide exceptional magnetic flux density, ensuring optimal energy efficiency and performance in electrical applications.
              </li>
              <li>
                <u>Low Core Loss:</u> With advanced manufacturing processes and stringent quality control measures, our CRGO coils are designed to minimize core losses, resulting in enhanced energy conservation and reduced operating costs.
              </li>
              <li>
                <u>Uniform Grain Orientation:</u> We employ state-of-the-art grain-oriented silicon steel technology to ensure uniform grain orientation throughout the coil, optimizing magnetic properties and minimizing power loss.
              </li>
              <li>
                <u>Customization:</u> At Convergence Steel, we understand that each client's requirements are unique. Therefore, we offer customized solutions tailored to meet specific dimensional, electrical, and performance specifications.
              </li>
              <li>
                <u>Reliability and Durability:</u> Our CRGO coils undergo rigorous testing and quality assurance protocols to guarantee reliability, durability, and long-term operational excellence in demanding environments.
              </li>
            </ul>
            <br />
            <p className='ffff' style={{ fontWeight: 'bold' }}>
              Types of CRGO coils(we deliver): </p> </p>


        </div>

      </div>

      <div className='items'>      {items.map((item, index) => (

        <div key={index} className={`item-container6 ${index === 2 ? 'large' : ''}`}>
          <div>

            <img className='item-image' src={item.image} alt='item-image'>

            </img>
            <div className='product_type'>{item.name}</div>
            <div className='Product_description'>{item.description}</div>

          </div>


        </div>
      ))}

      </div>

    </div>
  )
}

export default ProductItems1
