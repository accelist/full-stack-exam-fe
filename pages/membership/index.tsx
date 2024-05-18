import { WithDefaultLayout } from "@/components/DefautLayout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Page } from "@/types/Page";
import React from "react";

const MembershipPage: Page = () => {
  return (
    <div className="min-h-screen container mx-auto flex flex-col justify-center items-center p-4 mb-10">
      <img src="https://cdn.cgv.id/assets/images/header-member-v2-compressed.png" alt="" />
      <img src="https://cdn.cgv.id/assets/images/main-member-v2-compressed.png" alt="" />
      <h1 className="text-2xl font-bold">FAQ</h1>
      <Accordion type="single" collapsible className="w-1/2 mx-auto">
        <AccordionItem value="item-1">
          <AccordionTrigger>Apa itu CGV Member?</AccordionTrigger>
          <AccordionContent>
            Program loyalti CGV Indonesia yang memberikan reward berupa cashback point di setiap transaksi customer dan reward tahunan berdasarkan total transaksi atau total visit.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Apa itu transaksi?</AccordionTrigger>
          <AccordionContent>
            Transaksi adalah total pembelian tiket, snack dan minuman di CGV selama satu tahun terakhir yang dihitung setiap hari.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Apa itu Visit?</AccordionTrigger>
          <AccordionContent>
            Visit adalah transaksi pembelian tiket dalam 1 hari. Penghitungan jumlah Visit dimulai 8 April 2024 hingga 31 Maret 2025.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Bagaimana dengan level CGV Member saya sebelumnya?</AccordionTrigger>
          <AccordionContent>
            Jika sebelumnya kamu adalah General maka saat ini akan menjadi Classic. Jika sebelumnya kamu adalah VIP maka saat ini akan menjadi Gold. Namun jika kamu VIP dengan transaksi setahun mencapai Rp2.000.000, levelmu akan berubah menjadi VIP.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

    </div>
  )
};

MembershipPage.layout = WithDefaultLayout;
export default MembershipPage;
