// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from 'sonner';
import { ThemeProvider } from '@/contexts/ThemeContext';

export const metadata: Metadata = {
  title: 'Ubeimar Yepes - Full Stack Developer & UI/UX Designer',
  description: 'Desarrollador Full Stack especializado en React, Next.js, Node.js, Python y diseño UI/UX. Portafolio profesional de Ubeimar Yepes.',
  keywords: ['Full Stack Developer', 'UI/UX Designer', 'React', 'Next.js', 'TypeScript', 'Node.js', 'Python'],
  authors: [{ name: 'Ubeimar Yepes' }],
  creator: 'Ubeimar Yepes',
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://ubeimare-yepes.com',
    title: 'Ubeimar Yepes - Full Stack Developer & UI/UX Designer',
    description: 'Desarrollador Full Stack especializado en React, Next.js, Node.js, Python y diseño UI/UX.',
    siteName: 'Ubeimar Yepes Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ubeimar Yepes - Full Stack Developer',
    description: 'Desarrollador Full Stack especializado en tecnologías modernas',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          {children}
          <Toaster 
            position="top-right"
            theme="system" // Esto hará que Toaster siga el tema del sistema
            closeButton
            richColors
          />
        </ThemeProvider>
      </body>
    </html>
  );
}