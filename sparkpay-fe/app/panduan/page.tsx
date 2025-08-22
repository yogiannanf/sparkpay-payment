'use client';

import React from 'react';
// Pastikan path import ini sesuai dengan struktur proyek Anda
import { Button } from "@/components/ui/button"; 

// --- Komponen Halaman Panduan ---
const PanduanPage: React.FC = () => {
  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <section style={{ backgroundColor: '#F5FBF5' }}>
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                Panduan & Dokumentasi <span className="text-green-600">SparkPay</span>
              </h1>
              <p className="text-xl text-gray-700 mb-6 font-medium">
                Semua yang Anda Butuhkan untuk Mengintegrasikan SparkPay
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Dari dokumentasi API hingga video tutorial, temukan semua resource yang Anda butuhkan untuk sukses dengan platform pembayaran SparkPay.
              </p>
            <Button
            size="lg"
              className="bg-[#3C8346] text-white text-lg font-bold rounded-lg px-8 py-4 shadow-[0_8px_20px_rgba(60,131,70,0.5)] hover:bg-green-700 transform transition-transform duration-300 hover:scale-105"
              >
                  Jelajahi Dokumentasi
            </Button>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img 
                src="/images/foto3.jpg" 
                alt="Panduan dan Dokumentasi SparkPay" 
                className="rounded-xl shadow-2xl w-full max-w-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Konten Panduan Lainnya bisa ditambahkan di sini */}
      
    </div>
  );
};

export default PanduanPage;
