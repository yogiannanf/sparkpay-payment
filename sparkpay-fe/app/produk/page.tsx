'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// --- TypeScript Interfaces ---
interface ProductFeature {
  id: string;
  title: string;
  description: string;
  details: string[];
  icon: React.ReactNode;
  illustration: string;
}

interface DashboardFeature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

// --- Ikon SVG ---
const CheckIcon: React.FC = () => (
  <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
  </svg>
);

const PaymentGatewayIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
  </svg>
);

const DisbursementIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const PaymentLinkIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
  </svg>
);

const DashboardIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const AnalyticsIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const SecurityIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const AutomationIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);

const IntegrationIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

// --- Data Produk Utama ---
const productsData: ProductFeature[] = [
  {
    id: 'payment-gateway',
    title: 'Payment Gateway',
    description: 'Terima pembayaran dari berbagai metode secara langsung di platform Anda. Dengan integrasi API yang seamless, pelanggan dapat membayar dengan Virtual Account, e-wallet, kartu kredit, QRIS, dan retail outlet.',
    details: [
      'Metode Lengkap: Mendukung 30+ metode pembayaran',
      'Pengalaman Mulus: Checkout yang dioptimalkan untuk konversi tinggi',
      'Keamanan Terjamin: Sistem anti-fraud canggih dan sertifikasi PCI-DSS',
      'Rekonsiliasi Mudah: Laporan transaksi otomatis dan akurat'
    ],
    icon: <PaymentGatewayIcon />,
    illustration: '/images/payment.jpg'
  },
  {
    id: 'disbursement',
    title: 'Disbursement',
    description: 'Otomatiskan pengiriman dana ke ribuan tujuan sekaligus. Ideal untuk proses payroll, pembayaran ke mitra, atau refund. Kirim dana secara real-time atau terjadwal dengan proses yang handal dan aman.',
    details: [
      'Efisien: Kirim uang ke berbagai bank dan e-wallet dengan satu klik',
      'Terjadwal: Atur jadwal pengiriman dana sesuai kebutuhan operasional',
      'Laporan Lengkap: Pantau semua transaksi keluar untuk audit yang mudah',
      'API Handal: Integrasikan sistem disbursement ke dalam alur kerja Anda'
    ],
    icon: <DisbursementIcon />,
    illustration: '/images/foto3.jpg'
  },
  {
    id: 'payment-link',
    title: 'Payment Link',
    description: 'Buat dan bagikan link pembayaran dengan mudah tanpa perlu website atau aplikasi. Bagikan link melalui email, media sosial, atau aplikasi chat seperti WhatsApp untuk menerima pembayaran secara instan.',
    details: [
      'Cepat & Mudah: Buat link pembayaran dalam hitungan detik',
      'Tanpa Koding: Terima pembayaran online tanpa perlu integrasi teknis',
      'Kustomisasi: Atur jumlah pembayaran, deskripsi, dan masa berlaku link',
      'Fleksibel: Sempurna untuk freelancer, bisnis sosial, atau penagihan sederhana'
    ],
    icon: <PaymentLinkIcon />,
    illustration: '/images/link.jpg'
  },
  {
    id: 'dashboard',
    title: 'Dashboard All-in-One',
    description: 'Pantau, kelola, dan analisa semua aktivitas pembayaran Anda melalui satu dashboard yang intuitif. Dapatkan wawasan berharga untuk pertumbuhan bisnis Anda dengan data real-time.',
    details: [
      'Real-time Monitoring: Lacak semua transaksi masuk dan keluar secara live',
      'Laporan Analitis: Pahami tren pembayaran dan perilaku pelanggan',
      'Manajemen Pengguna: Atur hak akses untuk setiap anggota tim Anda',
      'Mudah Digunakan: Antarmuka yang bersih dan ramah pengguna'
    ],
    icon: <DashboardIcon />,
    illustration: '/images/dashboard.png'
  },
];

