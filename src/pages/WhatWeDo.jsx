import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  ArrowRight, Crown, Coins, Handshake, Store, Map, Truck, Megaphone, RefreshCw, 
  Search, ClipboardList, Settings, TrendingUp, Trophy, ChevronRight, 
  Binoculars, ClipboardCheck, Target, BarChart2, UserCircle2, Network 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Assets
import whatWeDoHeroImg from '../assets/images/whatwedo-hero.png';
import approachOfficeImg from '../assets/images/approach-office.png';
import strategicInvestmentsImg from '../assets/images/strategic-investments.png';
import growthCapitalImg from '../assets/images/growth-capital.png';
import businessAcquisitionsImg from '../assets/images/business-acquisitions.png';
import retailExpansionImg from '../assets/images/retail-expansion.png';
import marketEntryImg from '../assets/images/market-entry.png';
import distributionDevImg from '../assets/images/distribution-dev.png';
import brandScalingImg from '../assets/images/brand-scaling.png';
import businessTransformImg from '../assets/images/business-transform.png';

const services = [
  { icon: Crown, title: "Strategic\nInvestments", desc: "Investing with conviction in businesses with strong potential and scalable models.", img: strategicInvestmentsImg },
  { icon: Coins, title: "Growth\nCapital", desc: "Providing growth capital to accelerate expansion, strengthen capabilities, and unlock value.", img: growthCapitalImg },
  { icon: Handshake, title: "Business\nAcquisitions", desc: "Identifying and acquiring businesses that align with our strategy for long-term growth.", img: businessAcquisitionsImg },
  { icon: Store, title: "Retail\nExpansion", desc: "Driving retail excellence through strategic expansion and operational optimization.", img: retailExpansionImg },
  { icon: Map, title: "Market Entry\nStrategy", desc: "Helping businesses enter new markets with the right strategy, insights, and partnerships.", img: marketEntryImg },
  { icon: Truck, title: "Distribution\nDevelopment", desc: "Building efficient distribution networks that enhance reach, reliability, and profitability.", img: distributionDevImg },
  { icon: Megaphone, title: "Brand\nScaling", desc: "Strengthening brands and scaling their value through strategy, positioning, and reach.", img: brandScalingImg },
  { icon: RefreshCw, title: "Business\nTransformation", desc: "Transforming businesses through operational excellence, technology, and innovation.", img: businessTransformImg },
];

const timelineSteps = [
  { icon: Search, label: "Identify\nOpportunities" },
  { icon: ClipboardList, label: "Evaluate\nPotential" },
  { icon: Handshake, label: "Strategic\nInvestment" },
  { icon: Settings, label: "Business\nTransformation" },
  { icon: TrendingUp, label: "Scale\nOperations" },
  { icon: Trophy, label: "Lead\nMarkets" },
];

const processBlocks = [
  { number: "01", icon: Binoculars, title: "Identify\nOpportunities", desc: "We research markets and identify businesses with strong potential and alignment." },
  { number: "02", icon: ClipboardCheck, title: "Evaluate\nPotential", desc: "We conduct in-depth evaluation to understand business fundamentals, risks, and opportunities." },
  { number: "03", icon: Target, title: "Strategic\nInvestment", desc: "We invest with a long-term perspective and a clear value creation roadmap." },
  { number: "04", icon: Settings, title: "Business\nTransformation", desc: "We work closely with management to enhance operations, systems, and capabilities." },
  { number: "05", icon: BarChart2, title: "Market\nExpansion", desc: "We support businesses to scale, expand market presence and increase profitability." },
  { number: "06", icon: TrendingUp, title: "Long-Term\nGrowth", desc: "We build enduring businesses that create lasting value for all stakeholders." },
];

const advantages = [
  { icon: UserCircle2, title: "Business Expertise", desc: "Deep sector knowledge and investment experience across key industries." },
  { icon: Network, title: "Commercial Network", desc: "Strong relationships and networks across the UAE, GCC, and global markets." },
  { icon: Settings, title: "Operational Excellence", desc: "Hands-on involvement to improve performance and drive efficiency." },
  { icon: TrendingUp, title: "Long-Term Partnership", desc: "We grow with our partners, aligned for sustainable success." },
];

