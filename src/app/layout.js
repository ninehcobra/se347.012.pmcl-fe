
import 'react-loading-skeleton/dist/skeleton.css'
import "./globals.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTopButton from './components/scrolltotop';
import Footer from "./components/footer"
import Header from "./components/header"
import 'react-toastify/dist/ReactToastify.css';
import { ReduxProvider } from './components/reduxprovider';

import { ToastContainer } from 'react-toastify'


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <script src="https://kit.fontawesome.com/03244eb91d.js" crossOrigin="anonymous"></script>
      </head>
      <body >
        <ReduxProvider>
          {children}
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <ScrollToTopButton />
        </ReduxProvider>
      </body>
    </html>
  )

}
