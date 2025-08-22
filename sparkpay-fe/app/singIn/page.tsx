"use client";

import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Image + Text */}
      <div className="hidden lg:flex w-1/2 relative">
        <Image
          src="/images/bg-hris.jpg" 
          alt="Background"
          fill
          className="absolute object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white px-8">
          <h1 className="text-3xl font-bold mb-4">SparkPay Gateway</h1>
          <p className="text-lg max-w-md text-center">
            Solusi Pembayaran Terintegrasi untuk Bisnis Anda
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex w-full lg:w-1/2 bg-white justify-center items-center">
        <div className="max-w-md w-full px-6 py-10">
            {/* Logo + Judul + Deskripsi (rata tengah) */}
            <div className="flex flex-col items-center text-center mb-6">
                <Image
                    src="/images/sparkpay.png"
                      alt="Sparkpay Logo"
                      width={150}
                      height={150}
                      className="mb-4"
                    />
                <h2 className="text-gray-500">
                    Buat akun Anda dan permudah proses pembayaran Anda.
                </h2>
            </div>

          {/* Login Form */}
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Masukkan Email Anda"
                className="border rounded-md px-3 py-2 w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Kata Sandi</label>
              <input
                type="password"
                placeholder="Masukkan Kata Sandi Anda"
                className="border rounded-md px-3 py-2 w-full"
              />
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm">
                <input type="checkbox" className="w-4 h-4 mr-2" />
                Ingat saya
              </label>
              <Link href="#" className="text-sm text-blue-600 hover:underline">
                Lupa kata sandi?
              </Link>
            </div>

            {/* Buttons */}
            <button
              type="submit"
              className="w-full bg-[#4CAF4F] text-white py-2 rounded-md hover:bg-[#43A047] transition"
            >
              Masuk
            </button>
          </form>

          {/* Sign Up link */}
          <p className="mt-6 text-sm text-gray-600 text-center">
            Belum punya akun SparkPay?{" "}
            <Link href="/daftar" className="text-blue-600 hover:underline">
              Daftar
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
