import React from 'react';
import { CGVLayout } from '@/components/CGVLayout';
import { Page } from "@/types/Page";

const AboutUs: Page = () => {
    return (
        <div className="p-5">
            <div className="border-4 border-red-500 p-5 my-5 mx-auto max-w-4xl">
                <h2 className="text-2xl font-bold mb-4">TENTANG CJ CGV INDONESIA</h2>
                <p className="mb-4">
                    PT. Graha Layar Prima, Tbk juga dikenal sebagai CJ CGV Cinemas (atau sebelumnya dikenal sebagai Blitz Megaplex) adalah jaringan bioskop terkemuka di Indonesia yang didirikan pertama kali pada tahun 2004 dan mengoperasikan bioskop pertamanya di Paris Van Java, Bandung pada tahun 2006.
                </p>
                <p className="mb-4">
                    CJ CGV memberikan pengalaman menonton lebih menyenangkan dengan kemajuan teknologi yang digunakan seperti; 3D, 4DX, Screen X, SphereX, dan Dolby Atmos, melalui beragam pilihan auditorium yaitu Regular Class, Velvet Class, Gold Class, Satin Class, Sweetbox, Sky Seat dan Private Box.
                </p>
                <p className="mb-4">
                    Mengusung konsep Cultureplex dimana kami tidak hanya menyediakan tempat untuk menonton film, CJ CGV* CINEMAS turut memberi ruang bagi beragam komunitas di sekitar lokasi CGV untuk melakukan aktivitas kesenian, seperti pertunjukan musik dan tarian, pertemuan corporate, gathering, dan memberikan wadah kreasi serta mengekspresikan diri untuk masyarakat seluruh Indonesia.
                </p>
                <p className="mb-4">
                    Dengan kapasitas layar yang terus bertambah, CJ CGV memutarkan berbagai macam jenis film dari berbagai Negara seperti India, Korea, Jepang, Thailand dan tentunya konten lokal dari dalam negeri. CJ CGV Indonesia menayangkan berbagai pilihan film dari rumah produksi internasional dan lokal, serta pembuat film independen dan studio anime. Dengan tayangan dari berbagai Negara seperti India, Korea, Thailand, Jepang dan tentunya konten dalam negeri, auditorium CJ CGV juga dilengkapi dengan teknologi audio visual berkualitas tinggi dengan hasil resonansi suara yang jernih.
                </p>
                <p className="mb-8">
                    Hingga kini CJ CGV telah mengoperasikan 71 bioskop dan 408 layar yang tersebar di lebih dari 30 kota di seluruh Indonesia, dan akan terus melebarkan jaringan baru untuk memperkuat positioning perusahaan dan menjangkau masyarakat dengan lebih luas.
                </p>
                <p>
                    Website: www.cgv.id | Facebook: CGV Cinemas Indonesia |<br />
                    Twitter: @CGV_ID | Instagram: @CGV.ID | LINE: CGV Cinemas
                </p>
            </div>

            <div className="grid gap-x-2 gap-y-4 grid-cols-5 max-w-4xl mx-auto mt-10">
                <div className="col-span-1 border-4 border-black">
                    <a href="https://x.com/CGV_ID" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn2.avada.io/media/resources/8N19La8.jpg" alt="Image 1" className="w-full h-full object-cover" />
                    </a>
                </div>
                <div className="col-span-3 border-4 border-black">
                    <iframe
                        title="YouTube video"
                        className="w-full h-full object-cover"
                        src="https://www.youtube.com/embed/OOSir9RQMx0"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="col-span-1 border-4 border-black">
                    <a href="/membership" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn.cgv.id/uploads_v2/marketing/2103/BN202103231718336836.jpg" alt="Image 2" className="w-full h-full object-cover" />
                    </a>
                </div>
            </div>
        </div>
    );
};

AboutUs.layout = CGVLayout;
export default AboutUs;
