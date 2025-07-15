
import React from 'react';
import { YOUR_EMAIL, EnvelopeIcon } from '../../constants';

const ContactOutput: React.FC = () => {
  const mailtoLink = `mailto:${YOUR_EMAIL}?subject=Hello from your portfolio!`;

  return (
    <div className="bg-[var(--accent-cyan)] rounded-2xl p-8 sm:p-12 text-center text-white">
      <div className="mb-6">
        <span className="inline-block bg-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full">
          GET IN TOUCH
        </span>
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold break-words">
        <a 
          href={mailtoLink} 
          className="hover:opacity-80 transition-opacity underline decoration-white/50 hover:decoration-white"
        >
          {YOUR_EMAIL}
        </a>
      </h2>
      <div className="mt-8">
        <a
          href={mailtoLink}
          className="inline-flex items-center gap-3 px-6 py-3 bg-white text-[var(--bg-primary)] font-bold rounded-lg shadow-lg hover:bg-gray-200 transition-all transform hover:scale-105"
        >
          <EnvelopeIcon className="w-5 h-5" />
          <span>Send Message</span>
        </a>
      </div>
    </div>
  );
};

export default ContactOutput;