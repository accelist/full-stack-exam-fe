// import { WithDefaultLayout } from '../components/DefautLayout';
// import { Footer } from 'antd/es/layout/layout';
import Link from "next/link";
import { Title } from "../components/Title";
import { Page } from "../types/Page";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { images } from "@/pages/lib/images";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CarouselControlsInside from "@/components/carousel";

const IndexPage: Page = () => {
  return (
    <div>
      <Title>Home</Title>
      <div className="flex-1 flex relative" style ={{backgroundImage: "url(https://cdn.cgv.id/assets/images/bg_c_bricks.png)"}}>
        <div className=" flex justify-around gap-16  w-full h-10 bg-[#fdfcf0]">
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
        className="flex bg-repeat-x h-32 items-center justify-center gap-4"
        style={{
          backgroundImage: "url(https://cdn.cgv.id/assets/images/bg-top.png)",
        }}
      >
        <div className = "flex mr-28 gap-8">
        <div className="flex w-36 flex-col justify-center">
          <Link href="./">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/CGV_logo.svg/1200px-CGV_logo.svg.png"
              alt=""
              className=" w-full mr-44"
            />{" "}
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
      <div
        className=" h-full flex justify-center bg-repeat-x bg-[#fdfcf0]"
        style={{
          backgroundImage: "url(https://cdn.cgv.id/assets/images/bg_c_bricks.png)"
          // backgroundImage:
          //   "url(https://cdn.cgv.id/assets/images/bg_c_bricks.png)",
        }}
      >
        <div className="w-full md:w-8/12" style={{}}>
          <div className="">
            <section className="flex w-[720px] mx-auto">
              <Swiper
                navigation
                pagination={{ type: "bullets" }}
                modules={[Navigation, Pagination]}
                className="h-[450px]"
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex h-full w-full items-center justify-center ">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        className=""
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </section>
            <div className="flex">
              <div
                className="w-full flex justify-center h-20 mt-3 border-t-4 border-t-black"  
              >
                <h1 className = "font-extrabold text-2xl">MOVIE SELECTION</h1>
                
              </div>
            </div>
              <CarouselControlsInside/>
          </div>
          <div className=" flex justify-evenly mt-16 flex-col items-center gap-5 border-t-4 border-t-black w-full ">
            <h1 className = "font-extrabold items-center text-2xl">CGV UPDATE</h1>
                <ul className = "flex gap-10 justify-evenly">
                    <li>
                        <img src="https://cdn.cgv.id/uploads_v2/promotions/2404/PR202404291657431685_thumb.jpg" alt="" />
                    </li>
                    <li>
                        <img src="https://cdn.cgv.id/uploads_v2/promotions/2405/PR202405171125514961_thumb.jpg" alt="" />
                    </li>
                    <li>
                        <img src="https://cdn.cgv.id/uploads_v2/promotions/2404/PR202404151613598999_thumb.jpg" alt="" />
                    </li>
                    <li>
                        <img src="https://cdn.cgv.id/uploads_v2/promotions/2401/PR202401242010086487_thumb.jpg" alt="" />
                    </li>
                </ul>
          </div>
        <div>
            <div className = " h-96 mt-10 border-t-4 border-t-black">
            </div>
        
        </div>
        </div>
      </div>
                {/* ---- footer */}
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
            {/* ----- footer */}
        
    </div>
  );
};

export default IndexPage;
