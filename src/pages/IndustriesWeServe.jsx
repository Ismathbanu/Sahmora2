import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  ArrowRight, Sparkles, Shield, Compass, TrendingUp, Award, Layers, Globe, 
  Cpu, LineChart, Target, HeartHandshake, Gem, ShoppingCart, ShoppingBag, 
  Truck, ConciergeBell, Lightbulb, Quote, Rocket, Search, Users, ClipboardList, 
  Settings, ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Assets
import whatWeDoHeroImg from '../assets/images/whatwedo-hero.png';
import indLuxury from '../assets/images/ind-luxury.png';
import indFmcg from '../assets/images/ind-fmcg.png';
import indRetail from '../assets/images/ind-retail.png';
import indDist from '../assets/images/ind-dist.png';
import indHosp from '../assets/images/ind-hosp.png';
import indEmerge from '../assets/images/ind-emerge.png';
import chessKingImg from '../assets/images/chess-king.png';

const industries = [
  { 
    title: "Luxury & Jewellery", 
    desc: "Investing in premium retail brands and exceptional customer experiences.", 
    img: indLuxury,
    icon: Gem,
    bullets: ["Premium Retail", "Brand Expansion", "Customer Experience"]
  },
  { 
    title: "FMCG", 
    desc: "Backing consumer-driven brands with strong distribution and operational efficiency.", 
    img: indFmcg,
    icon: ShoppingCart,
    bullets: ["Distribution", "Supply Chain", "Market Penetration"]
  },
  { 
    title: "Retail", 
    desc: "Building and scaling retail businesses through strategic locations and excellence.", 
    img: indRetail,
    icon: ShoppingBag,
    bullets: ["Retail Operations", "Expansion Strategy", "Consumer Experience"]
  },
  { 
    title: "Distribution", 
    desc: "Strengthening supply chains and distribution networks that connect products to markets efficiently.", 
    img: indDist,
    icon: Truck,
    bullets: ["Warehousing", "Distribution Network", "Operational Efficiency"]
  },
  { 
    title: "Hospitality & HORECA", 
    desc: "Creating memorable hospitality experiences and elevating food service excellence.", 
    img: indHosp,
    icon: ConciergeBell,
    bullets: ["Hospitality", "Food Service", "Guest Experience"]
  },
  { 
    title: "Emerging Businesses", 
    desc: "Investing in innovative and technology-driven businesses with high growth potential.", 
    img: indEmerge,
    icon: Lightbulb,
    bullets: ["Innovation", "Future Markets", "High Growth Potential"]
  },
];

const reasons = [
  { icon: LineChart, label: "Growing\nDemand" },
  { icon: Award, label: "Market\nLeadership" },
  { icon: Shield, label: "Operational\nStrength" },
  { icon: Lightbulb, label: "Innovation" },
  { icon: Layers, label: "Scalable Business\nModels" },
  { icon: Rocket, label: "Long-Term Value\nCreation" },
];

const criteria = [
  { step: "01", icon: Search, title: "Market\nOpportunity", desc: "Strong market potential and attractive growth outlook." },
  { step: "02", icon: Users, title: "Leadership\nStrength", desc: "Experienced management with a proven track record." },
  { step: "03", icon: ClipboardList, title: "Business\nModel", desc: "Sustainable and differentiated business model." },
  { step: "04", icon: Settings, title: "Operational\nExcellence", desc: "Efficient operations and strong execution capabilities." },
  { step: "05", icon: TrendingUp, title: "Scalability", desc: "Ability to scale and capture a larger share of the market." },
  { step: "06", icon: ShieldCheck, title: "Long-Term\nSustainability", desc: "Resilient business with enduring long-term value." },
];

