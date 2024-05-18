// import { WithDefaultLayout } from '../components/DefautLayout';
// import { Footer } from 'antd/es/layout/layout';
import Link from "next/link";
import { Title } from "@/components/Title";
import { Page } from "@/types/Page";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SpecialPage: Page = () => {
  return (
    <div>
      <Title>Auditorium Special CGV Cinemas - CGV Cinema</Title>
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
      <div
        className=" h-full flex justify-center bg-repeat-x bg-[#fdfcf0]"
        
      >
        <div className="w-full md:w-8/12 h " style={{}}>
          <div className="">
            <div className="flex w-full">
              {/* ---- Parent untuk content */}
              <div
                className="w-full flex bg-repeat-x mt-2 flex-col" >
                {/* start code here */}
                <div className = "flex w-full justify-evenly mb-4 ">
                <Link href = "/"><span className = "ms-3 text-red-500 border-b-4 border-b-red-500">Auditoriums</span></Link>
                <Link href = "../special/sport"><span className = "ms-3">Sport</span></Link>
                </div>
                <ul className="gap-10 flex flex-col">
                  <li className = "w-[980px] mx-auto">
                    <img src="	https://cdn.cgv.id/uploads_v2/special_audi/web/thumbnails/2308/SA202308041819584206.jpg" alt="" className = "mx-auto transition-transform transform hover:scale-90 duration-300 ease-in-out" />
                    <h4 className=" text-[#E71A0F] font-bold">Gold Class</h4>
                  </li>
                  <li className = "w-[980px] mx-auto">
                    <img src="	https://cdn.cgv.id/uploads_v2/special_audi/web/thumbnails/2308/SA202308041826292094.jpg" alt="" className = "mx-auto transition-transform transform hover:scale-90 duration-300 ease-in-out" />
                    <h4 className=" text-[#E71A0F] font-bold">Velvet Class</h4>
                  </li>
                  <li className = "w-[980px] mx-auto">
                    <img src="	https://cdn.cgv.id/uploads_v2/special_audi/web/thumbnails/2308/SA202308041827191534.jpg" alt="" className = "mx-auto transition-transform transform hover:scale-90 duration-300 ease-in-out" />
                    <h4 className="text-[#E71A0F] font-bold">Satin Class</h4>
                  </li>
                  <li className = "w-[980px] mx-auto">
                    <img src="	https://cdn.cgv.id/uploads_v2/special_audi/web/thumbnails/2308/SA202308041828077499.jpg" alt="" className = "mx-auto transition-transform transform hover:scale-90 duration-300 ease-in-out" />
                    <h4 className="text-[#E71A0F] font-bold">Sweetbox</h4>
                  </li>
                  <li className = "w-[980px] mx-auto">
                    <img src="	https://cdn.cgv.id/uploads_v2/special_audi/web/thumbnails/2308/SA202308041830356804.jpg" alt="" className = "mx-auto transition-transform transform hover:scale-90 duration-300 ease-in-out" />
                    <h4 className="text-[#E71A0F] font-bold">4DX</h4>
                  </li>
                  <li className = "w-[980px] mx-auto">
                    <img src="	https://cdn.cgv.id/uploads_v2/special_audi/web/thumbnails/2308/SA202308041831366877.jpg" alt="" className = "mx-auto transition-transform transform hover:scale-90 duration-300 ease-in-out"  />
                    <h4 className="text-[#E71A0F] font-bold">ScreenX</h4>
                  </li>
                  <li className = "w-[980px] mx-auto">
                    <img src="	https://cdn.cgv.id/uploads_v2/special_audi/web/thumbnails/2308/SA202308041829003710.jpg" alt="" className = "mx-auto transition-transform transform hover:scale-90 duration-300 ease-in-out" />
                    <h4 className="text-[#E71A0F] font-bold">Starium</h4>
                  </li>
                  <li className = "w-[980px] mx-auto">
                    <img src="	https://cdn.cgv.id/uploads_v2/special_audi/web/thumbnails/2308/SA202308041829541327.jpg" alt="" className = "mx-auto transition-transform transform hover:scale-90 duration-300 ease-in-out" />
                    <h4 className="text-[#E71A0F] font-bold">SphereX</h4>
                  </li>
                  <li className = "w-[980px] mx-auto">
                    <img src="	https://cdn.cgv.id/uploads_v2/special_audi/web/thumbnails/2402/SA202402170700368566.png" alt="" className = "mx-auto transition-transform transform hover:scale-90 duration-300 ease-in-out" />
                    <h4 className="text-[#E71A0F] font-bold">Private Box</h4>
                  </li>
                </ul>
              </div>
            </div>
          
          </div>
        <div>
            <div className = " h-96 mt-4">
            </div>
        
        </div>
        </div>
      </div>


       

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

export default SpecialPage;

