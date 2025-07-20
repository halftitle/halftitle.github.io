import { Noto_Serif } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
});

export const metadata = {
  title: "half title",
  description: "homepage of half title zines!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${notoSerif.variable}`}>
        {children}
      </body>
    </html>
  );
}
