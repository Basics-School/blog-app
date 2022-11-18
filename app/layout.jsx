'use client'
import { ThemeProvider } from 'next-themes'
import Header from '../components/Header'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <head />

      <body className='dark:bg-black '>
        <ThemeProvider attribute='class'>
          <Header />
          {children}
        </ThemeProvider>
      </body>

    </html >
  )
}
