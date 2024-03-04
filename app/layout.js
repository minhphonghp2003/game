import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Chat from "@/components/Chat";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Gane crack uy tín số 1",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.className} subpixel-antialiased`}>
                <NavBar />
                
                <div className="">{children}</div>
                <Chat/>
                <Footer/>
            </body>
        </html>
    );
}
