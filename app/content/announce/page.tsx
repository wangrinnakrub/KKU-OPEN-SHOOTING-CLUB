const announcements = [
  { title: "ตัวอย่าง: เปิดรับสมัครการแข่งขัน", detail: "ข้อมูลจำลองสำหรับแสดงหน้าตาเว็บไซต์ ไม่มีการเปิดรับสมัครจริง" },
  { title: "ตัวอย่าง: แจ้งกำหนดการ", detail: "กำหนดการนี้เป็นข้อมูลตัวอย่าง ไม่ใช่ประกาศจากชมรม" },
];

export default function Announce() {
  return (
    <section className="w-full min-h-screen bg-white p-5 text-black">
      <h1 className="text-2xl font-medium mb-2">ประกาศ</h1>
      <p className="mb-4 rounded-md border border-amber-300 bg-amber-50 p-3 text-sm">ข้อมูลตัวอย่างสำหรับสาธิตเว็บไซต์ ไม่ใช่ประกาศจริงของชมรม</p>
      <div className="rounded-md bg-gray-200 p-2">
        {announcements.map((item) => (
          <article key={item.title} className="my-3 rounded-md border border-black bg-white p-4">
            <h2 className="text-lg font-medium">{item.title}</h2>
            <p className="mt-2 text-sm text-gray-700">{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
