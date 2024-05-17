// import { WithDefaultLayout } from '../components/DefautLayout';
// import { Footer } from 'antd/es/layout/layout';
import Link from 'next/link';
import { Title } from '../components/Title';
import { Page } from '../types/Page';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Navigation } from 'swiper/modules';
import {images} from '@/pages/lib/images';
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const IndexPage: Page = () => {
    return (
        <div>
            <Title>Home</Title>
            <div className = "flex-1 flex relative">
                <div className=' flex justify-around gap-16 bg-purple-500 w-full h-10'>
                    <div className='flex gap-3 items-center'>
                    <Link href = "https://www.facebook.com/CGV.ID" target='_blank'><img src = "https://cdn.cgv.id/assets/images/social/Facebook.jpg" alt = "" width={25} height={25} className = "rounded-md" /></Link>
                    <Link href = "https://www.instagram.com/cgv.id/" target='_blank'><img src = "https://cdn.cgv.id/assets/images/social/Instagram.jpg" alt = "" width={25} height={25} className = "rounded-md"/></Link>
                    <Link href = "https://www.threads.net/@cgv.id" target='_blank'><img src = "https://cdn.cgv.id/assets/images/social/Thread.jpg" alt = "" width={25} height={25} className = "rounded-md"/></Link>
                    <Link href = "https://www.tiktok.com/@cgv.id" target='_blank'><img src = "https://cdn.cgv.id/assets/images/social/Tiktok.jpg" alt = "" width={25} height={25} className = "rounded-md"/></Link>
                    <Link href = "https://twitter.com/CGV_ID" target='_blank'><img src = "https://cdn.cgv.id/assets/images/social/X.jpg" alt = "" width={25} height={25} className = "rounded-md"/></Link>
                    <Link href = "https://linevoom.line.me/user/_dW6OoBCQpPPdkV6Qx1el0GoqVZJ9jG0QbR2W7iY" target='_blank'><img src = "https://cdn.cgv.id/assets/images/social/Line.jpg" alt = "" width={25} height={25} className = "rounded-md"/></Link>
                    <Link href = "https://www.youtube.com/channel/UC2vfMMUMoAZd-RBGwA0-9Nw" target='_blank'><img src = "https://cdn.cgv.id/assets/images/social/Youtube.jpg" alt = "" width={25} height={25} className = "rounded-md"/></Link>

                    </div>
                    <div className = "flex items-center gap-16">
                        <Link href = "">News</Link>
                        <Link href = "/user">Login</Link>
                        <Link href = "">SignUp</Link>
                    </div>
                    
                </div>
                
            </div>
            <div className = "flex bg-repeat-x h-32 items-center justify-center gap-4"style ={{backgroundImage: "url(https://cdn.cgv.id/assets/images/bg-top.png)"}}>
                <div className = "flex w-36 flex-col justify-center">
                    <Link href = "./"><img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/CGV_logo.svg/1200px-CGV_logo.svg.png" alt ="" className=' w-full mr-44'/> </Link>
                </div>
                <div className='flex flex-col justify-center mb-5'>
                    <img src ="	https://cdn.cgv.id/assets/images/h2_cultureplex_new_resized.png" alt = "" className = "w-1/2 mx-auto mb-2 "/>
                    <div className = "flex gap-4">
                    <Link href= ""><li className='list-none font-bold font-sans'>MOVIES</li> </Link>
                    <Link href= ""><li className='list-none font-bold'>CINEMAS</li> </Link>
                    <Link href= ""><li className='list-none font-bold'>PROMOTION</li> </Link>
                    <Link href= ""><li className='list-none font-bold'>MEMBERSHIP</li> </Link>
                    <Link href= ""><li className='list-none font-bold'>CONCESSION</li> </Link>
                    <Link href= ""><li className='list-none font-bold'>SPECIAL</li> </Link>
                    </div>
                </div>
            </div>
            <div className = "bg-green-500 h-screen flex justify-center bg-repeat-x" style={{backgroundImage: "url(https://cdn.cgv.id/assets/images/bg_c_bricks.png)"}}>
                <div className ="w-full md:w-8/12 h">
                    <div className = "">
                        <section className='flex'>
                        <Swiper
                        navigation
                        pagination = {{type: 'bullets'}}
                        modules ={[Navigation, Pagination]}
                        className='h-96 w-full'
                        >
                            {images.map((image, index ) => (
                                <SwiperSlide key = {index}>
                                    <div className = "flex h-full w-full items-center justify-center">
                                        <Image src={image.src} alt={image.alt}
                                        className =' w-full' 
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        </section>
                    <div className = "flex">
                    <div className = "w-full flex bg-repeat-x justify-center h-20 mt-24" style={{backgroundImage: "url(https://cdn.cgv.id/assets/images/bg_h3_line.jpg)"}}>
                        <div className='w-1/2 flex items-center' style={{backgroundImage: "url(https://cdn.cgv.id/assets/images/h3_movie_selection_roboto.png)"}}>

                        </div>
                    </div>  
                    </div>
                    </div>
                    
                </div>


            </div>
            
            {/* md:w-2/3  */}
            {/* lg:w-1/2 */}
            
        </div>
    );
}

export default IndexPage;
