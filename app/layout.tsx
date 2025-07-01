import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { CustomCursor } from '@/components/custom-cursor';
import { Toaster } from '@/components/ui/sonner';
import { ThreeBackground } from '@/components/three-background';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Saumya Shrivastava - Full Stack Developer',
  description: 'Modern web developer portfolio showcasing innovative projects and technical expertise in React, Next.js, TypeScript, and more.',
  keywords: ['web developer', 'full stack', 'react', 'nextjs', 'typescript', 'portfolio'],
  authors: [{ name: 'Saumya Shrivastava' }],
  creator: 'Saumya Shrivastava',
  openGraph: {
    type: 'website',
   
   
    title: 'Saumya Shrivastava- Full Stack Developer',
    description: 'Modern web developer portfolio showcasing innovative projects and technical expertise.',
    siteName: 'Saumya Shrivastava Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saumya Shrivastava - Full Stack Developer',
    description: 'Modern web developer portfolio showcasing innovative projects and technical expertise.',
    creator: '@Saumya',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <ThreeBackground />
          <CustomCursor />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}