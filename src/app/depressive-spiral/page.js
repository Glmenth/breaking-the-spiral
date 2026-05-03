import BookingCTA from '../../components/BookingCTA';
import Link from 'next/link';

export const metadata = {
  title: "What is the 'Depressive Spiral'? | Breaking The Spiral",
  description: "Learn how MBCT rewires your response to rumination by shifting from Doing Mode to Being Mode."
};

export default function DepressiveSpiral() {
  return (
    <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem 0' }}>
      <div className="mb-6">
        <Link href="/ultimate-guide-mbct" className="text-sm text-[#c16533] font-bold uppercase tracking-wider hover:underline">
          &larr; Back to the Ultimate Guide
        </Link>
      </div>

      <h1><span className="heading-highlight">The Depressive Spiral:</span> How MBCT Rewires Rumination</h1>
      
      <p className="text-xl text-gray-600 mb-8 mt-4">
        To understand how Mindfulness-Based Cognitive Therapy (MBCT) works, you first must understand the mechanism of the "depressive spiral" and the danger of the "Doing Mode."
      </p>

      <h2 className="text-2xl text-[#1a3b45] mb-4">The Trap of the "Doing Mode"</h2>
      <p className="mb-4 text-lg">
        The human brain is an incredible problem-solving machine. When there is a discrepancy between how things <em>are</em> and how we want them to <em>be</em>, our brain enters <strong>Doing Mode</strong>. It works tirelessly to close that gap.
      </p>
      <p className="mb-8 text-lg">
        This is highly effective for external problems (like fixing a leaky roof). But when the problem is an <em>internal feeling</em>—like sadness or anxiety—the Doing Mode turns into <strong>rumination</strong>. Your brain constantly monitors your emotional state, comparing it to "happy," and repeatedly flags a failure. This endless loop drags you deeper down the spiral.
      </p>

      <div className="bg-gray-50 border-l-4 border-[#1a3b45] p-6 mb-8 italic text-lg text-gray-700">
        "You cannot solve an internal emotional problem using the same mental machinery designed to fix a broken car."
      </div>

      <h2 className="text-2xl text-[#1a3b45] mb-4">Shifting to "Being Mode"</h2>
      <p className="mb-4 text-lg">
        MBCT trains you to recognize when the Doing Mode has been triggered by sadness. Once recognized, the practice teaches you to consciously shift into <strong>Being Mode</strong>. 
      </p>
      <p className="mb-8 text-lg">
        In Being Mode, the goal isn't to fix, avoid, or change the sadness. The goal is simply to observe it without judgment. By stepping out of the problem-solving loop, you cut off the fuel to the rumination engine, preventing a fleeting moment of sadness from spiraling into a severe depressive episode.
      </p>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-2xl text-[#1a3b45] font-bold mb-4">Master the shift in a guided environment</h3>
        <p className="text-lg text-gray-700 mb-6">
          Learning to shift from Doing Mode to Being Mode takes practice. My 8-week MBCT groups provide the expert guidance and accountability you need to rewire this response.
        </p>
        <BookingCTA />
      </div>
    </div>
  );
}
