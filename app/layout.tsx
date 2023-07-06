import './globals.css'
import Headerr from '@/components/headerr'
import Footerr from '@/components/footerr'
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
    <html lang="en">
      <body className={""}>
        <Headerr />
         {children}
        <Footerr />
      </body>
    </html>
  )
}
