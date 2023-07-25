'use client'
import './globals.css'
import Headerr from '@/components/headerr'
import Footerr from '@/components/footerr'
import { CartProvider } from 'use-shopping-cart'
const secretKeys = require('../secrets')
// import {Roboto} from 'next/font/google'

// const roboto = Roboto({
//   subsets:['latin'],
//   weight:'400'
// })

export const metadata = {
  title: 'JewStore',
  description: 'Your reliable source of assert',
}

export default function RootLayout({
  children,
}:{
  children: React.ReactNode
}) {
  return(
    <CartProvider 
      stripe={secretKeys}
      cartMode='checkout-session'
      currency='USD'
      shouldPersist={true}
    >
      <html lang="en">
       <body className={""}>
        <Headerr />
         {children}
        <Footerr />
       </body>
      </html>
    </CartProvider>
  )
}
