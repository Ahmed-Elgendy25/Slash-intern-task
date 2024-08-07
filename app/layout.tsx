import type { Metadata } from 'next';
import './globals.css';
import { Kanit as NextKanit } from 'next/font/google';


const Kanit = NextKanit({
  subsets: ['latin'],
  weight: ['100', '500', '900'],
});
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Kanit.className} overflow-x-hidden  `}>
        {children}
      </body>
    </html>
  );
}
