import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans, Roboto_Mono, Orbitron } from 'next/font/google'
import React from 'react';

export const metadata: Metadata = {
  title: 'Análisis de Ciclo de Vida | Instituto Mexicano del Cemento y del Concreto A.C.',
  description:
    'Análisis de Ciclo de Vida, Instituto Mexicano del Cemento y del Concreto A.C.',
};

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-opensans',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

const orbitronMono = Orbitron({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-orbitron-mono',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${openSans.variable} ${robotoMono.variable} ${orbitronMono.variable} font-sans`}>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
