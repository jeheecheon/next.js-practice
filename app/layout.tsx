import { Inter } from 'next/font/google';
import { lusitana } from '@/app/ui/fonts'
import '@/app/lib/global.css';

export const inter = Inter({ subsets: ['latin'], weight: '100' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lusitana.className} antialiased`}>{children}</body>
    </html>
  );
}
