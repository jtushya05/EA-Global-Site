import './globals.css';
import { constructMetadata } from './metadata.config';
import { useEffect } from 'react'; // Import useEffect

import Header from '../components/layout/Header'; // Updated import path
import Footer from '../components/layout/Footer'; // Updated import path
import WhatsAppUs from '../components/widgets/WhatsAppUs'; // Importing WhatsAppUs
import CallNow from '../components/widgets/CallNow'; // Importing CallNow
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <WhatsAppUs /> {/* Rendering WhatsAppUs above CallNow */}
        <CallNow /> {/* Ensure CallNow is rendered as well */}
        {children}
        {/* Tawk.to Script */}
        <script type="text/javascript">
          {` 
            console.log("Tawk.to script is loading...");
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/676a9d9faf5bfec1dbe10fc1/1ifs7febv';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </script>
        <Footer />
      </body>
    </html>
  );
}