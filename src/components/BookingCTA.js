export default function BookingCTA() {
  // Replace this placeholder with the actual Google Calendar Appointment Schedule link
  const googleCalendarLink = "https://calendar.google.com/calendar/u/0/appointments/schedules/YOUR_ID_HERE";

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
        I run private, 8-week online MBCT groups. The best way to find out if this is the right fit for you is to schedule a free, no-obligation chat. 
        <br/><br/>
        <strong>Availability:</strong> Fridays, 2:00 PM - 5:00 PM (UK Time).
      </p>
      <a 
        href={googleCalendarLink} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="button-primary"
        style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}
      >
        Schedule a Free 15-Minute Suitability Chat
      </a>
    </div>
  );
}
