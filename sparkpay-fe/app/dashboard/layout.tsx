"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useState } from "react";
import { Menu, X } from "lucide-react";

const menuItems = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Monitoring", path: "/dashboard/monitoring" },
  { name: "Laporan", path: "/dashboard/laporan" },
  { name: "Pengguna", path: "/dashboard/pengguna" },
  { name: "Settings", path: "/dashboard/settings" },
];

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = () => {
    setShowLogoutModal(false);
    router.push("/signUp"); // redirect ke halaman signup
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <nav className="w-full bg-white px-6 py-4 shadow flex justify-between items-center fixed top-0 left-0 z-50">
        {/* Logo + Hamburger */}
        <div className="flex items-center space-x-4">
          <button className="md:hidden p-2" onClick={toggleSidebar}>
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <img src="/images/sparkpay.png" alt="SparkPay Logo" className="h-10" />
        </div>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center space-x-2 focus:outline-none"
          >
            <img
              src="/images/avatar.png"
              alt="Profile"
              className="h-10 w-10 rounded-full border"
            />
            <span className="text-gray-700 font-medium hidden md:block">Caca</span>
          </button>

          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg py-2 z-50">
              <Link
                href="/dashboard/profile"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Ubah Profile
              </Link>
              <button
                onClick={() => setShowLogoutModal(true)}
                className="block w-full text-left px-4 py-2 text-red-500 hover:bg-red-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Body */}
      <div className="flex flex-1 pt-16">
        {/* Sidebar */}
        <aside
          className={`fixed md:static top-16 md:top-0 left-0 h-[calc(100vh-4rem)] md:h-screen w-64 bg-white shadow-lg transform transition-transform duration-300 z-40
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
        >
          <nav className="p-4 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`block px-4 py-2 rounded-lg transition ${
                  pathname === item.path
                    ? "bg-[#4CAF4F] text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setIsSidebarOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          <main className="flex-1 p-6">{children}</main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-6 text-center text-sm">
        © {new Date().getFullYear()} SparkPay — All Rights Reserved
      </footer>

      {/* Modal Logout */}
      {showLogoutModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setShowLogoutModal(false)}
          ></div>

          {/* Modal */}
          <div className="relative bg-white rounded-2xl shadow-2xl p-6 max-w-sm w-full mx-4 text-center animate-fadeIn scale-up">
            <h2 className="text-2xl font-bold mb-2 text-gray-800">Konfirmasi Logout</h2>
            <p className="text-gray-600 mb-6 text-sm">Apakah Anda yakin ingin logout?</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition shadow-sm hover:shadow-md"
              >
                Batal
              </button>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition shadow-sm hover:shadow-md"
              >
                Ya, Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