/* Animation helpers */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const IndustriesWeServe = () => {
  return (
    <>
      <Helmet>
        <title>Industries We Serve | Sahmora Investment LLC</title>
      </Helmet>
      
      {/* ============================================================= */}
      {/*  1. HERO BANNER                                                */}
      {/* ============================================================= */}
      <section className="bg-black relative overflow-hidden min-h-[88vh]">
        <div className="absolute top-0 right-0 w-full md:w-[55%] h-full z-0">
          <img
            src={whatWeDoHeroImg}
            alt="Dubai Skyline with Golden Arch"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 w-full relative z-10 flex items-end min-h-[88vh] pb-20 pt-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[640px]"
          >
            <span className="eyebrow">Industries We Serve</span>
            <h1 className="mb-6 font-heading font-normal" style={{ lineHeight: 1.05 }}>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="block text-white text-[36px] md:text-[42px] lg:text-[48px] xl:text-[54px]"
                style={{ fontStyle: 'italic' }}
              >
                Investing Across
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="block text-white text-[36px] md:text-[42px] lg:text-[48px] xl:text-[54px]"
                style={{ fontStyle: 'italic' }}
              >
                Industries.
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="block text-[36px] md:text-[42px] lg:text-[48px] xl:text-[54px]"
                style={{
                  fontStyle: 'italic',
                  lineHeight: 1.05,
                  background: 'linear-gradient(135deg, #C9A467 0%, #E8D5A8 40%, #C9A467 60%, #A88B4A 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Creating Sustainable
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.65 }}
                className="block text-[36px] md:text-[42px] lg:text-[48px] xl:text-[54px]"
                style={{
                  fontStyle: 'italic',
                  lineHeight: 1.05,
                  background: 'linear-gradient(135deg, #C9A467 0%, #E8D5A8 40%, #C9A467 60%, #A88B4A 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Growth.
              </motion.span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-white/70 text-[14.5px] font-body font-light max-w-[480px] leading-[1.75] mb-10"
            >
              Sahmora Investment LLC partners with businesses across diverse
              industries, identifying opportunities with strong market potential,
              operational excellence, and long-term scalability.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/contact" className="btn-primary flex items-center gap-2">
                Partner With Sahmora <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="btn-outline flex items-center gap-2">
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  2. OUR INVESTMENT APPROACH                                    */}
      {/* ============================================================= */}
      <section className="bg-offwhite py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-20 items-start mb-14">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              custom={0}
            >
              <span className="eyebrow mb-6 block">Our Investment Approach</span>
              <h2 className="text-ink text-[36px] md:text-[44px] lg:text-[52px] leading-[1.1] font-heading font-normal">
                Industries That
                <br />Build Tomorrow
              </h2>
              <div className="w-14 h-[2px] bg-gold mt-6" />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              custom={0.15}
              className="flex flex-col"
            >
              <p className="text-[#555555] text-[14.5px] font-body font-light leading-[1.85] max-w-[580px] mb-8 pt-2 md:pt-10">
                We focus on industries with strong fundamentals, attractive growth
                outlook, and the ability to create long-term value. Our sector-focused
                approach combines deep market insights, operational involvement,
                and strategic partnerships to build resilient businesses.
              </p>
              
              <div className="relative border border-gold/30 bg-white/50 p-8 rounded-sm overflow-hidden">
                <div 
                  className="absolute inset-0 opacity-[0.03] bg-no-repeat bg-right-bottom bg-contain"
                  style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ctext x=\'50%25\' y=\'50%25\' font-size=\'100\' fill=\'%23000\' opacity=\'0.1\' text-anchor=\'middle\' dominant-baseline=\'middle\'%3E🌍%3C/text%3E%3C/svg%3E")' }}
                />
                <Quote className="text-gold w-6 h-6 mb-4 fill-gold relative z-10" />
                <p className="text-ink text-[18px] md:text-[20px] font-heading font-normal leading-[1.6] relative z-10 max-w-[480px]">
                  We invest in industries with enduring demand,
                  resilient business models, and the potential to
                  create sustainable value across the UAE and GCC.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  3. FEATURED INDUSTRIES                                        */}
      {/* ============================================================= */}
      <section className="bg-offwhite pb-20 md:pb-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex items-center justify-center gap-5 mb-16">
            <div className="h-[1px] flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-gold/40" />
            <span className="text-ink text-[11px] font-body tracking-[0.25em] font-bold uppercase">
              Featured Industries
            </span>
            <div className="h-[1px] flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-gold/40" />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {industries.map((ind, idx) => {
              const num = String(idx + 1).padStart(2, '0');
              return (
                <motion.div 
                  key={idx} 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  variants={fadeUp}
                  custom={idx * 0.1}
                  className="bg-[#F5F0E7] border border-black/5 hover:border-gold/30 rounded-sm overflow-hidden group transition-all duration-300 shadow-sm flex flex-col"
                >
                  <div className="h-[200px] relative overflow-hidden">
                    <img 
                      src={ind.img} 
                      alt={ind.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" 
                    />
                  </div>
                  
                  <div className="p-6 md:p-8 flex-1 flex gap-5">
                    <div className="flex flex-col items-center gap-4 pt-1 w-[45px] shrink-0">
                      <span className="text-gold font-heading text-[28px] font-light leading-none">
                        {num}
                      </span>
                      <div className="w-[45px] h-[45px] bg-charcoal rounded-sm flex items-center justify-center">
                        <ind.icon className="text-gold w-5 h-5" strokeWidth={1.5} />
                      </div>
                    </div>
                    
                    <div className="flex-1 flex flex-col">
                      <h4 className="text-ink font-heading font-normal text-[22px] mb-3">
                        {ind.title}
                      </h4>
                      <p className="text-graytext text-[12.5px] leading-[1.65] font-light mb-5">
                        {ind.desc}
                      </p>
                      
                      <ul className="mb-6 space-y-2.5 flex-1">
                        {ind.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5 text-[12px] font-light text-graytext">
                            <span className="w-1 h-1 rounded-full bg-gold shrink-0 mt-[6px]" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                      
                      <Link to="#" className="text-gold text-[12px] font-semibold font-body tracking-wide flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-300">
                        Explore Sector <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  4. WHY THESE INDUSTRIES? (Dark Section)                       */}
      {/* ============================================================= */}
      <section className="bg-black py-20 relative overflow-hidden">
        
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
          <h2 className="text-white text-center text-3xl font-heading font-normal mb-16 tracking-wide uppercase">
            Why These Industries?
          </h2>

          <div className="relative">
            {/* Horizontal dotted connector line */}
            <div className="hidden md:block absolute top-[40px] left-[8%] right-[8%] h-[1px] border-t-[2px] border-dotted border-gold/40 z-0" />
            
            <div className="grid grid-cols-2 md:grid-cols-6 gap-y-12 gap-x-4 relative z-10">
              {reasons.map((reason, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className="w-[80px] h-[80px] bg-black border border-gold/50 rounded-full flex items-center justify-center mb-5 text-gold relative z-10">
                    {/* Add small dots on the left/right of the circle if needed, but keeping it simple */}
                    <reason.icon className="w-7 h-7" strokeWidth={1.2} />
                  </div>
                  <h4 className="text-[#F5F0E7] font-body text-[13px] leading-tight whitespace-pre-line font-medium max-w-[120px]">
                    {reason.label}
                  </h4>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-16 text-center max-w-2xl mx-auto">
            <p className="text-[#cccccc] text-[13.5px] leading-[1.8] font-light">
              Every sector we invest in is selected for its resilience, scalability, and ability to generate long-term sustainable value across the UAE and GCC.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  5. INVESTMENT CRITERIA (Cream Section)                        */}
      {/* ============================================================= */}
      <section className="bg-offwhite py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex items-center justify-center gap-5 mb-20">
            <div className="h-[1px] flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-gold/40" />
            <span className="text-ink text-[12px] font-body tracking-[0.25em] font-bold uppercase">
              Our Investment Criteria
            </span>
            <div className="h-[1px] flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-gold/40" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-4 relative">
            {/* Horizontal dotted connector line */}
            <div className="hidden md:block absolute top-[50px] left-[8%] right-[8%] h-[1px] border-t-[2px] border-dotted border-gold/40 z-0" />
            
            {criteria.map((item, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center px-2">
                
                {/* Large Circle with icon & tiny number badge */}
                <div className="relative mb-6">
                  <div className="w-[100px] h-[100px] rounded-full border border-gold/30 bg-[#F5F0E7] flex items-center justify-center relative z-10 shadow-sm">
                    <item.icon className="text-ink w-8 h-8" strokeWidth={1.2} />
                  </div>
                  {/* Small gold badge for number */}
                  <div className="absolute -top-1 left-0 w-[24px] h-[24px] rounded-full bg-gold text-white flex items-center justify-center text-[10px] font-bold z-20">
                    {item.step}
                  </div>
                </div>

                {/* Title */}
                <h4 className="text-ink font-bold text-[14px] leading-tight mb-3 whitespace-pre-line">
                  {item.title}
                </h4>
                
                {/* Description */}
                <p className="text-graytext text-[11.5px] leading-[1.6] font-light max-w-[180px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
};

export default IndustriesWeServe;
