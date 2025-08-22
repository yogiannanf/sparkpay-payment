"use client";

import Link from "next/link";
import Image from "next/image";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Image + Text */}
      <div className="hidden lg:flex w-1/2 relative">
        <Image
          src="/images/sparkpay.png"
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

          {/* Form */}
          <form className="space-y-4 text-left">
            <div>
              <label className="block text-sm font-medium mb-1">Nama Lengkap</label>
              <input
                type="text"
                placeholder="Masukkan Nama Lengkap Anda"
                className="border rounded-md px-3 py-2 w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Masukkan Email Anda"
                className="border rounded-md px-3 py-2 w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Nomor Telepon</label>
              <input
                type="text"
                placeholder="Masukkan Nomor Telepon Anda"
                className="border rounded-md px-3 py-2 w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Nama Bisnis</label>
              <input
                type="text"
                placeholder="Masukkan Nama Bisnis Anda"
                className="border rounded-md px-3 py-2 w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Alamat Bisnis</label>
              <input
                type="text"
                placeholder="Masukkan Alamat Bisnis Anda"
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

            <div>
              <label className="block text-sm font-medium mb-1">Ulangi Kata Sandi</label>
              <input
                type="password"
                placeholder="Ulangi Kata Sandi Anda"
                className="border rounded-md px-3 py-2 w-full"
              />
            </div>

            <label className="flex items-center space-x-2 text-sm">
              <input type="checkbox" className="w-4 h-4" />
              <span>
                Saya setuju dengan{" "}
                <Link href="#" className="text-blue-600 hover:underline">
                  Syarat dan Ketentuan
                </Link>
              </span>
            </label>

            <button
              type="submit"
              className="w-full bg-[#4CAF4F] text-white py-2 rounded-md hover:bg-[#43A047] transition"
            >
              Daftar
            </button>
          </form>

          <p className="mt-6 text-sm text-gray-600 text-center">
            Sudah punya akun SparkPay?{" "}
            <Link href="/singIn" className="text-blue-600 hover:underline">
              Masuk
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
