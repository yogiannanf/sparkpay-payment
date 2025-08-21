import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-green-500 text-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-white" style={{
          borderTopLeftRadius: "100% 50%",
          borderTopRightRadius: "100% 50%",
          transform: "translateY(50%)"
        }}></div>
        <div className="container mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between relative z-10">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              SparkPay – Solusi Pembayaran{" "}
              <span className="text-yellow-300">Terintegrasi</span> untuk Bisnis Anda
            </h1>
            <p className="text-lg mb-8">
              Terima pembayaran dari berbagai metode hanya dengan satu integrasi. Aman, cepat, dan mudah digunakan.
            </p>
            <Button size="lg" className="bg-white text-green-500 hover:bg-gray-100 shadow-lg">
              Daftar Sekarang
            </Button>
          </div>
          <div className="md:w-1/2 relative">
            <Image
              src="/images/sparkpay.png"
              alt="SparkPay Hero"
              width={500}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Payment Gateway Section */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">SparkPay - Payment Gateway Indonesia</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-12">
            SparkPay adalah platform Payment Gateway yang memungkinkan bisnis Indonesia
            menerima pembayaran digital dengan mudah dan aman. Dengan satu integrasi, Anda dapat 
            menerima pembayaran dari berbagai metode populer.
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
                <p className="text-gray-600">
                  BCA, Mandiri, BNI, BRI, Permata, CIMB, DBS, Niaga, dan bank lainnya
                </p>
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
                <p className="text-gray-600">
                  GoPay, OVO, DANA, ShopeePay, LinkAja, dan dompet digital lainnya
                </p>
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
                <p className="text-gray-600">
                  Visa, Mastercard, JCB dengan sistem keamanan 3D Secure
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fitur Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Fitur Unggulan SparkPay</h2>
          <p className="text-center text-gray-600 mb-12">
            Solusi pembayaran yang dirancang untuk memenuhi kebutuhan bisnis modern
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-t-green-500">
              <CardContent className="p-6">
                <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-green-500 text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Payment Link</h3>
                <p className="text-gray-600 mb-4">
                  Terima pembayaran dengan mudah hanya dengan mengirimkan link ke pelanggan
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center text-gray-700">
                    <span className="mr-2 text-green-500">✓</span> Mudah dibagikan
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="mr-2 text-green-500">✓</span> Tanpa coding
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="mr-2 text-green-500">✓</span> Berbagai metode
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-t-blue-500">
              <CardContent className="p-6">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-blue-500 text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Dashboard Merchant</h3>
                <p className="text-gray-600 mb-4">
                  Kelola semua transaksi dalam satu dashboard yang intuitif dan lengkap
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center text-gray-700">
                    <span className="mr-2 text-green-500">✓</span> Laporan real-time
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="mr-2 text-green-500">✓</span> Analisis transaksi
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="mr-2 text-green-500">✓</span> Ekspor data
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-t-orange-500">
              <CardContent className="p-6">
                <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-orange-500 text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Integrasi API Mudah</h3>
                <p className="text-gray-600 mb-4">
                  Integrasi yang simpel dengan sistem Anda dengan dokumentasi lengkap
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center text-gray-700">
                    <span className="mr-2 text-green-500">✓</span> REST API
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="mr-2 text-green-500">✓</span> Webhook
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="mr-2 text-green-500">✓</span> Library SDK
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-t-purple-500">
              <CardContent className="p-6">
                <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-purple-500 text-xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Notifikasi Otomatis</h3>
                <p className="text-gray-600 mb-4">
                  Dapatkan notifikasi real-time untuk setiap transaksi atau perubahan status
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center text-gray-700">
                    <span className="mr-2 text-green-500">✓</span> Email
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="mr-2 text-green-500">✓</span> SMS
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="mr-2 text-green-500">✓</span> WhatsApp
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Bagaimana SparkPay Bekerja?</h2>
          <p className="text-center text-gray-600 mb-12">
            Proses pembayaran yang sederhana dan efisien untuk merchant dan customer
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-1/3 left-0 right-0 h-0.5 bg-gray-200"></div>
            
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 z-10">
              <CardContent className="p-6 text-center">
                <div className="bg-green-100 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-500 text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Customer Memilih Metode Pembayaran</h3>
                <p className="text-gray-600">
                  Customer mengakses payment link dan memilih metode pembayaran yang diinginkan
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 z-10">
              <CardContent className="p-6 text-center">
                <div className="bg-green-100 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-500 text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">SparkPay Memproses Transaksi</h3>
                <p className="text-gray-600">
                  Sistem SparkPay memproses pembayaran dengan aman melalui gateway bank atau e-wallet
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 z-10">
              <CardContent className="p-6 text-center">
                <div className="bg-green-100 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-500 text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Merchant Menerima Status Pembayaran</h3>
                <p className="text-gray-600">
                  Merchant mendapatkan notifikasi status pembayaran secara real-time
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 z-10">
              <CardContent className="p-6 text-center">
                <div className="bg-green-100 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-500 text-xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Dana Masuk Jadwal Pencairan</h3>
                <p className="text-gray-600">
                  Dana pembayaran otomatis dijadwalkan untuk pencairan ke rekening merchant
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Partners */}
      <section className="w-full py-16 bg-green-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Mitra Kami</h2>
          <p className="max-w-2xl mx-auto mb-12">
            Berikut beberapa merchant dan brand yang telah memilih SparkPay untuk solusi
            pembayaran mereka.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
              <Image src="/images/kapten.png" alt="Kapten" width={150} height={80} className="h-auto" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
              <Image src="/images/ngomongo.png" alt="Ngomongo" width={150} height={80} className="h-auto" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Social Proof / Testimonials */}
      <section className="w-full py-16 bg-gray-100 relative overflow-hidden">
        {/* Decorative Stars - subtle positioning */}
        <div className="absolute top-16 left-1/4 text-yellow-400 text-3xl opacity-80">★</div>
        <div className="absolute top-16 right-1/4 text-yellow-400 text-3xl opacity-80">★</div>
        <div className="absolute top-40 left-1/5 text-yellow-400 text-2xl opacity-60">★</div>
        <div className="absolute top-40 right-1/5 text-yellow-400 text-2xl opacity-60">★</div>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Main Header - Two lines of bold dark blue text */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-2">
              Ribuan Merchant Percaya SparkPay
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-[#1E293B]">
              Miliaran Rupiah transaksi setiap bulan
            </h3>
          </div>
          
          {/* Two White Cards with Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h4 className="text-xl font-bold text-[#1E293B] mb-3">
                Dipercaya Bisnis di Seluruh Indonesia
              </h4>
              <p className="text-gray-500 leading-relaxed">
                Untuk menerima pembayaran lebih mudah
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h4 className="text-xl font-bold text-[#1E293B] mb-3">
                Transaksi Lancar Setiap Detik
              </h4>
              <p className="text-gray-500 leading-relaxed">
                Nilai miliaran rupiah mengalir lewat SparkPay setiap bulan
              </p>
            </div>
          </div>
          
          {/* Three Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="relative">
                <div className="absolute top-0 left-0 text-yellow-400 text-4xl font-bold leading-none">&ldquo;</div>
                <div className="pt-6">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Sejak pakai SparkPay, proses pembayaran di toko jadi lebih cepat dan aman.
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  FT
                </div>
                <div>
                  <h5 className="font-semibold text-[#1E293B]">Febri Thompson</h5>
                  <p className="text-sm text-gray-500">Pemilik Toko XYZ</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="relative">
                <div className="absolute top-0 left-0 text-yellow-400 text-4xl font-bold leading-none">&ldquo;</div>
                <div className="pt-6">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Dengan transaksinya detail banget, jadi memudahkan kami memantau penjualan harian.
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  FT
                </div>
                <div>
                  <h5 className="font-semibold text-[#1E293B]">Febri Thompson</h5>
                  <p className="text-sm text-gray-500">Pemilik Toko XYZ</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="relative">
                <div className="absolute top-0 left-0 text-yellow-400 text-4xl font-bold leading-none">&ldquo;</div>
                <div className="pt-6">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Integrasi ke sistem kami sangat mudah, dan biaya transaksinya transparan.
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  FT
                </div>
                <div>
                  <h5 className="font-semibold text-[#1E293B]">Febri Thompson</h5>
                  <p className="text-sm text-gray-500">Pemilik Toko XYZ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Pertanyaan yang Sering Ditanyakan</h2>
          <p className="text-center text-gray-600 mb-12">
            Temukan jawaban untuk pertanyaan umum seputar SparkPay
          </p>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg shadow-md">
                <AccordionTrigger className="text-left px-6 py-4 hover:no-underline">
                  Apa itu SparkPay?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  SparkPay adalah platform Payment Gateway Indonesia yang menghubungkan bisnis dengan
                  berbagai metode pembayaran. Dengan SparkPay, Anda dapat menerima pembayaran dari
                  Virtual Account, E-Wallet, Kartu Kredit, dan QRIS dengan mudah.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="bg-white rounded-lg shadow-md">
                <AccordionTrigger className="text-left px-6 py-4 hover:no-underline">
                  Siapa saja yang bisa menggunakan SparkPay?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  SparkPay dapat digunakan oleh berbagai jenis bisnis dari UMKM hingga perusahaan besar.
                  Apakah Anda memiliki toko online, aplikasi, atau bisnis tradisional yang ingin menerima
                  pembayaran digital, SparkPay bisa menjadi solusi untuk Anda.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="bg-white rounded-lg shadow-md">
                <AccordionTrigger className="text-left px-6 py-4 hover:no-underline">
                  Apakah SparkPay aman untuk digunakan?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  Ya, SparkPay menerapkan standar keamanan tinggi dengan sertifikasi PCI DSS untuk
                  menjaga keamanan data dan transaksi. Seluruh data sensitif dienkripsi dan
                  sistem kami secara rutin diaudit untuk memastikan keamanan.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="bg-white rounded-lg shadow-md">
                <AccordionTrigger className="text-left px-6 py-4 hover:no-underline">
                  Metode pembayaran apa saja yang didukung SparkPay?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  SparkPay mendukung berbagai metode pembayaran termasuk Virtual Account dari bank-bank
                  besar Indonesia, E-wallet populer (GoPay, OVO, DANA, ShopeePay), kartu kredit/debit,
                  QRIS, dan transfer bank.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="bg-white rounded-lg shadow-md">
                <AccordionTrigger className="text-left px-6 py-4 hover:no-underline">
                  Bagaimana cara integrasi SparkPay ke website atau aplikasi saya?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  SparkPay menyediakan dokumentasi API yang lengkap dan SDK untuk berbagai
                  bahasa pemrograman. Tim teknis kami juga siap membantu proses integrasi agar
                  berjalan lancar dan cepat.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-green-500 rounded-xl p-10 text-white flex flex-col md:flex-row items-center justify-between shadow-lg">
            <div className="mb-8 md:mb-0 md:mr-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Mulai pakai pembayaran? Kami membantu.</h2>
              <p className="text-lg">
                Bicarakan dengan ahli kami tentang solusi yang tepat untuk kebutuhan pembayaran Anda.
              </p>
            </div>
            <Button size="lg" className="bg-white text-green-500 hover:bg-gray-100 shadow-lg">
              Hubungi Kami
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}