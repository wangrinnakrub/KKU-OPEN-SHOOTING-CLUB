"use client";
import { useState } from "react";

const announcements = [
  { id: "demo-1", title: "ตัวอย่าง: เปิดรับสมัครการแข่งขัน", date: "01/01/2026", detail: "ข้อมูลจำลองสำหรับแสดงหน้าตาเว็บไซต์ ไม่มีการเปิดรับสมัครจริง" },
  { id: "demo-2", title: "ตัวอย่าง: แจ้งกำหนดการ", date: "02/01/2026", detail: "กำหนดการนี้เป็นข้อมูลตัวอย่าง ไม่ใช่ประกาศจากชมรม" },
  { id: "demo-3", title: "ตัวอย่าง: วิธีเตรียมตัวก่อนวันแข่งขัน", date: "03/01/2026", detail: "ตัวอย่างข้อความแนะนำให้ตรวจสอบเวลา สถานที่ และอุปกรณ์ก่อนเข้าร่วมกิจกรรม" },
  { id: "demo-4", title: "ตัวอย่าง: รายชื่อผู้สมัครที่ผ่านการตรวจสอบ", date: "04/01/2026", detail: "รายการนี้เป็นตัวอย่าง ไม่มีข้อมูลผู้สมัครจริง" },
  { id: "demo-5", title: "ตัวอย่าง: แผนผังจุดลงทะเบียน", date: "05/01/2026", detail: "ตัวอย่างเนื้อหาสำหรับอธิบายตำแหน่งจุดลงทะเบียนและพื้นที่รอ" },
  { id: "demo-6", title: "ตัวอย่าง: ข้อควรปฏิบัติในสนาม", date: "06/01/2026", detail: "ตัวอย่างข้อความสำหรับพื้นที่ประกาศ โปรดอ้างอิงข้อกำหนดจริงจากผู้จัดงานเท่านั้น" },
  { id: "demo-7", title: "ตัวอย่าง: เปลี่ยนแปลงกำหนดการ", date: "07/01/2026", detail: "ตัวอย่างการแสดงประกาศเปลี่ยนแปลง ไม่มีการเปลี่ยนแปลงกำหนดการจริง" },
  { id: "demo-8", title: "ตัวอย่าง: สรุปกิจกรรมหลังการแข่งขัน", date: "08/01/2026", detail: "ตัวอย่างประกาศปิดท้ายกิจกรรม ไม่ใช่รายงานผลจริง" },
];

export default function Announce() {
  const [selected, setSelected] = useState<(typeof announcements)[number] | null>(null);
  return (
    <div className="w-full bg-white">
      <div className="flex justify-start items-start mx-8 mt-3 mb-1 text-[#4b211b] text-2xl font-semibold">ประกาศ</div>
      <p className="mx-5 mb-2 rounded-md bg-[#fff8ed] border border-[#ead8d2] p-2 text-sm text-black">ข้อมูลตัวอย่างสำหรับสาธิตเว็บไซต์ ไม่ใช่ประกาศจริงของชมรม</p>
      <div className="bg-[#f7f1ef] mx-5 mt-3 rounded-xl p-3 md:p-5 border border-[#ead8d2]">
        {announcements.map((item) => (
          <div key={item.id} className="flex justify-between items-center md:text-xl text-sm text-black mx-2 border border-[#ead8d2] bg-white my-3 px-4 py-4 rounded-xl shadow-sm gap-4">
            <span>{item.title} ( {item.date} )</span>
            <button onClick={() => setSelected(item)} className="flex md:text-sm text-xs rounded-lg px-4 py-2 text-white font-medium shrink-0 bg-[#8f3324] hover:bg-[#722719]">รายละเอียด</button>
          </div>
        ))}
      </div>
      {selected && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={() => setSelected(null)}>
        <div role="dialog" aria-modal="true" aria-label={selected.title} className="relative bg-white rounded-2xl w-[420px] max-w-[90vw] p-6 shadow-xl text-black" onClick={(event) => event.stopPropagation()}>
          <div className="text-center text-lg font-medium mb-4">{selected.title}</div>
          <div className="text-sm text-gray-700 border rounded-md p-3 mb-4">{selected.detail}</div>
          <div className="text-center text-gray-500 text-sm mb-4">{selected.date}</div>
          <button onClick={() => setSelected(null)} className="w-full bg-[#8f3324] text-white py-2 rounded-lg hover:bg-[#722719]">ปิด</button>
        </div>
      </div>}
    </div>
  );
}
