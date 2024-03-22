import AveryLogo from "../assets/logo-avery-hardoll-removebg-preview.png"
import CorkenLogo from "../assets/logo-corken-removebg-preview.png"
import FillriteLogo from "../assets/logo-fillrite-removebg-preview.png"
import MacnaughtLogo from "../assets/logo-macnaught-removebg-preview.png"
import TokicoLogo from "../assets/logo-tokico-1-removebg-preview.png"
import TotalLogo from "../assets/logo-total-control-systems-removebg-preview.png"

const logos = [
    {
        src: AveryLogo,
        alt: "Averylogo"
    },
    {
        src: CorkenLogo,
        alt: "Corken"
    },
    {
        src: FillriteLogo,
        alt: "fillrite"
    },
    {
        src: MacnaughtLogo,
        alt: "macnaught"
    },
    {
        src: TokicoLogo,
        alt: "tokico"
    },
    {
        src: TotalLogo,
        alt: "total"
    },
]


const LogoGrid = () => (
    <div>
        <div className="custom-screen">
            <h2 className="font-semibold text-sm text-gray-600 text-center">
                SOME OF OUR BRAND COLLECTION
            </h2>
            <div className="mt-6">
                <ul className="flex gap-x-10 gap-y-6 flex-wrap items-center justify-center md:gap-x-16">
                    {
                        logos.map((item, idx) => (
                            <a key={idx} className='max-w-[120px] mx-4 py-4 grayscale opacity-60 transition hover:grayscale-0 hover:opacity-100 hover:cursor-pointer'>
                                <img src={item.src} alt={item.alt} />
                            </a>
                        ))
                    }
                </ul>
            </div>
        </div>
    </div>
)

export default LogoGrid