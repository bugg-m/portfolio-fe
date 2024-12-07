import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from '@host/components/navbar/Navbar';
import Footer from '@host/components/footer/Footer';
import Bubbles from '@host/components/bubble/Bubbles';

function RootLayout() {
  return (
    <div className="font-mono w-full min-h-screen relative">
      <div className="fixed top-0 w-full bg-white z-50">
        <Navbar />
      </div>
      <div className="w-full min-h-full -z-10 flex blur-sm absolute">
        <Bubbles />
      </div>
      <div className="w-full min-h-screen flex justify-center items-center mt-7 z-10">
        <Outlet />
      </div>
      <Toaster position="top-center" reverseOrder={true} />
      <Footer />
    </div>
  );
}

export default RootLayout;
