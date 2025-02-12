import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '@/components/landing/Footer';

export default function MainLayout() {
  return (
    <div className="flex flex-col bg-gray-50 min-h-screen">
      <Header/>
      <div className="h-28 md:h-16"/>
      <div className="flex flex-1">
        <Sidebar className="bg-gray-50 hidden md:block"/>
        <main className="p-6 md:ml-56">
          <Outlet/>
        </main>
      </div>
      <div className="flex">
        <div className="w-0 md:w-64"/>
        <Footer/>
      </div>
    </div>
  );
};