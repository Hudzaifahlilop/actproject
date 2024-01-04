import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function ButtonCTA() {
    return (
      <div className="flex flex-wrap gap-2">
        <Button className='mt-5 bg-[#fa0101]'>
            <Link to="/semuaproduk">
                Lihat Produk
            </Link> 
        </Button>
      </div>
    );
  }

