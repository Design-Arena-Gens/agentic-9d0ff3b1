import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web Page Instruction Generator',
  description: 'AI-powered tool to generate step-by-step instructions for creating web pages',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
