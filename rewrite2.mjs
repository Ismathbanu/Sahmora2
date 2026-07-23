import fs from 'fs';
import path from 'path';

const homeDir = 'src/components/home';

const components = {
  'Industries.jsx': `import React from 'react';

const industries = [
  { title: "Luxury & Jewellery", img: "https://images.unsplash.com/photo-1599643478524-fb66f70a0066?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  { title: "FMCG", img: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  { title: "Retail", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  { title: "Distribution", img: "https://images.unsplash.com/photo-1586528116311-ad8ed7c66a4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  { title: "Hospitality & HORECA", img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  { title: "Emerging Businesses", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
];

const Industries = () => {
  return (
    <section className="bg-white py-16 md:py-24 border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        <div className="flex items-center justify-center gap-6 mb-20">
          <div className="h-[1px] w-16 bg-[#C9A467]/60" />
          <span className="text-[#1A1A1A] text-[11px] font-body tracking-[0.25em] font-bold uppercase">Industries We Serve</span>
          <div className="h-[1px] w-16 bg-[#C9A467]/60" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-[2px]">
          {industries.map((ind, idx) => (
            <div key={idx} className="relative h-48 md:h-64 overflow-hidden group cursor-pointer bg-black">
              <img 
                src={ind.img} 
                alt={ind.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-5 right-5">
                <h4 className="text-white font-body font-semibold text-[13px] leading-snug">
                  {ind.title.split(' & ').map((part, i, arr) => (
                    <React.Fragment key={i}>
                      {part}
                      {i < arr.length - 1 && <React.Fragment> &<br/></React.Fragment>}
                    </React.Fragment>
                  ))}
                </h4>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Industries;
`,

  'WhySahmora.jsx': `import React from 'react';
import { Map, Target, Share2, Diamond } from 'lucide-react';

const reasons = [
  { icon: Map, title: "UAE Market Expertise", desc: "Deep understanding of the UAE & GCC market dynamics and opportunities." },
  { icon: Target, title: "Strategic Business Development", desc: "Hands-on approach to build, scale and transform businesses." },
  { icon: Share2, title: "Strong Commercial Network", desc: "Extensive network that opens doors to growth and partnerships." },
  { icon: Diamond, title: "Long-Term Value Creation", desc: "Focused on sustainable growth and enduring business value." },
];

const WhySahmora = () => {
  return (
    <section className="bg-[#FAFAF7] py-20 md:py-32 border-t border-[#C9A467]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        <div className="flex items-center justify-center gap-6 mb-20">
          <div className="h-[1px] w-16 bg-[#C9A467]/60" />
          <span className="text-[#1A1A1A] text-[11px] font-body tracking-[0.25em] font-bold uppercase">Why Sahmora</span>
          <div className="h-[1px] w-16 bg-[#C9A467]/60" />
        </div>

        <div className="grid md:grid-cols-4 gap-12 md:gap-16">
          {reasons.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-5 items-center md:items-start text-center md:text-left">
              <item.icon className="text-[#C9A467] w-10 h-10" strokeWidth={1} />
              <h4 className="text-[#1A1A1A] font-bold text-[14px] leading-tight tracking-[0.02em]">{item.title}</h4>
              <p className="text-[#8A8A8A] text-[13px] leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhySahmora;
`,

  'VisionMission.jsx': `import React from 'react';

const VisionMission = () => {
  return (
    <section className="relative w-full flex flex-col md:flex-row">
      
      {/* Absolute center badge */}
      <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] bg-white rounded-full items-center justify-center z-20 shadow-[0_0_40px_rgba(0,0,0,0.1)]">
        <span className="font-heading font-normal text-[#C9A467] text-[64px] leading-none mt-2">S</span>
      </div>

      {/* Left: Vision */}
      <div className="flex-1 bg-[#0D0D0D] py-24 md:py-32 px-6 md:px-20 relative overflow-hidden flex items-center md:justify-end">
        {/* Decorative background image placeholder */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://images.unsplash.com/photo-1582653211939-90518776b4a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center pointer-events-none mix-blend-screen" />
        
        <div className="max-w-[480px] z-10 md:pr-[100px] text-left">
          <span className="text-[#C9A467] text-[11px] font-body tracking-[0.25em] font-semibold uppercase mb-6 block">Our Vision</span>
          <p className="text-white text-[15px] font-body font-light leading-[1.8] opacity-90">
            To become one of the Middle East's most trusted investment and business development companies, creating enduring value through strategic investments and transformative business partnerships.
          </p>
        </div>
      </div>

      {/* Right: Mission */}
      <div className="flex-1 bg-[#F5F0E7] py-24 md:py-32 px-6 md:px-20 relative overflow-hidden flex items-center md:justify-start">
        {/* Decorative background image placeholder */}
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center pointer-events-none mix-blend-multiply" />
        
        <div className="max-w-[480px] z-10 md:pl-[100px] text-left">
          <span className="text-[#1A1A1A] text-[11px] font-body tracking-[0.25em] font-semibold uppercase mb-6 block">Our Mission</span>
          <p className="text-[#1A1A1A] text-[15px] font-body font-light leading-[1.8] opacity-90">
            To identify promising businesses, invest with purpose, accelerate growth through operational excellence, and build sustainable enterprises that contribute to the economic development of the UAE and GCC.
          </p>
        </div>
      </div>

    </section>
  );
};

export default VisionMission;
`,

  'CTAFooter.jsx': `import React from 'react';
import { ArrowRight, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTAFooter = () => {
  return (
    <footer className="bg-[#0D0D0D] text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Top CTA Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 pb-20 border-b border-white/10">
          
          <div className="lg:w-1/3">
            <Link to="/" className="flex items-center gap-4 mb-8">
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
            <p className="text-[#8A8A8A] text-[13px] font-light leading-relaxed max-w-[280px]">
              Building businesses. Creating value. Growing futures. Partnering for sustainable growth and enduring impact across the UAE & GCC.
            </p>
          </div>

          <div className="lg:w-2/3 flex flex-col lg:items-end w-full">
            <h2 className="text-[36px] md:text-[44px] lg:text-[52px] mb-6 text-left lg:text-right font-heading font-normal leading-[1.1]">
              Let's Build the Next <span className="text-[#C9A467]">Growth Story.</span>
            </h2>
            <p className="text-[#8A8A8A] text-[14px] font-light max-w-xl text-left lg:text-right mb-10 leading-relaxed">
              Whether you're an entrepreneur seeking strategic investment, an established company planning regional expansion, or an investor looking for meaningful opportunities, Sahmora is ready to create sustainable value together.
            </p>
            <div className="flex flex-wrap gap-5 justify-start lg:justify-end w-full">
              <Link to="/contact" className="bg-[#C9A467] text-black font-semibold text-[12px] tracking-[0.15em] uppercase px-8 py-4 hover:bg-[#B08D4F] transition-colors duration-300 flex items-center">
                Partner With Us <ArrowRight className="ml-3 w-4 h-4" />
              </Link>
              <Link to="/contact" className="border border-white/30 text-white font-semibold text-[12px] tracking-[0.15em] uppercase px-8 py-4 hover:border-[#C9A467] hover:text-[#C9A467] transition-colors duration-300 flex items-center">
                Contact Us <ArrowRight className="ml-3 w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

        {/* Footer Columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 py-16">
          
          <div>
            <h4 className="text-[#C9A467] text-[11px] font-bold uppercase tracking-[0.2em] mb-8">Quick Links</h4>
            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
              <Link to="/" className="text-[13px] font-light text-white hover:text-[#C9A467] transition-colors">Home</Link>
              <Link to="/about" className="text-[13px] font-light text-[#8A8A8A] hover:text-[#C9A467] transition-colors">About Us</Link>
              <Link to="/what-we-do" className="text-[13px] font-light text-[#8A8A8A] hover:text-[#C9A467] transition-colors">What We Do</Link>
              <Link to="/industries" className="text-[13px] font-light text-[#8A8A8A] hover:text-[#C9A467] transition-colors">Industries We Serve</Link>
              <Link to="/ventures" className="text-[13px] font-light text-[#8A8A8A] hover:text-[#C9A467] transition-colors">Ventures</Link>
              <Link to="/contact" className="text-[13px] font-light text-[#8A8A8A] hover:text-[#C9A467] transition-colors">Contact Us</Link>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[#C9A467] text-[11px] font-bold uppercase tracking-[0.2em] mb-8">Contact Us</h4>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="flex items-start gap-4 text-[13px] font-light text-[#8A8A8A] leading-relaxed">
                <MapPin className="text-[#C9A467] w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>DIFC Complex, WS-E.5<br />Dubai Investment Park 2<br />Dubai, United Arab Emirates</span>
              </div>
              <div className="flex flex-col gap-5 text-[13px] font-light text-[#8A8A8A]">
                <div className="flex items-center gap-4">
                  <Phone className="text-[#C9A467] w-5 h-5 flex-shrink-0" />
                  <span>+971 4 276 6331 &nbsp;&nbsp;&nbsp; +971 4 880 5504</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="text-[#C9A467] w-5 h-5 flex-shrink-0" />
                  <span>info@sahmorainvestment.com</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[12px] font-light text-[#8A8A8A]">
          <p>© 2024 Sahmora Investment LLC. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default CTAFooter;
`
};

Object.entries(components).forEach(([filename, content]) => {
  fs.writeFileSync(path.join(homeDir, filename), content);
});

console.log('Batch 2 rewritten.');
