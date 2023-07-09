import 'public/style/style.css';
import Head from '../../components/Head/Head';
import { Inter } from 'next/font/google';

//const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'WalrusDog',
  description: 'WalDog Page',
  icons: {
    icon: {
      rel: "icon",
      sizes: "32x32", 
      url: "/favicon.ico",
    }
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="body">
        {children}
        </body>
    </html>
  )
}