/* Animation helpers */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const WhatWeDo = () => {
  return (
    <>
      <Helmet>
        <title>What We Do | Sahmora Investment LLC</title>
        <meta name="description" content="Sahmora Investment LLC provides strategic capital, operational excellence, and sustainable growth across the UAE and GCC." />
      </Helmet>

      {/* ============================================================= */}
      {/*  1. HERO BANNER                                                */}
      {/* ============================================================= */}
      <section className="bg-black relative overflow-hidden min-h-[88vh]">
        {/* Right-side hero image */}
        <div className="absolute top-0 right-0 w-full md:w-[55%] h-full z-0">
          <img
            src={whatWeDoHeroImg}
            alt="Dubai Skyline with Golden Arch"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 w-full relative z-10 flex items-end min-h-[88vh] pb-20 pt-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[640px]"
          >
            <span className="eyebrow">What We Do</span>
            <h1 className="mb-6 font-heading font-normal" style={{ lineHeight: 1.05 }}>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="block text-white text-[36px] md:text-[42px] lg:text-[48px] xl:text-[54px]"
                style={{ fontStyle: 'italic' }}
              >
                Strategic Capital.
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="block text-white text-[36px] md:text-[42px] lg:text-[48px] xl:text-[54px]"
                style={{ fontStyle: 'italic' }}
              >
                Operational Excellence.
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
                Sustainable Growth.
              </motion.span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="text-white/70 text-[14.5px] font-body font-light max-w-[480px] leading-[1.75] mb-10"
            >
              We partner with ambitious businesses, providing strategic
              investments, operational expertise, commercial guidance, and
              scalable growth frameworks that transform potential into
              long-term success.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary flex items-center gap-2">
                Partner With Sahmora <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="btn-outline flex items-center gap-2">
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  2. OUR APPROACH                                               */}
      {/* ============================================================= */}
      <section className="bg-offwhite py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          {/* Top row: heading left + description right */}
          <div className="grid md:grid-cols-2 gap-10 lg:gap-20 items-start mb-10">
            {/* Left – heading */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              custom={0}
            >
              <h2 className="text-ink text-[36px] md:text-[44px] lg:text-[52px] leading-[1.1] font-heading font-normal">
                Our Approach
              </h2>
              <div className="w-14 h-[2px] bg-gold mt-5" />
            </motion.div>

            {/* Right – description */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              custom={0.15}
              className="flex items-start"
            >
              <p className="text-[#555555] text-[15px] font-body font-light leading-[1.85] max-w-[520px]">
                We go beyond capital. Our approach combines deep market insights,
                strategic thinking, and hands-on operational involvement to build
                stronger businesses and create lasting value.
              </p>
            </motion.div>
          </div>

          {/* Blockquote with gold left border */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            custom={0.25}
            className="border-l-[3px] border-gold pl-8 py-2 max-w-[700px]"
          >
            <p className="text-ink text-[22px] md:text-[26px] lg:text-[30px] font-heading font-normal leading-[1.35]" style={{ fontStyle: 'italic' }}>
              Every investment is backed by strategy,
              <br className="hidden md:block" /> operational involvement, and long-term partnership.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  3. WHAT WE DO – SERVICE GRID                                  */}
      {/* ============================================================= */}
      <section className="bg-offwhite pb-20 md:pb-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          {/* Centered title with decorative lines */}
          <div className="flex items-center justify-center gap-5 mb-14">
            <div className="h-[1px] flex-1 max-w-[100px] bg-gradient-to-r from-transparent to-gold/40" />
            <span className="text-ink text-[11px] font-body tracking-[0.25em] font-bold uppercase">
              Our Services
            </span>
            <div className="h-[1px] flex-1 max-w-[100px] bg-gradient-to-l from-transparent to-gold/40" />
          </div>

          {/* 4x2 grid of dark service cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((svc, idx) => {
              const num = String(idx + 1).padStart(2, '0');
              return (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  variants={fadeUp}
                  custom={idx * 0.06}
                  className="bg-black overflow-hidden group cursor-pointer"
                >
                  {/* Image area with gold number overlay */}
                  <div className="h-[155px] relative overflow-hidden">
                    <img
                      src={svc.img}
                      alt={svc.title.replace('\n', ' ')}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                    {/* Gold number */}
                    <span className="absolute bottom-3 left-4 text-gold font-heading text-[28px] font-light leading-none">
                      {num}
                    </span>
                  </div>

                  {/* Text content */}
                  <div className="p-5 pt-4">
                    <h4 className="text-white font-heading font-bold text-[18px] mb-2.5 leading-[1.2] whitespace-pre-line">
                      {svc.title}
                    </h4>
                    <p className="text-[#8A8A8A] text-[12.5px] leading-[1.7] font-light font-body mb-5">
                      {svc.desc}
                    </p>
                    <span className="text-gold text-[12px] font-semibold font-body tracking-wide flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-300">
                      Learn More <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  4. HOW WE CREATE VALUE (Black section)                        */}
      {/* ============================================================= */}
      <section className="bg-black py-20 relative overflow-hidden">
        {/* Subtle background texture/glow */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/30 via-black to-black" />
        
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <div className="flex items-center justify-center gap-6 mb-16">
            <span className="text-gold text-[11px] font-body tracking-[0.25em] font-bold uppercase">How We Create Value</span>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-2 lg:gap-4">
            {timelineSteps.map((step, idx) => (
              <React.Fragment key={idx}>
                {/* Step Item */}
                <div className="flex flex-col items-center text-center max-w-[140px]">
                  <div className="w-[60px] h-[60px] rounded-full border border-gold/40 flex items-center justify-center mb-4 bg-black shadow-[0_0_15px_rgba(201,164,103,0.15)]">
                    <step.icon className="text-gold w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <span className="text-white text-[13px] font-body font-light leading-tight whitespace-pre-line">
                    {step.label}
                  </span>
                </div>

                {/* Arrow connector (skip for last item) */}
                {idx < timelineSteps.length - 1 && (
                  <div className="hidden md:block text-gold/50">
                    <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                )}
                {/* Mobile down arrow */}
                {idx < timelineSteps.length - 1 && (
                  <div className="block md:hidden text-gold/50 my-2">
                    <ArrowRight className="w-4 h-4 rotate-90" strokeWidth={1.5} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  5. OUR INVESTMENT PROCESS (Cream section)                     */}
      {/* ============================================================= */}
      <section className="bg-offwhite py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex items-center justify-center gap-5 mb-20">
            <div className="h-[1px] flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-gold/40" />
            <span className="text-ink text-[12px] font-body tracking-[0.2em] font-bold uppercase">
              Our Investment Process
            </span>
            <div className="h-[1px] flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-gold/40" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-4 relative">
            {/* Desktop horizontal connector line */}
            <div className="hidden md:block absolute top-[45px] left-[8%] right-[8%] h-[1px] bg-gold/30 z-0" />
            
            {processBlocks.map((block, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center px-2">
                {/* Number */}
                <span className="text-gold font-heading text-[36px] font-light mb-4 bg-offwhite px-4 block">
                  {block.number}
                </span>
                
                {/* Icon */}
                <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center mb-5 bg-offwhite">
                  <block.icon className="text-gold w-8 h-8" strokeWidth={1.2} />
                </div>
                
                {/* Arrow (right) overlapping the line */}
                {idx < processBlocks.length - 1 && (
                  <div className="hidden md:block absolute top-[41px] -right-[6px] text-gold/60">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                )}

                {/* Title */}
                <h4 className="text-ink font-bold text-[14px] leading-tight mb-3 whitespace-pre-line font-body">
                  {block.title}
                </h4>
                
                {/* Description */}
                <p className="text-[#666666] text-[12px] leading-[1.6] font-light">
                  {block.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  6. WHY OUR APPROACH WORKS (Split layout)                      */}
      {/* ============================================================= */}
      <section className="bg-white">
        <div className="flex flex-col lg:flex-row">
          {/* Left: Image (takes up 50% width on desktop) */}
          <div className="w-full lg:w-1/2 h-[400px] lg:h-auto min-h-[500px] relative">
            <img
              src={approachOfficeImg}
              alt="Luxury Corporate Office in Dubai"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right: Content (takes up 50% width on desktop) */}
          <div className="w-full lg:w-1/2 py-20 lg:py-24 px-6 md:px-12 lg:px-16 xl:px-24 flex flex-col justify-center">
            <span className="eyebrow mb-4 block">Why Our Approach Works</span>
            
            <h2 className="text-ink text-[36px] md:text-[44px] lg:text-[48px] leading-[1.1] mb-6 font-heading font-normal">
              Experience. Insight. Execution.
            </h2>
            
            <p className="text-[#555555] text-[14.5px] font-body font-light leading-[1.8] mb-12 max-w-[500px]">
              Our unique combination of investment expertise, commercial
              networks, and operational capabilities enables us to create
              meaningful impact and long-term value.
            </p>
            
            {/* 2x2 Grid for Advantages */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
              {advantages.map((adv, idx) => (
                <div key={idx} className="flex gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0 mt-1">
                    <adv.icon className="text-gold w-6 h-6" strokeWidth={1.5} />
                  </div>
                  {/* Text */}
                  <div>
                    <h4 className="text-ink font-bold text-[14px] mb-2">{adv.title}</h4>
                    <p className="text-[#666666] text-[12.5px] leading-[1.65] font-light">{adv.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  7. CTA                                                        */}
      {/* ============================================================= */}
      <section className="bg-black py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-heading font-normal mb-8 leading-tight">
            Let's Build Businesses <br className="hidden md:block" /> That <span className="text-gold">Last.</span>
          </h2>
          <Link to="/contact" className="btn-primary flex items-center">
            Partner With Us <ArrowRight className="ml-3 w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default WhatWeDo;
