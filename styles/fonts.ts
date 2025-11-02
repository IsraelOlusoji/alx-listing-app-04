import { Quicksand, Source_Sans_3 } from "next/font/google";

export const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const fonts = {
  quicksand,
  sourceSans,
};

export const sfPro = {
  className: "font-sf",
  variable: "--font-sf-pro",
};

export const sourceSansPro = {
  className: "font-source-sans-pro",
  variable: "--font-source-sans-pro",
};


