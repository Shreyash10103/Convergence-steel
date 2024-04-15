import React, { useEffect, useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

const Calculator = () => {
  const [length, setlength] = useState(0);
  const [width, setwidth] = useState(0);
  const [area, setarea] = useState(0);
  const [thickness, setthickness] = useState(0);
  const [volume, setvolume] = useState(0);
  const [qtn, setqtn] = useState(0);
  const [weight, setweight] = useState(0);

  // Update area when length or width changes
  useEffect(() => {
    setarea(length * width);
  }, [length, width]);

  useEffect(() => {
    setvolume(length * width * thickness);
  }, [length, width, thickness]);
  useEffect(() => {
    setweight((volume * qtn * 7870 / 1000000000000).toFixed(3));
  }, [volume, qtn]);
  return (
    <div>
      <form>
        <div className="form-group row">
          <label className='col-sm-5 col-form-label'>Enter the length of plate(mm) : </label>
          <div class="col-sm-7">
            <input placeholder="Enter length" className='form-control' type='text' onChange={(e) => setlength(e.target.value)}></input><br /></div>

          <label className='col-sm-5 col-form-label'>Enter the width of plate(mm) :</label>
          <div class="col-sm-7">
            <input placeholder="Enter width" className='form-control' type='text' onChange={(e) => setwidth(e.target.value)} ></input><br />
          </div>
          <label className='col-sm-5 col-form-label' >Area of the plate:(mm² ) </label>
          <div class="col-sm-7">
            <input className='form-control' type='text' value={area}></input><br /></div>
          <label className='col-sm-5 col-form-label'>Enter the thickness(mm)</label>
          <div class="col-sm-7">
            <input placeholder="Enter thickness" className='form-control' type='text' onChange={(e) => setthickness(e.target.value)}></input><br /></div>
          <label className='col-sm-5 col-form-label'>Volume of plates(m&#13221;
            )</label>
          <div class="col-sm-7">
            <input type='text' className='form-control' value={volume}></input><br /></div>
          <label className='col-sm-5 col-form-label'>Enter the quantity</label>
          <div class="col-sm-7">
            <input type='text' className='form-control' onChange={(e) => setqtn(e.target.value)}></input><br /></div>
          <label className='col-sm-5 col-form-label'>Approx weight of the plate(Tons)</label>
          <div class="col-sm-7">
            <input type='text' value={weight} className='form-control' ></input></div>
        </div>



      </form >

    </div >
  )
}

export default Calculator
