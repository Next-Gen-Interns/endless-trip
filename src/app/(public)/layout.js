import "../globals.css";
import Navbar from "@/components/Navbar.jsx";
import WhatsAppButton from "@/components/WhatsAppButton.jsx";
import Footer from "@/components/Footer.jsx";





export const metadata = {
  title: "My App",
  description: "Built with Next.js",
};

export default function PublicLayout({ children }) {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">{children}</main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
