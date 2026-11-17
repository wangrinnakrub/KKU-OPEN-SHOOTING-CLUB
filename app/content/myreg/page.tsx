import Link from "next/link";

export default function Myreg() {
  return (
    <section className="min-h-screen w-full bg-white text-black">
      <h1 className="mx-8 mt-6 mb-3 text-2xl font-medium">ใบสมัครของฉัน</h1>
      <div className="mx-5 mt-2 rounded-md bg-gray-200 p-2">
        <div role="status" className="mx-2 my-6 rounded-md border border-dashed border-gray-400 bg-white px-5 py-8 text-center">
          <p className="text-lg font-medium">ต้องเข้าสู่ระบบก่อน</p>
          <p className="mt-2 text-sm text-gray-600">หน้านี้เป็นข้อมูลส่วนตัวและต้องใช้ระบบเข้าสู่ระบบ ปัจจุบัน Supabase ของโปรเจกต์เดิมหยุดให้บริการ</p>
          <Link href="/auth/login-condition" className="mt-4 inline-block rounded-md bg-red-900 px-4 py-2 text-sm text-white hover:bg-red-800">ดูหน้าเข้าสู่ระบบ</Link>
        </div>
      </div>
    </section>
  );
}
