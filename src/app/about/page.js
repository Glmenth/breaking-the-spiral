export const metadata = {
  title: 'About Us | Breaking The Spiral',
  description: 'Our mission is to provide clear, clinical, and empathetic resources on Mindfulness-Based Cognitive Therapy.'
};

export default function About() {
  return (
    <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1><span className="heading-highlight">About</span> Breaking The Spiral</h1>
      
      <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '3rem' }}>
        We are dedicated to bridging the gap between clinical research and accessible, empathetic resources for those seeking to understand and practice Mindfulness-Based Cognitive Therapy (MBCT).
      </p>

      <h2>About the Founder</h2>
      <p>
        I am an MBCT-trained healthcare professional currently working within the NHS (UK). My career has been dedicated to understanding the complexities of the human mind and the heavy burden that depression and rumination can place on individuals.
      </p>
      <p>
        I founded Breaking The Spiral because I have seen firsthand the challenges patients face—not just the symptoms themselves, but the barriers to accessing timely, evidence-based care. While I am immensely proud of the work we do in the NHS, I also recognize that waiting lists can be long and immediate support is often needed.
      </p>
      <p>
        My mission here is to bridge that gap. By combining clinical insights with the gold-standard MBCT protocols developed by pioneers like Dr. Zindel Segal, I aim to provide a resource hub for those looking to stay well and prevent relapse.
      </p>
      <div style={{ padding: '1rem', backgroundColor: 'var(--bg-secondary, #f8f9fa)', borderRadius: '8px', marginTop: '1.5rem', marginBottom: '3rem' }}>
        <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: 'var(--text-muted)', margin: 0 }}>
          <strong>Note:</strong> This site is a personal project and is independent of my role within the NHS. The views expressed here are my own and do not represent the official stance of the National Health Service. This content is for educational purposes and is not a substitute for individual clinical advice.
        </p>
      </div>

      <h2>Our Mission</h2>
      <p>
        Navigating mental health resources online can be overwhelming. Information is often either too academic to be practical, or too commercialized to be trustworthy. <strong>Breaking The Spiral</strong> was created to solve this problem for MBCT.
      </p>
      <p>
        Our goal is to provide high-authority, evidence-based content that respects the clinical integrity of MBCT while remaining deeply empathetic to the lived experiences of depression and anxiety.
      </p>

      <div className="card" style={{ marginTop: '3rem', borderTop: '4px solid var(--brand-primary)' }}>
        <h3 style={{ color: 'var(--brand-primary)', marginBottom: '0.5rem' }}>Editorial Guidelines</h3>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
          To maintain the highest level of Trust and Authority (E-E-A-T), we adhere to the following standards:
        </p>
        <ul style={{ paddingLeft: '1.2rem', fontSize: '0.95rem', marginBottom: 0 }}>
          <li style={{ marginBottom: '0.5rem' }}><strong>Evidence-Based:</strong> All claims regarding the efficacy of MBCT are backed by peer-reviewed studies or clinical guidelines (such as NICE).</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Independence:</strong> Our reviews (including those of Sounds True courses) are structurally independent. We only recommend programs we believe hold clinical or practical merit.</li>
          <li><strong>Empathetic Tone:</strong> We recognize that healing is not linear. Our content avoids toxic positivity and respects the difficult reality of mental health struggles.</li>
        </ul>
      </div>
      
      <div style={{ marginTop: '4rem', textAlign: 'center' }}>
        <p style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>
          "You can't stop the waves, but you can learn to surf." – Jon Kabat-Zinn
        </p>
      </div>
    </div>
  );
}
