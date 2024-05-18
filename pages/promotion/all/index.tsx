import { WithDefaultLayout } from "@/components/DefautLayout";
import { Page } from "@/types/Page";
import React from "react";

const PromotionPage: Page = () => {
  return (
    <div className="min-h-screen mx-auto w-full flex justify-center flex-col container gap-6 py-5">
      <img className="rounded-md" src="https://cdn.cgv.id/uploads_v2/promotions/2405/PR202405171125514961.jpg" alt="" />
      <img className="rounded-md" src="https://cdn.cgv.id/uploads_v2/promotions/2405/PR202405100933495889.jpg" alt="" />
      <img className="rounded-md" src="https://cdn.cgv.id/uploads_v2/promotions/2405/PR202405021526585021.jpg" alt="" />
      <img className="rounded-md" src="https://cdn.cgv.id/uploads_v2/promotions/2404/PR202404251623022054.jpg" alt="" />
      <img className="rounded-md" src="https://cdn.cgv.id/uploads_v2/promotions/2404/PR202404291657431685.jpg" alt="" />
    </div>
  );
};

PromotionPage.layout = WithDefaultLayout;
export default PromotionPage;
