export default function ProdukPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-2">Produk & Fitur Unggulan</h2>
        <h1 className="text-green-600 text-4xl font-extrabold mb-4">SparkPay</h1>
        <p className="text-lg text-gray-600">
          Memberdayakan Bisnis Anda dengan Teknologi Pembayaran Terlengkap
        </p>
        <p className="mt-4 text-gray-600">
          SparkPay menawarkan beragam layanan yang dibuat khusus untuk memudahkan setiap
          proses transaksi digital Anda. Apa pun jenis bisnis Anda, kami punya solusi
          yang pas agar usaha Anda bisa berkembang lebih cepat, lebih efisien, dan
          konsisten.
        </p>
      </section>

      {/* Fitur Section */}
      <section className="max-w-5xl mx-auto px-6 space-y-12">
        {/* Payment Gateway */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Payment Gateway</h3>
            <p className="mb-3 text-gray-600">
              Terima pembayaran dari berbagai metode langsung di platform Anda.
              Integrasi API lengkap dan plugin siap pakai untuk WooCommerce, Shopify, dan lainnya.
            </p>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li><b>Metode Lengkap</b>: Kartu, VA, E-Wallet, QRIS, gerai ritel.</li>
              <li><b>Pengalaman Mulus</b>: Optimasi transaksi lebih mudah & cepat.</li>
              <li><b>Keamanan Terjamin</b>: Perlindungan dengan Fraud Detection System.</li>
            </ul>
          </div>
          <img src="/images/payment-gateway.png" alt="Payment Gateway" className="w-full" />
        </div>

        {/* Disbursement */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img src="/images/disbursement.png" alt="Disbursement" className="w-full" />
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Disbursement</h3>
            <p className="mb-3 text-gray-600">
              Kirim dana ke ribuan rekening sekaligus dengan cepat dan aman.
            </p>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li><b>Efisien</b>: Transfer ke banyak bank hanya dengan sekali klik.</li>
              <li><b>Terjadwal</b>: Atur penyaluran sesuai kebutuhan.</li>
              <li><b>Laporan Lengkap</b>: Akses laporan detail setiap transaksi.</li>
            </ul>
          </div>
        </div>

        {/* Payment Link */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Payment Link</h3>
            <p className="mb-3 text-gray-600">
              Terima pembayaran instan tanpa perlu website. Cocok untuk media sosial, WhatsApp, atau email.
            </p>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li><b>Cepat & Mudah</b>: Buat dan bagikan link pembayaran instan.</li>
              <li><b>Fleksibel</b>: Tentukan jumlah & detail sesuai kebutuhan.</li>
              <li><b>Lacak Transaksi</b>: Pantau status pembayaran real-time.</li>
            </ul>
          </div>
          <img src="/images/payment-link.png" alt="Payment Link" className="w-full" />
        </div>

        {/* Dashboard */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img src="/images/dashboard.png" alt="Dashboard" className="w-full" />
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Dashboard All-in-One</h3>
            <p className="mb-3 text-gray-600">
              Pantau, kelola, dan analisis semua pembayaran dari satu dashboard.
            </p>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li><b>Real-time Monitoring</b>: Lihat transaksi masuk & keluar.</li>
              <li><b>Laporan Analitis</b>: Insight detail untuk pengambilan keputusan.</li>
              <li><b>Manajemen Pengguna</b>: Atur hak akses tim dengan mudah.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 text-white text-center py-16 mt-16">
        <h2 className="text-2xl font-bold mb-4">Siap Meningkatkan Bisnis Anda?</h2>
        <p className="mb-6">
          Bergabunglah dengan ribuan merchant yang telah mempercayai SparkPay untuk solusi pembayaran digital mereka.
        </p>
        <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
          Daftar Sekarang
        </button>
      </section>
    </main>
  );
}
