import freshbooks from '../assets/freshbooks.svg'
import sendgrid from '../assets/sendgrid.svg'
import layers from '../assets/layers.svg'
import adobe from '../assets/adobe.svg'

const logos = [
    {
        src: freshbooks,
        alt: "freshbooks"
    },
    {
        src: sendgrid,
        alt: "sendgrid"
    },
    {
        src: layers,
        alt: "layers"
    },
    {
        src: adobe,
        alt: "adobe"
    },
]


const LogoGrid = () => (
    <div>
        <div className="custom-screen">
            <h2 className="font-semibold text-sm text-gray-600 text-center">
                DIPERCAYA OLEH PERUSAHAAN KELAS DUNIA
            </h2>
            <div className="mt-6">
                <ul className="flex gap-x-10 gap-y-6 flex-wrap items-center justify-center md:gap-x-16">
                    {
                        logos.map((item, idx) => (
                            <li key={idx}>
                                <img src={item.src} alt={item.alt} />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </div>
)

export default LogoGrid