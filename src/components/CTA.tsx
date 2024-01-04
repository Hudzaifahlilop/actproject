import ButtonCTA from './Button';
import SectionWrapper from './SectionWrapper';
import cta from "../assets/cta.png"
import LogoGrid from './LogoGrid';

const CTA = () => {
    return (
        <SectionWrapper id="cta" className="pb-0 bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-rose-100 to-teal-100">
            <div className="custom-screen">
                <LogoGrid />
                <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex">
                    <div className="max-w-xl mt-6 md:mt-0 lg:max-w-2xl">
                        <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Mencapai Keunggulan Bisnis dengan <span className='text-[#fa0101]'>Solusi Produk Kami.</span>
                        </h2>
                        <p className="mt-3 text-gray-600">
                        Temukan solusi produk unggulan kami yang dapat membantu meningkatkan kinerja bisnis Anda. Hubungi kami sekarang untuk informasi lebih lanjut dan mulailah perjalanan menuju kesuksesan
                        </p>
                        <ButtonCTA />
                    </div>
                    <div className="flex-1 sm:mt-5">
                        <img src={cta} className="rounded-lg md:max-w-lg" alt="Create Successful Business Models with Our IT Solutions" />
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default CTA

