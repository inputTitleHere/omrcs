import type { Metadata } from 'next';
import { pretendard } from '@/styles/font';
import './globals.css';
import Head from './head';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={pretendard.className}>
      <Head />
      <body className={pretendard.className}>{children}</body>
    </html>
  );
}
