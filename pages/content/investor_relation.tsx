import React from 'react';
import { CGVLayout } from '@/components/CGVLayout';
import { Page } from "@/types/Page";

const InvestorRelation: Page = () => {
    return (
        <div className="p-5">
            <div className="border-4 border-red-500 p-5 my-5 mx-auto max-w-4xl">
                <h2 className="text-2xl font-bold mb-4">Sekilas Tentang CGV</h2>
                <p>
                    PT Graha Layar Prima Tbk Perseroan atau yang lebih dikenal dengan CGV Cinemas didirikan pada tahun 2004 oleh sekelompok investor lokal yang memiliki pengalaman yang luas dalam pengembangan properti, hiburan, dan usaha kewirausahaan. Tahun 2006 merupakan salah satu tonggak sejarah Perseroan karena di tahun ini Perseroan berhasil membuka bioskop pertama Perseroan di Paris Van Java Bandung. Kemudian di tahun 2014 Perseroan menjadi Perusahaan bioskop pertama dan satu-satunya yang menjadi Perusahaan Tercatat di Bursa Efek Indonesia dan berkolaborasi dengan Global Cinema Player terkemuka asal Korea Selatan yakni CJ CGV.
                </p>
                <p className="mb-25">
                    Melalui visi Evolving Beyond Movies, No. 1 Cultureplex in Indonesia, CGV Cinemas hadir dengan konsep Cultureplex yang bertujuan untuk memberikan pengalaman menonton film tak terlupakan di tempat pertama, satu-satunya dan terbaik, dimana pengunjung dapat menikmati tak hanya pengalaman menonton film terbaik namun juga berbagai macam keseruan dan pengalaman menarik lainnya. Komitmen teguh Perseroan untuk menghadirkan Cultureplex sebagai konsep bioskop terbaru telah menjadi pendorong dibalik evolusi berkelanjutan Perseroan.
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

InvestorRelation.layout = CGVLayout;
export default InvestorRelation;
