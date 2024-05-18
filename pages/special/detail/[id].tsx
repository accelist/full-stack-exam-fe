import { CGVLayout } from "@/components/CGVLayout";
import { Page } from "@/types/Page";
import sports from "@/data/sportData";
import auditoriums from "@/data/auditoriumData";
import Link from "next/link";
import { useRouter } from "next/router";

const SpecialDetailPage: Page = () => {
    const router = useRouter();
    const { id } = router.query;

    const sportSpecial = sports.find((special) => special.id === Number(id));
    const auditoriumSpecial = auditoriums.find((special) => special.id === Number(id));
    const special = sportSpecial || auditoriumSpecial;

    if (!special) {
        return <div>Special not found.</div>;
    }

    return (
        <>
            <div className="container mx-auto mt-8 flex justify-center items-center">
                <div className="max-w-4xl w-full">
                    <div key={special.id} className="mb-8 text-left overflow-hidden">
                            <Link href={`/special/detail/${special.id}`} passHref>
                                <div className="group">
                                    <div className="overflow-hidden rounded-md">
                                        <img
                                            alt={special.title}
                                            src={special.image_header_url}
                                            className="w-full h-auto transform transition-transform duration-300 group-hover:scale-110"
                                        />
                                    </div>
                                    <h2 className="text-red-500 mt-4 cursor-pointer">{special.title}</h2>
                                </div>
                            </Link>
                        </div>

                    <div className="flex justify-center items-center h-screen overflow-auto ">
                        <div className="max-w-screen-lg w-full h-full overflow-auto">
                            <img
                                src={special.image_content_url}
                                alt={special.title}
                                className="w-full h-auto"
                                style={{ objectFit: "contain" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

SpecialDetailPage.layout = CGVLayout;
export default SpecialDetailPage;
