import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from '@host/components/navbar/navbar';
import Footer from '@host/components/footer/footer';
// import Bubbles from '@host/components/bubble/Bubbles';

function RootLayout() {
  return (
    <div className="font-mono min-w-full min-h-screen">
      <div className="fixed top-0 w-full bg-white z-50">
        <Navbar />
      </div>
      {/* <div className="w-full min-h-full -z-10 flex blur-sm absolute">
        <Bubbles />
      </div> */}
      <div className="w-full min-h-screen pt-20 z-10">
        <Outlet />
      </div>
      <Toaster position="top-center" reverseOrder={true} />
      <Footer />
    </div>
  );
}

export default RootLayout;
