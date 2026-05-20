import Link from 'next/link';
import LeadMagnet from '../components/LeadMagnet';

export default function Home() {
  return (
    <div className="container">
      <section style={{ textAlign: 'center', padding: '4rem 0', maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="heading-highlight" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>
          Finding stillness in the storm.
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
          Mindfulness-Based Cognitive Therapy (MBCT) is a clinically proven approach to 
          breaking the cycle of chronic depression and anxiety. We provide evidence-based 
          resources to help you navigate your journey.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link href="/join" className="button-primary">
            Join a Group
          </Link>
          <Link href="/contact" className="button-secondary">
            Join the Waitlist
          </Link>
        </div>
      </section>

      <LeadMagnet />

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
        <div className="card">
          <h3>The Science of MBCT</h3>
          <p>Discover how mindfulness practices combined with cognitive behavioral therapy create a powerful defense against depressive relapse.</p>
          <Link href="/ultimate-guide-mbct" style={{ fontWeight: '500' }}>Learn More &rarr;</Link>
        </div>
        <div className="card">
          <h3>Private 8-Week Groups</h3>
          <p>Join a supportive, small cohort to learn the gold-standard MBCT protocol via live, interactive online sessions.</p>
          <Link href="/join" style={{ fontWeight: '500' }}>Learn About Groups &rarr;</Link>
        </div>
        <div className="card">
          <h3>Our Standard</h3>
          <p>All our content is written with a strict adherence to clinical evidence and deep empathy for the lived experience of mental health challenges.</p>
          <Link href="/about" style={{ fontWeight: '500' }}>About Us &rarr;</Link>
        </div>
      </section>

      <section style={{ padding: '5rem 0', marginTop: '3rem', borderTop: '1px solid var(--brand-border)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center', textAlign: 'center' }}>
          <h2 className="heading-highlight">Work with Me</h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '700px' }}>
            I am an NHS-trained healthcare professional specializing in Mindfulness-Based Cognitive Therapy. 
            My private 8-week online groups are designed to provide the same evidence-based structure you would find in clinical settings, but with greater accessibility.
          </p>
          <p style={{ maxWidth: '700px' }}>
            Rather than trying to learn MBCT alone through an app or a self-paced video course, working together in a small group provides the accountability, shared experience, and real-time guidance necessary for true transformation.
          </p>
          <Link href="/contact" className="button-primary" style={{ marginTop: '1rem' }}>
            Join the Waitlist
          </Link>
        </div>
      </section>
    </div>
  );
}
