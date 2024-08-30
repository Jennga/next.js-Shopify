//para agregar fuente nueva:
import {Gupter} from 'next/font/google'
import { Header } from "app/componentes/compartir/header";
/*import { Main } from 'app/componentes/compartir/main/main';*/
import { Footer } from "app/componentes/compartir/footer/footer";
import "app/sass/global.sass"

const gupter = Gupter({
  weight: ["400","500","700"],
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={gupter.className}>
          <Header />
            {children}                          
          <Footer/>      
      </body>
    </html>
  );
}
