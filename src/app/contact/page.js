import BookingCTA from '../../components/BookingCTA';

export const metadata = {
  title: 'Contact | Breaking The Spiral',
  description: 'Get in touch to learn more about our private MBCT groups.'
};

export default function Contact() {
  return (
    <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1><span className="heading-highlight">Get in</span> Touch</h1>
      
      <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '3rem' }}>
        Whether you have questions about the MBCT program, want to understand if it's the right fit for you, or are ready to join the next cohort, I'd love to hear from you.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
        <div className="card">
          <h3 style={{ color: 'var(--brand-primary)', marginBottom: '1rem' }}>Email Inquiries</h3>
          <p>For general questions, feel free to email me directly. I aim to respond within 48 hours.</p>
          <a href="mailto:hello@breakingthespiral.org" style={{ fontWeight: '500' }}>hello@breakingthespiral.org</a>
        </div>
        
        <div className="card">
          <h3 style={{ color: 'var(--brand-primary)', marginBottom: '1rem' }}>Important Note</h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            This service is not a crisis center. If you are experiencing an immediate mental health crisis, please contact your local emergency services, visit your nearest A&E, or call the Samaritans (116 123 in the UK) or NHS 111.
          </p>
        </div>
      </div>

      <BookingCTA />
    </div>
  );
}
