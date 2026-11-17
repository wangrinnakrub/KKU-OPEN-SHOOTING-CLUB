"use client";
import { useState } from "react";

const results = [
  { title: "ตัวอย่าง: การแข่งขันปืนยาวอัดลม บุคคล ท่านอนชาย", scores: ["1. ผู้แข่งขันตัวอย่าง A — 580 คะแนน", "2. ผู้แข่งขันตัวอย่าง B — 572 คะแนน"] },
  { title: "ตัวอย่าง: การแข่งขันปืนสั้นอัดลม บุคคล ท่านั่งหญิง", scores: ["1. ผู้แข่งขันตัวอย่าง C — 565 คะแนน", "2. ผู้แข่งขันตัวอย่าง D — 558 คะแนน"] },
];

export default function Compresult() {
  const [selected, setSelected] = useState<(typeof results)[number] | null>(null);
  return (
    <div className="min-h-screen w-full flex flex-col overflow-x-hidden bg-white">
      <div className="flex justify-start items-start mx-8 mt-3 mb-1 text-black text-2xl">ผลการแข่งขัน</div>
      <p className="mx-5 mb-2 rounded-md bg-amber-50 border border-amber-300 p-2 text-sm text-black">ชื่อและคะแนนทั้งหมดเป็นข้อมูลจำลอง ไม่ใช่ผลการแข่งขันจริง</p>
      <div className="bg-gray-200 mx-5 mt-2 rounded-md p-2">
        {results.map((item) => (
          <div key={item.title} className="flex justify-between items-center md:text-xl text-sm text-black mx-2 border border-black bg-white my-3 px-2 py-3 rounded-md">
            <span>{item.title}</span>
            <button onClick={() => setSelected(item)} className="flex md:text-sm text-xs border rounded mx-2 px-2 py-1 text-white bg-green-400 hover:bg-green-500">ดูผลการแข่งขัน</button>
          </div>
        ))}
      </div>
      {selected && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={() => setSelected(null)}>
        <div role="dialog" aria-modal="true" aria-label={selected.title} className="bg-white rounded-2xl w-[420px] max-w-[90vw] p-6 shadow-xl text-black" onClick={(event) => event.stopPropagation()}>
          <h2 className="text-center text-lg font-medium mb-4">{selected.title}</h2>
          <ol className="text-sm text-gray-700 border rounded-md p-3 mb-4">{selected.scores.map((score) => <li key={score}>{score}</li>)}</ol>
          <button onClick={() => setSelected(null)} className="w-full bg-blue-500 text-white py-2 rounded-md">ปิด</button>
        </div>
      </div>}
    </div>
  );
}
