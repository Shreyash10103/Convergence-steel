import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/services.css'
import img from '../im2.jpg'
const Services = () => {
  return (

    <div className='contain32'>

      <img className='img50' src='https://img.brainkart.com/subject/72.jpg'></img>

      <div className='ppp'>
        <div className="row">

          <div className="col-lg-6">

            <h2 className='kkk'>
              Machine Design and CAD Modelling
            </h2>
            <h5 className='text2'> Convergence Steel has highly experienced design engineers design custom industrial CNC machinery, including mills, lathes, wire EDM, sinker EDM, plasma cutters, water jet cutters, and electric discharge machines. Your complex machining service requires the best machines with the highest tolerances and largest capacities. Our designs leverage our existing successful designs to provide state-of-the-art water jet, plasma, and laser cutters, along with many more key machines. We also offer specialty machines, such as sheet metal works (Turret punch), wire bending machines, and hot-wire foam cutters.We analyze and implement automation modeling, drawings and documentation process using configurators and customization tools using logical programming to accelerate engineering lead time.</h5></div>
          <div className="col-lg-6"><img className="fgh" src="https://d2t1xqejof9utc.cloudfront.net/screenshots/pics/c808eac8b7b7a2e7137cfba8c972708a/large.jpeg"></img></div>

        </div>
        <div className='row'>
          <div className='col-lg-6'>
            <img className='cxc' src={img}></img>
          </div>
          <div className='col-lg-6'>
            <h6 className='hhh' > Overview</h6>
            <p className='hh'>3D modeling or CAD (Computer Aided Design) allows engineers and designers to build realistic computer models of parts and assemblies. These models can be then 3D Printed or CNC machined as well as used to run complex simulations. A wide range of parameters can be simulated such as strength or temperature resistance before any physical models have been created, enabling a much faster and cheaper workflow.


            </p>
          </div>

        </div>

        <div>
          <p className='ffff' style={{ color: 'black' }}>
            <ul>
              <li>
                Solid modeling creates solid 3d models as if they are actual parts, with a logical workflow which is similar to the processes which would be used to manufacture the part. Some of these operations include extruding, drilling and threading operations. Solid models can intersect, join and subtract objects from one another to create the desired part.<br /></li>

              <li>Another advantage of solid modeling is that it is usually parametric, meaning that changes, or parameters are saved at every stage of the modeling processes and can be edited at any time during the design. This is very useful as it allows features of the model to be quickly modified without needing to create the part from scratch.<br /></li>
              <li>
                Assembly modeling is also an important stage in solid modeling, allowing individual parts to be assembled together, forming complex models. Assemblies can be used to insert standard components such as fasteners or bearings, that have been downloaded directly from the manufacturers. Motion elements can also be applied to assemblies, allowing detailed motion analysis to be used to evaluate the mechanical performance of the design.<br /></li>
              <li>
                Surface modeling is usually used for more aesthetic features of a product. It is much easier to create more organic and free-form geometry using this type of CAD software. Many of the constraints found in solid modeling are not an issue with surface modeling, however, this comes at a cost of sometimes being less accurate.<br /></li>
              <li>
                As the name suggests surface modeling only contains surfaces of the part, with no solid interior. However, once the part has enough surfaces to close the part, it can be filled and then used for 3D printing. When developing designs using surface modeling, it can be hard to go back and make changes because usually it is not parametric.<br /></li>

              Each type of modeling software has benefits and drawbacks, depending on the type of design being produced this needs to be considered. Sometimes using both solid and surface modeling is needed to combine the benefits of each.<br /></ul>
            <p className='ffff' style={{ color: 'black' }}>            <i>    Our mechanical design services address these issues by closely working with the manufacturers, fabricators and design engineering firms to bridge the gaps between design and shop floor.





              Our CAD experts and mechanical design engineers adhere to these two principles and deliver comprehensive CAD drafting with detailed engineering specifications to develop ideas into products. From CAD modeling to proof of design concepts with FEA and CFD simulations and final shop drawings, our teams deliver onsite and offsite models as per industry standards and design guidelines of DFMA, ASME, BS ,etc</i></p>
          </p></div>
        <br />
        <Link to="/Consultation Services" className='rgt'><svg fill="none" height="34" viewBox="0 0 45 34" width="45" xmlns="http://www.w3.org/2000/svg"> <path d="M1 17H41.9632" stroke="#F47920" stroke-linecap="round" stroke-width="2"></path> <path d="M29.207 1L42.925 15.6273C43.6805 16.4329 43.64 17.6983 42.8347 18.454L28.0857 32.2929" stroke="#F47920" stroke-linecap="round" stroke-width="2"></path> </svg></Link>
        <br /><br />
      </div>

      <div>

      </div>

    </div>
  )
}

export default Services
