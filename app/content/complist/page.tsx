export default function Complist() {
  return (
    <section className="min-h-screen w-full bg-white text-black">
      <h1 className="mx-8 mt-6 mb-3 text-2xl font-medium">รายการแข่งขัน</h1>
      <div className="mx-5 mt-2 rounded-md bg-gray-200 p-2">
        <div role="status" className="mx-2 my-6 rounded-md border border-dashed border-gray-400 bg-white px-5 py-8 text-center">
          <p className="text-lg font-medium">ข้อมูลไม่พร้อมใช้งาน</p>
          <p className="mt-2 text-sm text-gray-600">รายการแข่งขันต้องดึงข้อมูลจาก Supabase ของโปรเจกต์เดิม ซึ่งขณะนี้หยุดให้บริการ</p>
        </div>
      </div>
    </section>
  );
}
