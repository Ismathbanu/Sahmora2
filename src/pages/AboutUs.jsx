import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Target, Sparkles, Settings, Users, LineChart, Search, TrendingUp, Handshake, Rocket, Award, Building, Globe, Gem, ArrowRight, Network, ShieldCheck, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Assets
import aboutDubaiImg from '../assets/images/about-dubai.png';
import aboutHeroImg from '../assets/images/about-hero.png';
import aboutBottomDecor from '../assets/images/about-bottom-decor.png';

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const coreValues = [
  {
    icon: Shield,
    title: "Integrity",
    desc: "We uphold the highest standards of honesty, transparency, and ethical conduct in everything we do.",
  },
  {
    icon: Target,
    title: "Strategic Thinking",
    desc: "We think ahead, make informed decisions, and create strategies that drive long-term value.",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    desc: "We embrace new ideas and innovative approaches to create competitive advantages.",
  },
  {
    icon: Settings,
    title: "Operational Excellence",
    desc: "We are committed to excellence in execution and continuous improvement.",
  },
  {
    icon: Users,
    title: "Long-Term Partnerships",
    desc: "We build strong, trust-based partnerships that generate mutual growth.",
  },
  {
    icon: LineChart,
    title: "Sustainable Growth",
    desc: "We invest in businesses that create sustainable impact for communities and future generations.",
  },
];

const processSteps = [
  { num: 1, icon: Search, title: "Identify", desc: "We identify high-potential opportunities." },
  { num: 2, icon: TrendingUp, title: "Invest", desc: "We invest strategically and with confidence." },
  { num: 3, icon: Handshake, title: "Partner", desc: "We partner closely with teams." },
  { num: 4, icon: Rocket, title: "Grow", desc: "We accelerate growth through expert-led scaling." },
  { num: 5, icon: Award, title: "Succeed", desc: "We build sustainable market leadership." },
];

const chooseReasons = [
  { icon: Globe, title: "UAE Market Expertise", desc: "Deep understanding of the UAE and GCC markets, opportunities, and regulations." },
  { icon: Rocket, title: "Proven Business Development", desc: "Hands-on experience in building, scaling, and transforming businesses." },
  { icon: Network, title: "Strong Commercial Network", desc: "Extensive network of partners, industry leaders, and investors across the region." },
  { icon: ShieldCheck, title: "Transparent Governance", desc: "We uphold the highest standards of governance, compliance, and transparency." },
  { icon: BarChart3, title: "Long-Term Value Creation", desc: "Focused on building sustainable businesses that deliver lasting impact." },
];

