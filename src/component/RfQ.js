import React, { useState } from 'react'
import '../component/RfQ.css'
import axios from 'axios'
import { server } from '../index.js';
import toast from 'react-hot-toast';
import Calculator from './Calculator.js';


const RfQ = () => {

  const [name, setname] = useState("");
  const [comp_name, setcompany] = useState("");
  const [email, setemail] = useState("");
  const [product, setSelects] = useState();
  const [thickness, setthick] = useState("");
  const [grade, setgrade] = useState([]);

  const [qnt, setquantity] = useState("");


  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      setgrade([...grade, e.target.value]); // Add the value to the grade array
    } else {
      // Remove the value from the grade array
      setgrade(grade.filter(item => item !== e.target.value));
    }
  }



  const SubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(`${server}/RFQ`, {
        name,
        comp_name,
        email,
        product,
        thickness,
        grade,
        qnt
      }, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true,
      });
      console.log("Response data:", data); // Log the response data
      toast.success(data.message);
      <alert>Submitted</alert>
    } catch (error) {
      console.error("Error:", error); // Log the error for further investigation
      <alert>Error</alert>

      // No response received, handle other errors
      toast.error(`${error.message} `);

      console.log(error);

    }
  };


  return (
    <div className='mainnn'>
      <form onSubmit={SubmitHandler} className='form1'>


        <h1 className='ti'>Request a Quote</h1>

        <div className="form-group">
          <label htmlFor='username' className='form-label'>Full Name</label>
          <input className='form-control' onChange={(e) => setname(e.target.value)} />



        </div>
        <div className="form-group">
          <label htmlFor='username' className='form-label'>Company Name</label>
          <input className='form-control' onChange={(e) => setcompany(e.target.value)} />



        </div>
        <div className='form-group'>
          <label htmlFor='Email' className='form-label'>Email</label>
          <input className='form-control' onChange={(e) => setemail(e.target.value)} />
        </div>
        <div className='form-group'>
          <label htmlFor='occupation' className='form-label'>Select Product</label>
          <select className='form-select' name="occupation" onChange={(e) => setSelects(e.target.value)}>
            <option value="n" >CRGO Coils</option>
            <option value="AR">AR steel plates</option>
            <option value="CRNO">CRNO</option>
            <option value="Inserts">Inserts</option>
            <option value="Ultra">Ultra High Strength Steel</option>
            <option value="stainless">Stainless Steel</option>


          </select>

          {product == "n" ? <div><div className='form-group'><label htmlFor='occupation' className='form-label'>Grade</label> <input className='form-control' name='username' />
          </div><div className='form-group'><label htmlFor='occupation' className='form-label'>Thickness</label> <br /><input onChange={(e) => handleCheckboxChange(e)} type="checkbox" id="html" name="fav_language" value="0.23" />
              <label for="0.23">0.23</label><br />
              <input onChange={(e) => handleCheckboxChange(e)} type="checkbox" id="css" name="fav_language" value="0.27" />
              <label for="0.27">0.27</label><br />
              <input onChange={(e) => handleCheckboxChange(e)} type="checkbox" id="javascript" name="fav_language" value="0.30" />
              <label for="javascript">0.30</label><br />
              <input onChange={(e) => handleCheckboxChange(e)} type="checkbox" id="javascript" name="fav_language" value="0.35" />
              <label for="javascript">0.35</label><br /><label htmlFor='Email' className='form-label'>Others : <input onChange={(e) => setgrade(e.target.value)} name='crgo_gr' /></label><br /><label htmlFor='Email' className='form-label'>Quantity in KGs </label>
              <input className='form-control' onChange={(e) => setquantity(e.target.value)} name='crgo_qt' /></div>
          </div> : product == "AR" ? <div><label htmlFor='occupation' className='form-label'>Thickness</label> <input className='form-control' name='username' /><label htmlFor='Email' className='form-label'>Grade </label><br /><input onChange={(e) => handleCheckboxChange(e)} type="checkbox" id="html" name="fav_language" value="AR400" />
            <label for="html">AR400</label><br />
            <input onChange={(e) => handleCheckboxChange(e)} type="checkbox" id="css" name="fav_language" value="AR450" />
            <label for="css">AR450</label><br />
            <input onChange={(e) => handleCheckboxChange(e)} type="checkbox" id="javascript" name="fav_language" value="AR500" />
            <label for="javascript">AR500</label><br />
            <input onChange={(e) => handleCheckboxChange(e)} type="checkbox" id="javascript" name="fav_language" value="S690QL" />
            <label for="javascript">S690QL</label><br /><label htmlFor='Email' className='form-label'>Others : <input className='form-cont
            rol' onChange={(e) => setgrade(e.target.value)} name='AR_oth' /></label><br /><label htmlFor='Email' className='form-label'>Quantity in KGs </label><input className='form-control' onChange={(e) => setquantity(e.target.value)} name='AR_qt' /></div> : product == "CRNO" ? <div><div className='form-group'><label htmlFor='occupation' className='form-label'>Thickness</label> <input className='form-control' onChange={(e) => setthick(e.target.value)} name='cngo_thick' /></div><label htmlFor='Email' className='form-label'>Grade </label><br /><input onChange={(e) => handleCheckboxChange(e)} type="checkbox" id="html" name="0.35" value="0.35" />
            <label for="html">0.35mm</label><br />
            <input onChange={(e) => handleCheckboxChange(e)} type="checkbox" id="css" name="0.5" value="0.5" />
            <label for="css">0.5mm</label><br />
            <input onChange={(e) => handleCheckboxChange(e)} type="checkbox" id="javascript" name="fav_language" value="0.65" />
            <label for="javascript">0.65mm</label>
            <br /><label htmlFor='Email' className='form-label'>Others : <input className='form-cont
            rol' onChange={(e) => setgrade(e.target.value)} name='cngo_oth' /></label><br /><label htmlFor='Email' className='form-label'>Quantity in KGs </label><input className='form-control' onChange={(e) => setquantity(e.target.value)} name='cngo_qt' /></div> : product == "Inserts" ? <div><label htmlFor='Email' className='form-label'>Insert geometries: </label><br /><input type="checkbox" onChange={(e) => handleCheckboxChange(e)} id="html" name="fav_language" value="Square" />
            <label for="html">Square </label><br />
            <input type="checkbox" onChange={(e) => handleCheckboxChange(e)} id="css" name="fav_language" value="Triangular" />
            <label for="css">Triangular</label><br />
            <input type="checkbox" onChange={(e) => handleCheckboxChange(e)} id="javascript" name="fav_language" value="80° Rhombic" />
            <label for="javascript">80° Rhombic</label><br />
            <input type="checkbox" onChange={(e) => handleCheckboxChange(e)} id="javascript" name="fav_language" value="55° Rhombic" />
            <label for="javascript">55° Rhombic</label><br /><input onChange={(e) => handleCheckboxChange(e)} type="checkbox" id="javascript" name="fav_language" value="35° Rhombic" />
            <label for="javascript">35° Rhombic</label><br /><input onChange={(e) => handleCheckboxChange(e)} type="checkbox" id="javascript" name="fav_language" value="Trigon" />
            <label for="javascript">Trigon</label><br /><input onChange={(e) => handleCheckboxChange(e)} type="checkbox" id="javascript" name="fav_language" value="Round" />
            <label for="javascript">Round</label><br /><label htmlFor='Email' className='form-label'>Others : <input className='form-cont
            rol' onChange={(e) => setgrade(e.target.value)} /></label><br /><label htmlFor='Email' className='form-label'>Quantity in KGs </label><input className='form-control' onChange={(e) => setquantity(e.target.value)} name='username' /></div> : product == "Ultra" ? <div><label htmlFor='Email' className='form-label'>Grade </label><br /><input onChange={(e) => handleCheckboxChange(e)} type="checkbox" id="javascript" name="fav_language" value="Grade 4140" />
            <label for="javascript">Grade 4140 steel</label><br /><input onChange={(e) => handleCheckboxChange(e)} type="checkbox" id="javascript" name="fav_language" value="Grade 4340" />
            <label for="javascript">Grade 4340 steel</label><br /><input onChange={(e) => handleCheckboxChange(e)} type="checkbox" id="javascript" name="fav_language" value="Grade 300M" />
            <label for="javascript">Grade 300M steel </label><br /><input onChange={(e) => handleCheckboxChange(e)} type="checkbox" id="javascript" name="fav_language" value="D-6ac Steel" /><label for="javascript">D-6a and D-6ac Steel </label><br /><input onChange={(e) => handleCheckboxChange(e)} type="checkbox" id="javascript" name="fav_language" value="Grade 6150 steel" /><label for="javascript">Grade 6150 steel </label><br /><input onChange={(e) => handleCheckboxChange(e)} type="checkbox" id="javascript" name="fav_language" value="Grade H11 modified" /><label for="javascript">Grade H11 modified</label><br /><input onChange={(e) => handleCheckboxChange(e)} type="checkbox" id="javascript" name="fav_language" value="Grade H13" /><label for="javascript">Grade H13 steel</label><br /><input onChange={(e) => handleCheckboxChange(e)} type="checkbox" id="javascript" name="fav_language" value="HP-9-4-30" /><label for="javascript">HP-9-4-30 steel</label><br /><input onChange={(e) => handleCheckboxChange(e)} type="checkbox" id="javascript" name="fav_language" value="AF1410" /><label for="javascript">AF1410 grade steel</label><br /><label htmlFor='Email' className='form-label'>Others : <input className='form-cont
            rol'  onChange={(e) => setgrade(e.target.value)} name='username' /></label><br /><label htmlFor='Email' className='form-label'>Quantity in KGs </label>
            <input className='form-control' onChange={(e) => setquantity(e.target.value)} name='email' />
          </div> : product == "stainless" ? <div><label htmlFor='Email' className='form-label'>Types </label><br /><input onChange={(e) => handleCheckboxChange(e)} type="checkbox" id="javascript" name="fav_language" value="Austenitic" />
            <label for="javascript">Austenitic</label><br /><input onChange={(e) => handleCheckboxChange(e)} type="checkbox" id="javascript" name="fav_language" value="Ferritic" />
            <label for="javascript">Ferritic</label><br /><input onChange={(e) => handleCheckboxChange(e)} type="checkbox" id="javascript" name="fav_language" value="Martensitic" />
            <label for="javascript">Martensitic </label><br /><input onChange={(e) => handleCheckboxChange(e)} type="checkbox" id="javascript" name="fav_language" value="Austenitic-ferritic" /><label for="javascript">Austenitic-ferritic (duplex) </label><br /><input onChange={(e) => handleCheckboxChange(e)} type="checkbox" id="javascript" name="fav_language" value="Precipitation Hardening" /><label>Precipitation Hardening</label><br /><label htmlFor='Email' className='form-label'>Others : <input className='form-cont
            rol'  onChange={(e) => setgrade(e.target.value)} name='username' /></label><br /><label htmlFor='Email' className='form-label'>Quantity in KGs </label>
            <input className='form-control' onChange={(e) => setquantity(e.target.value)} name='email' /></div> : ""}

          <div className='form-group'>
            <div className='bntic'>
              <button type="submit" className="cx">Submit</button>
            </div>


          </div>
        </div>
      </form >
      {product == "AR" ?

        <div className='calculator'>
          <Calculator />

        </div> : ""}

    </div>

  );
}

export default RfQ
