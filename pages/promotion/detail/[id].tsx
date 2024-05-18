import { CGVLayout } from "@/components/CGVLayout";
import { Page } from "@/types/Page";
import { useRouter } from "next/router";
import promotions from "@/data/promotionData";

const PromotionDetailPage: Page = () => {
    const router = useRouter();
    const { id } = router.query;
    const promotion = promotions.find((promotion) => promotion.id === Number(id));

    if (!promotion) {
        return <div>Promotion not found.</div>;
    }

    return (
        <div className="flex justify-center items-center h-screen overflow-auto ">
            <div className="max-w-screen-lg w-full h-full overflow-auto">
                <img
                    src={promotion.image_content_url}
                    alt={promotion.title}
                    className="w-full h-auto"
                    style={{ objectFit: "contain" }}
                />
            </div>
        </div>
    );
};

PromotionDetailPage.layout = CGVLayout;
export default PromotionDetailPage;
