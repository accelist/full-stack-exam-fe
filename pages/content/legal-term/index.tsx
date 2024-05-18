import { WithDefaultLayout } from '@/components/DefautLayout'
import { Page } from '@/types/Page'
import React from 'react'

const LegalTermPage: Page = () => {
    return (
        <div className='p-6 space-y-4 max-w-[980px] mx-auto border-4 border-red-600 my-6'>
            <h1 className='text-2xl font-bold'>Privacy Policy for CGV Cinemas</h1>
            <p>
                At CGV Cinemas, accessible from www.cgv.id and application, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by CGV Cinemas and how we use it.
                If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
            </p>
            <h1>Log Files</h1>
            <p>
                CGV Cinemas follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this
                and a part of hosting services analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users
                movement on the website, and gathering demographic information. Our Privacy Policy was created with the help of the <span className='text-red-500'>Privacy Policy Generator.</span>
            </p>

            <h1 className='text-xl font-bold'>Google DoubleClick DART Cookie</h1>
            <p>
                Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies,
                to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet.
                However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network
                Privacy Policy at the following URL https://policies.google.com/technologies/ads
            </p>
            <h1 className='text-xl font-bold'>Privacy Policies</h1>
            <p>
                You may consult this list to find the Privacy Policy for each of the advertising partners of CGV Cinemas.
                Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their
                respective advertisements and links that appear on CGV Cinemas, which are sent directly to users browser.
                They automatically receive your IP address when this occurs. These technologies are used to measure \
                the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
                Note that CGV Cinemas has no access to or control over these cookies that are used by third-party advertisers.
            </p>
            <h1 className='text-xl font-bold'>Third Party Privacy Policies</h1>
            <p>
                CGV Cinemas Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective
                Privacy Policies of these third-party ad servers
                for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
                You can choose to disable cookies through your individual browser options. To know more detailed information about
                cookie management with specific web browsers, it can be found at the browsers respective websites. What Are Cookies?
            </p>
            <h1 className='text-xl font-bold'>Childrens Information</h1>
            <p>
                Another part of our priority is adding protection for children while using the internet.
                We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
                CGV Cinemas does not knowingly collect any Personal Identifiable Information from children under the age of 13.
                If you think that your child provided this kind of information on our website, we strongly encourage you to
                contact us immediately and we will do our best efforts to promptly remove such information from our records.
            </p>
            <h1 className='text-xl font-bold'>Childrens Information</h1>
            <p>
                This Privacy Policy applies only to our online activities and is valid
                for visitors to our website with regards to the information
                that they shared and/or collect in CGV Cinemas.
                This policy is not applicable to any information collected
                offline or via channels other than this website.
            </p>
            <h1 className='text-xl font-bold'>Childrens Information</h1>
            <p>
                By using our website, you hereby consent to our
                Privacy Policy and agree to its Terms and Conditions.
            </p>
            <h1 className='text-2xl font-bold'>LEGAL TERMS: CGV Cinemas Online Channel & Membership</h1>
            <p className='font-bold'>Issue:</p>
            <ul className='list-disc'>
                <li>Unauthorized usage of CGV Cinemas content by third parties without consent and knowledge of CGV Cinemas.</li>
                <li>Sale of CGV Cinemas tickets by third parties without consent and knowledge of CGV Cinemas.</li>
                <li>Utilization of Members Balance & Points by customers as resellers through unofficial channels not endorsed by CGV Cinemas.</li>
                <li>Use of Members Balance & Points by other customers without the permission of the rightful owner.</li>
            </ul>
            <p className='font-bold'>Terms:</p>
            <ol className='list-decimal list-inside'>
                <li >The content found on CGV Cinemas Website, Application, & Onsite is content selected by CGV Cinemas and has been approved for use by the film owner & partner. Usage by third parties without CGV Cinemas consent is considered an illegal act</li>
                <li>CGV Cinemas only sells official tickets through official channels and partners. CGV Cinemas does not guarantee the security of transactions or ticket availability outside of CGV Cinemas official channels.
                    The CGV Cinemas Points obtained and used by Members are a form of rewards from CGV Cinemas to the Member as a loyal customer of CGV Cinemas. CGV Cinemas Points used as a payment method are not for resale to customers or third parties.</li>
                <li>CGV Cinemas Points represent a value owned by each Member, and their usage requires a PIN & Password that is only known by the Member.</li>
                <li>The PIN & Password for CGV Cinemas Members are confidential and the responsibility of each customer. We are not responsible for the misuse of PIN & password by third parties.</li>
                <li>All successful transactions that occur in CGV Cinemas are final, and transactions that have already occurred cannot be canceled.</li>
                <li>CGV Cinemas is not responsible for transaction errors caused by customers.</li>
                <li>CGV Cinemas reserves the right to cancel transactions if there is suspicion of misuse of CGV Cinemas Points or transactions outside of CGV Cinemas official channels.</li>
            </ol>

            <br />
            <br />
            <p>
                Website: www.cgv.id | Facebook: CGV Cinemas Indonesia |
                Twitter: @CGV_ID | Instagram: @CGV.ID | LINE: CGV Cinemas
            </p>
        </div>
    )
}
LegalTermPage.layout = WithDefaultLayout;
export default LegalTermPage