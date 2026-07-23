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
  { title: "Hospitality & HOREKA", img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  { title: "Emerging Businesses", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
];

const Industries = () => {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-[1px] w-12 bg-gold/50" />
          <span className="eyebrow !mb-0 text-ink">Industries We Serve</span>
          <div className="h-[1px] w-12 bg-gold/50" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((ind, idx) => (
            <div key={idx} className="relative h-64 md:h-80 rounded-md overflow-hidden group cursor-pointer bg-charcoal">
              <img 
                src={ind.img} 
                alt={ind.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h4 className="text-white font-medium text-sm md:text-base leading-tight mb-3">
                  {ind.title.split(' & ').map((part, i, arr) => (
                    <React.Fragment key={i}>
                      {part}
                      {i < arr.length - 1 && <React.Fragment> &<br/></React.Fragment>}
                    </React.Fragment>
                  ))}
                </h4>
                <div className="w-8 h-[2px] bg-gold transition-all duration-300 group-hover:w-full" />
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
    <section className="bg-offwhite py-16 md:py-24 border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-center gap-4 mb-20">
          <div className="h-[1px] w-12 bg-gold/50" />
          <span className="eyebrow !mb-0 text-ink">Why Sahmora</span>
          <div className="h-[1px] w-12 bg-gold/50" />
        </div>

        <div className="grid md:grid-cols-4 gap-8 md:gap-12">
          {reasons.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              <div className="w-12 h-12">
                <item.icon className="text-gold w-full h-full" strokeWidth={1} />
              </div>
              <h4 className="text-ink font-semibold text-lg">{item.title}</h4>
              <p className="text-graytext text-sm leading-relaxed">{item.desc}</p>
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
      <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full items-center justify-center z-20 shadow-2xl border-4 border-gold/20">
        <span className="font-heading text-gold text-4xl">S</span>
      </div>

      {/* Left: Vision */}
      <div className="flex-1 bg-black py-20 px-6 md:px-20 relative overflow-hidden flex items-center justify-end">
        {/* Decorative faint background */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 30% 70%, var(--color-gold) 0%, transparent 50%)' }} />
        <div className="max-w-lg z-10 md:mr-10">
          <span className="eyebrow">Our Vision</span>
          <p className="text-white text-lg md:text-xl font-medium leading-relaxed">
            To become one of the Middle East's most trusted investment and business development companies, creating enduring value through strategic investments and transformative business partnerships.
          </p>
        </div>
      </div>

      {/* Right: Mission */}
      <div className="flex-1 bg-cream py-20 px-6 md:px-20 relative overflow-hidden flex items-center justify-start">
        {/* Decorative faint background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 70% 30%, var(--color-gold) 0%, transparent 50%)' }} />
        <div className="max-w-lg z-10 md:ml-10">
          <span className="eyebrow text-gold-dark">Our Mission</span>
          <p className="text-ink text-lg md:text-xl font-medium leading-relaxed">
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
    <footer className="bg-black text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Top CTA Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 pb-16 border-b border-white/10">
          
          <div className="lg:w-1/3">
            <Link to="/" className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 flex items-center justify-center text-gold text-3xl font-heading">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-gold">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1" />
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1" />
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1" />
                </svg>
              </div>
              <div>
                <div className="text-white font-bold tracking-[0.1em] text-2xl leading-none mb-1">SAHMORA</div>
                <div className="text-gold text-xs tracking-widest uppercase">Investment LLC</div>
              </div>
            </Link>
            <p className="text-graytext text-sm leading-relaxed max-w-sm">
              Building businesses. Creating value. Growing futures. Partnering for sustainable growth and enduring impact across the UAE & GCC.
            </p>
          </div>

          <div className="lg:w-2/3 flex flex-col lg:items-end">
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 text-left lg:text-right">
              Let's Build the Next <span className="text-gold">Growth Story.</span>
            </h2>
            <p className="text-graytext text-sm md:text-base max-w-xl text-left lg:text-right mb-8">
              Whether you're an entrepreneur seeking strategic investment, an established company planning regional expansion, or an investor looking for meaningful opportunities, Sahmora is ready to create sustainable value together.
            </p>
            <div className="flex flex-wrap gap-4 justify-start lg:justify-end">
              <Link to="/contact" className="btn-primary">
                Partner With Us <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link to="/contact" className="btn-outline">
                Contact Us <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

        {/* Footer Columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 py-12">
          
          <div>
            <h4 className="text-gold text-xs font-bold uppercase tracking-widest mb-6">Quick Links</h4>
            <div className="grid grid-cols-2 gap-y-4">
              <Link to="/" className="text-sm text-white hover:text-gold transition-colors">Home</Link>
              <Link to="/about" className="text-sm text-graytext hover:text-gold transition-colors">About Us</Link>
              <Link to="/what-we-do" className="text-sm text-graytext hover:text-gold transition-colors">What We Do</Link>
              <Link to="/industries" className="text-sm text-graytext hover:text-gold transition-colors">Industries We Serve</Link>
              <Link to="/ventures" className="text-sm text-graytext hover:text-gold transition-colors">Ventures</Link>
              <Link to="/contact" className="text-sm text-graytext hover:text-gold transition-colors">Contact Us</Link>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-gold text-xs font-bold uppercase tracking-widest mb-6">Contact Us</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3 text-sm text-graytext">
                <MapPin className="text-gold w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>DIFC Complex, WS-E.5<br />Dubai Investment Park 2<br />Dubai, United Arab Emirates</span>
              </div>
              <div className="flex flex-col gap-4 text-sm text-graytext">
                <div className="flex items-center gap-3">
                  <Phone className="text-gold w-5 h-5 flex-shrink-0" />
                  <span>+971 4 276 6331 <br/> +971 4 880 5504</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-gold w-5 h-5 flex-shrink-0" />
                  <span>info@sahmorainvestment.com</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-graytext">
          <p>© 2024 Sahmora Investment LLC. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>|</span>
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

console.log('Batch 2 home components generated.');
