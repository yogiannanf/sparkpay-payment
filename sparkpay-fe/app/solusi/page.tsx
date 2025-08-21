'use client';

import React from 'react';
// Pastikan path import ini sesuai dengan struktur proyek Anda
import { Button } from "@/components/ui/button"; 
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// --- TypeScript Interfaces ---
interface SolutionData {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
}

// --- Ikon SVG sebagai Komponen React ---
const ShoppingCartIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const StoreIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>
);

const SyncAltIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h5M20 20v-5h-5M4 4a14.95 14.95 0 0114.32 11.5M20 20a14.95 14.95 0 01-14.32-11.5" />
  </svg>
);

const BuildingIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const CheckIcon: React.FC = () => (
  <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
  </svg>
);

// --- Data untuk Konten Solusi ---
const solutions: SolutionData[] = [
  {
    id: 'e-commerce',
    title: 'E-Commerce',
    description: 'Tingkatkan konversi dengan menyediakan berbagai pilihan metode pembayaran.',
    features: [
      'Terima pembayaran dari 30+ metode pembayaran',
      'Checkout yang dapat disesuaikan',
      'Proses rekonsiliasi lebih cepat',
      'Tingkat keberhasilan transaksi hingga 95%'
    ],
    icon: <ShoppingCartIcon />
  },
  {
    id: 'marketplace',
    title: 'Marketplace',
    description: 'Otomatiskan alur pembayaran untuk mengelola ribuan mitra dan pelanggan.',
    features: [
      'Kirim pembayaran ke banyak akun sekaligus',
      'Verifikasi identitas mitra otomatis',
      'Deteksi dan cegah penipuan (fraud)',
      'Pencairan dana instan'
    ],
    icon: <StoreIcon />
  },
  {
    id: 'subscription',
    title: 'Subscription',
    description: 'Permudah pelanggan berlangganan dengan pembayaran berulang otomatis.',
    features: [
      'Penagihan berulang otomatis',
      'Notifikasi pembayaran ke pelanggan',
      'Analitik dan laporan lengkap',
      'Dukungan multi-mata uang'
    ],
    icon: <SyncAltIcon />
  },
  {
    id: 'enterprise',
    title: 'Enterprise',
    description: 'Solusi pembayaran untuk skalabilitas, keamanan, dan kebutuhan bisnis besar.',
    features: [
      'Manajemen pengguna multi-peran',
      'Integrasi API yang fleksibel',
      'Dukungan teknis khusus 24/7',
      'Keamanan berstandar perbankan'
    ],
    icon: <BuildingIcon />
  },
];

// --- Komponen Kartu Solusi ---
const SolutionCard: React.FC<SolutionData> = ({ title, description, features, id, icon }) => (
  <Card id={id} className="mb-8 h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
    <CardHeader className="flex flex-row items-center space-y-0 pb-4">
      <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
        {icon}
      </div>
      <CardTitle className="text-gray-800 text-xl ml-4">{title}</CardTitle>
    </CardHeader>
    <CardContent className="pt-0">
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckIcon />
            <span className="text-gray-700 leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

// --- Komponen Halaman Utama ---
const SolusiPage: React.FC = () => {
  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                Otomatisasi dan Monetisasi Pembayaran Bisnis Anda
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Solusi pembayaran all-in-one untuk semua jenis bisnis, dari startup hingga enterprise berskala besar.
              </p>
            <Button
            size="lg"
              className="bg-[#3C8346] text-white text-lg font-bold rounded-lg px-8 py-4 shadow-[0_8px_20px_rgba(60,131,70,0.5)] hover:bg-green-700 transform transition-transform duration-300 hover:scale-105"
              >
                  Hubungi Tim Sales
            </Button>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img 
                src="/images/foto2.jpg" 
                alt="Solusi Pembayaran SparkPay" 
                className="rounded-xl shadow-2xl w-full max-w-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solusi Lengkap Section */}
      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              Solusi SparkPay untuk Setiap Bisnis
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Temukan solusi pembayaran yang tepat untuk model bisnis Anda.
            </p>
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-start">
            <div className="lg:col-span-1">
              {solutions.map((solution) => (
                <SolutionCard key={solution.id} {...solution} />
              ))}
            </div>
            <div className="hidden lg:block lg:col-span-1 sticky top-28">
              <Card className="p-6 bg-white border-gray-200">
                <img 
                  src="/images/solusi.png" 
                  alt="Visualisasi Solusi SparkPay" 
                  className="rounded-lg w-full h-auto object-contain max-w-md mx-auto"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolusiPage;
