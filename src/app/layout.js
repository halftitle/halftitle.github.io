import { Noto_Serif, Nanum_Gothic_Coding } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
});

const nanumGothic = Nanum_Gothic_Coding({
  variable: "--font-nanum-gothic",
  subsets: ["latin"],
  weight: '400'
});

export const metadata = {
  title: "half title",
  description: "half title zine world!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nanumGothic.variable}`}>
        {children}
      </body>
    </html>
  );
}
