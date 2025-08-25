"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<"success" | "error" | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const email = formData.get("email");
    const password = formData.get("password");

    // ✅ Contoh validasi sederhana (nanti bisa diganti API)
    if (email === "test@mail.com" && password === "123456") {
      setModalType("success");
    } else {
      setModalType("error");
    }

    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    if (modalType === "success") {
      router.push("/dashboard"); // ✅ ganti sesuai tujuan setelah login
    }
  };

  const handleGoToDaftar = () => {
    setShowModal(false);
    router.push("/daftar");
  };

  return (
    <div className="relative min-h-screen flex">
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
          {/* Logo + Judul */}
          <div className="flex flex-col items-center text-center mb-6">
            <Image
              src="/images/sparkpay.png"
              alt="Sparkpay Logo"
              width={150}
              height={150}
              className="mb-4"
            />
            <h2 className="text-gray-500">
              Masuk untuk melanjutkan ke SparkPay Gateway.
            </h2>
          </div>

          {/* Login Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Masukkan Email Anda"
                className="border rounded-md px-3 py-2 w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Kata Sandi</label>
              <input
                type="password"
                name="password"
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

            {/* Button */}
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

      {/* Modal Pop Up */}
      {showModal && modalType === "success" && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 z-50">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-sm w-full text-center">
            <h2 className="text-2xl font-bold mb-4">Selamat!</h2>
            <p className="text-gray-600 mb-6">
              Anda berhasil login. Selamat datang di SparkPay Gateway 🎉
            </p>
            <button
              onClick={handleCloseModal}
              className="bg-[#4CAF4F] text-white px-4 py-2 rounded-md hover:bg-[#43A047] transition"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {showModal && modalType === "error" && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 z-50">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-sm w-full text-center">
            <h2 className="text-2xl font-bold mb-4 text-red-600">Login Gagal!</h2>
            <p className="text-gray-600 mb-6">
              Email atau kata sandi yang Anda masukkan salah.
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 transition"
              >
                Sudah Punya Akun
              </button>
              <button
                onClick={handleGoToDaftar}
                className="bg-[#4CAF4F] text-white px-4 py-2 rounded-md hover:bg-[#43A047] transition"
              >
                Belum Punya Akun
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
