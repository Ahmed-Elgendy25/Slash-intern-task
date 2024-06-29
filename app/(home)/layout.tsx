import type { Metadata } from 'next';

import Navbar from '../Components/Navbar';
import Header from '../Components/Header';
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Home | Posts',
  description: 'Home page',
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
