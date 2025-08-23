'use client';

import { useState, useEffect } from "react";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation"; // <-- Import usePathname
import "./globals.css";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button"; // Asumsi Anda punya komponen ini
import { FaEnvelope } from "react-icons/fa";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Untuk menandai link yang aktif

  // Menutup menu setiap kali pindah halaman
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/produk", label: "Produk" },
    { href: "/solusi", label: "Solusi" },
    { href: "/panduan", label: "Panduan" },
    // { href: "/tentang", label: "Tentang" },
  ];

  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} antialiased bg-white text-gray-800 flex flex-col min-h-screen`}
      >
        {/* Navbar */}
        <header className="w-full shadow-sm bg-white sticky top-0 z-50">
          <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/">
              <img src="/images/sparkpay.png" alt="SparkPay Logo" className="h-10" />
            </Link>

            {/* Menu Desktop */}
            <div className="hidden md:flex items-center gap-6 font-medium text-gray-700">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors hover:text-green-600 ${
                    pathname === link.href ? "text-green-600 font-semibold" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Tombol Hamburger Mobile */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 focus:outline-none"
                aria-label="Toggle menu"
              >
                {/* Ikon Hamburger & Close (bergantian) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>
          </nav>

          {/* Menu Dropdown Mobile */}
          <div
            className={`md:hidden absolute top-full left-0 w-full bg-white shadow-md transition-all duration-300 ease-in-out overflow-hidden ${
              isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex flex-col px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium text-gray-700 hover:text-green-600 ${
                    pathname === link.href ? "text-green-600 font-semibold" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        {/* Kode footer Anda sudah bagus, tidak perlu diubah */}
        <footer className="bg-[#0D1B2A] text-gray-200 pt-12 pb-6">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
            {/* Logo & Deskripsi */}
            <div className="col-span-1">
              <img src="/images/sparkpay.png" alt="SparkPay Logo" className="h-10 mb-4" />
              <p className="text-sm mb-6">
                Solusi pembayaran terintegrasi untuk bisnis Indonesia. Aman, cepat, dan mudah digunakan.
              </p>
              <div className="flex space-x-4">
                {/* <a href="https://www.facebook.com/NarayaTelematika" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full text-[#0D1B2A] hover:bg-green-500 hover:text-white transition-colors">
                  <FaFacebookF size={18} />
                </a> */}
                <a href="https://www.instagram.com/sparkpay_id" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full text-[#0D1B2A] hover:bg-green-500 hover:text-white transition-colors">
                  <FaInstagram size={18} />
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=support@sparkpay.id&su=Permintaan%20Informasi%20Sparkpay&body=Halo%20Tim%20Sparkpay,%0A%0ASaya%20ingin%20bertanya%20tentang%20layanan%20Sparkpay.%0A%0ATerima%20kasih."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-2 rounded-full text-[#0D1B2A] hover:bg-green-500 hover:text-white transition-colors"
                >
                  <FaEnvelope size={18} />
                </a>
                {/* <a href="https://www.tiktok.com/@kaptennaratel" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full text-[#0D1B2A] hover:bg-green-500 hover:text-white transition-colors">
                  <FaTiktok size={18} />
                </a>
                <a href="https://wa.me/6288212022222" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full text-[#0D1B2A] hover:bg-green-500 hover:text-white transition-colors">
                  <FaWhatsapp size={18} />
                </a> */}
              </div>
            </div>
            {/* Produk */}
            <div>
              <h3 className="font-semibold mb-5 text-white text-lg">Produk</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="/produk#payment-gateway" className="hover:text-green-500 transition-colors">Online Payment</Link></li>
                <li><Link href="/produk#payouts" className="hover:text-green-500 transition-colors">Payouts</Link></li>
                <li><Link href="/biaya" className="hover:text-green-500 transition-colors">Biaya</Link></li>
                <li><Link href="/produk#virtual-account" className="hover:text-green-500 transition-colors">Virtual Account</Link></li>
                <li><Link href="/produk#e-wallet" className="hover:text-green-500 transition-colors">E-Wallet</Link></li>
                <li><Link href="/produk#kartu-kredit" className="hover:text-green-500 transition-colors">Kartu Kredit</Link></li>
                <li><Link href="/produk#qris" className="hover:text-green-500 transition-colors">QRIS</Link></li>
              </ul>
            </div>
            {/* Panduan */}
            <div>
              <h3 className="font-semibold mb-5 text-white text-lg">Panduan</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="/blog" className="hover:text-green-500 transition-colors">Blog</Link></li>
                <li><Link href="/kontak" className="hover:text-green-500 transition-colors">Hubungi Kami</Link></li>
                <li><Link href="/dokumentasi" className="hover:text-green-500 transition-colors">Dokumentasi</Link></li>
                <li><Link href="/api-reference" className="hover:text-green-500 transition-colors">API Reference</Link></li>
                <li><Link href="/faq" className="hover:text-green-500 transition-colors">FAQ</Link></li>
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
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=support@sparkpay.id&su=Permintaan%20Informasi%20Sparkpay&body=Halo%20Tim%20Sparkpay,%0A%0ASaya%20ingin%20bertanya%20tentang%20layanan%20Sparkpay.%0A%0ATerima%20kasih."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white"
                >
                  support@sparkpay.id
                </a>
              </div>
              {/* <div className="flex items-start mb-4">
                <span className="mr-2 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                </span>
                <p className="text-sm">0882-1202-2222</p>
              </div> */}
              <div className="flex items-start mb-6">
                <span className="mr-2 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </span>
                <a
                  href="https://maps.app.goo.gl/4HvjGHvbWxTiyrqk6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white"
                >
                  Jalan Veteran Nomor 12, Pekuncen, Panggungrejo, Kota Pasuruan, Jawa Timur
                </a>
              </div>
              <h3 className="font-semibold mb-3 text-white text-lg">Informasi Perusahaan</h3>
              <a
                href="https://companieshouse.id/sarana-performa-sejahtera"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-white block"
                >
                  PT. Sarana Performa Sejahtera
                </a>
                <a
                  href="https://companieshouse.id/sarana-performa-sejahtera"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white mb-3 block"
                >
                  Operasional & Teknologi
              </a>

            </div>
          </div>
          {/* Copyright */}
          <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} PT. Naraya Telematika — All Rights Reserved
          </div>
        </footer>
      </body>
    </html>
  );
}