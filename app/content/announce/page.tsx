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
      <div className="flex justify-start items-start mx-8 mt-3 mb-1 text-black text-2xl">ประกาศ</div>
      <p className="mx-5 mb-2 rounded-md bg-amber-50 border border-amber-300 p-2 text-sm text-black">ข้อมูลตัวอย่างสำหรับสาธิตเว็บไซต์ ไม่ใช่ประกาศจริงของชมรม</p>
      <div className="bg-gray-200 mx-5 mt-2 rounded-md p-2">
        {announcements.map((item) => (
          <div key={item.id} className="flex justify-between items-center md:text-xl text-sm text-black mx-2 border border-black bg-white my-3 px-2 py-3 rounded-md">
            <span>{item.title} ( {item.date} )</span>
            <button onClick={() => setSelected(item)} className="flex md:text-sm text-xs border rounded mx-2 px-2 py-1 text-white bg-blue-400 hover:bg-blue-500">รายละเอียด</button>
          </div>
        ))}
      </div>
      {selected && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={() => setSelected(null)}>
        <div role="dialog" aria-modal="true" aria-label={selected.title} className="relative bg-white rounded-2xl w-[420px] max-w-[90vw] p-6 shadow-xl text-black" onClick={(event) => event.stopPropagation()}>
          <div className="text-center text-lg font-medium mb-4">{selected.title}</div>
          <div className="text-sm text-gray-700 border rounded-md p-3 mb-4">{selected.detail}</div>
          <div className="text-center text-gray-500 text-sm mb-4">{selected.date}</div>
          <button onClick={() => setSelected(null)} className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">ปิด</button>
        </div>
      </div>}
    </div>
  );
}
