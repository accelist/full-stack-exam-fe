import { CGVLayout } from "@/components/CGVLayout";
import { Page } from "@/types/Page";
import { useRouter } from "next/router";
import events from "@/data/eventData"; 

const NewsDetailPage: Page = () => {
    const router = useRouter();
    const { id } = router.query;
    const event = events.find((item) => item.id === Number(id));

    if (!event) {
        return <div>Event not found.</div>;
    }

    return (
        <div className="flex justify-center items-center h-screen overflow-auto ">
            <div className="max-w-screen-lg w-full h-full overflow-auto">
                <img
                    src={event.image_content_url}
                    alt={event.title}
                    className="w-full h-auto"
                    style={{ objectFit: "contain" }}
                />
            </div>
        </div>
    );
};

NewsDetailPage.layout = CGVLayout;
export default NewsDetailPage;
