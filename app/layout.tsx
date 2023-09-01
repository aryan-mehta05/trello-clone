import Modal from '@/components/Modal'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trello 2.0 Clone',
  description: 'Built by Aryan Mehta.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-[#f5f6f8]'>
        {children}
        <Modal />  
      </body>
    </html>
  )
}
