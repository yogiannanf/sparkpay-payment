"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignUpPage() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(true); // ✅ hanya munculkan modal, jangan redirect dulu
  };

  const handleCloseModal = () => {
    setShowModal(false);
    router.push("/signIn"); // ✅ baru redirect setelah klik OK
  };

  return (
    <div className="relative min-h-screen flex">
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
          <form className="space-y-4 text-left" onSubmit={handleSubmit}>
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
            <Link href="/signIn" className="text-blue-600 hover:underline">
              Masuk
            </Link>
          </p>
        </div>
      </div>

      {/* Modal Pop Up */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={handleCloseModal} // klik di luar modal juga bisa menutup
          ></div>

          {/* Modal */}
          <div className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full mx-4 text-center animate-fadeIn scale-up">
            <div className="flex justify-center mb-4">
              <div className="bg-green-100 rounded-full p-4">
                {/* Icon centang */}
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-2 text-gray-800">Pendaftaran Berhasil!</h2>
            <p className="text-gray-600 mb-6 text-sm">
              Terima kasih sudah mendaftar. Klik OK untuk menuju halaman login.
            </p>

            <button
              onClick={handleCloseModal}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-lg transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-300"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
