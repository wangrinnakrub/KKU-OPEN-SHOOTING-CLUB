const results = [
  { event: "ตัวอย่าง: ปืนยาวอัดลม บุคคล", entries: [{ name: "ผู้แข่งขันตัวอย่าง A", score: 580 }, { name: "ผู้แข่งขันตัวอย่าง B", score: 572 }] },
  { event: "ตัวอย่าง: ปืนสั้นอัดลม บุคคล", entries: [{ name: "ผู้แข่งขันตัวอย่าง C", score: 565 }, { name: "ผู้แข่งขันตัวอย่าง D", score: 558 }] },
];

export default function Compresult() {
  return (
    <section className="w-full min-h-screen bg-white p-5 text-black">
      <h1 className="text-2xl font-medium mb-2">ผลการแข่งขัน</h1>
      <p className="mb-4 rounded-md border border-amber-300 bg-amber-50 p-3 text-sm">คะแนนและชื่อทั้งหมดเป็นข้อมูลจำลอง ไม่ใช่ผลการแข่งขันจริง</p>
      <div className="rounded-md bg-gray-200 p-2">
        {results.map((result) => (
          <article key={result.event} className="my-3 rounded-md border border-black bg-white p-4">
            <h2 className="text-lg font-medium">{result.event}</h2>
            <ol className="mt-2 space-y-1 text-sm">
              {result.entries.map((entry, index) => (
                <li key={entry.name}>{index + 1}. {entry.name} — {entry.score} คะแนน</li>
              ))}
            </ol>
          </article>
        ))}
      </div>
    </section>
  );
}
