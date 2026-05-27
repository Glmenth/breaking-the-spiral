export default function LeadMagnet() {
  return (
    <section className="bg-white border border-gray-200 rounded-xl shadow-sm p-8 md:p-12 max-w-4xl mx-auto my-12 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mr-8 -mt-8 w-48 h-48 rounded-full bg-orange-50 opacity-50 z-0"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1 text-center md:text-left">
          <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-orange-800 text-xs font-bold tracking-wider uppercase mb-4">
            Free PDF Guide
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-[#1a3b45] font-medium leading-tight mb-4">
            The 3-Step Spiral Check
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            An MBCT guide to identifying rumination before it takes hold. Download this free PDF to learn the early warning signs of a depressive spiral and how to step out of it.
          </p>
        </div>
        
        <div className="flex-1 w-full max-w-md bg-gray-50 p-6 rounded-lg border border-gray-100">
          <form 
            name="lead_magnet"
            method="POST"
            data-netlify="true"
            action="/thank-you"
            className="flex flex-col gap-4"
          >
            {/* Netlify hidden input for form name routing */}
            <input type="hidden" name="form-name" value="lead_magnet" />
            <input type="hidden" name="subject" value="New Lead Magnet Download!" />

            <div>
              <label htmlFor="first_name" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input 
                type="text" 
                id="first_name" 
                name="first_name" 
                required 
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1a3b45] focus:border-transparent transition-shadow"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1a3b45] focus:border-transparent transition-shadow"
                placeholder="you@example.com"
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-[#1a3b45] hover:bg-[#142E35] text-white font-medium py-3 px-4 rounded-md shadow-sm transition-all transform hover:-translate-y-0.5 mt-2"
            >
              Send Me the Free Guide
            </button>
            <p className="text-xs text-center text-gray-500 mt-2">
              We respect your privacy. No spam, ever.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
