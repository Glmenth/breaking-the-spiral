import './globals.css';
import Link from 'next/link';
import Script from 'next/script';

export const metadata = {
  title: 'Breaking The Spiral | Mindfulness-Based Cognitive Therapy',
  description: 'A clinical, empathetic resource for Mindfulness-Based Cognitive Therapy (MBCT), reviews, and guides.',
};

import MedicalDisclaimer from '../components/MedicalDisclaimer';
import Header from '../components/Header';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-C8XX5KGGCB" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-C8XX5KGGCB');
          `}
        </Script>
        <Header />

        <main className="main-content">
          {children}
        </main>

        <footer className="site-footer">
          <div className="container">
            <p>&copy; {new Date().getFullYear()} Breaking The Spiral. <br/>An educational resource for Mindfulness-Based Cognitive Therapy.</p>
            <MedicalDisclaimer />
          </div>
        </footer>
      </body>
    </html>
  );
}
