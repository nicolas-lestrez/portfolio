import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-nunito",
});

export const metadata = {
  title: "Portfolio – Nicolas Lestrez",
  description: "Portfolio Next.js + Bootstrap",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={nunito.variable}>{children}</body>
    </html>
  );
}
