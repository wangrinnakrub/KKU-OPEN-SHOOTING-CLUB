'use client'

import Image from "next/image";
import kku_logo from './kku-logo-with-text-th-en.png';
import google_logo from './google-logo.png';
import Link from "next/link";


export default function Page() {
    const demoMode = process.env.NEXT_PUBLIC_DEMO_MODE === 'true' || !process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    return (
      <div className="min-h-screen w-full bg-white">
        <div className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center px-6 text-center">
          <Image
            src={kku_logo}
            alt="Khon Kaen University Logo"
            className="mb-9 w-full max-w-sm select-none"
            draggable={false}
          />

          {/* Divider: เข้าสู่ระบบ */}
          <div className="mb-3 flex w-full items-center gap-3 text-gray-500 max-w-sm">
            <div className="h-px flex-1 bg-gray-300" />
            <span className="text-sm md:text-base">เข้าสู่ระบบ</span>
            <div className="h-px flex-1 bg-gray-300" />
          </div>

          {demoMode && <p role="status" className="mb-4 rounded-md border border-amber-300 bg-amber-50 p-3 text-sm text-amber-900">โหมดสาธิต: ระบบเข้าสู่ระบบใช้งานไม่ได้ เนื่องจาก Supabase ของโปรเจกต์เดิมหยุดให้บริการ</p>}

          {/* Continue with Google */}
            {demoMode ? <button type="button" disabled aria-disabled="true" className="mb-10 inline-flex w-full max-w-sm items-center justify-center gap-3 rounded-xl border border-gray-300 px-5 py-3 text-gray-400 text-sm font-medium opacity-60 cursor-not-allowed md:text-base"><Image src={google_logo} alt="Google Logo" width={20} height={20} />Continue with Google</button> : <Link
            href="/auth/login"
            className="mb-10 inline-flex w-full max-w-sm items-center justify-center gap-3 rounded-xl border border-gray-300 px-5 py-3 text-gray-600 text-sm font-medium shadow-sm transition hover:shadow-[0_0_15px_3px_rgba(0,0,0,0.06)] md:text-base"
            >
              <Image
                src={google_logo}
                alt="Google Logo"
                width={20}
                height={20}
                className="select-none"
                draggable={false}
            />
            Continue with Google
            </Link>}

        </div>
      </div>
    );
  }
