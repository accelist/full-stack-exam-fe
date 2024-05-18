// import { WithDefaultLayout } from '../components/DefautLayout';
// import { Footer } from 'antd/es/layout/layout';
import Link from "next/link";
import { Title } from "@/components/Title";
import { Page } from "@/types/Page";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const investorRelationPage: Page = () => {
  return (
    <div>
      <Title>Investor Relation - CGV Cinema</Title>
      <div className="flex-1 flex relative">
        <div
          className=" flex justify-around gap-16 w-full h-10"
          style={{ background: "#fdfcf0" }}
        >
          <div className="flex gap-3 items-center">
            <Link href="https://www.facebook.com/CGV.ID" target="_blank">
              <img
                src="https://cdn.cgv.id/assets/images/social/Facebook.jpg"
                alt=""
                width={25}
                height={25}
                className="rounded-md"
              />
            </Link>
            <Link href="https://www.instagram.com/cgv.id/" target="_blank">
              <img
                src="https://cdn.cgv.id/assets/images/social/Instagram.jpg"
                alt=""
                width={25}
                height={25}
                className="rounded-md"
              />
            </Link>
            <Link href="https://www.threads.net/@cgv.id" target="_blank">
              <img
                src="https://cdn.cgv.id/assets/images/social/Thread.jpg"
                alt=""
                width={25}
                height={25}
                className="rounded-md"
              />
            </Link>
            <Link href="https://www.tiktok.com/@cgv.id" target="_blank">
              <img
                src="https://cdn.cgv.id/assets/images/social/Tiktok.jpg"
                alt=""
                width={25}
                height={25}
                className="rounded-md"
              />
            </Link>
            <Link href="https://twitter.com/CGV_ID" target="_blank">
              <img
                src="https://cdn.cgv.id/assets/images/social/X.jpg"
                alt=""
                width={25}
                height={25}
                className="rounded-md"
              />
            </Link>
            <Link
              href="https://linevoom.line.me/user/_dW6OoBCQpPPdkV6Qx1el0GoqVZJ9jG0QbR2W7iY"
              target="_blank"
            >
              <img
                src="https://cdn.cgv.id/assets/images/social/Line.jpg"
                alt=""
                width={25}
                height={25}
                className="rounded-md"
              />
            </Link>
            <Link
              href="https://www.youtube.com/channel/UC2vfMMUMoAZd-RBGwA0-9Nw"
              target="_blank"
            >
              <img
                src="https://cdn.cgv.id/assets/images/social/Youtube.jpg"
                alt=""
                width={25}
                height={25}
                className="rounded-md"
              />
            </Link>
          </div>
          <div className="flex items-center gap-16 font-serif font-bold">
            <Link href="../news">News</Link>
            <Link href="/user">Login</Link>
            <Link href="/user/register">SignUp</Link>
          </div>
        </div>
      </div>
      <div
        className="flex bg-repeat-x h-32 items-center justify-center gap-4 "
        style={{
          backgroundImage: "url(https://cdn.cgv.id/assets/images/bg-top.png)",
        }}
      >
        <div className = "flex mr-28 gap-8">
        <div className="flex w-36 flex-col justify-center ">
          <Link href="./">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/CGV_logo.svg/1200px-CGV_logo.svg.png"
              alt=""
              className=" w-full mr-44"
            />
          </Link>
        </div>
        <div className="flex flex-col justify-center mb-5">
          <img
            src="	https://cdn.cgv.id/assets/images/h2_cultureplex_new_resized.png"
            alt=""
            className="w-1/2 mx-auto mb-2 "
          />
          <div className="flex gap-4">
            <Link href="../movies">
              <li className="list-none font-bold font-sans">MOVIES</li>
            </Link>
            <Link href="../cinema">
              <li className="list-none font-bold">CINEMAS</li>
            </Link>
            <Link href="../promotion">
              <li className="list-none font-bold">PROMOTION</li>
            </Link>
            <Link href="../membership">
              <li className="list-none font-bold">MEMBERSHIP</li>
            </Link>
            <Link href="../concession">
              <li className="list-none font-bold">CONCESSION</li>
            </Link>
            <Link href="../special">
              <li className="list-none font-bold">SPECIAL</li>
            </Link>
          </div>
        </div>
      </div>
      </div>
      {/* ----------------- */}
      <div className=" h-full flex justify-center bg-[#fdfcf0]">
        <div className="w-full md:w-8/12  ">
            <div className="flex">
              {/* ---- Parent untuk content */}
              <div className="w-[980px] h-full flex flex-col mt-4 border-4 border-[#E71A0F] p-[20px] mx-auto ">
                {/* start code here */}
                <h4 className="font-serif font-semibold">
                  
                  TENTANG CJ CGV INDONESIA
                </h4>
                <br />
                <h1>
                  PT. Graha Layar Prima, Tbk juga dikenal sebagai CJ CGV Cinemas
                  (atau sebelumnya dikenal sebagai Blitz Megaplex) adalah
                  jaringan bioskop terkemuka di Indonesia yang didirikan pertama
                  kali pada tahun 2004 dan mengoperasikan bioskop pertamanya di
                  Paris Van Java, Bandung pada tahun 2006.
                </h1>
                <br />
                <h1>
                  CJ CGV memberikan pengalaman menonton lebih menyenangkan
                  dengan kemajuan teknologi yang digunakan seperti; 3D, 4DX,
                  Screen X, SphereX, dan Dolby Atmos, melalui beragam pilihan
                  auditorium yaitu Regular Class, Velvet Class, Gold Class,
                  Satin Class, Sweetbox, Sky Seat dan Private Box.
                </h1>
                <br />
                <h1>
                  Mengusung konsep Cultureplex dimana kami tidak hanya
                  menyediakan tempat untuk menonton film, CJ CGV* CINEMAS turut
                  memberi ruang bagi beragam komunitas di sekitar lokasi CGV
                  untuk melakukan aktivitas kesenian, seperti pertunjukan musik
                  dan tarian, pertemuan corporate, gathering, dan memberikan
                  wadah kreasi serta mengekspresikan diri untuk masyarakat
                  seluruh Indonesia.
                </h1>
                <br />
                <h1>
                  Dengan kapasitas layar yang terus bertambah, CJ CGV memutarkan
                  berbagai macam jenis film dari berbagai Negara seperti India,
                  Korea, Jepang, Thailand dan tentunya konten lokal dari dalam
                  negeri. CJ CGV Indonesia menayangkan berbagai pilihan film
                  dari rumah produksi internasional dan lokal, serta pembuat
                  film independen dan studio anime. Dengan tayangan dari
                  berbagai Negara seperti India, Korea, Thailand, Jepang dan
                  tentunya konten dalam negeri, auditorium CJ CGV juga
                  dilengkapi dengan teknologi audio visual berkualitas tinggi
                  dengan hasil resonansi suara yang jernih.
                </h1>
                <br />
                <h1>
                  Hingga kini CJ CGV telah mengoperasikan 71 bioskop dan 408
                  layar yang tersebar di lebih dari 30 kota di seluruh
                  Indonesia, dan akan terus melebarkan jaringan baru untuk
                  memperkuat positioning perusahaan dan menjangkau masyarakat
                  dengan lebih luas.
                </h1>
                <br />
                <br />
                <h1>
                  Website: www.cgv.id | Facebook: CGV Cinemas Indonesia |
                </h1>
                <h1>
                  Twitter: @CGV_ID | Instagram: @CGV.ID | LINE: CGV Cinemas
                </h1>
              </div>
            </div>
            <div className = "flex  w-full gap-5 mt-5 ">
                <Link href = "../membership">
                <img src=" https://cdn.cgv.id/uploads_v2/marketing/2103/BN202103231718336836.jpg" alt="" className="flex border-4 p-1 border-black" />
                </Link>
                <Link href = "../membership">
                <img src=" https://cdn.cgv.id/uploads_v2/marketing/2103/BN202103231718336836.jpg" alt="" className="flex border-4 p-1 border-black" />
                </Link>
                <Link href = "../membership">
                <img src=" https://cdn.cgv.id/uploads_v2/marketing/2103/BN202103231718336836.jpg" alt="" className="flex border-4 p-1 border-black" />
                </Link>
            </div>
          <div>
            <div className=" h-20 mt-4 bg-lime"></div>
          </div>

        </div>
      </div>
      {/* ----------------- */}

      <div className=" bg-[#fdfcf0] flex flex-col ">
                <div className="h-16 w-full flex items-center ">
                    <div className = "items-center flex flex-1 justify-evenly border-t-4 border-t-black  border-b-4 border-b-black">
                    <ul className = "flex gap-3">
                            <li>
                                <Link href ="/">4DX</Link>
                            </li>
                            <li>
                            <Link href ="/">SCREENX</Link>
                            </li>
                            <li>
                            <Link href ="/">SPHERE X</Link>
                            </li>
                             <li>
                            <Link href ="/">STARIUM</Link>
                            </li>
                             <li>
                            <Link href ="/">DOLBY ATMOS</Link>
                            </li>
                             <li>
                            <Link href ="/">VELVET</Link>
                            </li>
                             <li>
                            <Link href ="/">GOLDCLASS</Link>
                            </li>
                             <li>
                            <Link href ="/">SATIN SUITE</Link>
                            </li>
                             <li>
                            <Link href ="/">SWEETBOX</Link>
                            </li>
                            <li>
                            <Link href ="/">PRIVATEBOX</Link>
                            </li>
                        </ul>

                    </div>
        
                </div>
                <div className ="w-4/5 mx-auto">
                <div className = " h-24 flex flex-col w-full gap-3 " >

                <ul className = "flex  mt-1 ">
                        <Link href="/aboutUs" className = "ms-1 text-[#e71a0f] text-sm" >
                            About Us
                        </Link>
                        <p className="ms-5 text-sm"> | </p>
                        <Link href="/legalTerm"  className = "ms-3 text-[#e71a0f] text-sm">
                            Legal Terms
                        </Link>
                        <p className="ms-5 text-sm" > | </p>
                        <Link href="/career" className = "ms-3 text-[#e71a0f] text-sm">
                            Careers
                        </Link>
                        <p className="ms-5 text-sm"> | </p>
                        <Link href="/feedBack" className = "ms-3 text-[#e71a0f] text-sm" >
                            Feedback
                        </Link>
                        <p className="ms-5 text-sm"> | </p>
                        <Link href="/contactUs" className = "ms-3 text-[#e71a0f] text-sm" >
                            Contact Us
                        </Link>
                        <p className="ms-5 text-sm"> | </p>
                        <Link href="/investorRelation" className = "ms-3 text-[#e71a0f] text-sm" >
                            Investor Relation
                        </Link>
                    </ul>
                    <div className = "flex h-12 w-full  justify-between ">
                      <div className = "flex items-center text-center gap-10 ">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/CGV_logo.svg/1200px-CGV_logo.svg.png" alt="" className ="w-20"/>
                        <h1 className="font-sans text-xs">COPYRIGHT 2024. CJ CGV All RIGHTS RESERVED.</h1>
                        
                      </div>
                      <div className = "flex items-center text-center ">
                        <Link href ="/"><img src = "	https://cdn.cgv.id/assets/global/img/en_badge_web_generic.png" alt=""/></Link>
                        <Link href ="/"><img src ="https://cdn.cgv.id/assets/global/img/itunes-badge.svg" alt=""/></Link>
                        
                      </div>
                    </div>
                </div >
                </div>
                
                 <div className = "h-20 w-full bg-[url('https://cdn.cgv.id/assets/global/img/top-banner-default.jpg')]">

                 </div>
            </div>
    </div>
  );
};

export default investorRelationPage;
