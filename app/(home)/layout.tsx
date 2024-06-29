import type { Metadata } from 'next';

import Navbar from '../Components/Navbar';
import Header from '../Components/Header';
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <Navbar />
      {children}
    </>
  );
}
