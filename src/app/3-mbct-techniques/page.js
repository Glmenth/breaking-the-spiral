import BookingCTA from '../../components/BookingCTA';
import Link from 'next/link';

export const metadata = {
  title: "3 MBCT Techniques to Stop Negative Thought Loops | Breaking The Spiral",
  description: "Practical MBCT techniques you can use today, including the 3-Minute Breathing Space."
};

export default function ThreeMBCTTechniques() {
  return (
    <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem 0' }}>
      <div className="mb-6">
        <Link href="/ultimate-guide-mbct" className="text-sm text-[#c16533] font-bold uppercase tracking-wider hover:underline">
          &larr; Back to the Ultimate Guide
        </Link>
      </div>

      <h1><span className="heading-highlight">3 MBCT Techniques</span> You Can Use Today</h1>
      
      <p className="text-xl text-gray-600 mb-8 mt-4">
        While the full MBCT protocol takes 8 weeks to master, there are foundational practices you can begin incorporating into your life immediately to help halt the cycle of rumination.
      </p>

      <div className="mb-10">
        <h2 className="text-2xl text-[#1a3b45] mb-3">1. The 3-Minute Breathing Space</h2>
        <p className="mb-3 text-lg">
          This is the core "emergency brake" of MBCT. It is designed to be used exactly when you notice your thoughts beginning to spiral. It functions like an hourglass:
        </p>
        <ul className="list-disc pl-6 mb-4 text-lg space-y-2">
          <li><strong>Step 1 (Wide):</strong> Acknowledge what is happening right now. What thoughts, feelings, and bodily sensations are present?</li>
          <li><strong>Step 2 (Narrow):</strong> Gather your attention and focus it entirely on the physical sensation of your breath moving in and out.</li>
          <li><strong>Step 3 (Wide):</strong> Expand your awareness back out to your entire body, breathing with whatever sensations are present.</li>
        </ul>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl text-[#1a3b45] mb-3">2. The Body Scan</h2>
        <p className="mb-3 text-lg">
          Emotions manifest in the body before the mind fully registers them. The body scan trains you to notice these early physiological warning signs (like a tight chest or shallow breathing) so you can intervene before a full depressive spiral takes hold.
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl text-[#1a3b45] mb-3">3. Mindful Movement</h2>
        <p className="mb-3 text-lg">
          When depression hits, it often brings a profound physical lethargy. Mindful movement (often simple yoga stretches) helps re-engage the body and break the cognitive lock of rumination by shifting focus to the physical sensation of muscles stretching.
        </p>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200 bg-orange-50 p-8 rounded-lg">
        <h3 className="text-2xl text-[#1a3b45] font-bold mb-4">Take the next step</h3>
        <p className="text-lg text-gray-700 mb-6">
          If these 3 minutes of mindfulness helped, imagine what the full 8-week clinical program can do. Join my next private group to master these techniques with expert guidance.
        </p>
        <BookingCTA />
      </div>
    </div>
  );
}
