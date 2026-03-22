'use client';

import { useState } from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  Users,
  Mail,
  Sun,
  Moon,
  ChevronDown
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function AdminUI({children }){
  const router = useRouter();
  // const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [theme, setTheme] = useState('light');


  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    // document.documentElement.classList.toggle('dark');
    document.documentElement.classList.toggle('dark', newTheme === 'dark');

  };

  const handleLogout = () => {
    document.cookie = "adminToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00";
    document.cookie = "role=; path=/; expires=Thu, 01 Jan 1970 00:00:00";
    localStorage.removeItem("adminToken");
    router.push("/admin");
  };

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/admin/dashboard' },
    { icon: FileText, label: 'Blogs', href: '/admin/blogs' },
    // { icon: Users, label: 'Users', href: '/admin/users' },
    { icon: Mail, label: 'Contact', href: '/admin/contact' },
  ];

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
      {/* Background with grid pattern */}
      <div className="fixed inset-0 bg-white dark:bg-gray-900  transition-colors duration-200 ">
        <div className="absolute inset-0 bg-grid-light dark:bg-grid-dark opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-transparent to-blue-50/50 dark:from-purple-950/20 dark:via-transparent dark:to-blue-950/20"></div>
      </div>

      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-64 right-0 z-50 mt-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 transition-colors duration-200">
        <div className="flex items-center justify-between h-16 px-6">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Admin Panel
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              )}
            </button>

            {/* <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-semibold">JD</span>
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">John Doe</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Admin</p>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </div> */}
            <button
              onClick={handleLogout}
              className="px-3 py-2 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              Logout
            </button>

          </div>
        </div>
      </nav>

      {/* Fixed Sidebar - Always visible */}
      <aside className="fixed left-0 top-0 bottom-0 w-64 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-r border-gray-200 dark:border-gray-800">
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Admin Panel
              </span>
            </div>
          </div>

          {/* Welcome Card */}
          <div className="p-4">
            <div className="p-4 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl text-white">
              <p className="text-sm opacity-90 mb-1">Welcome back!</p>
              <p className="text-xl font-bold">John Doe</p>
              <p className="text-xs opacity-75 mt-2">Last login: Today at 9:30 AM</p>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 px-4 space-y-1">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link
                  key={index}
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 group"
                >
                  <Icon className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Storage Info */}
          {/* <div className="p-4 border-t border-gray-200 dark:border-gray-800">
            <div className="px-4 py-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Storage Used</p>
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">4.2 GB / 10 GB</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">42%</p>
              </div>
              <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500" style={{ width: '42%' }}></div>
              </div>
            </div>
          </div> */}
        </div>
      </aside>

      {/* Main Content - with fixed left margin */}
      <main className="relative pt-0 ml-64">
        <div className="p-6">
          {children}
        </div>
      </main>

      <style jsx global>{`
        .bg-grid-light {
          background-image: 
            linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        .bg-grid-dark {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </div>
  );
}