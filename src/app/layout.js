
import 'react-loading-skeleton/dist/skeleton.css'
import "./globals.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTopButton from './components/scrolltotop';




export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <script src="https://kit.fontawesome.com/03244eb91d.js" crossOrigin="anonymous"></script>
      </head>
      <body >{children}
        <ScrollToTopButton />
      </body>
    </html>
  )
}
