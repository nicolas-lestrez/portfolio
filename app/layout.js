import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import BootstrapClient from "./components/BootstrapClient";
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
      <body className={nunito.variable}>
        <BootstrapClient />
        {children}
      </body>
    </html>
  );
}
