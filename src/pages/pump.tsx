import flowmeter from "../assets/flowmeter.png";
import watermeter from "../assets/watermeter.png";
import hosereel from "../assets/hose reel.png";
import pump from "../assets/pump.png";
import nozzlegun from "../assets/nozzlegun.png";
import aksesoris from "../assets/aksesoris.png";

export default () => {

    const posts = [
        {
            title: "FLOWMETER",
            desc: "Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people what they did for their anxiety, and some",
            img: `${flowmeter}`,
            authorLogo: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            authorName: "Sidi dev",
            date: "Jan 4 2022",
            href: "javascript:void(0)"
        },
        {
            title: "WATERMETER",
            desc: "According to him, â€œI'm still surprised that this has happened. But we are surprised because we are so surprised.â€More revelations about Whittington will be featured in the film",
            img: `${watermeter}`,
            authorName: "Micheal",
            date: "Jan 4 2022",
            href: "javascript:void(0)"
        },
        {
            title: "PUMP",
            desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks. I realized today that I have all this stuff that",
            img: `${pump}`,
            authorName: "Luis",
            date: "Jan 4 2022",
            href: "javascript:void(0)"
        },
        {
            title: "HOSEREEL",
            desc: "The powerful gravity waves resulting from the impact of the planets' moons â€” four in total â€” were finally resolved in 2015 when gravitational microlensing was used to observe the",
            img: `${hosereel}`,
            authorName: "Lourin",
            date: "Jan 4 2022",
            href: "javascript:void(0)"
        },
        {
            title: "NOZZLEGUN",
            desc: "The powerful gravity waves resulting from the impact of the planets' moons â€” four in total â€” were finally resolved in 2015 when gravitational microlensing was used to observe the",
            img: `${nozzlegun}`,
            authorName: "Lourin",
            date: "Jan 4 2022",
            href: "javascript:void(0)"
        },
        {
            title: "AKSESORIS",
            desc: "The powerful gravity waves resulting from the impact of the planets' moons â€” four in total â€” were finally resolved in 2015 when gravitational microlensing was used to observe the",
            img: `${aksesoris}`,
            authorName: "Lourin",
            date: "Jan 4 2022",
            href: "javascript:void(0)"
        }
    ]
    
    return (
        <section className="sm:mt-0 md:mt-16 sm:pt-0 md:pt-5 mb-12 mx-auto px-4 max-w-screen-xl md:px-8">
            <div className="mt-10 text-center">
                <h1 className="text-3xl text-gray-800 font-semibold">
                     <span className='text-[#fa0101]'>Pump</span>
                </h1>
                <p className="mt-3 text-gray-500">
                Temukan inovasi terbaru, kualitas tinggi, dan keunggulan fitur dari produk-produk kami.
                </p>
            </div>
            <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {
                    posts.map((items, key) => (
                        <article className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm" key={key}>
                            <a href={items.href}>
                                <img src={items.img} loading="lazy" alt={items.title}  className="w-full h-48 rounded-t-md" />                            
                                <div className="pt-3 ml-4 mr-2 mb-2">
                                    <h3 className="text-center text-xl text-gray-900">
                                        {items.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mt-1">{items.desc}</p>
                                </div>
                                <ButtonProduk />
                            </a>
                        </article>
                    ))
                }
            </div>
        </section>
    )
}

import { Button } from 'flowbite-react';

function ButtonProduk() {
    return (
      <div className="flex flex-wrap gap-2 ml-4 mb-4">
        <Button href='' className='mt-5 bg-[#fa0101]'>Produk Selengkapnya</Button>
      </div>
    );
  }

