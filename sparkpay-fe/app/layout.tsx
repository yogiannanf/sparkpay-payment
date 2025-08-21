import Link from "next/link";
import "./globals.css";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

export const metadata = {
  title: "SparkPay",
  description: "Solusi Payment Gateway Digital",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="bg-white text-gray-800 flex flex-col min-h-screen">
        {/* Navbar */}
        <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white sticky top-0 z-50">
          <div className="flex items-center space-x-2">
            <img src="/images/sparkpay.png" alt="SparkPay Logo" className="h-10" />
          </div>
          <div className="space-x-6 font-medium text-gray-700">
            <Link href="/produk">Produk</Link>
            <Link href="/solusi">Solusi</Link>
            <Link href="/panduan">Panduan</Link>
            <Link href="/tentang">Tentang</Link>
            <Link href="/biaya">Biaya</Link>
          </div>
        </nav>

        {/* Konten Halaman */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <footer className="bg-[#0D1B2A] text-gray-200 pt-12 pb-6">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-5 gap-8">
            {/* Logo & Deskripsi */}
            <div className="col-span-2">
              <img src="/images/sparkpay.png" alt="SparkPay Logo" className="h-10 mb-4" />
              <p className="text-sm mb-4">
                Solusi pembayaran terintegrasi untuk bisnis Indonesia. Aman, cepat, dan mudah digunakan.
              </p>
              <div className="flex space-x-4 text-lg">
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaTiktok /></a>
                <a href="#"><FaWhatsapp /></a>
              </div>
            </div>

            {/* Produk */}
            <div>
              <h3 className="font-semibold mb-3 text-white">Produk</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#">Online Payment</a></li>
                <li><a href="#">Payouts</a></li>
                <li><a href="#">Biaya</a></li>
                <li><a href="#">Virtual Account</a></li>
                <li><a href="#">E-Wallet</a></li>
                <li><a href="#">Kartu Kredit</a></li>
                <li><a href="#">QRIS</a></li>
              </ul>
            </div>

            {/* Panduan */}
            <div>
              <h3 className="font-semibold mb-3 text-white">Panduan</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#">Blog</a></li>
                <li><a href="#">Hubungi Kami</a></li>
                <li><a href="#">Dokumentasi</a></li>
                <li><a href="#">API Reference</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>
            </div>

            {/* Kontak Resmi */}
            <div>
              <h3 className="font-semibold mb-3 text-white">Kontak Resmi</h3>
              <p className="text-sm">support@sparkpay.co.id</p>
              <p className="text-sm mb-3">0882-1202-2222</p>
              <p className="text-sm mb-4">
                Jalan Veteran Nomor 12, Desa/Kelurahan Pekuncen, Kec. Panggungrejo,
                Kota Pasuruan, Provinsi Jawa Timur
              </p>
              <h3 className="font-semibold mb-3 text-white">Informasi Perusahaan</h3>
              <p className="text-sm">PT. Sarana Performa Sejahtera<br />Operation & Technology</p>
              <p className="text-sm mt-2">PT. Naraya Telematika<br />License & Compliance</p>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
            © 2025 PT. Naraya Telematika — All Rights Reserved
          </div>
        </footer>
      </body>
    </html>
  );
}
