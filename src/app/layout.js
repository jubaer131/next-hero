import { Inter,Roboto} from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight: ["100", "300", "400", "500", "700", "900"], subsets: ["latin"] });

export const metadata = {
  title: {
    default: 'Next-hero',
    template :"%s | next-hero"
    },
  description :" chooose your meal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}> 

   <div className="container mx-auto">
   <Navbar></Navbar>
   <div className="">
   {children}
   </div>
       

       <Footer></Footer>
   </div>
        </body>
       
    </html>
  );
}
