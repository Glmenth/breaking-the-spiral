import BookingCTA from '../../components/BookingCTA';
import Link from 'next/link';

export const metadata = {
  title: 'NHS MBCT vs. Online Programs: Costs, Waiting Lists, and Effectiveness',
  description: 'Comparing NHS MBCT pathways with private online groups to help you make the right choice.'
};

export default function ClinicalComparison() {
  return (
    <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem 0' }}>
      <div className="mb-6">
        <Link href="/ultimate-guide-mbct" className="text-sm text-[#c16533] font-bold uppercase tracking-wider hover:underline">
          &larr; Back to the Ultimate Guide
        </Link>
      </div>

      <h1><span className="heading-highlight">NHS vs. Private Online MBCT:</span> Which is right for you?</h1>
      
      <p className="text-xl text-gray-600 mb-8 mt-4">
        As an NHS-trained professional, I often get asked if there is a free version of MBCT. The short answer is yes. But navigating the system requires understanding the trade-offs between cost, waiting times, and support.
      </p>

      <h2 className="text-2xl text-[#1a3b45] mb-4">The NHS Pathway</h2>
      <p className="mb-4 text-lg">
        The NHS offers MBCT for free, primarily to those with a history of recurrent depression. This is fantastic, as it removes financial barriers to life-changing therapy.
      </p>
      <p className="mb-8 text-lg text-red-700 bg-red-50 p-4 rounded-lg">
        <strong>The Catch:</strong> Waiting lists. Depending on your postcode, the wait to join an NHS MBCT group can be anywhere from 6 to 18 months. When you are struggling to stay well, waiting a year for support is often not a viable option.
      </p>

      <h2 className="text-2xl text-[#1a3b45] mb-4">Self-Paced Online Courses</h2>
      <p className="mb-4 text-lg">
        To bypass the wait, many turn to self-paced online courses. These offer instant access and are usually taught by world-renowned experts via pre-recorded videos.
      </p>
      <p className="mb-8 text-lg">
        However, the attrition rate for self-paced courses is high. Without a live instructor or a cohort to hold you accountable, it is very difficult to complete the rigorous 8-week daily practice requirement alone.
      </p>

      <h2 className="text-2xl text-[#1a3b45] mb-4">The Middle Path: Private Online Groups</h2>
      <p className="mb-4 text-lg">
        This is why I run private, live online groups. It bridges the gap. You don't have to wait 12 months for an NHS referral, but you still get the vital, live support of a trained professional and a small, dedicated cohort.
      </p>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-2xl text-[#1a3b45] font-bold mb-4">Skip the waitlist. Join the next cohort.</h3>
        <BookingCTA />
      </div>
    </div>
  );
}
