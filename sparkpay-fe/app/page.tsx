"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { type CarouselApi } from "@/components/ui/carousel";
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.slideNext(); // maju satu item
    }, 3000); // 3000ms = 3 detik

    return () => clearInterval(interval);
  }, [api]);

// Data untuk section "How It Works"
const howItWorksData = [
  {
    number: "01",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
      </svg>
    ),
    title: "Customer Memilih Metode Pembayaran",
    description:
      "Customer mengakses checkout dan memilih metode pembayaran favorit mereka dari berbagai opsi yang tersedia.",
    points: [
      "Virtual Account Bank",
      "E-wallet (GoPay, OVO, DANA)",
      "Kartu Kredit/Debit",
      "QRIS",
    ],
  },
  {
    number: "02",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="16" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12.01" y2="8"></line>
      </svg>
    ),
    title: "SparkPay Memproses Transaksi Secara Aman",
    description:
      "Sistem SparkPay memproses pembayaran dengan enkripsi tingkat bank dan verifikasi keamanan berlapis.",
    points: [
      "Enkripsi SSL 256-bit",
      "Anti-fraud detection",
      "Validasi real-time",
      "PCI DSS compliant",
    ],
  },
  {
    number: "03",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"></path>
      </svg>
    ),
    title: "Merchant Mendapat Notifikasi Status Pembayaran",
    description:
      "Notifikasi instan dikirim via webhook, email, atau SMS ketika status pembayaran berubah dari pending ke success.",
    points: [
      "Webhook real-time",
      "SMS alerts",
      "Email notification",
      "Dashboard update",
    ],
  },
  {
    number: "04",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
      </svg>
    ),
    title: "Dana Masuk Sesuai Jadwal Pencairan",
    description:
      "Dana dari transaksi yang berhasil dicairkan otomatis ke rekening merchant sesuai jadwal yang ditentukan.",
    points: [
      "T+1 untuk VA & E-wallet",
      "T+2 untuk Kartu Kredit",
      "Pencairan otomatis",
      "Laporan settlement",
    ],
  },
];

// Data untuk kartu testimoni
const testimonialsData = [
  {
    quote:
      "Sejak pakai SparkPay, proses pembayaran di toko jadi lebih cepat dan praktis!",
    avatar: "https://i.pravatar.cc/150?u=febri",
    name: "Febri Thompson",
    title: "Pemilik Toko XYZ",
  },
  {
    quote:
      "Fitur laporan transaksinya detail banget, jadi memudahkan kami memantau penjualan harian.",
    avatar: "https://i.pravatar.cc/150?u=andi",
    name: "Andi Saputra",
    title: "Manajer Keuangan",
  },
  {
    quote:
      "Integrasi ke sistem kami sangat mudah, dan biaya transaksinya transparan.",
    avatar: "https://i.pravatar.cc/150?u=budi",
    name: "Budi Waseso",
    title: "Developer Web",
  },
  {
    quote:
      "Layanan pelanggan sangat responsif dan membantu kami menyelesaikan masalah dengan cepat.",
    avatar: "https://i.pravatar.cc/150?u=citra",
    name: "Citra Lestari",
    title: "Customer Service Head",
  },
  {
    quote:
      "Pilihan metode pembayaran yang lengkap membuat pelanggan kami lebih nyaman bertransaksi.",
    avatar: "https://i.pravatar.cc/150?u=dewi",
    name: "Dewi Anggraini",
    title: "Marketing Manager",
  },
];

