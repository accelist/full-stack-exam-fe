import { WithDefaultLayout } from '@/components/DefautLayout'
import { Page } from '@/types/Page'
import React from 'react'


const AboutUsPage: Page = () => {
    return (
        <>
            <div className='p-6 space-y-4 max-w-[980px] mx-auto border-4 border-red-600 my-6'>
                <h1>TENTANG CJ CGV INDONESIA</h1>
                <p>
                    PT. Graha Layar Prima, Tbk juga dikenal sebagai CJ CGV Cinemas (atau sebelumnya dikenal sebagai Blitz Megaplex)
                    adalah jaringan bioskop terkemuka di Indonesia yang
                    didirikan pertama kali pada tahun 2004 dan mengoperasikan bioskop pertamanya di Paris Van Java, Bandung pada tahun 2006.
                </p>
                <p>
                    CJ CGV memberikan pengalaman menonton lebih menyenangkan dengan kemajuan teknologi yang digunakan
                    seperti; 3D, 4DX, Screen X, SphereX, dan Dolby Atmos,
                    melalui beragam pilihan auditorium yaitu Regular Class, Velvet Class,
                    Gold Class, Satin Class, Sweetbox, Sky Seat dan Private Box.
                </p>

                <p>
                    Mengusung konsep Cultureplex dimana kami tidak hanya menyediakan tempat untuk menonton film, CJ CGV* CINEMAS turut memberi
                    ruang bagi beragam komunitas di sekitar lokasi CGV untuk melakukan aktivitas kesenian, seperti pertunjukan musik dan tarian,
                    pertemuan corporate, gathering, dan memberikan wadah kreasi serta mengekspresikan diri untuk masyarakat seluruh Indonesia.
                </p>

                <p>
                    Dengan kapasitas layar yang terus bertambah, CJ CGV memutarkan berbagai macam jenis film dari berbagai Negara seperti
                    India, Korea, Jepang, Thailand dan tentunya konten lokal dari dalam negeri. CJ CGV Indonesia menayangkan berbagai pilihan film dari rumah produksi internasional dan lokal, serta pembuat film independen dan studio anime. Dengan tayangan dari berbagai Negara seperti India, Korea, Thailand, Jepang dan tentunya konten dalam negeri,
                    auditorium CJ CGV juga dilengkapi dengan teknologi audio visual berkualitas tinggi dengan hasil resonansi suara yang jernih.
                </p>

                <p>
                    Hingga kini CJ CGV telah mengoperasikan 71 bioskop dan 408 layar yang tersebar di lebih dari
                    30 kota di seluruh Indonesia, dan akan terus melebarkan jaringan baru untuk memperkuat positioning
                    perusahaan dan menjangkau masyarakat dengan lebih luas.
                </p>
                <br />
                <br />
                <p>
                    Website: www.cgv.id | Facebook: CGV Cinemas Indonesia |
                    Twitter: @CGV_ID | Instagram: @CGV.ID | LINE: CGV Cinemas
                </p>
            </div>
            <div className='mt-4 flex w-[980px] gap-4 mx-auto mb-10'>
                <img className='w-full h-full border-4 border-black p-1' src="https://cdn.cgv.id/uploads_v2/marketing/2103/BN202103231718336836.jpg" alt="" />
                <img className='w-full h-full border-4 border-black p-1' src="https://cdn.cgv.id/uploads_v2/marketing/2103/BN202103231718336836.jpg" alt="" />
                <img className='w-full h-full border-4 border-black p-1' src="https://cdn.cgv.id/uploads_v2/marketing/2103/BN202103231718336836.jpg" alt="" />
            </div>
        </>
    )
}

AboutUsPage.layout = WithDefaultLayout;
export default AboutUsPage