import React from 'react';

export const CustomizationBanner: React.FC = () => {
  return (
    <section
      id="customization-section"
      className="bg-[#f4f5f7] text-black font-sans py-20 px-6 md:px-12 w-full text-center border-t border-b border-slate-200"
    >
      <div className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-950">
          Your PEPAL, your way.
        </h2>
        <p className="text-slate-700 text-xs sm:text-sm md:text-base font-normal max-w-lg mx-auto leading-relaxed">
          Fully customize your PEPAL with bespoke metallic finishes, laser-engraved monograms, and interchangeable thermal caps.
        </p>
      </div>
    </section>
  );
};
