import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Data untuk section "How It Works"
const howItWorksData = [
  {
    number: "01",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>,
    title: "Customer Memilih Metode Pembayaran",
    description: "Customer mengakses checkout dan memilih metode pembayaran favorit mereka dari berbagai opsi yang tersedia.",
    points: ["Virtual Account Bank", "E-wallet (GoPay, OVO, DANA)", "Kartu Kredit/Debit", "QRIS"],
  },
  {
    number: "02",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>,
    title: "SparkPay Memproses Transaksi Secara Aman",
    description: "Sistem SparkPay memproses pembayaran dengan enkripsi tingkat bank dan verifikasi keamanan berlapis.",
    points: ["Enkripsi SSL 256-bit", "Anti-fraud detection", "Validasi real-time", "PCI DSS compliant"],
  },
  {
    number: "03",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"></path></svg>,
    title: "Merchant Mendapat Notifikasi Status Pembayaran",
    description: "Notifikasi instan dikirim via webhook, email, atau SMS ketika status pembayaran berubah dari pending ke success.",
    points: ["Webhook real-time", "SMS alerts", "Email notification", "Dashboard update"],
  },
  {
    number: "04",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>,
    title: "Dana Masuk Sesuai Jadwal Pencairan",
    description: "Dana dari transaksi yang berhasil dicairkan otomatis ke rekening merchant sesuai jadwal yang ditentukan.",
    points: ["T+1 untuk VA & E-wallet", "T+2 untuk Kartu Kredit", "Pencairan otomatis", "Laporan settlement"],
  },
];

// Data untuk kartu testimoni
const testimonialsData = [
  {
    quote: "Sejak pakai SparkPay, proses pembayaran di toko jadi lebih cepat dan praktis!",
    avatar: "https://i.pravatar.cc/150?u=febri",
    name: "Febri Thompson",
    title: "Pemilik Toko XYZ",
  },
  {
    quote: "Fitur laporan transaksinya detail banget, jadi memudahkan kami memantau penjualan harian.",
    avatar: "https://i.pravatar.cc/150?u=andi",
    name: "Andi Saputra",
    title: "Manajer Keuangan",
  },
  {
    quote: "Integrasi ke sistem kami sangat mudah, dan biaya transaksinya transparan.",
    avatar: "https://i.pravatar.cc/150?u=budi",
    name: "Budi Waseso",
    title: "Developer Web",
  },
];

// Data untuk FAQ
const faqData = [
  {
    value: "item-1",
    question: "Apa itu SparkPay?",
    answer: "SparkPay adalah platform Payment Gateway Indonesia yang memungkinkan bisnis menerima pembayaran digital dari berbagai metode seperti Virtual Account bank, e-wallet (GoPay, OVO, DANA, ShopeePay), kartu kredit/debit, dan QRIS hanya dengan satu integrasi API. Kami menyediakan solusi pembayaran yang aman, cepat, dan mudah digunakan untuk semua skala bisnis.",
  },
  {
    value: "item-2",
    question: "Siapa saja yang bisa menggunakan SparkPay?",
    answer: "SparkPay dapat digunakan oleh berbagai jenis bisnis dari UMKM hingga perusahaan besar. Apakah Anda memiliki toko online, aplikasi, atau bisnis tradisional yang ingin menerima pembayaran digital, SparkPay bisa menjadi solusi untuk Anda.",
  },
  {
    value: "item-3",
    question: "Apakah SparkPay aman untuk digunakan?",
    answer: "Ya, SparkPay menerapkan standar keamanan tinggi dengan sertifikasi PCI DSS Level 1 untuk menjaga keamanan data dan transaksi. Seluruh data sensitif dienkripsi dan sistem kami secara rutin diaudit untuk memastikan keamanan.",
  },
  {
    value: "item-4",
    question: "Metode pembayaran apa saja yang didukung SparkPay?",
    answer: "SparkPay mendukung berbagai metode pembayaran termasuk Virtual Account dari bank-bank besar Indonesia, E-wallet populer (GoPay, OVO, DANA, ShopeePay), kartu kredit/debit, QRIS, dan transfer bank.",
  },
  {
    value: "item-5",
    question: "Bagaimana cara integrasi SparkPay ke website atau aplikasi saya?",
    answer: "SparkPay menyediakan dokumentasi API yang lengkap dan SDK untuk berbagai bahasa pemrograman. Tim teknis kami juga siap membantu proses integrasi agar berjalan lancar dan cepat.",
  },
];


