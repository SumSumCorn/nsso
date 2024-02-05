import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const noto = Noto_Sans_KR({ subsets: ['latin'], variable: '--font-noto' });

export const metadata: Metadata = {
  title: 'nsso',
  description: 'nsso is 나의 생활습관연구소.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          noto.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
