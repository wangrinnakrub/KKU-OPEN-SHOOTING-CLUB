"use client";
import { useState } from "react";

const results = [
  { title: "ตัวอย่าง: ปืนยาวอัดลม บุคคล ท่านอนชาย", scores: ["1. ผู้แข่งขันตัวอย่าง A — 580 คะแนน", "2. ผู้แข่งขันตัวอย่าง B — 572 คะแนน", "3. ผู้แข่งขันตัวอย่าง C — 564 คะแนน"] },
  { title: "ตัวอย่าง: ปืนยาวอัดลม บุคคล ท่านอนหญิง", scores: ["1. ผู้แข่งขันตัวอย่าง D — 575 คะแนน", "2. ผู้แข่งขันตัวอย่าง E — 568 คะแนน", "3. ผู้แข่งขันตัวอย่าง F — 559 คะแนน"] },
  { title: "ตัวอย่าง: ปืนสั้นอัดลม บุคคล ท่านั่งชาย", scores: ["1. ผู้แข่งขันตัวอย่าง G — 561 คะแนน", "2. ผู้แข่งขันตัวอย่าง H — 554 คะแนน", "3. ผู้แข่งขันตัวอย่าง I — 549 คะแนน"] },
  { title: "ตัวอย่าง: ปืนสั้นอัดลม บุคคล ท่านั่งหญิง", scores: ["1. ผู้แข่งขันตัวอย่าง J — 565 คะแนน", "2. ผู้แข่งขันตัวอย่าง K — 558 คะแนน", "3. ผู้แข่งขันตัวอย่าง L — 547 คะแนน"] },
  { title: "ตัวอย่าง: ปืนยาวอัดลม ทีม ท่านอนชาย", scores: ["1. ทีมตัวอย่าง A — 1710 คะแนน", "2. ทีมตัวอย่าง B — 1682 คะแนน", "3. ทีมตัวอย่าง C — 1654 คะแนน"] },
  { title: "ตัวอย่าง: ปืนยาวอัดลม ทีม ท่านอนหญิง", scores: ["1. ทีมตัวอย่าง D — 1701 คะแนน", "2. ทีมตัวอย่าง E — 1668 คะแนน", "3. ทีมตัวอย่าง F — 1639 คะแนน"] },
  { title: "ตัวอย่าง: ปืนสั้นอัดลม ทีม ท่านั่งชาย", scores: ["1. ทีมตัวอย่าง G — 1650 คะแนน", "2. ทีมตัวอย่าง H — 1628 คะแนน", "3. ทีมตัวอย่าง I — 1604 คะแนน"] },
  { title: "ตัวอย่าง: ปืนสั้นอัดลม ทีม ท่านั่งหญิง", scores: ["1. ทีมตัวอย่าง J — 1662 คะแนน", "2. ทีมตัวอย่าง K — 1635 คะแนน", "3. ทีมตัวอย่าง L — 1599 คะแนน"] },
];

export default function Compresult() {
  const [selected, setSelected] = useState<(typeof results)[number] | null>(null);
  return (
    <div className="min-h-screen w-full flex flex-col overflow-x-hidden bg-white">
      <div className="flex justify-start items-start mx-8 mt-3 mb-1 text-[#4b211b] text-2xl font-semibold">ผลการแข่งขัน</div>
      <p className="mx-5 mb-2 rounded-md bg-[#fff8ed] border border-[#ead8d2] p-2 text-sm text-black">ชื่อและคะแนนทั้งหมดเป็นข้อมูลจำลอง ไม่ใช่ผลการแข่งขันจริง</p>
      <div className="bg-[#f7f1ef] mx-5 mt-3 rounded-xl p-3 md:p-5 border border-[#ead8d2]">
        {results.map((item) => (
          <div key={item.title} className="flex justify-between items-center md:text-xl text-sm text-black mx-2 border border-[#ead8d2] bg-white my-3 px-4 py-4 rounded-xl shadow-sm gap-4">
            <span className="flex flex-wrap items-center gap-2"><span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-800">ตัวอย่าง</span><span>{item.title.replace("ตัวอย่าง: ", "")}</span></span>
            <button onClick={() => setSelected(item)} className="flex md:text-sm text-xs rounded-lg px-4 py-2 text-white font-medium shrink-0 bg-green-400 hover:bg-green-500">ดูผลการแข่งขัน</button>
          </div>
        ))}
      </div>
      {selected && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={() => setSelected(null)}>
        <div role="dialog" aria-modal="true" aria-label={selected.title} className="bg-white rounded-2xl w-[420px] max-w-[90vw] p-6 shadow-xl text-black" onClick={(event) => event.stopPropagation()}>
          <h2 className="text-center text-lg font-medium mb-4">{selected.title}</h2>
          <ol className="text-sm text-gray-700 border rounded-md p-3 mb-4">{selected.scores.map((score) => <li key={score}>{score}</li>)}</ol>
          <button onClick={() => setSelected(null)} className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">ปิด</button>
        </div>
      </div>}
    </div>
  );
}
