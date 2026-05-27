import BookingCTA from '../../components/BookingCTA';
import Link from 'next/link';

export const metadata = {
  title: 'Thank You! | Breaking The Spiral',
  description: 'Your free MBCT guide is on its way.'
};

export default function ThankYou() {
  return (
    <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', padding: '4rem 0' }}>
      <div className="inline-block p-4 rounded-full bg-green-100 text-green-600 mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      
      <h1 className="text-4xl md:text-5xl font-serif text-[#1a3b45] mb-4">You're all set!</h1>
      <p className="text-xl text-gray-600 mb-8">
        Your free copy of "The 3-Step Spiral Check" is ready. You can download it immediately below:
      </p>
      
      <a 
        href="/3-Step-Spiral-Check.pdf" 
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[#1a3b45] text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-[#142E35] transition-colors mb-12 text-lg"
      >
        Download PDF Guide Now
      </a>

      <div className="bg-white border-t-4 border-[#c16533] shadow-md rounded-lg p-8 text-left mt-12 mb-8 relative">
        <span className="absolute top-0 right-0 bg-[#c16533] text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg uppercase tracking-wide">
          Next Step
        </span>
        <h2 className="text-2xl font-serif text-[#1a3b45] mb-4">Don't stop at reading a PDF.</h2>
        <p className="text-gray-700 mb-4">
          Understanding the theory of Mindfulness-Based Cognitive Therapy is the first step. But the real transformation happens when you practice it consistently with expert guidance.
        </p>
        <p className="text-gray-700 mb-6">
          I am currently accepting applications for my next private, 8-week online MBCT cohort. Because groups are limited to just 12 participants, spots fill up quickly.
        </p>
        
        <div className="bg-orange-50 p-6 rounded-md border border-orange-100">
          <h3 className="text-lg font-bold text-[#1a3b45] mb-2">Priority Waitlist Offer</h3>
          <p className="text-sm text-gray-600 mb-4">
            Since you downloaded the guide, you are invited to join the Priority Waitlist. This guarantees you early access to booking before it opens to the public. 
          </p>
          <Link href="/join" className="text-[#c16533] font-medium hover:underline inline-flex items-center">
            Learn more about the 8-Week Group 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>

      <BookingCTA />
    </div>
  );
}
