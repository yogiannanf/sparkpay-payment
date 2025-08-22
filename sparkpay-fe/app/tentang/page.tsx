import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Goal, Lightbulb, ShieldCheck, Users, MapPin, Mail, Phone } from "lucide-react";

// Komponen untuk Visi dan Misi
const MissionVisionCard = ({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) => (
  <Card className="w-full lg:w-1/2 bg-white shadow-lg rounded-xl overflow-hidden">
    <CardHeader className="flex flex-row items-center gap-4 p-6 bg-gray-50">
      <div className="bg-green-100 p-3 rounded-full">
        <Icon className="w-6 h-6 text-green-700" />
      </div>
      <CardTitle className="text-xl font-semibold text-gray-800">
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent className="p-6 text-gray-600">{children}</CardContent>
  </Card>
);

// Komponen untuk Nilai-Nilai Kami
const ValueCard = ({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) => (
    <Card className="flex-1 bg-white shadow-lg rounded-xl p-6 text-center items-center flex flex-col">
        <div className="bg-green-100 p-4 rounded-full mb-4 inline-block">
            <Icon className="w-8 h-8 text-green-700" />
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{children}</p>
    </Card>
);

// Komponen untuk Informasi Perusahaan
const CompanyInfoCard = ({ title, address, email }: { title: string, address: string, email: string }) => (
    <Card className="w-full lg:w-1/2 bg-white shadow-lg rounded-xl p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
            <MapPin className="w-5 h-5 mr-3 text-green-600" />
            {title}
        </h3>
        <p className="text-gray-600 mb-3 ml-8">{address}</p>
        <div className="flex items-center text-gray-600 ml-8">
            <Mail className="w-5 h-5 mr-3 text-green-600" />
            <a href={`mailto:${email}`} className="hover:text-green-600">{email}</a>
        </div>
    </Card>
);

export default function TentangPage() {
  return (
    <main>
      {/* --- Hero Section --- */}
      <section className="w-full bg-[#F5FBF5] py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Kolom Kiri: Teks */}
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                SparkPay
              </h1>
              <h2 className="text-xl text-gray-700 mb-6">
                Membangun Masa Depan Pembayaran Digital Indonesia
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                SparkPay adalah hasil kolaborasi strategis antara PT. Sarana
                Performa Sejahtera dan PT. Naraya Telematika untuk menghadirkan
                solusi pembayaran digital yang aman, reliable, dan mudah
                digunakan bagi seluruh merchant di Indonesia.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-[#3C8346] text-white text-lg font-bold rounded-lg px-8 py-4 shadow-[0_8px_20px_rgba(60,131,70,0.5)] hover:bg-green-700 transform transition-transform duration-300 hover:scale-105"
                >
                  Bergabung dengan Kami
                </Button>
              </div>
            </div>

            {/* Kolom Kanan: Gambar */}
            <div className="lg:w-1/2 w-full flex items-center justify-center">
              <div className="relative w-full max-w-lg h-auto rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/tim.png"
                  alt="Tim SparkPay"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Visi & Misi Section --- */}
      <section className="w-full bg-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8">
            <MissionVisionCard icon={Target} title="Visi Kami">
              <p>
                Menjadi platform pembayaran digital terdepan di Indonesia yang
                memberdayakan seluruh lapisan masyarakat untuk bertransaksi
                dengan aman, mudah, dan efisien dalam era ekonomi digital.
              </p>
            </MissionVisionCard>
            <MissionVisionCard icon={Goal} title="Misi Kami">
              <p>
                Menghadirkan solusi pembayaran digital yang inovatif, aman, dan
                dapat diandalkan untuk mendukung pertumbuhan ekonomi digital
                Indonesia dan memberdayakan UMKM untuk berkompetisi di era
                global.
              </p>
            </MissionVisionCard>
          </div>
        </div>
      </section>

      {/* --- Nilai-Nilai Kami Section --- */}
      <section className="w-full bg-[#F5FBF5] py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Nilai-Nilai Kami</h2>
                <p className="text-lg text-gray-600 mt-2">Prinsip yang memandu setiap langkah SparkPay</p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
                <ValueCard icon={Lightbulb} title="Inovasi">
                    Kami selalu menghadirkan teknologi terdepan untuk solusi pembayaran yang lebih baik.
                </ValueCard>
                <ValueCard icon={ShieldCheck} title="Kepercayaan">
                    Keamanan dan transparansi adalah prioritas utama dalam setiap transaksi.
                </ValueCard>
                <ValueCard icon={Users} title="Kolaborasi">
                    Kami bekerja sama dengan merchant untuk menciptakan ekosistem pembayaran yang sehat.
                </ValueCard>
            </div>
        </div>
      </section>

      {/* --- Informasi Perusahaan Section --- */}
      <section className="w-full bg-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Informasi Perusahaan</h2>
                <p className="text-lg text-gray-600 mt-2">Hubungi kami untuk kemitraan dan kolaborasi</p>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8">
                <CompanyInfoCard 
                    title="PT. Sarana Performa Sejahtera"
                    address="Jl. Sudirman No. 123, Jakarta Pusat 10220 Jakarta, Indonesia"
                    email="info@saranaps.co.id"
                />
                <CompanyInfoCard 
                    title="PT. Naraya Telematika"
                    address="Jl. Gatot Subroto No. 456, Jakarta Selatan 12930 Jakarta, Indonesia"
                    email="contact@narayatel.co.id"
                />
            </div>
        </div>
      </section>
    </main>
  );
}
