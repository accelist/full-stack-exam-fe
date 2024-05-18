// import { WithDefaultLayout } from '../components/DefautLayout';
// import { Footer } from 'antd/es/layout/layout';
import Link from "next/link";
import { Title } from "@/components/Title";
import { Page } from "@/types/Page";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const membershipComponent: Page = () => {
  return (
    <div>
      <Title>Login</Title>
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
        <div className="flex mr-28 gap-8">
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
          <div className="flex flex-col w-[980px] mx-auto">
            {/* ---- Parent untuk content */}
            <div className="w-[980px] h-full flex flex-col mt-4 border-4 border-[#E71A0F] p-[20px] mx-auto ">
              {/* start code here */}
              <h4 className="font-serif font-semibold">
                TENTANG CJ CGV INDONESIA
              </h4>
              <h1 className="mt-2 font-extralight">
                At CGV Cinemas, accessible from www.cgv.id and application, one
                of our main priorities is the privacy of our visitors. This
                Privacy Policy document contains types of information that is
                collected and recorded by CGV Cinemas and how we use it. If you
                have additional questions or require more information about our
                Privacy Policy, do not hesitate to contact us.
              </h1>
              <br />
              <h4 className="font-semibold"> Log Files</h4>
              <h1 className="mt-2 font-extralight">
                CGV Cinemas follows a standard procedure of using log files.
                These files log visitors when they visit websites. All hosting
                companies do this and a part of hosting services&apos; analytics. The
                information collected by log files include internet protocol
                (IP) addresses, browser type, Internet Service Provider (ISP),
                date and time stamp, referring/exit pages, and possibly the
                number of clicks. These are not linked to any information that
                is personally identifiable. The purpose of the information is
                for analyzing trends, administering the site, tracking users&apos;
                movement on the website, and gathering demographic information.
                Our Privacy Policy was created with the help of the {""}
                <Link href="" className="text-[#e71a0f]">
                  Privacy Policy Generator
                </Link>
                .
              </h1>
              <br />
              <h4 className="font-bold">Cookies and Web Beacons</h4>
              <h1>
                Like any other website, CGV Cinemas uses &quot;cookies&quot;. These
                cookies are used to store information including visitors&apos;
                preferences, and the pages on the website that the visitor
                accessed or visited. The information is used to optimize the
                users&apos; experience by customizing our web page content based on
                visitors&apos; browser type and/or other information. For more
                general information on cookies, please read{" "}
                <Link href="" className="text-[#e71a0f]">
                  the &quot;Cookies&quot; article from the Privacy Policy Generator
                </Link>
                .
              </h1>
              <br />
              <h4 className="font-bold">Google DoubleClick DART Cookie</h4>
              <h1>
                Google is one of a third-party vendor on our site. It also uses
                cookies, known as DART cookies, to serve ads to our site
                visitors based upon their visit to www.website.com and other
                sites on the internet. However, visitors may choose to decline
                the use of DART cookies by visiting the Google ad and content
                network Privacy Policy at the following URL
                <Link
                  href="https://policies.google.com/technologies/ads"
                  target="_blank"
                  className="text-[#e71a0f]"
                >
                  https://policies.google.com/technologies/ads
                </Link>
              </h1>
              <br />
              <h4 className="font-bold">Privacy Policies</h4>
              <h1>
                You may consult this list to find the Privacy Policy for each of
                the advertising partners of CGV Cinemas. Third-party ad servers
                or ad networks uses technologies like cookies, JavaScript, or
                Web Beacons that are used in their respective advertisements and
                links that appear on CGV Cinemas, which are sent directly to
                users&apos; browser. They automatically receive your IP address when
                this occurs. These technologies are used to measure the
                effectiveness of their advertising campaigns and/or to
                personalize the advertising content that you see on websites
                that you visit. Note that CGV Cinemas has no access to or
                control over these cookies that are used by third-party
                advertisers.
              </h1>
              <br />
              <h4 className="font-bold">Third Party Privacy Policies</h4>
              <h1>
                CGV Cinemas&apos;s Privacy Policy does not apply to other advertisers
                or websites. Thus, we are advising you to consult the respective
                Privacy Policies of these third-party ad servers for more
                detailed information. It may include their practices and
                instructions about how to opt-out of certain options. You can
                choose to disable cookies through your individual browser
                options. To know more detailed information about cookie
                management with specific web browsers, it can be found at the
                browsers&apos; respective websites. What Are Cookies?
              </h1>
              <br />
              <h4 className="font-bold">Children&apos;s Information</h4>
              <h1>
                Another part of our priority is adding protection for children
                while using the internet. We encourage parents and guardians to
                observe, participate in, and/or monitor and guide their online
                activity. CGV Cinemas does not knowingly collect any Personal
                Identifiable Information from children under the age of 13. If
                you think that your child provided this kind of information on
                our website, we strongly encourage you to contact us immediately
                and we will do our best efforts to promptly remove such
                information from our records.
              </h1>
              <br />
              <h4 className="font-bold">Online Privacy Policy Only</h4>
              <h1>
                This Privacy Policy applies only to our online activities and is
                valid for visitors to our website with regards to the
                information that they shared and/or collect in CGV Cinemas. This
                policy is not applicable to any information collected offline or
                via channels other than this website.
              </h1>
              <br />
              <h4 className="font-bold">Consent</h4>
              <h1>
                By using our website, you hereby consent to our Privacy Policy
                and agree to its Terms and Conditions.
              </h1>
              <br />
              <h4 className="font-bold text-xl">
                LEGAL TERMS: CGV Cinemas Online Channel & Membership
              </h4>
              <h1 className="font-semibold">Issue:</h1>
              <ul role="list" className="marker:text-red-600 list-disc ml-5">
                <li>
                  Unauthorized usage of CGV Cinemas content by third parties
                  without consent and knowledge of CGV Cinemas.
                </li>
                <li>
                  Sale of CGV Cinemas tickets by third parties without consent
                  and knowledge of CGV Cinemas.{" "}
                </li>
                <li>
                  Utilization of Member&apos;s Balance & Points by customers as
                  resellers through unofficial channels not endorsed by CGV
                  Cinemas.
                </li>
                <li>
                  Use of Member&apos;s Balance & Points by other customers
                  without the permission of the rightful owner.
                </li>
              </ul>
              <br />
              <h4 className="font-bold">Terms:</h4>
              <ol className="ml-6 list-lower-alpha">
                <li>
                  The content found on CGV Cinemas Website, Application, &
                  Onsite is content selected by CGV Cinemas and has been
                  approved for use by the film owner & partner. Usage by third
                  parties without CGV Cinemas&apos; consent is considered an illegal
                  act.
                </li>
                <li>
                  CGV Cinemas only sells official tickets through official
                  channels and partners. CGV Cinemas does not guarantee the
                  security of transactions or ticket availability outside of CGV
                  Cinemas official channels.
                </li>
                <li>
                  The CGV Cinemas Points obtained and used by Members are a form
                  of rewards from CGV Cinemas to the Member as a loyal customer
                  of CGV Cinemas. CGV Cinemas Points used as a payment method
                  are not for resale to customers or third parties.
                </li>
                <li>
                  CGV Cinemas Points represent a value owned by each Member, and
                  their usage requires a PIN & Password that is only known by
                  the Member.
                </li>
                <li>
                  The PIN & Password for CGV Cinemas Members are confidential
                  and the responsibility of each customer. We are not
                  responsible for the misuse of PIN & password by third parties.
                </li>
                <li>
                  All successful transactions that occur in CGV Cinemas are
                  final, and transactions that have already occurred cannot be
                  canceled.
                </li>
                <li>
                  CGV Cinemas is not responsible for transaction errors caused
                  by customers.
                </li>
                <li>
                  CGV Cinemas reserves the right to cancel transactions if there
                  is suspicion of misuse of CGV Cinemas Points or transactions
                  outside of CGV Cinemas&apos; official channels.
                </li>
              </ol>
            </div>
            <div className="flex items-center justify-between mt-5 gap-10">
              <Link href="../membership">
                <img
                  src=" https://cdn.cgv.id/uploads_v2/marketing/2103/BN202103231718336836.jpg"
                  alt=""
                  className="flex border-4 p-1 border-black"
                />
              </Link>
              <Link href="../membership">
                <img
                  src=" https://cdn.cgv.id/uploads_v2/marketing/2103/BN202103231718336836.jpg"
                  alt=""
                  className="flex border-4 p-1 border-black"
                />
              </Link>
              <Link href="../membership">
                <img
                  src=" https://cdn.cgv.id/uploads_v2/marketing/2103/BN202103231718336836.jpg"
                  alt=""
                  className="flex border-4 p-1 border-black"
                />
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
          <div className="items-center flex flex-1 justify-evenly border-t-4 border-t-black  border-b-4 border-b-black">
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
          <div className=" h-24 flex flex-col w-full gap-3 ">
            <ul className="flex  mt-1 ">
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
            <div className="flex h-12 w-full  justify-between ">
              <div className="flex items-center text-center gap-10 ">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/CGV_logo.svg/1200px-CGV_logo.svg.png"
                  alt=""
                  className="w-20"
                />
                <h1 className="font-sans text-xs">
                  COPYRIGHT 2024. CJ CGV All RIGHTS RESERVED.
                </h1>
              </div>
              <div className="flex items-center text-center ">
                <Link href="/">
                  <img
                    src="	https://cdn.cgv.id/assets/global/img/en_badge_web_generic.png"
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

        <div className="h-28 w-full bg-[url('https://cdn.cgv.id/assets/global/img/top-banner-default.jpg')]"></div>
      </div>
    </div>
  );
};

export default membershipComponent;
