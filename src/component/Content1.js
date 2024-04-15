import React from 'react';
import '../styles/Content1.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';



const Content1 = () => {

  const data = [
    {
      name: "Machine Designing",
      img: "https://media.istockphoto.com/id/171347670/photo/engineering.jpg?s=612x612&w=0&k=20&c=ImhJgyLB2lhDTcZZisraOyQ4nJqs8iVCVj3_tbYgrYc=",
      content: "Convergence steel specializes in machine design consultancy services, offering innovative solutions tailored to meet the unique needs of clients across various industries. Our expert team combines technical expertise with creative problem-solving to develop cutting-edge machine designs that optimize performance, reliability, and efficiency."
    },
    {
      name: "Consultation Services",
      img: "https://img.freepik.com/free-photo/business-man-financial-inspector-secretary-making-report-calculating-checking-balance-internal-revenue-service-inspector-checking-document-audit-concept_1423-126.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709078400&semt=sph",
      content: "Convergence Steel offers expert advice and guidance to other companies in the steel industry, We offers comprehensive consultancy services, guiding clients through strategic decision-making processes and providing expert insights into various industries, including manufacturing, logistics, and technology. We provide consultants leverage their expertise to optimize operations, enhance efficiency, and drive sustainable growth for your business."
    },
    {
      name: "AR Steel Plates",
      img: "https://image.made-in-china.com/2f0j00IkNlDtHzJyUu/400-450-500-550-600-Wear-Resistant-Steel-Plate-Ar-Hb-Steel-Plate.webp",
      content: "Convergence Steel offers a diverse range of AR steel plates designed to withstand the most challenging conditions. These plates cater to various industries, providing durability and reliability in demanding applications. Trust us for superior AR steel solutions tailored to your specific needs."
    },
    {
      name: "CRGO Coils",
      img: "https://5.imimg.com/data5/JR/HJ/MY-1166210/crgo-steel-sheet-500x500.jpg",
      content: "Convergence steel specializes in offering high-quality CRGO (Cold Rolled Grain Oriented coils, providing efficient solutions for various industrial applications. Our CRGO coils are meticulously crafted to meet stringent standards, ensuring optimal performance and reliability in electrical transformers and related equipment. Trust TradePass for superior CRGO coil solutions tailored to your specific needs."
    },


  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 3
  };
  const settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (

    <div className='services' id="Productt">
      <div className='container mx-auto px-4 py-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          <Slider {...(window.innerWidth > 768 ? settings : settings1)}>
            {data.map((d, index) => (
              <div>
                <div key={index} className='card1'>
                  <div className='card'>
                    <img src={d.img} alt={d.name} className='image1' />
                  </div>
                  <div className='card2'>
                    <h3 className='headd'>{d.name}</h3>
                    <p className='bodyy'>{d.content}</p>



                  </div>


                </div>
                <div className='card6'>
                  <Link to={d.name}><button className='mt-4 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 custom-button'>Read More</button></Link>
                </div>



              </div>


            ))}
          </Slider>
        </div>

      </div>
    </div>
  );
};

export default Content1
