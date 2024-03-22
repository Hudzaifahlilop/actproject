import { useState } from 'react';
import logoAlmania from "../assets/almanialogo.png";
import { Dropdown } from 'flowbite-react';
import {Link} from 'react-router-dom';




export default () => {

  const [state, setState] = useState(false);

  // Replace javascript:void(0) path with your path
  const navigation = [
      { title: "Beranda", path: "/" },
      { title: "Tentang Kami", path: "/aboutus" },
      { title: "Semua Produk", path: "/semuaproduk" },
      { title: "Kontak Kami", path: "/kontak" }
  ]

  const styleBackground = {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  }

  return (
      <nav style={styleBackground} className="w-full h-21 md:border-0 md:fixed top-0 z-50">
          <div className="items-center px-2 max-w-screen-xl mx-auto md:flex md:px-8">
              <div className="flex items-center justify-between py-2 md:py-4 md:block">
                    <Link to={'/'}>
                        <img
                            src={logoAlmania}
                            width={200} 
                            height={50}
                            alt="almania logo"
                        />
                    </Link>
                  <div className="md:hidden">
                      <button className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                          onClick={() => setState(!state)}
                      >
                          {
                              state ? (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                  </svg>
                              ) : (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                  </svg>
                              )
                          }
                      </button>
                  </div>
              </div>
              <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${ state ? 'block' : 'hidden'}`}>
                  <ul className="justify-center font-bold items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                      {
                          navigation.map((item, idx) => {
                              return (
                                <li key={idx} className="text-gray-600 hover:text-indigo-600 cursor-pointer">
                                    <Link to={item.path}>
                                        { item.title }
                                    </Link>
                                </li>
                              )
                          })
                      } 
                      <DropdownNav />
                  </ul>
              </div>
              <div className="hidden md:inline-block">
                <Link to={"/semuaproduk"} className="py-3 px-4 text-white bg-[#fa0101] hover:bg-indigo-700 rounded-md shadow">
                    Mulai
                </Link>
              </div>
          </div>
      </nav>
  )
}

function DropdownNav() {
    return (
      <div className="text-gray-600 hover:text-indigo-600">
      <Dropdown label="Kategori Produk" inline >
        <Dropdown.Item>
            <Link to={"/flowmeter"}>Flow Meter </Link>
        </Dropdown.Item>
        <Dropdown.Item>
            <Link to={"/watermeter"}>Water Meter </Link>
        </Dropdown.Item>
        <Dropdown.Item>
            <Link to={"/nozzlegun"}>Nozzle Gun </Link>
        </Dropdown.Item>
        <Dropdown.Item>
            <Link to={"/pump"}>Pump</Link>
        </Dropdown.Item>
        <Dropdown.Item>
            <Link to={"/aksesoris"}>Aksesoris</Link>
        </Dropdown.Item>
      </Dropdown>
      </div>
    );
  }
