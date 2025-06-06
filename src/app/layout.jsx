import { Roboto, Merriweather } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";
import { ThemeProvider } from "@/Context/ThemeContext";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ['400']
});

export const metadata = {
  title: "HEXASHOP",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <body style={{backgroundColor:"#111",color:"white"}}  className={`${roboto.variable} ${merriweather.variable}`}>
    <ThemeProvider>
     <div style={{maxWidth:"1100px",
  minHeight:"100vh",margin:"0 auto",
  display:"flex",justifyContent:"space-between",
  flexDirection:"column",padding:"40px"
}}>
<Navbar/>
        {children}
        <Footer/>
        </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
