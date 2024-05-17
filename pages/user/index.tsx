import Link from 'next/link';
import { Title } from '@/components/Title';
import { Page } from '@/types/Page';
import { useState } from 'react';



const Login: Page = () => {
    
        const[email, setEmail] = useState('');
        const[password, setPassword] = useState('');
    
        const handleSubmit = () =>{
            console.log("email", email);
            console.log("password", password);
        }
    


    return (
        <div>
            <Title>Login</Title>
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
            <div className="flex min-h-screen items-center justify-center bg-gray-100 flex-col">
  <div className="bg-white rounded-lg shadow-md px-12 py-12 w-screen landscape-form flex flex-col">
    {/* Updated max-w-md to max-w-lg and increased px from 8 to 12 */}
    <h1 className="text-2xl font-bold text-center mb-8">Login</h1>
    <form onSubmit={handleSubmit} className="flex flex-wrap flex-col">
      <div className="w-full">
        {/* Removed md:w-1/2 md:pr-2 to make the input full width */}
        <div className="mb-6">
          <label htmlFor="email" className="text-gray-700 block mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
        </div>
      </div>
      <div className="w-full">
        {/* Removed md:w-1/2 md:pl-2 to make the input full width */}
        <div className="mb-6">
          <label htmlFor="password" className="text-gray-700 block mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
        </div>
      </div>
      <div className="w-full">
        <div className="flex justify-between items-center mb-6">
          <button
            type="submit"
            className="py-2 px-4 bg-indigo-500 text-white font-bold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </button>
          <a href="#" className="text-sm text-gray-600 hover:underline">
            Forgot Password?
          </a>
        </div>
      </div>
    </form>
  </div>
</div>




          
            
        </div>
    );
}

export default Login;