// Data untuk FAQ
const faqData = [
  {
    value: "item-1",
    question: "Apa itu SparkPay?",
    answer:
      "SparkPay adalah platform Payment Gateway Indonesia yang memungkinkan bisnis menerima pembayaran digital dari berbagai metode seperti Virtual Account bank, e-wallet (GoPay, OVO, DANA, ShopeePay), kartu kredit/debit, dan QRIS hanya dengan satu integrasi API. Kami menyediakan solusi pembayaran yang aman, cepat, dan mudah digunakan untuk semua skala bisnis.",
  },
  {
    value: "item-2",
    question: "Siapa saja yang bisa menggunakan SparkPay?",
    answer:
      "SparkPay dapat digunakan oleh berbagai jenis bisnis dari UMKM hingga perusahaan besar. Apakah Anda memiliki toko online, aplikasi, atau bisnis tradisional yang ingin menerima pembayaran digital, SparkPay bisa menjadi solusi untuk Anda.",
  },
  {
    value: "item-3",
    question: "Apakah SparkPay aman untuk digunakan?",
    answer:
      "Ya, SparkPay menerapkan standar keamanan tinggi dengan sertifikasi PCI DSS Level 1 untuk menjaga keamanan data dan transaksi. Seluruh data sensitif dienkripsi dan sistem kami secara rutin diaudit untuk memastikan keamanan.",
  },
  {
    value: "item-4",
    question: "Metode pembayaran apa saja yang didukung SparkPay?",
    answer:
      "SparkPay mendukung berbagai metode pembayaran termasuk Virtual Account dari bank-bank besar Indonesia, E-wallet populer (GoPay, OVO, DANA, ShopeePay), kartu kredit/debit, QRIS, dan transfer bank.",
  },
  {
    value: "item-5",
    question:
      "Bagaimana cara integrasi SparkPay ke website atau aplikasi saya?",
    answer:
      "SparkPay menyediakan dokumentasi API yang lengkap dan SDK untuk berbagai bahasa pemrograman. Tim teknis kami juga siap membantu proses integrasi agar berjalan lancar dan cepat.",
  },
];

