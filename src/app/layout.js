import 'public/style/style.css';

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
