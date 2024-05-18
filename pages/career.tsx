// import { WithDefaultLayout } from '../components/DefautLayout';
// import { Footer } from 'antd/es/layout/layout';
import Link from "next/link";
import { Title } from "@/components/Title";
import { Page } from "@/types/Page";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const CareerPage: Page = () => {
  return (
    <div>
      <Title>Careers - CGV Cinema</Title>
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
            <div className="flex flex-col w-[980px] mx-auto gap-10">
              {/* ---- Parent untuk content */}
              <div className="w-[980px] h-full flex flex-col mt-4 border-4 border-[#E71A0F] p-[20px] mx-auto ">
                {/* start code here */}
                <h4 className="font-semibold">
                  WHO ARE WE ?
                </h4>
                <br />
                <h1>
                Welcome to CGV CINEMAS. In CGV CINEMAS the terms of &apos;Auditorium&apos; is what they call &quot;Theatre&quot; somewhere else, and it is where we screen all of our movies on the largest screens in Indonesia. CGV CINEMAS presents the concept of &quot;Cultureplex&quot;, where it brings entertainment by combining film, music, fine dining, and meeting point all in one place: The CGV CINEMAS.
                </h1>
                <br />
                <h1>
                All of the CGV staffs proudly call themselves &quot;stars&quot; because of their unique differences. The difference lays on the costumer oriented services. Each stars has the fresh and energetic bearings in giving services with warm and genial approaches, so each costumers can truly feel the amazing experience during their visit to CGV CINEMAS. All of these are based on CGV CINEMAS vision, &quot;to be the ultimate choice for the most unforgettable experiences&quot;.
                </h1>
                <br />
                <h1>
                Based on the vision, CGV CINEMAS is running a mission:
                </h1>
                <h1>
1. to provide the most innovative, fun and enjoyable entertainment experiences to all our customers, and

                </h1>
                <h1>
2. to create growth opportunities to all our stakeholders, employees, suppliers and community.
                </h1>
                <br />
                <h1>
                Do you have what it takes to be a stars? If you are interested in joining this marvelous team delivering the unforgettable experience in entertainment, fill the form and send it to us.
                </h1>
                <br />
                <h1>
                CAREER OPPORTUNITIES
                </h1>
                <br />
                <ol className="ml-6 list-upper-alpha font-[600]">
                <li>
                Finance & Accounting
                </li>
                <li>
                Purchasing
                </li>
                <li>
                Legal & Compliance
                </li>
                <li>
                IT Management
                </li>
                <li>
                Technical Team
                </li>
                <ol className = "list-lower-alpha ms-6 italic">
                  <li >Movie Engineer Support</li>
                </ol>
                <li>
                Operations
                </li>
                <ol className = "list-lower-alpha ms-6 italic">
                  <li>
                    Cinema Supevisor
                  </li>
                  <li>
                    Assistant Cinema Manager
                  </li>
                  <li>
                    Operations Accounting
                  </li>
                  <li>
                    Learning and Development
                  </li>
                </ol>
                <li>
                  Food & Beverages
                </li>
                <li>
                Content & Movie Programming
                </li>
                <li>
                Safety Management
                </li>
                <ol className = "italic list-lower-alpha ms-6">
                  <li>
                    Hygiene and Sanitation
                  </li>
                </ol>
                <li>Marketing</li>
                <li>Brand Identity Team</li>
                <li>Advertising Sales & Planning</li>
                <li>Site Development</li>
                <li>Project & Construction</li>
                <li>Design & Layout</li>
                <li>Finance & Accounting</li>
                <li>Human Resources</li>
              </ol>
              </div>
            <div className = "flex items-center justify-between">
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

export default CareerPage;
