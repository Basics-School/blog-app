'use client'

import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from 'next-themes'
import Header from '../components/Header'
import './globals.css'

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='dark:bg-black'>
        <SessionProvider session={session}>
          <ThemeProvider attribute='class'>
          <Header />
          {children}
        </ThemeProvider></SessionProvider>


      </body>
    </html>
  )
}
