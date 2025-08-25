"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const [profilePic, setProfilePic] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(true); // buka modal setelah form submit
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    router.push("/dashboard"); // redirect ke dashboard
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8">
      <h1 className="text-2xl font-bold mb-6">Ubah Profil</h1>

      {/* Foto Profil */}
      <div className="flex flex-col items-center mb-6">
        <img
          src={profilePic || "/images/avatar.png"}
          alt="Profile"
          className="w-24 h-24 rounded-full border mb-3 object-cover"
        />
        <label className="cursor-pointer bg-gray-200 px-3 py-1 rounded-md text-sm hover:bg-gray-300 transition">
          Ganti Foto
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
        </label>
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

        <button
          type="submit"
          className="w-full bg-[#4CAF4F] text-white py-2 rounded-md hover:bg-[#43A047] transition"
        >
          Simpan Perubahan
        </button>
      </form>

      {/* Modal Pop Up */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-sm w-full text-center">
            <h2 className="text-2xl font-bold mb-4">Berhasil!</h2>
            <p className="text-gray-600 mb-6">
              Profil Anda berhasil diperbarui ✅
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
    </div>
  );
}
