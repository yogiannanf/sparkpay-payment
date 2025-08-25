"use client";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Ringkasan Statistik */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-lg font-semibold text-gray-600">Transaksi Hari Ini</h2>
          <p className="text-3xl font-bold text-[#4CAF4F] mt-2">120</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-lg font-semibold text-gray-600">Total Pendapatan</h2>
          <p className="text-3xl font-bold text-[#4CAF4F] mt-2">Rp 25.000.000</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-lg font-semibold text-gray-600">User Terdaftar</h2>
          <p className="text-3xl font-bold text-[#4CAF4F] mt-2">1.240</p>
        </div>
      </div>

      {/* 3 Fitur Utama */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-2xl p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Real-time Monitoring
          </h2>
          <p className="text-gray-500 text-sm">
            Lacak semua transaksi masuk dan keluar secara live.
          </p>
        </div>

        <div className="bg-white shadow rounded-2xl p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Laporan Analitis
          </h2>
          <p className="text-gray-500 text-sm">
            Pahami tren pembayaran dan perilaku pelanggan.
          </p>
        </div>

        <div className="bg-white shadow rounded-2xl p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Manajemen Pengguna
          </h2>
          <p className="text-gray-500 text-sm">
            Atur hak akses untuk setiap anggota tim Anda.
          </p>
        </div>
      </div>

      {/* Aktivitas Terbaru */}
      <div className="bg-white shadow rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Aktivitas Terbaru</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-600">
              <th className="py-2 px-3 text-left">ID Transaksi</th>
              <th className="py-2 px-3 text-left">Nama</th>
              <th className="py-2 px-3 text-left">Jumlah</th>
              <th className="py-2 px-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="py-2 px-3">TRX1001</td>
              <td className="py-2 px-3">Andi</td>
              <td className="py-2 px-3">Rp 500.000</td>
              <td className="py-2 px-3 text-green-600 font-medium">Sukses</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-3">TRX1002</td>
              <td className="py-2 px-3">Budi</td>
              <td className="py-2 px-3">Rp 200.000</td>
              <td className="py-2 px-3 text-yellow-600 font-medium">Pending</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-3">TRX1003</td>
              <td className="py-2 px-3">Caca</td>
              <td className="py-2 px-3">Rp 1.200.000</td>
              <td className="py-2 px-3 text-red-600 font-medium">Gagal</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
