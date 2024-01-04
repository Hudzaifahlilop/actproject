import { Carousel } from 'flowbite-react';
import heroBackground from "../assets/backgroundutamawhite1.png";
import logo from "../assets/almanialogo.png";
import backgroundFlow from "../assets/background_watermeter.png";
import backgroundNozzle from "../assets/backgroundnozzlegun.png";


function CarouselHero() {
  const slideStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${heroBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: 0,
  };

  const slideStyle2 = {
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${backgroundNozzle})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const slideStyle3 = {
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${backgroundFlow})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };



  

  return (
    <div id='hero' className='relative'>
      <div className="inset-0 h-[700px] w-full">
        <Carousel>
          <div style={slideStyle} className="flex h-full items-center justify-center dark:text-white">
              <a href="javascript:void(0)" className='inline-flex gap-x-6 items-center p-1 pr-6 text-sm font-medium duration-150'> 
                  <img src={logo} alt="" />
              </a>
          </div>
          <div style={slideStyle2} className="flex flex-col h-full items-center justify-center dark:text-white">
            <h1 className="text-4xl text-white font-extrabold sm:text-6xl ms-3">
                Pilihan Terbaik <span className='text-[#fa0101]'>Produk Kami</span>
            </h1>
            <ul className="list-disc text-white font-bold sm:text-4xl text-3xl mt-8">
              <li>Flow Meter</li>
              <li>Water Meter</li>
              <li>Pump</li>
              <li>Nozzle Gun</li>
              <li>Aksesoris</li>
            </ul>
            
          </div>
          <div style={slideStyle3} className="flex h-full items-center justify-center dark:text-white">
            Slide 3
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default CarouselHero;
