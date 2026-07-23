import fs from 'fs';
import path from 'path';

const homeDir = 'src/components/home';
if (!fs.existsSync(homeDir)) {
  fs.mkdirSync(homeDir, { recursive: true });
}

const components = {
  'Navbar.jsx': `import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#0D0D0D]/95 backdrop-blur-md h-[100px] flex items-center border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-4">
          <div className="w-12 h-12 flex items-center justify-center text-[#C9A467] text-3xl font-heading">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-[#C9A467]">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1" />
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1" />
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>
          <div className="flex flex-col justify-center">
            <div className="text-white font-body font-normal tracking-[0.15em] text-2xl leading-none mb-1">SAHMORA</div>
            <div className="text-[#C9A467] font-body text-[9px] tracking-[0.3em] uppercase font-semibold">Investment LLC</div>
          </div>
        </Link>

        {/* Nav Links */}
        <nav className="hidden lg:flex items-center space-x-10">
          <Link to="/" className="text-[12px] font-semibold font-body tracking-[0.1em] text-[#C9A467] border-b-2 border-[#C9A467] pb-1 uppercase">Home</Link>
          <Link to="/about" className="text-[12px] font-semibold font-body tracking-[0.1em] text-white hover:text-[#C9A467] transition-colors uppercase">About Us</Link>
          <Link to="/what-we-do" className="text-[12px] font-semibold font-body tracking-[0.1em] text-white hover:text-[#C9A467] transition-colors uppercase">What We Do</Link>
          <Link to="/industries" className="text-[12px] font-semibold font-body tracking-[0.1em] text-white hover:text-[#C9A467] transition-colors uppercase">Industries We Serve</Link>
          <div className="flex items-center cursor-pointer group">
            <span className="text-[12px] font-semibold font-body tracking-[0.1em] text-white group-hover:text-[#C9A467] transition-colors uppercase">Ventures</span>
            <ChevronDown className="ml-1.5 w-3.5 h-3.5 text-white group-hover:text-[#C9A467] transition-colors" />
          </div>
        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <Link to="/contact" className="border border-[#C9A467] text-[#C9A467] font-semibold text-[11px] tracking-[0.15em] uppercase px-8 py-3.5 hover:bg-[#C9A467] hover:text-black transition-colors duration-300">
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
`,

  'Hero.jsx': `import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-[#0D0D0D] pt-[100px] min-h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full grid md:grid-cols-2 gap-10 items-center py-16 md:py-24 z-10">
        {/* Left Column */}
        <div className="z-10 max-w-xl">
          <h1 className="text-5xl md:text-[68px] lg:text-[76px] leading-[1.05] mb-8 font-heading font-normal">
            <span className="block text-white mb-2">Building</span>
            <span className="block text-white mb-2">Businesses.</span>
            <span className="block text-[#C9A467] mb-2">Creating Value.</span>
            <span className="block text-[#C9A467]">Growing Futures.</span>
          </h1>
          <p className="text-white text-[15px] font-body font-light max-w-[460px] mb-12 leading-relaxed opacity-90">
            Sahmora Investment LLC is a UAE-based investment and business development company focused on identifying, investing in, and scaling high-potential businesses across the UAE and GCC.
          </p>
          <div className="flex flex-wrap gap-5">
            <Link to="/about" className="bg-[#C9A467] text-black font-semibold text-[12px] tracking-[0.15em] uppercase px-8 py-4 hover:bg-[#B08D4F] transition-colors duration-300 flex items-center">
              Explore Sahmora <ArrowRight className="ml-3 w-4 h-4" />
            </Link>
            <Link to="/contact" className="border border-white/30 text-white font-semibold text-[12px] tracking-[0.15em] uppercase px-8 py-4 hover:border-[#C9A467] hover:text-[#C9A467] transition-colors duration-300 flex items-center">
              Partner With Us <ArrowRight className="ml-3 w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Right Column / Image */}
        <div className="relative h-[550px] md:h-[650px] w-full flex items-center justify-center pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
            alt="Dubai Skyline" 
            className="absolute inset-0 w-full h-full object-cover rounded-md opacity-80"
          />
          {/* Faint gold rings background */}
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-[350px] h-[350px] rounded-full border-[0.5px] border-[#C9A467]/30 absolute" />
             <div className="w-[500px] h-[500px] rounded-full border-[0.5px] border-[#C9A467]/20 absolute" />
             <div className="w-[650px] h-[650px] rounded-full border-[0.5px] border-[#C9A467]/10 absolute" />
          </div>
          {/* Gold abstract shape overlay */}
          <div className="relative z-10 w-56 h-80 border-[8px] border-[#C9A467] transform rotate-12 shadow-2xl backdrop-blur-[2px] bg-[#C9A467]/5 flex items-center justify-center">
             <div className="w-40 h-64 border-[4px] border-[#C9A467]/70 transform -rotate-6" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent" />
        </div>
      </div>
      
      {/* Decorative Gold line at bottom */}
      <div className="absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A467]/50 to-transparent" />
    </section>
  );
};

export default Hero;
`,

  'FeatureStrip.jsx': `import React from 'react';
import { Target, TrendingUp, Globe, RefreshCw } from 'lucide-react';

const features = [
  { icon: Target, label: "Strategic Investments" },
  { icon: TrendingUp, label: "Business Growth" },
  { icon: Globe, label: "Market Expansion" },
  { icon: RefreshCw, label: "Business Transformation" },
];

const FeatureStrip = () => {
  return (
    <div className="bg-black py-10 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <h3 className="text-[#C9A467] text-center text-[11px] font-body tracking-[0.3em] font-semibold uppercase mb-10">
          Building Sustainable Businesses Across The UAE & GCC
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center justify-center gap-5 pt-6 md:pt-0">
              <feature.icon className="text-[#C9A467] w-8 h-8" strokeWidth={1} />
              <span className="text-white text-[11px] font-semibold uppercase tracking-[0.15em] leading-[1.4] max-w-[130px]">
                {feature.label.split(' ').map((word, i) => (
                  <React.Fragment key={i}>
                    {word}
                    {i === 0 && <br />}
                  </React.Fragment>
                ))}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureStrip;
`,

  'AboutSection.jsx': `import React from 'react';
import { ArrowRight, ChessKnight, Briefcase, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';

const miniFeatures = [
  { icon: ChessKnight, label: "Strategic Investment" },
  { icon: Briefcase, label: "Business Development" },
  { icon: Handshake, label: "Long-Term Partnerships" },
];

const AboutSection = () => {
  return (
    <section className="bg-[#F5F0E7] py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left: Image */}
        <div className="relative h-[650px] w-full group overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1546412414-e1885259563a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
            alt="Dubai Marina" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
        </div>

        {/* Right: Content */}
        <div className="max-w-xl">
          <span className="text-[#C9A467] text-[11px] font-body tracking-[0.25em] uppercase font-semibold mb-6 block">About Sahmora</span>
          <h2 className="text-[#1A1A1A] text-5xl md:text-[56px] leading-[1.1] mb-8 font-heading">
            More Than Capital.<br />We Build Businesses.
          </h2>
          <p className="text-[#1A1A1A] text-[15px] font-body font-light mb-12 leading-relaxed">
            At Sahmora, we go beyond capital. We partner with entrepreneurs and business owners by providing strategic direction, operational expertise, market access, and scalable growth frameworks to build enduring businesses and lasting impact.
          </p>
          
          <div className="flex flex-row justify-between mb-16 border-t border-black/10 pt-10">
            {miniFeatures.map((feat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <feat.icon className="text-[#C9A467] w-8 h-8 mb-5" strokeWidth={1} />
                <span className="text-[#1A1A1A] text-[10px] font-bold uppercase tracking-[0.1em] leading-snug max-w-[100px]">
                  {feat.label.split(' ').map((word, i) => (
                    <React.Fragment key={i}>
                      {word}
                      {i === 0 && <br />}
                    </React.Fragment>
                  ))}
                </span>
              </div>
            ))}
          </div>

          <Link to="/about" className="bg-black text-white font-semibold text-[12px] tracking-[0.15em] uppercase px-8 py-4 hover:bg-[#1A1A1A] transition-colors duration-300 flex items-center inline-flex">
            Discover Our Story <ArrowRight className="ml-3 w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
`,

  'WhatWeDo.jsx': `import React from 'react';

const services = [
  { title: "Strategic Investments", img: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  { title: "Growth Capital", img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  { title: "Business Acquisitions", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  { title: "Retail Expansion", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  { title: "Market Entry Strategy", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  { title: "Distribution Development", img: "https://images.unsplash.com/photo-1586528116311-ad8ed7c66a4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  { title: "Brand Scaling", img: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  { title: "Business Transformation", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
];

const WhatWeDo = () => {
  return (
    <section className="bg-[#FAFAF7] py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        <div className="flex items-center justify-center gap-6 mb-20">
          <div className="h-[1px] w-16 bg-[#C9A467]/60" />
          <span className="text-[#1A1A1A] text-[11px] font-body tracking-[0.25em] font-bold uppercase">What We Do</span>
          <div className="h-[1px] w-16 bg-[#C9A467]/60" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {services.map((svc, idx) => (
            <div key={idx} className="relative h-48 md:h-[220px] overflow-hidden group cursor-pointer bg-black rounded-[4px]">
              <img 
                src={svc.img} 
                alt={svc.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 pr-4">
                <h4 className="text-white font-body font-semibold text-[13px] md:text-[14px] leading-[1.3] mb-3">
                  {svc.title.split(' ').map((word, i) => (
                    <React.Fragment key={i}>
                      {word}
                      {i === 0 && <br />}
                    </React.Fragment>
                  ))}
                </h4>
                <div className="w-8 h-[2px] bg-[#C9A467] transition-all duration-300 group-hover:w-16" />
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default WhatWeDo;
`,

  'ValueTimeline.jsx': `import React from 'react';
import { Binoculars, Search, Handshake, Settings, LineChart, Trophy } from 'lucide-react';

const steps = [
  { icon: Binoculars, label: "Identify Opportunities" },
  { icon: Search, label: "Evaluate Potential" },
  { icon: Handshake, label: "Strategic Investment" },
  { icon: Settings, label: "Operational Excellence" },
  { icon: LineChart, label: "Business Growth" },
  { icon: Trophy, label: "Long-Term Success" },
];

const ValueTimeline = () => {
  return (
    <section className="bg-[#FAFAF7] py-16 md:py-24 border-t border-[#C9A467]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative">
        
        <div className="flex items-center justify-center gap-6 mb-24">
          <div className="h-[1px] w-16 bg-[#C9A467]/60" />
          <span className="text-[#1A1A1A] text-[11px] font-body tracking-[0.25em] font-bold uppercase">How We Create Value</span>
          <div className="h-[1px] w-16 bg-[#C9A467]/60" />
        </div>

        {/* Timeline container */}
        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[44px] left-12 right-12 h-[1px] border-t border-dashed border-[#C9A467]/40 z-0" />
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group w-full md:w-auto relative">
                
                {/* Arrow indicator on the dashed line (except last) */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-[39px] -right-[50%] w-3 h-3 border-t border-r border-[#C9A467] transform rotate-45 z-0" style={{ right: 'calc(-50% - 6px)' }} />
                )}

                <div className="w-[88px] h-[88px] bg-[#111111] rounded-full flex items-center justify-center mb-6 border-[2px] border-[#C9A467]/20 group-hover:border-[#C9A467] transition-colors duration-300 relative z-10">
                  <step.icon className="text-[#C9A467] w-8 h-8" strokeWidth={1} />
                </div>
                <h4 className="text-[#1A1A1A] text-[11px] font-bold tracking-[0.05em] leading-snug max-w-[100px]">
                  {step.label.split(' ').map((word, i) => (
                    <React.Fragment key={i}>
                      {word}
                      {i === 0 && <br />}
                    </React.Fragment>
                  ))}
                </h4>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ValueTimeline;
`
};

Object.entries(components).forEach(([filename, content]) => {
  fs.writeFileSync(path.join(homeDir, filename), content);
});

console.log('Batch 1 rewritten.');
