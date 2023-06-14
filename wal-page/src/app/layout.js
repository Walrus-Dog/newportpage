import 'public/style/style.css';
import { Inter } from 'next/font/google';

//const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'WalrusDog',
  description: 'WalDog Page',
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
