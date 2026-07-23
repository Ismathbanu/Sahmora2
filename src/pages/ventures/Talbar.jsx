import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Award, Compass, ShieldCheck, Heart, Building2, Diamond, Shield, Crown, MapPin, TrendingUp, Users, ShoppingBag, Globe, LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Assets
import talbarHeroImg from '../../assets/images/talbar-hero.png';
import talbarAboutImg from '../../assets/images/talbar-about.png';
import talbarUaeImg from '../../assets/images/talbar-uae.png';

const collections = [
  { title: "Gold Jewellery", desc: "Crafted in 21K and 18K solid yellow and rose gold.", img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
  { title: "Diamond Jewellery", desc: "VS and VVS clarity certified brilliant diamonds.", img: "https://images.unsplash.com/photo-1599643478524-fb66f70a0066?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
  { title: "Bridal Collection", desc: "Timeless diamond settings for the modern GCC bride.", img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
  { title: "Luxury Watches", desc: "Collaborative watch designs encrusted with natural gems.", img: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
  { title: "Exclusive Collections", desc: "Limited edition masterpieces designed by local artisans.", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
];

const features = [
  { icon: ShieldCheck, title: "Certified Jewellery", desc: "All precious metals and diamonds are certified by international geological labs." },
  { icon: Award, title: "Premium Quality", desc: "Expert selection process ensures only the highest clarity and color grading." },
  { icon: Compass, title: "Elegant Designs", desc: "A blend of traditional Arab heritage styles and contemporary European minimalism." },
  { icon: Heart, title: "Exceptional Service", desc: "Private showroom visits and bespoke customization by master jewellers." },
];

const Talbar = () => {
  return (
    <>
      <Helmet>
        <title>Talbar | Luxury Jewellery Venture</title>
      </Helmet>

      {/* 1. Hero Banner */}
      <section className="bg-black relative overflow-hidden min-h-[90vh]">
        <div className="absolute top-0 right-0 w-full md:w-[60%] h-full z-0">
          <img
            src={talbarHeroImg}
            alt="Talbar Heritage"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 w-full relative z-10 flex items-center min-h-[90vh] pt-28 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[580px]"
          >
            <span className="eyebrow mb-6 block text-[#C9A467]">TALBAR GOLD & DIAMOND</span>
            <h1 className="mb-6 font-heading font-normal" style={{ lineHeight: 1.05 }}>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="block text-white text-[36px] md:text-[42px] lg:text-[48px] xl:text-[54px]"
                style={{ fontStyle: 'italic' }}
              >
                A Heritage Jewellery
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="block text-white text-[36px] md:text-[42px] lg:text-[48px] xl:text-[54px]"
                style={{ fontStyle: 'italic' }}
              >
                Brand Entering
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
                the UAE.
              </motion.span>
            </h1>
            
            <div className="flex items-center gap-4 mb-8 max-w-[300px]">
              <div className="h-[1px] flex-1 bg-gold/40" />
              <div className="w-2 h-2 rotate-45 border border-gold/40" />
              <div className="h-[1px] flex-1 bg-gold/40" />
            </div>

            <p className="text-white/80 text-[15px] font-body font-light max-w-[420px] leading-[1.75] mb-12">
              From the trusted jewellery traditions of Tamil Nadu
              to one of the world's most influential luxury markets.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <Link to="#explore" className="bg-gold text-black font-semibold text-[12px] tracking-[0.15em] uppercase px-8 py-4 hover:bg-[#B08D4F] transition-colors duration-300 flex items-center justify-center">
                Explore Talbar <ArrowRight className="ml-3 w-4 h-4" />
              </Link>
              <Link to="/contact" className="border border-gold text-gold font-semibold text-[12px] tracking-[0.15em] uppercase px-8 py-4 hover:bg-gold/10 transition-colors duration-300 flex items-center justify-center">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. About Talbar */}
      <section className="bg-[#F5F0E7] py-20 md:py-32 border-t border-[#C9A467]/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative h-[600px] w-full overflow-hidden shadow-lg">
            <img 
              src={talbarAboutImg} 
              alt="Talbar Heritage Jewellery" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-[#C9A467] text-[11px] font-body tracking-[0.25em] uppercase font-bold mb-6 block">
              About Talbar
            </span>
            <h2 className="text-ink text-[38px] md:text-[46px] lg:text-[54px] leading-[1.15] mb-8 font-heading font-normal">
              Heritage Meets<br />Modern Luxury
            </h2>
            <div className="text-[#555555] text-[14.5px] font-body font-light space-y-6 leading-[1.8] mb-14 max-w-[540px]">
              <p>
                Talbar Gold & Diamond is a heritage jewellery brand rooted in
                decades of craftsmanship from Muttupettai, Tamil Nadu.
              </p>
              <p>
                Backed by Sahmora Investment LLC, Talbar is expanding into
                the UAE to deliver exceptional gold and diamond jewellery to
                discerning customers across the GCC.
              </p>
            </div>

            {/* Icons row */}
            <div className="flex items-center gap-6 md:gap-10 border-t border-gold/20 pt-8 mt-4">
              <div className="flex flex-col items-center gap-3">
                <Building2 className="text-gold w-8 h-8" strokeWidth={1.2} />
                <span className="text-ink text-[10px] font-bold tracking-[0.15em] uppercase">Heritage</span>
              </div>
              <div className="w-[1px] h-10 bg-gold/20" />
              <div className="flex flex-col items-center gap-3">
                <Diamond className="text-gold w-8 h-8" strokeWidth={1.2} />
                <span className="text-ink text-[10px] font-bold tracking-[0.15em] uppercase">Craftsmanship</span>
              </div>
              <div className="w-[1px] h-10 bg-gold/20" />
              <div className="flex flex-col items-center gap-3">
                <ShieldCheck className="text-gold w-8 h-8" strokeWidth={1.2} />
                <span className="text-ink text-[10px] font-bold tracking-[0.15em] uppercase">Trust</span>
              </div>
              <div className="w-[1px] h-10 bg-gold/20" />
              <div className="flex flex-col items-center gap-3">
                <Crown className="text-gold w-8 h-8" strokeWidth={1.2} />
                <span className="text-ink text-[10px] font-bold tracking-[0.15em] uppercase">Luxury</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Vision 2030 */}
      <section className="bg-[#0f0f0f] py-20 md:py-28 relative">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-8 h-[1px] bg-gold" />
              <h2 className="text-white text-3xl font-heading font-normal tracking-wider uppercase">VISION 2030</h2>
              <div className="w-8 h-[1px] bg-gold" />
            </div>
            <h3 className="text-gold font-body text-[15px] font-semibold mb-2">
              Building One of the UAE's Most Trusted Jewellery Brands
            </h3>
            <p className="text-white/70 font-body text-[13px] max-w-2xl mx-auto">
              From a heritage jewellery house in Tamil Nadu to a premium retail network across the UAE.
            </p>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-[110px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-50 z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {/* Box 1 */}
              <div className="bg-[#141414] border border-gold/20 rounded-lg p-8 flex flex-col items-center text-center hover:border-gold/50 transition-colors">
                <Building2 className="text-gold w-10 h-10 mb-6" strokeWidth={1.2} />
                <span className="text-gold font-bold text-lg mb-2 tracking-widest">2024</span>
                <h4 className="text-white font-heading text-xl mb-4 leading-tight">Heritage<br />Foundation</h4>
                <p className="text-white/60 text-[12px] leading-relaxed">
                  Talbar strengthens its legacy in India through trusted craftsmanship and customer relationships.
                </p>
              </div>
              
              {/* Box 2 */}
              <div className="bg-[#141414] border border-gold/20 rounded-lg p-8 flex flex-col items-center text-center hover:border-gold/50 transition-colors">
                <MapPin className="text-gold w-10 h-10 mb-6" strokeWidth={1.2} />
                <span className="text-gold font-bold text-lg mb-2 tracking-widest">2026</span>
                <h4 className="text-white font-heading text-xl mb-4 leading-tight">UAE<br />Launch</h4>
                <p className="text-white/60 text-[12px] leading-relaxed">
                  Introducing Talbar's first premium jewellery showroom in the UAE with Sahmora Investment LLC.
                </p>
              </div>

              {/* Box 3 */}
              <div className="bg-[#141414] border border-gold/20 rounded-lg p-8 flex flex-col items-center text-center hover:border-gold/50 transition-colors">
                <TrendingUp className="text-gold w-10 h-10 mb-6" strokeWidth={1.2} />
                <span className="text-gold font-bold text-lg mb-2 tracking-widest">2028</span>
                <h4 className="text-white font-heading text-xl mb-4 leading-tight">Regional<br />Growth</h4>
                <p className="text-white/60 text-[12px] leading-relaxed">
                  Expanding presence across key Emirates while building customer trust and brand recognition.
                </p>
              </div>

              {/* Box 4 */}
              <div className="bg-[#141414] border border-gold/20 rounded-lg p-8 flex flex-col items-center text-center hover:border-gold/50 transition-colors">
                <Crown className="text-gold w-10 h-10 mb-6" strokeWidth={1.2} />
                <span className="text-gold font-bold text-lg mb-2 tracking-widest">2030</span>
                <h4 className="text-white font-heading text-xl mb-4 leading-tight">Market<br />Leadership</h4>
                <p className="text-white/60 text-[12px] leading-relaxed">
                  Becoming one of the UAE's most trusted Indian jewellery brands with a strong regional footprint.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center border-t border-gold/20 pt-10">
            <div className="w-3 h-3 bg-gold rotate-45 mx-auto mb-6" />
            <p className="text-white/80 font-body text-[14px] leading-relaxed max-w-3xl mx-auto">
              Talbar's Vision 2030 is to establish a <span className="text-gold font-medium">trusted</span> luxury jewellery brand that<br className="hidden md:block" />
              blends Indian heritage, exceptional <span className="text-gold font-medium">craftsmanship</span>, and modern retail excellence across the UAE.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Why UAE? */}
      <section className="bg-[#F8F6F0] border-t-4 border-gold">
        <div className="grid lg:grid-cols-2">
          {/* Left: Image */}
          <div className="h-[400px] lg:h-[700px] relative">
            <img 
              src={talbarUaeImg} 
              alt="Dubai Skyline" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          
          {/* Right: Content */}
          <div className="p-10 md:p-16 lg:p-20 flex flex-col justify-center">
            <span className="text-gold text-[12px] font-bold tracking-[0.2em] uppercase mb-4 block">WHY UAE?</span>
            <h2 className="text-ink text-4xl md:text-5xl font-heading font-normal mb-16 leading-[1.2]">
              The Right Market.<br />
              <span className="text-gold">The Right Time.</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8">
              {/* Feature 1 */}
              <div className="flex flex-col items-center text-center">
                <Users className="text-gold w-10 h-10 mb-4" strokeWidth={1} />
                <h4 className="text-ink font-bold text-[13px] mb-2">Growing Luxury<br />Market</h4>
                <p className="text-[#666] text-[11px] leading-relaxed max-w-[150px]">
                  Rising demand for premium gold & diamond jewellery.
                </p>
              </div>
              
              {/* Feature 2 */}
              <div className="flex flex-col items-center text-center">
                <Diamond className="text-gold w-10 h-10 mb-4" strokeWidth={1} />
                <h4 className="text-ink font-bold text-[13px] mb-2">Strong Indian<br />Community</h4>
                <p className="text-[#666] text-[11px] leading-relaxed max-w-[150px]">
                  A large, aspirational and well-established base.
                </p>
              </div>
              
              {/* Feature 3 */}
              <div className="flex flex-col items-center text-center">
                <ShoppingBag className="text-gold w-10 h-10 mb-4" strokeWidth={1} />
                <h4 className="text-ink font-bold text-[13px] mb-2">High Jewellery<br />Demand</h4>
                <p className="text-[#666] text-[11px] leading-relaxed max-w-[150px]">
                  Increasing preference for quality & trusted brands.
                </p>
              </div>
              
              {/* Feature 4 */}
              <div className="flex flex-col items-center text-center">
                <Building2 className="text-gold w-10 h-10 mb-4" strokeWidth={1} />
                <h4 className="text-ink font-bold text-[13px] mb-2">Premium Retail<br />Infrastructure</h4>
                <p className="text-[#666] text-[11px] leading-relaxed max-w-[150px]">
                  World-class malls and retail ecosystem.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="flex flex-col items-center text-center">
                <Globe className="text-gold w-10 h-10 mb-4" strokeWidth={1} />
                <h4 className="text-ink font-bold text-[13px] mb-2">Gateway to<br />GCC</h4>
                <p className="text-[#666] text-[11px] leading-relaxed max-w-[150px]">
                  Strategic location to expand across the GCC region.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="flex flex-col items-center text-center">
                <LineChart className="text-gold w-10 h-10 mb-4" strokeWidth={1} />
                <h4 className="text-ink font-bold text-[13px] mb-2">Long-Term<br />Growth</h4>
                <p className="text-[#666] text-[11px] leading-relaxed max-w-[150px]">
                  Favourable economic outlook and stability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Signature Collections */}
      <section className="bg-[#0f0f0f] py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80')] opacity-5 bg-cover bg-center" />
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <div className="flex items-center justify-center gap-6 mb-16">
            <div className="h-[1px] w-16 md:w-32 bg-gold/30" />
            <div className="w-2 h-2 bg-gold rotate-45 hidden md:block" />
            <h2 className="text-gold text-2xl font-heading font-normal tracking-wide uppercase">SIGNATURE COLLECTIONS</h2>
            <div className="w-2 h-2 bg-gold rotate-45 hidden md:block" />
            <div className="h-[1px] w-16 md:w-32 bg-gold/30" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Collection 1 */}
            <div className="bg-[#181818] rounded-md overflow-hidden border border-white/5 hover:border-gold/30 transition-colors group cursor-pointer flex flex-col h-[340px]">
              <div className="h-[220px] overflow-hidden flex-shrink-0 relative p-1">
                <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Gold Jewellery" className="w-full h-full object-cover rounded-[4px] group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <div className="p-5 flex items-end justify-between flex-grow">
                <div>
                  <h4 className="text-white font-heading text-[17px] mb-2 tracking-wide">Gold Jewellery</h4>
                  <p className="text-white/60 text-[12px] font-light max-w-[150px] leading-relaxed">Timeless designs crafted in pure gold.</p>
                </div>
                <div className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center group-hover:border-gold transition-colors flex-shrink-0">
                  <ArrowRight className="w-3.5 h-3.5 text-white/60 group-hover:text-gold" />
                </div>
              </div>
            </div>

            {/* Collection 2 */}
            <div className="bg-[#181818] rounded-md overflow-hidden border border-white/5 hover:border-gold/30 transition-colors group cursor-pointer flex flex-col h-[340px]">
              <div className="h-[220px] overflow-hidden flex-shrink-0 relative p-1">
                <img src="https://images.unsplash.com/photo-1547996160-81dfa63595aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Diamond Collection" className="w-full h-full object-cover rounded-[4px] group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <div className="p-5 flex items-end justify-between flex-grow">
                <div>
                  <h4 className="text-white font-heading text-[17px] mb-2 tracking-wide">Diamond Collection</h4>
                  <p className="text-white/60 text-[12px] font-light max-w-[150px] leading-relaxed">Brilliance that celebrates every moment.</p>
                </div>
                <div className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center group-hover:border-gold transition-colors flex-shrink-0">
                  <ArrowRight className="w-3.5 h-3.5 text-white/60 group-hover:text-gold" />
                </div>
              </div>
            </div>

            {/* Collection 3 */}
            <div className="bg-[#181818] rounded-md overflow-hidden border border-white/5 hover:border-gold/30 transition-colors group cursor-pointer flex flex-col h-[340px]">
              <div className="h-[220px] overflow-hidden flex-shrink-0 relative p-1">
                <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Bridal Jewellery" className="w-full h-full object-cover rounded-[4px] group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <div className="p-5 flex items-end justify-between flex-grow">
                <div>
                  <h4 className="text-white font-heading text-[17px] mb-2 tracking-wide">Bridal Jewellery</h4>
                  <p className="text-white/60 text-[12px] font-light max-w-[150px] leading-relaxed">For your most precious celebrations.</p>
                </div>
                <div className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center group-hover:border-gold transition-colors flex-shrink-0">
                  <ArrowRight className="w-3.5 h-3.5 text-white/60 group-hover:text-gold" />
                </div>
              </div>
            </div>

            {/* Collection 4 */}
            <div className="bg-[#181818] rounded-md overflow-hidden border border-white/5 hover:border-gold/30 transition-colors group cursor-pointer flex flex-col h-[340px]">
              <div className="h-[220px] overflow-hidden flex-shrink-0 relative p-1">
                <img src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Everyday Elegance" className="w-full h-full object-cover rounded-[4px] group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <div className="p-5 flex items-end justify-between flex-grow">
                <div>
                  <h4 className="text-white font-heading text-[17px] mb-2 tracking-wide">Everyday Elegance</h4>
                  <p className="text-white/60 text-[12px] font-light max-w-[150px] leading-relaxed">Beautiful jewellery for everyday you.</p>
                </div>
                <div className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center group-hover:border-gold transition-colors flex-shrink-0">
                  <ArrowRight className="w-3.5 h-3.5 text-white/60 group-hover:text-gold" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Talbar;
