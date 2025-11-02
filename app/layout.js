import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import BootstrapClient from "./components/BootstrapClient";
import Header from "./components/Header";
import Footer from "./components/Footer";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-nunito",
});

export const metadata = {
  title: "Portfolio John Doe",
  description: "Portfolio personnel de John Doe - Développeur web full stack",
  icons: {
    icon: "/anonym.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${nunito.variable} d-flex flex-column min-vh-100`}>
        <BootstrapClient />
        <Header />
        <div className="flex-fill"></div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