/* ------------------------------------------------------------------ */
/*  ANIMATION HELPERS                                                  */
/* ------------------------------------------------------------------ */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.6, delay },
  }),
};

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Sahmora Investment LLC</title>
        <meta
          name="description"
          content="Sahmora Investment LLC is a UAE-based investment and business development company committed to identifying, investing in, and scaling high-potential businesses across the UAE and GCC."
        />
      </Helmet>

      {/* ============================================================= */}
      {/*  1. HERO BANNER                                                */}
      {/* ============================================================= */}
      <section className="bg-black relative overflow-hidden min-h-[85vh]">
        {/* Right-side hero image – positioned absolutely to fill right half */}
        <div className="absolute top-0 right-0 w-full md:w-[55%] h-full z-0">
          <img
            src={aboutHeroImg}
            alt="Luxury Modern Architecture"
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient fade from dark left into the image */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
          {/* Bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 w-full relative z-10 flex items-end min-h-[85vh] pb-20 pt-28">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
            className="max-w-[600px]"
          >
            <span className="eyebrow">About Us</span>
            <h1 className="mb-6 font-heading font-normal" style={{ lineHeight: 1.05 }}>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="block text-white text-[36px] md:text-[42px] lg:text-[48px] xl:text-[54px]"
                style={{ fontStyle: 'italic' }}
              >
                Investing Beyond
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="block text-white text-[36px] md:text-[42px] lg:text-[48px] xl:text-[54px]"
                style={{ fontStyle: 'italic' }}
              >
                Capital.
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
                Building Beyond
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
                Business.
              </motion.span>
            </h1>
            <div className="w-16 h-[2px] bg-gold mb-8" />
            <p className="text-[#A8A8A8] text-[15px] font-body font-light max-w-[480px] leading-[1.85]">
              Sahmora Investment LLC is a UAE-based investment and business
              development company committed to identifying, investing in, and
              scaling high-potential businesses across the UAE and GCC.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  2. OUR STORY                                                  */}
      {/* ============================================================= */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left – content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            custom={0}
          >
            <span className="eyebrow">Our Story</span>
            <h2 className="text-ink text-[34px] md:text-[42px] lg:text-[50px] leading-[1.1] mb-6 font-heading font-normal">
              A Vision Born in Excellence.
              <br />A Legacy Built on Trust.
            </h2>
            <div className="w-14 h-[2px] bg-gold mb-7" />
            <div className="text-[#555555] text-[14.5px] font-body font-light leading-[1.85] max-w-[480px]">
              <p>
                Sahmora was founded with a clear purpose — to be a growth partner
                for ambitious businesses and entrepreneurs. With deep market
                understanding, strong commercial networks, and a hands-on approach,
                we help businesses unlock their full potential and achieve sustainable,
                long-term success.
              </p>
            </div>
          </motion.div>

          {/* Right – image with gold offset frame */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            custom={0.2}
            className="relative w-full mt-10 md:mt-0"
          >
            {/* Gold offset border – L-shape to bottom-right */}
            <div
              className="absolute z-0 pointer-events-none border-r border-b border-gold/40"
              style={{
                top: '12px',
                left: '12px',
                right: '-12px',
                bottom: '-12px',
              }}
            />
            <div className="relative z-10 w-full overflow-hidden aspect-[16/10]">
              <img
                src={aboutDubaiImg}
                alt="Dubai Skyline"
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  3. VISION & MISSION                                           */}
      {/* ============================================================= */}
      <section className="relative w-full flex flex-col md:flex-row">
        {/* Central S icon */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
          <div className="w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] bg-cream rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(0,0,0,0.15)] border-2 border-gold/20">
            <span
              className="font-heading text-[52px] lg:text-[64px] leading-none mt-1"
              style={{
                background: 'linear-gradient(135deg, #C9A467 0%, #E8D5A8 50%, #C9A467 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              S
            </span>
          </div>
        </div>

        {/* Vision – left */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          custom={0}
          className="flex-1 bg-black py-24 md:py-32 px-6 md:px-16 lg:px-20 relative overflow-hidden flex items-center md:justify-end"
        >
          <div className="max-w-[460px] z-10 md:pr-[80px] text-left">
            <span className="eyebrow mb-6 block">Our Vision</span>
            <h3 className="text-white text-[28px] md:text-[34px] lg:text-[40px] font-heading font-normal leading-[1.15] mb-6">
              Creating Enduring Value.
              <br />
              Shaping a Better Future.
            </h3>
            <div className="w-12 h-[2px] bg-gold/40 mb-6" />
            <p className="text-white/70 text-[14.5px] font-body font-light leading-[1.85]">
              To become one of the Middle East's most trusted investment and
              business development companies, creating enduring value through
              strategic investments and transformative business partnerships.
            </p>
          </div>
        </motion.div>

        {/* Mission – right */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          custom={0.15}
          className="flex-1 bg-cream py-24 md:py-32 px-6 md:px-16 lg:px-20 relative overflow-hidden flex items-center md:justify-start"
        >
          <div className="max-w-[460px] z-10 md:pl-[80px] text-left">
            <span className="text-ink text-[11px] font-body tracking-[0.25em] font-semibold uppercase mb-6 block">
              Our Mission
            </span>
            <h3 className="text-ink text-[28px] md:text-[34px] lg:text-[40px] font-heading font-normal leading-[1.15] mb-6">
              Invest with Purpose.
              <br />
              Build with Impact.
            </h3>
            <div className="w-12 h-[2px] bg-gold/40 mb-6" />
            <p className="text-ink/70 text-[14.5px] font-body font-light leading-[1.85]">
              To identify promising businesses, invest with purpose, accelerate
              growth through operational excellence, and build sustainable
              enterprises that contribute to the economic development of the UAE
              and GCC.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ============================================================= */}
      {/*  4. CORE VALUES                                                */}
      {/* ============================================================= */}
      <section className="bg-offwhite py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
          {/* Section header */}
          <div className="flex items-center justify-center gap-6 mb-16">
            <div className="h-[1px] w-16 bg-gold/50" />
            <span className="text-ink text-[11px] font-body tracking-[0.25em] font-bold uppercase">
              Our Core Values
            </span>
            <div className="h-[1px] w-16 bg-gold/50" />
          </div>

          {/* Values grid — 6 columns on desktop */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">
            {coreValues.map((value, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={fadeUp}
                custom={idx * 0.08}
                className="flex flex-col items-center text-center group"
              >
                {/* Circular icon */}
                <div className="w-[72px] h-[72px] rounded-full border border-gold/40 flex items-center justify-center mb-5 group-hover:border-gold group-hover:bg-gold/5 transition-all duration-300">
                  <value.icon className="text-gold w-7 h-7" strokeWidth={1.5} />
                </div>
                <h4 className="text-ink font-bold text-[13px] font-body mb-2 leading-tight">
                  {value.title}
                </h4>
                <div className="w-8 h-[1px] bg-gold/30 mb-3" />
                <p className="text-graytext text-[12px] leading-[1.7] font-light font-body">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  5. OUR APPROACH                                               */}
      {/* ============================================================= */}
      <section className="bg-cream py-20 md:py-28 border-t border-gold/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          {/* Section header */}
          <div className="flex items-center gap-6 mb-14">
            <div className="h-[1px] w-10 bg-gold/50" />
            <span className="text-ink text-[11px] font-body tracking-[0.25em] font-bold uppercase">
              Our Approach
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left – headline */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              custom={0}
            >
              <h2 className="text-ink text-[36px] md:text-[44px] lg:text-[52px] leading-[1.08] font-heading font-normal mb-6">
                Hands-On. Insight-Driven.
                <br />
                Results-Oriented.
              </h2>
              <div className="w-16 h-[2px] bg-gold mb-6" />
              <p className="text-[#5A5A5A] text-[14.5px] font-body font-light leading-[1.85] max-w-[500px]">
                We combine deep market insights, financial expertise, and operational
                experience to work closely with our partners at every stage — from
                strategy and investment to growth and transformation.
              </p>
            </motion.div>

            {/* Right – 5 process steps */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeIn}
              custom={0.2}
              className="grid grid-cols-5 gap-3"
            >
              {processSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Icon circle */}
                  <div className="w-[56px] h-[56px] lg:w-[64px] lg:h-[64px] rounded-full bg-black flex items-center justify-center mb-4 group-hover:bg-ink transition-colors duration-300">
                    <step.icon className="text-gold w-5 h-5 lg:w-6 lg:h-6" strokeWidth={1.5} />
                  </div>
                  {/* Number */}
                  <span className="text-gold/60 text-[11px] font-body font-semibold mb-1">
                    {step.num}
                  </span>
                  {/* Title */}
                  <h4 className="text-ink text-[12px] font-bold font-body uppercase tracking-wide mb-1.5">
                    {step.title}
                  </h4>
                  {/* Description */}
                  <p className="text-graytext text-[11px] leading-[1.6] font-light font-body">
                    {step.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  6. WHY BUSINESSES CHOOSE SAHMORA                              */}
      {/* ============================================================= */}
      <section className="bg-black relative overflow-hidden">
        <div className="max-w-[1300px] mx-auto px-6 md:px-12 lg:px-16 pt-20 md:pt-24 pb-0 relative z-10">
          {/* Centered heading with decorative lines */}
          <div className="flex items-center justify-center gap-5 mb-16">
            <div className="h-[1px] flex-1 max-w-[100px] bg-gradient-to-r from-transparent to-gold/40" />
            <h2 className="text-white text-[15px] md:text-[17px] font-heading tracking-[0.18em] font-normal uppercase text-center">
              Why Businesses Choose Sahmora
            </h2>
            <div className="h-[1px] flex-1 max-w-[100px] bg-gradient-to-l from-transparent to-gold/40" />
          </div>

          {/* 5 columns with vertical dividers */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeIn}
            custom={0.1}
            className="grid grid-cols-2 md:grid-cols-5 gap-0 pb-16 md:pb-20"
          >
            {chooseReasons.map((reason, idx) => (
              <div
                key={idx}
                className={`flex flex-col items-center text-center px-4 lg:px-6 py-6 md:py-0 group ${
                  idx > 0 ? 'md:border-l md:border-gold/15' : ''
                }`}
              >
                {/* Circular icon container */}
                <div className="w-[60px] h-[60px] rounded-full border border-gold/40 flex items-center justify-center mb-5 group-hover:border-gold group-hover:bg-gold/5 transition-all duration-300">
                  <reason.icon className="text-gold w-7 h-7" strokeWidth={1.3} />
                </div>
                {/* Title */}
                <h4 className="text-white text-[13px] font-bold font-body mb-3 leading-tight">
                  {reason.title}
                </h4>
                {/* Description */}
                <p className="text-[#9A9A9A] text-[12px] leading-[1.7] font-light font-body max-w-[180px] mx-auto">
                  {reason.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom decorative curved image */}
        <div className="relative w-full h-[120px] md:h-[160px] overflow-hidden">
          <img
            src={aboutBottomDecor}
            alt=""
            className="w-full h-full object-cover object-top opacity-40"
          />
          {/* Top gradient blend into black */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-transparent" />
        </div>
      </section>

      {/* ============================================================= */}
      {/*  7. CTA                                                        */}
      {/* ============================================================= */}
      <section className="bg-black py-24 md:py-28 relative overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1546412414-e1885259563a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center" />

        <div className="max-w-[900px] mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="text-4xl md:text-5xl lg:text-[56px] text-white font-heading font-normal mb-4 leading-[1.1]">
              Let's Build the Next
              <br />
              <span className="text-gold">Success Story</span> Together.
            </h2>
            <p className="text-white/50 text-[14.5px] font-body font-light leading-[1.8] max-w-[520px] mx-auto mb-10">
              We are always open to new opportunities, partnerships, and
              conversations that can create meaningful impact.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="btn-primary flex items-center"
              >
                Partner With Us
              </Link>
              <Link
                to="/contact"
                className="btn-outline flex items-center"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
