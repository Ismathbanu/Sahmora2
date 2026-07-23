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
    <header className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-md h-[90px] flex items-center border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-4">
          <div className="w-10 h-10 flex items-center justify-center text-gold text-2xl font-heading">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-gold">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1" />
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1" />
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>
          <div>
            <div className="text-white font-bold tracking-[0.1em] text-xl leading-none mb-1">SAHMORA</div>
            <div className="text-gold text-[10px] tracking-widest uppercase">Investment LLC</div>
          </div>
        </Link>

        {/* Nav Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link to="/" className="text-[13px] font-medium tracking-wide text-gold border-b border-gold pb-1 uppercase">Home</Link>
          <Link to="/about" className="text-[13px] font-medium tracking-wide text-white hover:text-gold transition-colors uppercase">About Us</Link>
          <Link to="/what-we-do" className="text-[13px] font-medium tracking-wide text-white hover:text-gold transition-colors uppercase">What We Do</Link>
          <Link to="/industries" className="text-[13px] font-medium tracking-wide text-white hover:text-gold transition-colors uppercase">Industries We Serve</Link>
          <div className="flex items-center cursor-pointer group">
            <span className="text-[13px] font-medium tracking-wide text-white group-hover:text-gold transition-colors uppercase">Ventures</span>
            <ChevronDown className="ml-1 w-4 h-4 text-white group-hover:text-gold transition-colors" />
          </div>
        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <Link to="/contact" className="btn-outline text-xs px-5 py-2">Contact Us</Link>
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
    <section className="bg-black pt-[90px] min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full grid md:grid-cols-2 gap-10 items-center py-16 md:py-24">
        {/* Left Column */}
        <div className="z-10">
          <h1 className="text-5xl md:text-6xl lg:text-[64px] leading-[1.1] mb-6">
            <span className="block text-white">Building</span>
            <span className="block text-white">Businesses.</span>
            <span className="block text-gold">Creating Value.</span>
            <span className="block text-gold">Growing Futures.</span>
          </h1>
          <p className="text-graytext text-lg max-w-[480px] mb-10 leading-relaxed">
            Sahmora Investment LLC is a UAE-based investment and business development company focused on identifying, investing in, and scaling high-potential businesses across the UAE and GCC.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/about" className="btn-primary">
              Explore Sahmora <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link to="/contact" className="btn-outline">
              Partner With Us <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Right Column / Image */}
        <div className="relative h-[500px] md:h-[600px] w-full rounded-lg overflow-hidden flex items-center justify-center group">
          <img 
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
            alt="Dubai Skyline" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Faint gold rings background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <div className="w-[300px] h-[300px] rounded-full border-[1px] border-gold/20 absolute" />
             <div className="w-[450px] h-[450px] rounded-full border-[1px] border-gold/10 absolute" />
          </div>
          {/* Abstract Gold 3D overlay (placeholder using css) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
          <div className="relative z-10 w-48 h-64 border-4 border-gold/80 transform rotate-12 shadow-2xl backdrop-blur-sm bg-gold/5 flex items-center justify-center">
             <div className="w-32 h-48 border-2 border-gold/60 transform -rotate-6" />
          </div>
        </div>
      </div>
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
    <div className="bg-black border-y border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <h3 className="text-gold text-center text-xs tracking-[0.25em] font-bold uppercase mb-8">
          Building Sustainable Businesses Across The UAE & GCC
        </h3>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {features.map((feature, idx) => (
            <div key={idx} className="flex-1 flex items-center justify-center gap-4 pt-6 md:pt-0 w-full">
              <feature.icon className="text-gold w-8 h-8" strokeWidth={1.5} />
              <span className="text-white text-sm font-medium uppercase tracking-wide leading-tight max-w-[120px]">
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
    <section className="bg-cream py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Image */}
        <div className="relative h-[600px] rounded-lg overflow-hidden group shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1546412414-e1885259563a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
            alt="Dubai Marina" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Right: Content */}
        <div>
          <span className="eyebrow">About Sahmora</span>
          <h2 className="text-ink text-4xl md:text-5xl mb-6">More Than Capital.<br />We Build Businesses.</h2>
          <p className="text-graytext text-lg mb-10 leading-relaxed">
            At Sahmora, we go beyond capital. We partner with entrepreneurs and business owners by providing strategic direction, operational expertise, market access, and scalable growth frameworks to build enduring businesses and lasting impact.
          </p>
          
          <div className="grid grid-cols-3 gap-6 mb-12">
            {miniFeatures.map((feat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center mb-4 bg-white/50 group-hover:bg-gold/10 transition-colors">
                  <feat.icon className="text-gold w-6 h-6" strokeWidth={1.5} />
                </div>
                <span className="text-ink text-xs font-semibold uppercase tracking-wide px-2">{feat.label}</span>
              </div>
            ))}
          </div>

          <Link to="/about" className="btn-black">
            Discover Our Story <ArrowRight className="ml-2 w-4 h-4" />
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
    <section className="bg-offwhite py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-[1px] w-12 bg-gold/50" />
          <span className="eyebrow !mb-0 text-ink">What We Do</span>
          <div className="h-[1px] w-12 bg-gold/50" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {services.map((svc, idx) => (
            <div key={idx} className="relative h-48 md:h-64 rounded-md overflow-hidden group cursor-pointer bg-charcoal">
              <img 
                src={svc.img} 
                alt={svc.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 pr-4">
                <h4 className="text-white font-medium text-sm md:text-base leading-tight mb-2">
                  {svc.title.split(' ').map((word, i) => (
                    <React.Fragment key={i}>
                      {word}
                      {i === 0 && <br />}
                    </React.Fragment>
                  ))}
                </h4>
                <div className="w-8 h-[2px] bg-gold transition-all duration-300 group-hover:w-16" />
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
    <section className="bg-cream py-16 md:py-24 border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative">
        <div className="flex items-center justify-center gap-4 mb-20">
          <div className="h-[1px] w-12 bg-gold/50" />
          <span className="eyebrow !mb-0 text-ink">How We Create Value</span>
          <div className="h-[1px] w-12 bg-gold/50" />
        </div>

        {/* Timeline container */}
        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-10 left-12 right-12 h-[1px] border-t border-dashed border-gold/50 z-0" />
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group w-full md:w-auto">
                <div className="w-20 h-20 bg-charcoal rounded-full flex items-center justify-center mb-6 shadow-xl border border-white/10 group-hover:border-gold transition-colors duration-300 relative z-10">
                  <step.icon className="text-gold w-8 h-8" strokeWidth={1.5} />
                </div>
                <h4 className="text-ink text-sm font-semibold max-w-[120px] leading-tight">
                  {step.label}
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

console.log('Batch 1 home components generated.');
