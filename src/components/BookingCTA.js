"use client";

export default function BookingCTA() {
  // Link to the Google Forms waitlist
  const waitlistFormLink = "https://forms.gle/mWAKdRGqJpVVnsZ17";

  const handleWaitlistClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'join_waitlist_click', {
        'event_category': 'engagement',
        'event_label': 'Waitlist Form Link'
      });
    }
  };

  return (
    <div className="booking-cta-section" style={{
      backgroundColor: 'var(--bg-warm, #fff8e1)',
      border: '1px solid var(--brand-highlight, #f5bd4f)',
      borderRadius: 'var(--border-radius-lg, 12px)',
      padding: '3rem 2rem',
      textAlign: 'center',
      marginTop: '3rem',
      marginBottom: '3rem'
    }}>
      <h2 style={{ marginBottom: '1rem', color: 'var(--brand-primary)' }}>Ready to begin your journey?</h2>
      <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
        I run private, 8-week online MBCT groups. Spaces are limited and filled on a first-come, first-served basis. Join the waitlist below to be notified when the next cohort opens.
      </p>
      <a 
        href={waitlistFormLink} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="button-primary"
        style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}
        onClick={handleWaitlistClick}
      >
        Join the Waitlist
      </a>
    </div>
  );
}
