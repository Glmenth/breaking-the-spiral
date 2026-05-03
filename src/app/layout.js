import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Breaking The Spiral | Mindfulness-Based Cognitive Therapy',
  description: 'A clinical, empathetic resource for Mindfulness-Based Cognitive Therapy (MBCT), reviews, and guides.',
};

import MedicalDisclaimer from '../components/MedicalDisclaimer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container nav-container">
            <Link href="/" className="site-logo">
              Breaking The Spiral
            </Link>
            <nav className="nav-links">
              <Link href="/ultimate-guide-mbct">Ultimate Guide</Link>
              <Link href="/join">Join a Group</Link>
              <Link href="/reviews/zindel-segal-course">Course Review</Link>
              <Link href="/about">About</Link>
              <Link href="/contact" className="button-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Book a Call</Link>
            </nav>
          </div>
        </header>

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
