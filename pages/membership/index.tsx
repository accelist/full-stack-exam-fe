import { CGVLayout } from "@/components/CGVLayout";
import { Collapse, Button } from "antd";
import Link from 'next/link';
import { Page } from "@/types/Page";


const { Panel } = Collapse;

const MembershipPage: Page = () => {
    return (
        <div>
            <div className="text-center py-8">
                <h1 className="text-5xl font-bold text-orange-800">MEMBER</h1>
                <h2 className="text-3xl font-bold text-orange-700">SIAP UNTUNG jadi CGV Member</h2>
                <p className="text-xl mt-4">Dapatkan reward eksklusif, diskon spesial, akses awal ke film terbaru, dan hadiah menarik lainnya.</p>
                <div className="flex justify-center mt-6">
                    <Link href="/user/register">
                        <Button className="mr-4 bg-orange-800 hover:bg-orange-700 text-white hover:text-white">JOIN SEKARANG</Button>
                    </Link>
                    <Link href="/user/login">
                        <Button className="bg-orange-800 hover:bg-orange-700 text-white  hover:text-white">MASUK</Button>
                    </Link>
                </div>
                <div className="flex justify-center mt-3">
                    <a href="https://apps.apple.com/id/app/cgv-cinemas-indonesia/id781405923" target="_blank" rel="noopener noreferrer">
                        <img src="https://www.cgv.id/landing/img/section_1/CRM-Page-AppStore.svg" alt="App Store" className="w-32 h-auto hover:opacity-75 transition-opacity duration-300" />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.blitz.blitzandapp1&utm_source=global_co&utm_medium=prtnr&utm_content=Mar2515&utm_campaign=PartBadge&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1&pli=1" target="_blank" rel="noopener noreferrer">
                        <img src="https://www.cgv.id/landing/img/section_1/CRM-Page-PlayStore.svg" alt="Play Store" className="w-32 h-auto hover:opacity-75 transition-opacity duration-300" />
                    </a>
                </div>
            </div>

            <div className="flex justify-center items-center h-screen overflow-auto">
                <div className="max-w-screen-lg w-full h-full overflow-auto">
                    <img
                        src="https://cdn.cgv.id/assets/images/main-member-v2-compressed.png"
                        alt="CGV Membership"
                        className="w-full h-auto"
                        style={{ objectFit: "contain" }}
                    />
                </div>
            </div>
            <div className="container mx-auto mt-8 text-center">
                <h2 className="text-red-500 text-3xl mb-4">FAQ</h2>
                <div className="max-w-3xl mx-auto bg-yellow">
                    <Collapse accordion>
                        <Panel header="Apa itu CGV Member?" key="1" className="panel">
                            <p>Program loyalti CGV Indonesia yang memberikan reward berupa cashback point di setiap transaksi 
                                customer dan reward tahunan berdasarkan total transaksi atau total visit.</p>
                        </Panel>
                        <Panel header="Apa itu transaksi?" key="2" className="panel">
                            <p>Transaksi adalah total pembelian tiket, snack dan minuman di CGV 
                                selama satu tahun terakhir yang dihitung setiap hari.</p>
                        </Panel>
                        <Panel header="Apa itu Visit?" key="3" className="panel">
                            <p>Visit adalah transaksi pembelian tiket dalam 1 hari. 
                                Penghitungan jumlah Visit dimulai 8 April 2024 hingga 31 Maret 2025.</p>
                        </Panel>
                        
                    </Collapse>
                </div>
            </div>
        </div>
    );
};

MembershipPage.layout = CGVLayout;
export default MembershipPage;
