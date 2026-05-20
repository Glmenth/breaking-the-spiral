import BookingCTA from '../../components/BookingCTA';

export const metadata = {
  title: 'Join an MBCT Group | Breaking The Spiral',
  description: 'Join our private, 8-week online Mindfulness-Based Cognitive Therapy groups.'
};

export default function JoinGroup() {
  return (
    <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1><span className="heading-highlight">Join a Private</span> MBCT Group</h1>
      
      <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '3rem' }}>
        Experience the profound benefits of Mindfulness-Based Cognitive Therapy in a supportive, small-group setting led by an NHS-trained professional.
      </p>

      <h2>How the 8-Week Program Works</h2>
      <p>
        The core of MBCT is structured as an 8-week program. While self-paced courses exist, the gold standard of MBCT is delivered in a group format. This allows for shared learning, accountability, and real-time guidance as you navigate the practices.
      </p>
      
      <ul style={{ paddingLeft: '1.5rem', marginBottom: '3rem' }}>
        <li style={{ marginBottom: '1rem' }}><strong>Weekly Live Sessions:</strong> We meet once a week for 2 hours via a secure video call.</li>
        <li style={{ marginBottom: '1rem' }}><strong>Small Cohorts:</strong> Groups are limited to 10-12 participants to ensure everyone receives adequate attention and support.</li>
        <li style={{ marginBottom: '1rem' }}><strong>Daily Home Practice:</strong> You will be provided with guided audio meditations and workbook exercises requiring about 45 minutes of daily practice.</li>
        <li style={{ marginBottom: '1rem' }}><strong>The Day of Mindfulness:</strong> Between weeks 6 and 7, we hold a half-day silent retreat to deepen your practice.</li>
      </ul>

      <h2>Is this right for me?</h2>
      <p>
        MBCT is highly effective for preventing the relapse of depression and managing chronic anxiety. However, it is an active therapy that requires a commitment of time and energy. It is generally not recommended if you are currently experiencing a severe crisis or a deep depressive episode.
      </p>
      <p>
        Spaces are limited for each cohort. Join the waitlist below to reserve your spot and be notified as soon as enrollment opens.
      </p>

      <BookingCTA />
    </div>
  );
}