// --- Fitur Dashboard ---
const dashboardFeatures: DashboardFeature[] = [
  {
    title: 'Analytics Real-time',
    description: 'Pantau performa bisnis Anda dengan data transaksi yang diperbarui secara real-time',
    icon: <AnalyticsIcon />
  },
  {
    title: 'Keamanan Berlapis',
    description: 'Sistem keamanan berlapis dengan enkripsi end-to-end dan monitoring 24/7',
    icon: <SecurityIcon />
  },
  {
    title: 'Otomatisasi Cerdas',
    description: 'Otomatiskan proses bisnis Anda dengan workflow yang dapat disesuaikan',
    icon: <AutomationIcon />
  },
  {
    title: 'Integrasi Mudah',
    description: 'API yang developer-friendly dengan dokumentasi lengkap dan SDK tersedia',
    icon: <IntegrationIcon />
  }
];

// --- Komponen Kartu Produk (MODIFIKASI) ---
const ProductCard: React.FC<ProductFeature & { index: number }> = ({ 
  title, 
  description, 
  details, 
  id, 
  icon, 
  illustration, 
  index 
}) => {
  const isReversed = index % 2 !== 0;

  return (
    <div id={id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className={isReversed ? 'lg:order-2' : 'lg:order-1'}>
        <div className="flex items-center mb-6">
          <div className="bg-green-100 p-3 rounded-full mr-4">
            {icon}
          </div>
          <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        </div>
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
        <ul className="space-y-3">
          {details.map((detail, detailIndex) => (
            <li key={detailIndex} className="flex items-start">
              <CheckIcon />
              <span className="text-gray-700 leading-relaxed">{detail}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={isReversed ? 'lg:order-1' : 'lg:order-2'}>
        <Image 
          src={illustration} 
<<<<<<< HEAD
          alt={`${title} Illustration`} 
=======
          alt={`{title} Illustration`} 
>>>>>>> 85cfcc435548c07ccef3c8f15f92ffb231f4f17e
          width={500}
          height={300}
          className="rounded-xl shadow-lg w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

// --- Komponen Fitur Dashboard ---
const DashboardFeatureCard: React.FC<DashboardFeature> = ({ title, description, icon }) => (
  <Card className="p-6 border-gray-200 hover:shadow-lg transition-shadow duration-200">
    <CardHeader className="pb-4">
      <div className="flex items-center space-x-3">
        <div className="bg-green-100 p-2 rounded-lg">
          {icon}
        </div>
        <CardTitle className="text-lg font-semibold text-gray-900">{title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent className="pt-0">
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </CardContent>
  </Card>
);

// --- Halaman Utama ---
const ProdukPage: React.FC = () => {
  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <section style={{ backgroundColor: '#F5FBF5' }}>
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                Produk & Fitur Unggulan SparkPay
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Memberdayakan Bisnis Anda dengan Teknologi Pembayaran Tercanggih. SparkPay menyediakan serangkaian lengkap fitur yang dirancang untuk menyederhanakan setiap proses transaksi.
              </p>
              <Button
                size="lg"
                  className="bg-[#3C8346] text-white text-lg font-bold rounded-lg px-8 py-4 shadow-[0_8px_20px_rgba(60,131,70,0.5)] hover:bg-green-700 transform transition-transform duration-300 hover:scale-105"
                  >
                Jelajahi Produk Kami
              </Button>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Image 
                src="/images/dashboard.png" 
                alt="SparkPay Products" 
                width={500}
                height={400}
                className="rounded-xl shadow-2xl w-full max-w-lg object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Produk Utama Section */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              Produk Utama SparkPay
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Solusi pembayaran lengkap untuk semua kebutuhan bisnis Anda.
            </p>
          </div>
          <div className="space-y-20">
            {productsData.map((product, index) => (
              <ProductCard key={product.id} {...product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Fitur Dashboard Section */}
      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              Fitur Dashboard yang Powerful
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Kelola bisnis Anda dengan mudah melalui dashboard yang intuitif dan powerful.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dashboardFeatures.map((feature) => (
              <DashboardFeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Statistik Section */}
      <section className="py-20 lg:py-24 bg-green-600">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">30+</div>
              <div className="text-green-100">Metode Pembayaran</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-green-100">Uptime</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">10k+</div>
              <div className="text-green-100">Merchant Aktif</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-green-100">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
            Siap Meningkatkan Bisnis Anda?
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Bergabunglah dengan ribuan merchant yang telah mempercayai SparkPay untuk solusi pembayaran mereka.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-base font-semibold"
            >
              Daftar Sekarang
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 text-base font-semibold"
            >
              Hubungi Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProdukPage;