import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Title } from "@/components/Title";
import { Page } from "@/types/Page";

// Define the schema using zod
const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

const LoginPage: Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormInputs) => {
    console.log("email", data.email);
    console.log("password", data.password);
  };

  return (
    <div>
      <Title>Masuk ke Akun CGV Cinemas - CGV Cinema</Title>
      <div className="flex-1 flex relative">
        <div
          className="flex justify-around gap-16 w-full h-10"
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
            <Link href="../user/register">SignUp</Link>
          </div>
        </div>
      </div>
      <div
        className="flex bg-repeat-x h-32 items-center justify-center gap-4"
        style={{
          backgroundImage: "url(https://cdn.cgv.id/assets/images/bg-top.png)",
        }}
      >
        <div className="flex mr-28 gap-8">
          <div className="flex w-36 flex-col justify-center">
            <Link href="./">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/CGV_logo.svg/1200px-CGV_logo.svg.png"
                alt=""
                className="w-full mr-44"
              />
            </Link>
          </div>
          <div className="flex flex-col justify-center mb-5">
            <img
              src="https://cdn.cgv.id/assets/images/h2_cultureplex_new_resized.png"
              alt=""
              className="w-1/2 mx-auto mb-2"
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
        className="flex w-[810] items-center justify-center flex-col min-h-[450px] h-[850px]"
        style={{ background: "#fdfcf0" }}
      >
        <div
          className="shadow-md px-12 py-12 landscape-form flex flex-col h-[310] w-[980px] relative"
          style={{ background: "#f0f0e1" }}
        >
          <div
            className="h-16 w-28 absolute left-0 top-0 -translate-y-full flex justify-center items-center rounded-t-lg"
            style={{ background: "#f0f0e1" }}
          >
            <Link href="" className="text-red-700">
              Login
            </Link>
          </div>
          <div
            className="h-16 w-28 absolute left-32 top-0 -translate-y-full flex justify-center items-center rounded-t-lg bg-red-700"
          >
            <Link href="../user/register" className="text-white">
              SignUp
            </Link>
          </div>
          <h1 className="text-2xl font-bold text-center mb-8">
            Login your Web profile
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center min-h-[250px] w-[45%] mx-auto"
          >
            <div className="w-full">
              <div className="mb-6">
                <input
                  type="email"
                  id="email"
                  placeholder="Enter email ..."
                  {...register("email")}
                  className="float-center w-full px-3 py-2 rounded-md border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  style={{ height: "48px", lineHeight: "48px" }}
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>
            <div className="w-full">
              <div className="mb-6">
                <input
                  type="password"
                  id="password"
                  placeholder="Enter password..."
                  {...register("password")}
                  className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  required
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>
            <div className="w-full">
              <div className="flex flex-col items-center mb-6 gap-4">
                <button
                  type="submit"
                  className="py-2 px-20 bg-red-500 w-full text-white font-bold rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
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

      <div className="bg-[#fdfcf0] flex flex-col">
        <div className="h-16 w-full flex items-center">
          <div className="items-center flex flex-1 justify-evenly border-t-4 border-t-black border-b-4 border-b-black">
            <ul className="flex gap-3">
              <li>
                <Link href="/">4DX</Link>
              </li>
              <li>
                <Link href="/">SCREENX</Link>
              </li>
              <li>
                <Link href="/">SPHERE X</Link>
              </li>
              <li>
                <Link href="/">STARIUM</Link>
              </li>
              <li>
                <Link href="/">DOLBY ATMOS</Link>
              </li>
              <li>
                <Link href="/">VELVET</Link>
              </li>
              <li>
                <Link href="/">GOLDCLASS</Link>
              </li>
              <li>
                <Link href="/">SATIN SUITE</Link>
              </li>
              <li>
                <Link href="/">SWEETBOX</Link>
              </li>
              <li>
                <Link href="/">PRIVATEBOX</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-4/5 mx-auto">
          <div className="h-24 flex flex-col w-full gap-3">
            <ul className="flex mt-1">
              <Link href="/aboutUs" className="ms-1 text-[#e71a0f] text-sm">
                About Us
              </Link>
              <p className="ms-5 text-sm"> | </p>
              <Link href="/legalTerm" className="ms-3 text-[#e71a0f] text-sm">
                Legal Terms
              </Link>
              <p className="ms-5 text-sm"> | </p>
              <Link href="/career" className="ms-3 text-[#e71a0f] text-sm">
                Careers
              </Link>
              <p className="ms-5 text-sm"> | </p>
              <Link href="/feedBack" className="ms-3 text-[#e71a0f] text-sm">
                Feedback
              </Link>
              <p className="ms-5 text-sm"> | </p>
              <Link href="/contactUs" className="ms-3 text-[#e71a0f] text-sm">
                Contact Us
              </Link>
              <p className="ms-5 text-sm"> | </p>
              <Link
                href="/investorRelation"
                className="ms-3 text-[#e71a0f] text-sm"
              >
                Investor Relation
              </Link>
            </ul>
            <div className="flex h-12 w-full justify-between">
              <div className="flex items-center text-center gap-10">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/CGV_logo.svg/1200px-CGV_logo.svg.png"
                  alt=""
                  className="w-20"
                />
                <h1 className="font-sans text-xs">
                  COPYRIGHT 2024. CJ CGV All RIGHTS RESERVED.
                </h1>
              </div>
              <div className="flex items-center text-center">
                <Link href="/">
                  <img
                    src="https://cdn.cgv.id/assets/global/img/en_badge_web_generic.png"
                    alt=""
                  />
                </Link>
                <Link href="/">
                  <img
                    src="https://cdn.cgv.id/assets/global/img/itunes-badge.svg"
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="h-20 w-full bg-[url('https://cdn.cgv.id/assets/global/img/top-banner-default.jpg')]"></div>
      </div>
    </div>
  );
};

export default LoginPage;
