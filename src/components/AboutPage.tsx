import experienced from "../assets/heroimg.png"
import lengkap from "../assets/flwmtr.png"
import komitment from "../assets/commit.png"

export default () => {

    const team = [
        {
            avatar: `${experienced}`,
            name: "Berpengalaman",
            title: "Kami merupakan pemimpin terkemuka sebagai perusahaan yang menyediakan kebutuhan Flow Meter, Water Meter, dan perminyakan di seluruh Indonesia."
        },
        {
            avatar: `${lengkap}`,
            name: "Lengkap",
            title: "Layanan kami mencakup jasa service, maintenance, dan tera/kalibrasi untuk memastikan operasional Anda terjamin dengan baik."
        },
        {
            avatar: `${komitment}`,
            name: "Berkomitment",
            title: "Komitmen kami terhadap kualitas, keandalan, dan keamanan menjadi landasan utama dalam setiap layanan dan produk yang kami sediakan."
        }
        
    ]

    return (
        <section id="about"  className="py-14 sm:mt-0 md:mt-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-xxl mx-auto text-center ">
                    <h1 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Tentang Kami
                    </h1>
                    <p className="text-gray-600 mt-3">
                    Almania Central Teknik, sebuah perusahaan yang telah lama berdedikasi dalam menyediakan solusi terbaik untuk kebutuhan Flow Meter, Water Meter, dan peralatan perminyakan di seluruh wilayah Indonesia. Sebagai penyedia terkemuka, kami menawarkan beragam merek unggulan seperti Flow Meter, Water Meter, Pompa, Nozzle Gun, Hose Reel, Deep Stick, dan alat safety, semua dipilih dengan cermat untuk memenuhi standar kualitas tertinggi.
                    <br />
                    <br />
                    Dengan komitmen kami terhadap kepuasan pelanggan, Almania Central Teknik tidak hanya menyediakan produk berkualitas tinggi, tetapi juga memberikan layanan jasa yang komprehensif. Kami menawarkan jasa service untuk Flow Meter, melakukan maintenance berkala, serta Tera/kalibrasi untuk memastikan bahwa peralatan Anda tetap beroperasi secara optimal. Keahlian dan pengalaman kami dalam industri ini menjadikan Almania Central Teknik sebagai mitra yang dapat diandalkan untuk memenuhi segala kebutuhan peralatan dan layanan terkait di sektor perminyakan dan industri lainnya.
                    </p>              
                </div>
                <div className="mt-12">
                    <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 text-center">
                        {
                            team.map((item, idx) => (
                                <li key={idx}>
                                    <div className="w-full h-60 sm:h-52 md:h-56">
                                        <img
                                            src={item.avatar}
                                            className="w-full h-full object-contain object-center shadow-md rounded-xl"
                                            alt=""
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <h4 className="text-lg text-gray-700 font-semibold">{item.name}</h4>
                                        <p className="text-indigo-600">{item.title}</p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}