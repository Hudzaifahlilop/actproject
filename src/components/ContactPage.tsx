import ButtonContact from './ButtonContact';
import SectionWrapper from './SectionWrapper';
import { Card } from 'flowbite-react';

const ContactPage = () => {
    return (
        <SectionWrapper id="cta" className="pb-0 bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-rose-100 to-teal-100">
            <div className="custom-screen">
                <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex">
                    <div className="max-w-xl mt-0 md:mt-0 lg:max-w-2xl mb-5">
                        <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Hubungi Kami <span className='text-[#fa0101]'>Sekarang.</span>
                        </h2>
                        <p className="mt-3 text-gray-600">
                        Hubungi kami sekarang untuk informasi lebih lanjut dan mulailah perjalanan menuju kesuksesan
                        </p>
                        <ButtonContact />
                    </div>
                    <div className="flex-1 sm:mt-5">
                        <Card href="#" className="max-w-sm">
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Kantor Kami
                            </h5>
                            <p className="font-bold text-gray-700 dark:text-gray-400">
                                Jakarta-Barat
                            </p>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                Jl. Slamet Riyadi Nomor 382 · Laweyan
                            </p>
                        </Card>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default ContactPage

