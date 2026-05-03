import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">

        <Navbar />

        {}
        <div className="pt-20 flex-grow">
          {children}
        </div>

        <Footer />

      </body>
    </html>
  );
}