export default function Home() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const paymentGatewaySectionRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    paymentGatewaySectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (api) {
        api.scrollNext();
      }
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer);
  }, [api]);

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-[#F5FBF5] py-20 md:py-24">
        <div className="flex flex-col items-center justify-between gap-12 px-6 mx-auto max-w-7xl md:flex-row">
          {/* Kolom Teks */}
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-4xl font-extrabold text-[#1E293B] tracking-tight leading-tight mb-6 md:text-5xl">
              <span style={{ color: "#3C8346" }}>SparkPay</span> – Solusi
              Pembayaran{" "}
              <span style={{ color: "#FFD340" }}>Terintegrasi</span> untuk Bisnis
              Anda
            </h1>
            <p className="max-w-xl mx-auto mb-8 text-lg leading-relaxed text-gray-600 md:mx-0">
              Terima pembayaran dari berbagai metode hanya dengan satu
              integrasi. Aman, cepat, dan mudah digunakan.
            </p>
            <Button
              size="lg"
              className="bg-[#3C8346] text-white text-lg font-bold rounded-lg px-8 py-4 shadow-[0_8px_20px_rgba(60,131,70,0.5)] hover:bg-green-700 transform transition-transform duration-300 hover:scale-105"
              onClick={handleScroll}
            >
              Mulai Menjelajah
            </Button>
          </div>

          {/* Kolom Gambar */}
          <div className="md:w-1/2">
            <Image
              src="/images/foto1.jpg"
              alt="Solusi Pembayaran SparkPay"
              width={700}
              height={500}
              className="object-cover w-full h-full rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Payment Gateway Section */}
      <section ref={paymentGatewaySectionRef} className="w-full py-16 bg-white">
        <div className="px-6 mx-auto text-center max-w-7xl">
          <h2 className="mb-4 text-3xl font-bold">
            SparkPay - Payment Gateway Indonesia
          </h2>
          <p className="max-w-3xl mx-auto mb-12 text-gray-600">
            SparkPay adalah platform Payment Gateway yang memungkinkan bisnis
            Indonesia menerima pembayaran digital dengan mudah dan aman. Dengan
            satu integrasi, Anda dapat menerima pembayaran dari berbagai metode
            populer.
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="transition-all duration-300 shadow-lg hover:shadow-xl">
              <CardContent className="flex flex-col items-center p-8">
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-semibold">
                  Virtual Account Bank
                </h3>
                <p className="text-gray-600">
                  BCA, Mandiri, BNI, BRI, Permata, CIMB, DBS, Niaga, dan bank
                  lainnya
                </p>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 shadow-lg hover:shadow-xl">
              <CardContent className="flex flex-col items-center p-8">
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-green-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-semibold">E-Wallet Populer</h3>
                <p className="text-gray-600">
                  GoPay, OVO, DANA, ShopeePay, LinkAja, dan dompet digital
                  lainnya
                </p>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 shadow-lg hover:shadow-xl">
              <CardContent className="flex flex-col items-center p-8">
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-orange-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-orange-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-semibold">
                  Kartu Kredit/Debit
                </h3>
                <p className="text-gray-600">
                  Visa, Mastercard, JCB dengan sistem keamanan 3D Secure
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fitur Section */}
      <section className="w-full py-24 bg-slate-50">
        <div className="px-6 mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold md:text-4xl text-slate-800">
              Fitur Unggulan SparkPay
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-lg text-slate-600">
              Solusi pembayaran lengkap yang dirancang untuk memenuhi kebutuhan
              bisnis modern.
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="h-full p-1">
                  <Card className="h-full transition-shadow duration-300 shadow-md hover:shadow-lg">
                    <CardContent className="flex flex-col items-start h-full gap-4 p-6">
                      <div className="p-3 bg-green-100 rounded-lg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#3C8346"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-slate-800">
                        Multi-Channel Payment
                      </h3>
                      <p className="text-sm text-slate-600">
                        Terima pembayaran dari Virtual Account bank, e-wallet,
                        kartu kredit, QRIS, dan transfer bank dalam satu
                        platform terintegrasi.
                      </p>
                      <ul className="mt-auto space-y-2 text-sm">
                        <li className="flex items-center text-slate-700">
                          <span className="mr-2 text-green-500">✓</span> 20+ metode pembayaran
                        </li>
                        <li className="flex items-center text-slate-700">
                          <span className="mr-2 text-green-500">✓</span> Satu API untuk semua
                        </li>
                        <li className="flex items-center text-slate-700">
                          <span className="mr-2 text-green-500">✓</span> Laporan otomatis
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>

              <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="h-full p-1">
                  <Card className="h-full transition-shadow duration-300 shadow-md hover:shadow-lg">
                    <CardContent className="flex flex-col items-start h-full gap-4 p-6">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#3b82f6"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 20V10"></path>
                          <path d="M18 20V4"></path>
                          <path d="M6 20V16"></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-slate-800">
                        Dashboard Merchant
                      </h3>
                      <p className="text-sm text-slate-600">
                        Monitor transaksi real-time, analisis performa bisnis,
                        unduh laporan, dan kelola semua pembayaran dalam satu
                        tempat yang mudah.
                      </p>
                      <ul className="mt-auto space-y-2 text-sm">
                        <li className="flex items-center text-slate-700">
                          <span className="mr-2 text-green-500">✓</span> Analisis real-time
                        </li>
                        <li className="flex items-center text-slate-700">
                          <span className="mr-2 text-green-500">✓</span> Export laporan
                        </li>
                        <li className="flex items-center text-slate-700">
                          <span className="mr-2 text-green-500">✓</span> Multi-user access
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>

              <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="h-full p-1">
                  <Card className="h-full transition-shadow duration-300 shadow-md hover:shadow-lg">
                    <CardContent className="flex flex-col items-start h-full gap-4 p-6">
                      <div className="p-3 bg-orange-100 rounded-lg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#f97316"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="16 18 22 12 16 6"></polyline>
                          <polyline points="8 6 2 12 8 18"></polyline>
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-slate-800">
                        Integrasi API Mudah
                      </h3>
                      <p className="text-sm text-slate-600">
                        Dokumentasi lengkap, SDK multi-bahasa, plugin
                        e-commerce, dan sample code yang memudahkan developer
                        melakukan integrasi.
                      </p>
                      <ul className="mt-auto space-y-2 text-sm">
                        <li className="flex items-center text-slate-700">
                          <span className="mr-2 text-green-500">✓</span> REST API
                        </li>
                        <li className="flex items-center text-slate-700">
                          <span className="mr-2 text-green-500">✓</span> SDK lengkap
                        </li>
                        <li className="flex items-center text-slate-700">
                          <span className="mr-2 text-green-500">✓</span> Plugin ready
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>

              <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="h-full p-1">
                  <Card className="h-full transition-shadow duration-300 shadow-md hover:shadow-lg">
                    <CardContent className="flex flex-col items-start h-full gap-4 p-6">
                      <div className="p-3 bg-yellow-100 rounded-lg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#eab308"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-slate-800">
                        Notifikasi Otomatis
                      </h3>
                      <p className="text-sm text-slate-600">
                        Terima notifikasi instan via webhook, email, dan SMS
                        untuk setiap perubahan status transaksi secara real-time.
                      </p>
                      <ul className="mt-auto space-y-2 text-sm">
                        <li className="flex items-center text-slate-700">
                          <span className="mr-2 text-green-500">✓</span> Webhook real-time
                        </li>
                        <li className="flex items-center text-slate-700">
                          <span className="mr-2 text-green-500">✓</span> Email alerts
                        </li>
                        <li className="flex items-center text-slate-700">
                          <span className="mr-2 text-green-500">✓</span> SMS notification
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>

              <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="h-full p-1">
                  <Card className="h-full transition-shadow duration-300 shadow-md hover:shadow-lg">
                    <CardContent className="flex flex-col items-start h-full gap-4 p-6">
                      <div className="p-3 rounded-lg bg-sky-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#0ea5e9"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-slate-800">
                        Keamanan Terjamin
                      </h3>
                      <p className="text-sm text-slate-600">
                        Sertifikasi PCI DSS Level 1, enkripsi SSL 256-bit,
                        tokenisasi data, dan sistem anti-fraud untuk melindungi
                        setiap transaksi.
                      </p>
                      <ul className="mt-auto space-y-2 text-sm">
                        <li className="flex items-center text-slate-700">
                          <span className="mr-2 text-green-500">✓</span> PCI DSS certified
                        </li>
                        <li className="flex items-center text-slate-700">
                          <span className="mr-2 text-green-500">✓</span> SSL encryption
                        </li>
                        <li className="flex items-center text-slate-700">
                          <span className="mr-2 text-green-500">✓</span> Anti-fraud system
                        </li>
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
        <div className="px-6 mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold md:text-4xl text-slate-800">
              Bagaimana SparkPay Bekerja?
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-lg text-slate-600">
              Proses pembayaran yang sederhana dan efisien untuk merchant dan
              customer.
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {howItWorksData.map((item, index) => (
              <div key={item.number} className="relative">
                <Card className="h-full bg-white border border-gray-200 shadow-sm rounded-xl">
                  <CardContent className="flex flex-col items-start h-full p-8 text-left">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-green-100 text-[#3C8346] rounded-lg text-lg font-bold">
                        {item.number}
                      </div>
                      <div className="text-[#3C8346]">{item.icon}</div>
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-slate-800">
                      {item.title}
                    </h3>
                    <p className="flex-grow mb-6 text-sm text-slate-600">
                      {item.description}
                    </p>
                    <ul className="space-y-2 text-sm">
                      {item.points.map((point) => (
                        <li key={point} className="flex items-start">
                          <span className="mt-1 mr-2 text-green-500">▪</span>
                          <span className="text-slate-700">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                {/* Arrow Connector */}
                {index < howItWorksData.length - 1 && (
                  <div className="absolute hidden transform -translate-y-1/2 lg:block top-1/2 -right-8">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 12H19"
                        stroke="#d1d5db"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeDasharray="4 4"
                      />
                      <path
                        d="M12 5L19 12L12 19"
                        stroke="#d1d5db"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="w-full py-16" style={{ backgroundColor: "#3C8346" }}>
        <div className="flex flex-col items-center gap-12 px-6 mx-auto max-w-7xl lg:flex-row">
          {/* Kolom Kiri: Judul & Deskripsi */}
          <div className="text-center lg:w-1/3 lg:text-left">
            <h2 className="text-4xl font-bold text-white">Mitra Kami</h2>
            <p className="mt-4 text-lg text-green-100">
              Berikut beberapa merchant dan brand yang telah memilih SparkPay
              untuk solusi pembayaran mereka.
            </p>
          </div>

          {/* Kolom Kanan: Deretan Kartu Mitra */}
          <div className="w-full lg:w-2/3">
            <div className="flex flex-wrap justify-center gap-6 lg:justify-end">
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="transition-all duration-300 shadow-lg bg-white/90 backdrop-blur-sm rounded-xl hover:shadow-2xl hover:scale-105 cursor-pointer">
                    <CardContent className="flex flex-col items-center justify-center w-48 h-48 gap-4 p-6">
                      <Image
                        src="/images/kapten.png"
                        alt="Kapten"
                        width={150}
                        height={80}
                        className="object-contain h-20"
                      />
                      <p className="text-sm font-medium text-slate-600">
                        Kapten Naratel
                      </p>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md p-0 overflow-hidden rounded-lg shadow-xl">
                  <DialogHeader className="p-6 bg-[#F5FBF5]">
                    <DialogTitle className="flex items-center gap-3 text-xl font-semibold text-[#3C8346]">
                      <Image
                        src="/images/kapten.png"
                        alt="Kapten Logo"
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                      Kapten Naratel
                    </DialogTitle>
                  </DialogHeader>
                  <div className="p-6">
                    <DialogDescription className="text-base text-slate-700 leading-relaxed">
                      Layanan internet lokal berbasis FTTH (Fiber to the
                      Home) yang dikembangkan oleh UMKM asal Malang, PT
                      Naraya Telematika, menghadirkan akses internet yang
                      hemat dan andal.
                    </DialogDescription>
                  </div>
                  <div className="px-6 pb-6 mt-4">
                    <a
                      href="https://kaptennaratel.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full px-4 py-3 font-semibold text-white bg-[#3C8346] rounded-lg shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300 transform hover:scale-105"
                    >
                      <span>Kunjungi Website</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 ml-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
                    </a>
                  </div>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <Card className="transition-all duration-300 shadow-lg bg-white/90 backdrop-blur-sm rounded-xl hover:shadow-2xl hover:scale-105 cursor-pointer">
                    <CardContent className="flex flex-col items-center justify-center w-48 h-48 gap-4 p-6">
                      <Image
                        src="/images/ngomongo.png"
                        alt="Ngomongo"
                        width={150}
                        height={80}
                        className="object-contain h-20"
                      />
                      <p className="text-sm font-medium text-slate-600">
                        Ngomongo
                      </p>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md p-0 overflow-hidden rounded-lg shadow-xl">
                  <DialogHeader className="p-6 bg-[#F5FBF5]">
                    <DialogTitle className="flex items-center gap-3 text-xl font-semibold text-[#3C8346]">
                      <Image
                        src="/images/ngomongo.png"
                        alt="Ngomongo Logo"
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                      Ngomongo
                    </DialogTitle>
                  </DialogHeader>
                  <div className="p-6">
                    <DialogDescription className="text-base text-slate-700 leading-relaxed">
                      Platform komunikasi modern yang menyatukan pesan teks,
                      panggilan suara, dan video dalam satu aplikasi.
                      Dirancang dengan visi menggabungkan komunikasi dan
                      e-commerce.
                    </DialogDescription>
                  </div>
                  <div className="px-6 pb-6 mt-4">
                    <a
                      href="https://ngomongoxyz.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full px-4 py-3 font-semibold text-white bg-[#3C8346] rounded-lg shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300 transform hover:scale-105"
                    >
                      <span>Kunjungi Website</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 ml-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
                    </a>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="relative w-full py-24 overflow-hidden bg-slate-50">
        {/* Bintang Dekoratif */}
        <div className="absolute hidden text-5xl text-yellow-400 transform -translate-y-1/2 md:block top-1/4 left-10 opacity-80 rotate-12">
          ★
        </div>
        <div className="absolute hidden text-2xl text-yellow-400 transform -translate-x-1/2 md:block top-1/2 left-1/4 opacity-70">
          ★
        </div>
        <div className="absolute hidden text-xl text-yellow-400 transform translate-y-1/2 md:block top-1/3 right-1/4 opacity-60 -rotate-12">
          ★
        </div>
        <div className="absolute hidden text-5xl text-yellow-400 transform rotate-45 translate-y-full md:block top-1/2 right-10 opacity-80">
          ★
        </div>
        <div className="absolute hidden text-3xl text-yellow-400 md:block bottom-10 left-1/3 opacity-70">
          ★
        </div>

        <div className="relative z-10 px-6 mx-auto max-w-7xl">
          {/* Main Header (tetap di luar kotak) */}
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold md:text-4xl text-slate-800">
              Ribuan Merchant Percaya SparkPay
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-lg text-slate-600">
              Bergabunglah bersama brand dan bisnis yang sudah merasakan
              kemudahan menerima pembayaran.
            </p>
          </div>

          {/* Kontainer "Kotak" Putih dengan Shadow Hijau */}
          <div
            className="p-6 sm:p-8 bg-white rounded-2xl md:p-12"
            style={{
              boxShadow:
                "0 10px 25px -5px rgba(60, 131, 70, 0.2), 0 8px 10px -6px rgba(60, 131, 70, 0.2)",
            }}
          >
            {/* Teks di dalam Kotak */}
            <div className="mb-12 text-center">
              <h3 className="text-2xl font-bold text-slate-800">
                Miliaran Rupiah transaksi setiap bulan
              </h3>
            </div>

            <div className="grid max-w-4xl grid-cols-1 gap-12 mx-auto mb-16 text-center md:grid-cols-2 md:text-left">
              <div>
                <h4 className="mb-2 text-xl font-bold text-slate-800">
                  Dipercaya Bisnis di Seluruh Indonesia
                </h4>
                <p className="leading-relaxed text-slate-600">
                  Untuk menerima pembayaran lebih mudah
                </p>
              </div>
              <div>
                <h4 className="mb-2 text-xl font-bold text-slate-800">
                  Transaksi Lancar Setiap Detik
                </h4>
                <p className="leading-relaxed text-slate-600">
                  Nilai miliaran rupiah mengalir lewat SparkPay setiap bulan
                </p>
              </div>
            </div>

            {/* Testimonial Carousel */}
            <Carousel
              opts={{ align: "start", loop: true, dragFree: true }}
              setApi={setApi} // 👈 tambahkan ini
              className="w-full"
            >
              <CarouselContent className="-ml-6 flex">
                {testimonialsData.map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-6 basis-full sm:basis-1/2 lg:basis-1/3"
                  >
                    <div className="h-full p-1">
                      <div className="flex flex-col h-full p-4 sm:p-6 border border-yellow-300 rounded-xl">
                        <div className="relative flex-grow">
                          <div className="absolute font-serif text-orange-300 -top-4 -left-2 text-7xl opacity-80">
                            &ldquo;
                          </div>
                          <p className="relative z-10 pt-8 leading-relaxed text-slate-700 min-h-[120px]">
                            {testimonial.quote}
                          </p>
                        </div>
                        <div className="flex items-center mt-6">
                          <Image
                            className="object-cover w-12 h-12 mr-4 rounded-full"
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            width={48}
                            height={48}
                          />
                          <div>
                            <h5 className="font-semibold text-slate-800">
                              {testimonial.name}
                            </h5>
                            <p className="text-sm text-slate-500">
                              {testimonial.title}
                            </p>
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
        <div className="max-w-4xl px-6 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold md:text-4xl text-slate-800">
              Pertanyaan yang Sering Ditanyakan
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Temukan jawaban untuk pertanyaan umum seputar SparkPay.
            </p>
          </div>

          <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
            className="w-full"
          >
            {faqData.map((faq) => (
              <AccordionItem
                key={faq.value}
                value={faq.value}
                className="border-b border-yellow-200 data-[state=open]:border-yellow-400"
              >
                <AccordionTrigger className="text-left text-lg font-medium text-slate-700 hover:no-underline data-[state=open]:text-green-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-4 text-slate-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="relative p-8 mt-16 overflow-hidden bg-white border border-yellow-300 rounded-2xl">
            <div className="flex flex-col items-center gap-8 md:flex-row">
              <div className="text-center md:w-2/3 md:text-left">
                <h3 className="text-2xl font-bold text-slate-800">
                  Masih punya pertanyaan? Kami siap membantu.
                </h3>
                <p className="mt-3 mb-6 text-slate-600">
                  Bicaralah dengan anggota tim kami yang siap membantu untuk
                  mendapatkan semua jawaban yang Anda butuhkan.
                </p>
                  <a 
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=support@sparkpay.id&su=Permintaan%20Informasi%20Sparkpay&body=Halo%20Tim%20Sparkpay,%0A%0ASaya%20ingin%20bertanya%20tentang%20layanan%20Sparkpay.%0A%0ATerima%20kasih." 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-[#3C8346] text-white hover:bg-green-700 font-semibold">
                      Hubungi Kami
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 ml-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Button>
                  </a>
              </div>
              <div className="flex justify-center md:w-1/3">
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