export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-[#F5FBF5] py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Kolom Teks */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl font-extrabold text-[#1E293B] tracking-tight leading-tight mb-6 md:text-5xl">
              <span style={{ color: '#3C8346' }}>SparkPay</span> – Solusi Pembayaran{" "}
              <span style={{ color: '#FFD340' }}>Terintegrasi</span> untuk Bisnis Anda
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
              Terima pembayaran dari berbagai metode hanya dengan satu integrasi. Aman, cepat, dan mudah digunakan.
            </p>
            <Button
              size="lg"
              className="bg-[#3C8346] text-white text-lg font-bold rounded-lg px-8 py-4 shadow-[0_8px_20px_rgba(60,131,70,0.5)] hover:bg-green-700 transform transition-transform duration-300 hover:scale-105"
            >
              Daftar Sekarang
            </Button>
          </div>
          
          {/* Kolom Gambar */}
          <div className="md:w-1/2">
            <Image
              src="/images/foto1.jpg"
              alt="Solusi Pembayaran SparkPay"
              width={700}
              height={500}
              className="rounded-lg shadow-2xl object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Payment Gateway Section */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">SparkPay - Payment Gateway Indonesia</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-12">
            SparkPay adalah platform Payment Gateway yang memungkinkan bisnis Indonesia menerima pembayaran digital dengan mudah dan aman. Dengan satu integrasi, Anda dapat menerima pembayaran dari berbagai metode populer.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Virtual Account Bank</h3>
                <p className="text-gray-600">BCA, Mandiri, BNI, BRI, Permata, CIMB, DBS, Niaga, dan bank lainnya</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 flex flex-col items-center">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">E-Wallet Populer</h3>
                <p className="text-gray-600">GoPay, OVO, DANA, ShopeePay, LinkAja, dan dompet digital lainnya</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 flex flex-col items-center">
                <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Kartu Kredit/Debit</h3>
                <p className="text-gray-600">Visa, Mastercard, JCB dengan sistem keamanan 3D Secure</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fitur Section */}
      <section className="w-full py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Fitur Unggulan SparkPay</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">Solusi pembayaran lengkap yang dirancang untuk memenuhi kebutuhan bisnis modern.</p>
          </div>

          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full shadow-md hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="flex flex-col items-start gap-4 p-6 h-full">
                      <div className="bg-green-100 p-3 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3C8346" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                      </div>
                      <h3 className="text-xl font-semibold text-slate-800">Multi-Channel Payment</h3>
                      <p className="text-slate-600 text-sm">Terima pembayaran dari Virtual Account bank, e-wallet, kartu kredit, QRIS, dan transfer bank dalam satu platform terintegrasi.</p>
                      <ul className="space-y-2 text-sm mt-auto">
                        <li className="flex items-center text-slate-700"><span className="mr-2 text-green-500">✓</span> 20+ metode pembayaran</li>
                        <li className="flex items-center text-slate-700"><span className="mr-2 text-green-500">✓</span> Satu API untuk semua</li>
                        <li className="flex items-center text-slate-700"><span className="mr-2 text-green-500">✓</span> Laporan otomatis</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              
              <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full shadow-md hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="flex flex-col items-start gap-4 p-6 h-full">
                       <div className="bg-blue-100 p-3 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20V10"></path><path d="M18 20V4"></path><path d="M6 20V16"></path></svg>
                      </div>
                      <h3 className="text-xl font-semibold text-slate-800">Dashboard Merchant</h3>
                      <p className="text-slate-600 text-sm">Monitor transaksi real-time, analisis performa bisnis, unduh laporan, dan kelola semua pembayaran dalam satu tempat yang mudah.</p>
                      <ul className="space-y-2 text-sm mt-auto">
                        <li className="flex items-center text-slate-700"><span className="mr-2 text-green-500">✓</span> Analisis real-time</li>
                        <li className="flex items-center text-slate-700"><span className="mr-2 text-green-500">✓</span> Export laporan</li>
                        <li className="flex items-center text-slate-700"><span className="mr-2 text-green-500">✓</span> Multi-user access</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              
              <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full shadow-md hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="flex flex-col items-start gap-4 p-6 h-full">
                      <div className="bg-orange-100 p-3 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                      </div>
                      <h3 className="text-xl font-semibold text-slate-800">Integrasi API Mudah</h3>
                      <p className="text-slate-600 text-sm">Dokumentasi lengkap, SDK multi-bahasa, plugin e-commerce, dan sample code yang memudahkan developer melakukan integrasi.</p>
                      <ul className="space-y-2 text-sm mt-auto">
                        <li className="flex items-center text-slate-700"><span className="mr-2 text-green-500">✓</span> REST API</li>
                        <li className="flex items-center text-slate-700"><span className="mr-2 text-green-500">✓</span> SDK lengkap</li>
                        <li className="flex items-center text-slate-700"><span className="mr-2 text-green-500">✓</span> Plugin ready</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>

              <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full shadow-md hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="flex flex-col items-start gap-4 p-6 h-full">
                      <div className="bg-yellow-100 p-3 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#eab308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                      </div>
                      <h3 className="text-xl font-semibold text-slate-800">Notifikasi Otomatis</h3>
                      <p className="text-slate-600 text-sm">Terima notifikasi instan via webhook, email, dan SMS untuk setiap perubahan status transaksi secara real-time.</p>
                      <ul className="space-y-2 text-sm mt-auto">
                        <li className="flex items-center text-slate-700"><span className="mr-2 text-green-500">✓</span> Webhook real-time</li>
                        <li className="flex items-center text-slate-700"><span className="mr-2 text-green-500">✓</span> Email alerts</li>
                        <li className="flex items-center text-slate-700"><span className="mr-2 text-green-500">✓</span> SMS notification</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>

              <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full shadow-md hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="flex flex-col items-start gap-4 p-6 h-full">
                      <div className="bg-sky-100 p-3 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                      </div>
                      <h3 className="text-xl font-semibold text-slate-800">Keamanan Terjamin</h3>
                      <p className="text-slate-600 text-sm">Sertifikasi PCI DSS Level 1, enkripsi SSL 256-bit, tokenisasi data, dan sistem anti-fraud untuk melindungi setiap transaksi.</p>
                      <ul className="space-y-2 text-sm mt-auto">
                        <li className="flex items-center text-slate-700"><span className="mr-2 text-green-500">✓</span> PCI DSS certified</li>
                        <li className="flex items-center text-slate-700"><span className="mr-2 text-green-500">✓</span> SSL encryption</li>
                        <li className="flex items-center text-slate-700"><span className="mr-2 text-green-500">✓</span> Anti-fraud system</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full py-24 bg-[#F5FBF5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Bagaimana SparkPay Bekerja?</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">Proses pembayaran yang sederhana dan efisien untuk merchant dan customer.</p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {howItWorksData.map((item, index) => (
              <div key={item.number} className="relative">
                <Card className="bg-white rounded-xl shadow-sm border border-gray-200 h-full">
                  <CardContent className="p-8 flex flex-col items-start text-left h-full">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-green-100 text-[#3C8346] rounded-lg text-lg font-bold">
                        {item.number}
                      </div>
                      <div className="text-[#3C8346]">{item.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
                    <p className="text-slate-600 text-sm mb-6 flex-grow">{item.description}</p>
                    <ul className="space-y-2 text-sm">
                      {item.points.map((point) => (
                        <li key={point} className="flex items-start">
                          <span className="text-green-500 mr-2 mt-1">▪</span>
                          <span className="text-slate-700">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                {/* Arrow Connector */}
                {index < howItWorksData.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-8 transform -translate-y-1/2">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19" stroke="#d1d5db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="4 4"/>
                      <path d="M12 5L19 12L12 19" stroke="#d1d5db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Partners */}
      <section className="w-full py-16" style={{ backgroundColor: '#3C8346' }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
          
          {/* Kolom Kiri: Judul & Deskripsi */}
          <div className="lg:w-1/3 text-center lg:text-left">
            <h2 className="text-4xl font-bold text-white">Mitra Kami</h2>
            <p className="mt-4 text-lg text-green-100">
              Berikut beberapa merchant dan brand yang telah memilih SparkPay untuk solusi pembayaran mereka.
            </p>
          </div>

          {/* Kolom Kanan: Deretan Kartu Mitra */}
          <div className="lg:w-2/3 w-full">
            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              
              <Card className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
                <CardContent className="p-6 flex flex-col items-center justify-center gap-4 w-48 h-48">
                  <Image src="/images/kapten.png" alt="Kapten" width={150} height={80} className="h-20 object-contain" />
                  <p className="text-sm font-medium text-slate-600">PT. Naraya Telematika</p>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
                <CardContent className="p-6 flex flex-col items-center justify-center gap-4 w-48 h-48">
                  <Image src="/images/ngomongo.png" alt="Ngomongo" width={150} height={80} className="h-20 object-contain" />
                  <p className="text-sm font-medium text-slate-600">PT. Naraya Telematika</p>
                </CardContent>
              </Card>

            </div>
          </div>

        </div>
      </section>
          
{/* Social Proof / Testimonials */}
      <section className="w-full py-24 bg-slate-50 relative overflow-hidden">
        {/* Bintang Dekoratif */}
        <div className="hidden md:block absolute top-1/4 left-10 text-yellow-400 text-5xl opacity-80 transform -translate-y-1/2 rotate-12">★</div>
        <div className="hidden md:block absolute top-1/2 left-1/4 text-yellow-400 text-2xl opacity-70 transform -translate-x-1/2">★</div>
        <div className="hidden md:block absolute top-1/3 right-1/4 text-yellow-400 text-xl opacity-60 transform translate-y-1/2 -rotate-12">★</div>
        <div className="hidden md:block absolute top-1/2 right-10 text-yellow-400 text-5xl opacity-80 transform translate-y-full rotate-45">★</div>
        <div className="hidden md:block absolute bottom-10 left-1/3 text-yellow-400 text-3xl opacity-70">★</div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Main Header (tetap di luar kotak) */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Ribuan Merchant Percaya SparkPay</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
              Bergabunglah bersama brand dan bisnis yang sudah merasakan kemudahan menerima pembayaran.
            </p>
          </div>
          
          {/* Kontainer "Kotak" Putih dengan Shadow Hijau */}
          <div 
            className="bg-white rounded-2xl p-8 md:p-12" 
            style={{ boxShadow: '0 10px 25px -5px rgba(60, 131, 70, 0.2), 0 8px 10px -6px rgba(60, 131, 70, 0.2)' }}
          >
            
            {/* Teks di dalam Kotak */}
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-slate-800">
                Miliaran Rupiah transaksi setiap bulan
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-16 text-center md:text-left">
              <div>
                <h4 className="text-xl font-bold text-slate-800 mb-2">
                  Dipercaya Bisnis di Seluruh Indonesia
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  Untuk menerima pembayaran lebih mudah
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-800 mb-2">
                  Transaksi Lancar Setiap Detik
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  Nilai miliaran rupiah mengalir lewat SparkPay setiap bulan
                </p>
              </div>
            </div>

            {/* Testimonial Carousel */}
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent className="-ml-6">
                {testimonialsData.map((testimonial, index) => (
                  <CarouselItem key={index} className="pl-6 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                      <div className="p-6 rounded-xl border border-yellow-300 flex flex-col h-full">
                        <div className="flex-grow relative">
                          <div className="absolute -top-4 -left-2 text-orange-300 text-7xl font-serif opacity-80">&ldquo;</div>
                          <p className="text-slate-700 leading-relaxed z-10 relative pt-8">
                            {testimonial.quote}
                          </p>
                        </div>
                        <div className="flex items-center mt-6">
                          <Image className="w-12 h-12 rounded-full mr-4 object-cover" src={testimonial.avatar} alt={testimonial.name} width={48} height={48} />
                          <div>
                            <h5 className="font-semibold text-slate-800">{testimonial.name}</h5>
                            <p className="text-sm text-slate-500">{testimonial.title}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden xl:flex" />
              <CarouselNext className="hidden xl:flex" />
            </Carousel>
          </div>
        </div>
      </section>
      
      {/* FAQ & CTA Section */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Pertanyaan yang Sering Ditanyakan</h2>
            <p className="mt-4 text-lg text-slate-600">Temukan jawaban untuk pertanyaan umum seputar SparkPay.</p>
          </div>

          <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
            {faqData.map((faq) => (
              <AccordionItem key={faq.value} value={faq.value} className="border-b border-yellow-200 data-[state=open]:border-yellow-400">
                <AccordionTrigger className="text-left text-lg font-medium text-slate-700 hover:no-underline data-[state=open]:text-green-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-4 text-slate-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-16 bg-white border border-yellow-300 rounded-2xl p-8 relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-2/3 text-center md:text-left">
                <h3 className="text-2xl font-bold text-slate-800">Masih punya pertanyaan? Kami siap membantu.</h3>
                <p className="mt-3 mb-6 text-slate-600">Bicaralah dengan anggota tim kami yang siap membantu untuk mendapatkan semua jawaban yang Anda butuhkan.</p>
                <Button className="bg-[#3C8346] text-white hover:bg-green-700 font-semibold">
                  Hubungi Kami
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                </Button>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <Image
                  src="/images/faq.jpg"
                  alt="Support Agent"
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}