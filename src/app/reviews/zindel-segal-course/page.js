import BookingCTA from '../../../components/BookingCTA';
import Link from 'next/link';

export const metadata = {
  title: "Zindel Segal's MBCT Online Course Review: Is the Founders' Program Worth It?",
  description: "An honest review of Zindel Segal's online MBCT program, syllabus, and effectiveness."
};

export default function ZindelSegalCourseReview() {
  return (
    <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem 0' }}>
      <div className="mb-6">
        <Link href="/ultimate-guide-mbct" className="text-sm text-[#c16533] font-bold uppercase tracking-wider hover:underline">
          &larr; Back to the Ultimate Guide
        </Link>
      </div>

      <p className="text-[#c16533] font-semibold mb-2 text-sm uppercase tracking-wider">
        Program Review
      </p>
      <h1><span className="heading-highlight">Zindel Segal's MBCT Course:</span> Is it worth it?</h1>
      
      <p className="text-xl text-gray-600 mb-8 mt-4">
        Dr. Zindel Segal is one of the original founders of Mindfulness-Based Cognitive Therapy. When looking for an authentic online program, his courses are often the first stop. Let's break down the syllabus and see if a self-paced founder's program is the right fit.
      </p>

      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8 mb-10">
        <h3 className="text-2xl text-[#1a3b45] mb-4">The Syllabus</h3>
        <p className="mb-4 text-lg">
          The course meticulously follows the exact 8-week protocol used in clinical research trials. 
        </p>
        <ul className="list-disc pl-6 mb-4 text-lg space-y-2">
          <li><strong>Weeks 1-4:</strong> Focuses on learning to pay attention, gathering the scattered mind, and recognizing the "Doing Mode."</li>
          <li><strong>Weeks 5-8:</strong> Focuses on allowing things to be as they are, dealing with difficult thoughts, and creating an action plan for relapse prevention.</li>
        </ul>
        <p className="text-lg font-bold text-[#1a3b45]">Verdict: 10/10 for clinical accuracy.</p>
      </div>

      <h2 className="text-2xl text-[#1a3b45] mb-4">The Drawback: Lifetime Access vs. Accountability</h2>
      <p className="mb-4 text-lg">
        The program boasts "lifetime access." While this sounds like a great perk, it can actually be a hindrance in MBCT. 
      </p>
      <p className="mb-8 text-lg">
        MBCT requires a rigid, 8-week commitment of 45 minutes of daily practice. When you have "lifetime access" and no live instructor expecting you to show up, it is incredibly easy to put it off until tomorrow. Tomorrow turns into next week, and the practice falls apart.
      </p>

      <div className="mt-12 pt-8 border-t border-gray-200 bg-orange-50 p-8 rounded-lg">
        <h3 className="text-2xl text-[#1a3b45] font-bold mb-4">The Alternative: Guided Live Groups</h3>
        <p className="text-lg text-gray-700 mb-6">
          Zindel Segal's course is brilliant theory. But to put that theory into practice, you need a cohort and a guide. If you want the clinical accuracy of the founders' program but with the accountability of a live group, book a call to join my next cohort.
        </p>
        <BookingCTA />
      </div>
    </div>
  );
}
