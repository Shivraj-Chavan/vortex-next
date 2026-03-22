import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function WebsiteLayout({ children }) {
  return (
    <>
      <Navbar/>

      <main className="flex flex-col min-h-screen">
        {children}
      </main>

      <Footer />
    </>
  );
}