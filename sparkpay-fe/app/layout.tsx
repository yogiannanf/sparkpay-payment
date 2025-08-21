import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SparkPay - Payment Gateway Indonesia",
  description: "Solusi Pembayaran Digital Terintegrasi untuk Bisnis Anda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-800 flex flex-col min-h-screen`}>
        {/* Navbar */}
        <nav className="w-full shadow-sm bg-white sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-4">
            <div className="flex items-center space-x-2">
              <Link href="/">
                <img src="/images/sparkpay.png" alt="SparkPay Logo" className="h-10" />
              </Link>
            </div>
            <div className="hidden md:flex space-x-6 font-medium text-gray-700">
              <Link href="/produk" className="hover:text-green-500 transition-colors duration-200">Produk</Link>
              <Link href="/solusi" className="hover:text-green-500 transition-colors duration-200">Solusi</Link>
              <Link href="/panduan" className="hover:text-green-500 transition-colors duration-200">Panduan</Link>
              <Link href="/tentang" className="hover:text-green-500 transition-colors duration-200">Tentang</Link>
            </div>
            <button className="md:hidden text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-[#0D1B2A] text-gray-200 pt-12 pb-6">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
            {/* Logo & Deskripsi */}
            <div className="col-span-1">
              <img src="/images/sparkpay.png" alt="SparkPay Logo" className="h-10 mb-4" />
              <p className="text-sm mb-6">
                Solusi pembayaran terintegrasi untuk bisnis Indonesia. Aman, cepat, dan mudah digunakan.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-white p-2 rounded-full text-[#0D1B2A] hover:bg-green-500 hover:text-white transition-colors">
                  <FaFacebookF size={18} />
                </a>
                <a href="#" className="bg-white p-2 rounded-full text-[#0D1B2A] hover:bg-green-500 hover:text-white transition-colors">
                  <FaInstagram size={18} />
                </a>
                <a href="#" className="bg-white p-2 rounded-full text-[#0D1B2A] hover:bg-green-500 hover:text-white transition-colors">
                  <FaTiktok size={18} />
                </a>
                <a href="#" className="bg-white p-2 rounded-full text-[#0D1B2A] hover:bg-green-500 hover:text-white transition-colors">
                  <FaWhatsapp size={18} />
                </a>
              </div>
            </div>

            {/* Produk */}
            <div>
              <h3 className="font-semibold mb-5 text-white text-lg">Produk</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-green-500 transition-colors">Online Payment</a></li>
                <li><a href="#" className="hover:text-green-500 transition-colors">Payouts</a></li>
                <li><a href="#" className="hover:text-green-500 transition-colors">Biaya</a></li>
                <li><a href="#" className="hover:text-green-500 transition-colors">Virtual Account</a></li>
                <li><a href="#" className="hover:text-green-500 transition-colors">E-Wallet</a></li>
                <li><a href="#" className="hover:text-green-500 transition-colors">Kartu Kredit</a></li>
                <li><a href="#" className="hover:text-green-500 transition-colors">QRIS</a></li>
              </ul>
            </div>

            {/* Panduan */}
            <div>
              <h3 className="font-semibold mb-5 text-white text-lg">Panduan</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-green-500 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-green-500 transition-colors">Hubungi Kami</a></li>
                <li><a href="#" className="hover:text-green-500 transition-colors">Dokumentasi</a></li>
                <li><a href="#" className="hover:text-green-500 transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-green-500 transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Kontak Resmi */}
            <div>
              <h3 className="font-semibold mb-5 text-white text-lg">Kontak Resmi</h3>
              <div className="flex items-start mb-4">
                <span className="mr-2 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </span>
                <p className="text-sm">support@sparkpay.co.id</p>
              </div>
              
              <div className="flex items-start mb-4">
                <span className="mr-2 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </span>
                <p className="text-sm">0882-1202-2222</p>
              </div>
              
              <div className="flex items-start mb-6">
                <span className="mr-2 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </span>
                <p className="text-sm">
                  Jalan Veteran Nomor 12, Desa/Kelurahan Pekuncen, Kec. Panggungrejo,
                  Kota Pasuruan, Provinsi Jawa Timur
                </p>
              </div>
              
              <h3 className="font-semibold mb-3 text-white text-lg">Informasi Perusahaan</h3>
              <p className="text-sm font-semibold">PT. Sarana Performa Sejahtera</p>
              <p className="text-sm mb-3">Operasional & Teknologi</p>
              <p className="text-sm font-semibold">PT. Naraya Telematika</p>
              <p className="text-sm">Lisensi & Compliance</p>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
            © 2025 PT. Naraya Telematika — All Rights Reserved
          </div>
        </footer>
      </body>
    </html>
  );
}