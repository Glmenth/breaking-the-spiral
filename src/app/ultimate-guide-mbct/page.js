import BookingCTA from '../../components/BookingCTA';
import Link from 'next/link';

export const metadata = {
  title: 'The Ultimate Guide to MBCT for Depression Relapse Prevention',
  description: 'A comprehensive overview of Mindfulness-Based Cognitive Therapy, how it works, and how to start.'
};

export default function UltimateGuideMBCT() {
  return (
    <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem 0' }}>
      <h1><span className="heading-highlight">The Ultimate Guide</span> to MBCT</h1>
      
      <p className="text-xl text-gray-600 mb-8 mt-4">
        Mindfulness-Based Cognitive Therapy (MBCT) is an innovative, evidence-based psychological therapy designed specifically to aid in preventing the relapse of depression and chronic anxiety.
      </p>

      <div className="bg-orange-50 p-6 rounded-lg border border-orange-100 mb-10">
        <h3 className="text-[#c16533] text-lg font-bold mb-4 uppercase tracking-wide">In This Guide</h3>
        <ul className="space-y-3">
          <li>
            <Link href="/depressive-spiral" className="text-[#1a3b45] font-semibold hover:text-[#c16533] underline decoration-gray-300 underline-offset-4">
              1. What is the Depressive Spiral? (The Mechanism)
            </Link>
          </li>
          <li>
            <Link href="/3-mbct-techniques" className="text-[#1a3b45] font-semibold hover:text-[#c16533] underline decoration-gray-300 underline-offset-4">
              2. Three MBCT Techniques You Can Use Today
            </Link>
          </li>
          <li>
            <Link href="/nhs-vs-online-mbct" className="text-[#1a3b45] font-semibold hover:text-[#c16533] underline decoration-gray-300 underline-offset-4">
              3. NHS MBCT vs. Online Programs
            </Link>
          </li>
          <li>
            <Link href="/reviews/zindel-segal-course" className="text-[#1a3b45] font-semibold hover:text-[#c16533] underline decoration-gray-300 underline-offset-4">
              4. Reviewing Zindel Segal's Founders' Program
            </Link>
          </li>
        </ul>
      </div>

      <h2 className="text-3xl text-[#1a3b45] mb-4">The Science of Relapse</h2>
      <p className="mb-4 text-lg">
        If you have suffered from depression in the past, your brain has established neural pathways that make it easier for sadness to spiral back into a full depressive episode. Traditional cognitive therapy aims to change the <em>content</em> of these negative thoughts.
      </p>
      <p className="mb-8 text-lg">
        MBCT takes a different approach. Instead of changing the thoughts, participants learn to change their <strong>relationship</strong> to these thoughts. By practicing mindfulness, individuals learn to view negative thoughts as passing mental events rather than absolute truths.
      </p>

      <h2 className="text-3xl text-[#1a3b45] mb-4">Why Group Therapy is the Gold Standard</h2>
      <p className="mb-4 text-lg">
        While the concepts of MBCT are simple, the practice is difficult. Sitting with uncomfortable emotions and training the mind to step out of "doing mode" requires guidance.
      </p>
      <p className="mb-8 text-lg">
        Clinical research demonstrates that the 8-week group format is essential. It provides shared accountability, real-time troubleshooting, and the realization that you are not alone in your struggles. 
      </p>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-2xl text-[#1a3b45] font-bold mb-4">Ready to start the 8-week protocol?</h3>
        <p className="text-lg text-gray-700 mb-6">
          I run private, highly supportive 8-week online MBCT groups that follow the exact clinical protocol discussed throughout this guide.
        </p>
        <BookingCTA />
      </div>
    </div>
  );
}
