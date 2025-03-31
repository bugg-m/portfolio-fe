import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';

import Footer from '@host/components/footer/footer';
import Navbar from '@host/components/navbar/navbar';

function HostLayout() {
  return (
    <div className="font-mono min-w-full min-h-screen relative">
      <header className="fixed top-0 w-full bg-white z-[60]">
        <Navbar />
      </header>
      <main className="w-full min-h-screen scroll-smooth z-0">
        <Outlet />
      </main>
      <Toaster
        position="top-center"
        reverseOrder={true}
      />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default HostLayout;
