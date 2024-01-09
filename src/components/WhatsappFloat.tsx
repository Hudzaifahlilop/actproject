import Logo from '../assets/whatsapplogo.png';

export default function WhatsappFloat() {
    return (
        <a href="https://wa.link/bq3aop">
            <button className="fixed bottom-0 right-0 z-99 mb-10 md:me-10 me-4">
                <img className='w-16 md:w-24 object-right' src={Logo} alt="facebook" />                
            </button>
        </a>
    );
  }