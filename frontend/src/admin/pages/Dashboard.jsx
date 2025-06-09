import { useState } from 'react';
import { motion } from 'framer-motion';
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { RiMessage3Fill } from "react-icons/ri";
import { FaUser } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";

const menuItems = [
  { name: 'Dashboard', icon: <TbLayoutDashboardFilled />, path: '/admin' },
  { name: 'Messages', icon: <RiMessage3Fill />, path: '/admin/messages' },
  { name: 'Users', icon: <FaUser />, path: '/admin/users' },
  { name: 'Logout', icon: <MdLogout />, path: '/logout' }
];

const AdminDashboard = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <motion.aside
        animate={{ width: isSidebarOpen ? 240 : 70 }}
        className="bg-[#2d2d2d] text-white flex flex-col transition-all duration-300"
      >
        <div className="flex items-center justify-between px-4 py-5">
          <h1 className={`text-xl font-bold transition-all ${!isSidebarOpen && 'hidden'}`}>Admin</h1>
          <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col gap-2 px-2">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.path}
              className="flex items-center gap-3 py-2 px-3 rounded-md hover:bg-white/10 transition"
            >
              {item.icon}
              {isSidebarOpen && <span className="text-sm">{item.name}</span>}
            </a>
          ))}
        </nav>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <h2 className="text-2xl font-bold text-gray-700 mb-6">Admin Panel</h2>
        {children || <p>Welcome to your admin dashboard!</p>}
      </main>
    </div>
  );
};

export default AdminDashboard;
