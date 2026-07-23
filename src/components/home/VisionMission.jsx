import React from 'react';
import { motion } from 'framer-motion';
import logoImg from '../../assets/images/sahmora-logo.png';

const VisionMission = () => {
  return (
    <section className="relative w-full flex flex-col md:flex-row min-h-[320px] md:min-h-[360px]">
      
      {/* Center "S" Badge — positioned absolutely at the boundary */}
      <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
        <div className="w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] bg-[#F5F0E7] rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(0,0,0,0.15)] border-2 border-[#C9A467]/20">
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

      {/* Left: Our Vision — Dark background */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="flex-1 bg-[#0D0D0D] relative overflow-hidden flex items-center"
      >
        {/* Dubai skyline silhouette at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[120px] md:h-[160px] pointer-events-none opacity-[0.08]">
          <svg viewBox="0 0 1000 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="xMidYMax meet">
            {/* Dubai Skyline Silhouette */}
            <path d="M0 200V180H20V160H35V140H45V120H55V100H60V80H65V60H68V40H72V60H75V80H80V70H85V50H88V30H90V20H92V30H94V50H97V70H102V80H110V90H120V100H130V110H135V100H140V90H145V80H148V60H150V40H152V20H154V10H155V8H156V10H157V20H159V40H161V60H164V80H167V90H175V100H180V90H185V80H188V60H190V40H192V30H194V20H195V15H196V12H197V15H198V20H200V30H202V40H205V60H208V80H215V100H220V110H230V120H240V130H260V140H270V135H280V130H285V120H290V115H295V120H300V130H310V140H330V150H350V145H360V140H370V145H380V150H400V155H420V150H440V145H450V140H460V135H470V130H475V120H480V110H485V100H490V110H495V120H500V130H510V140H530V150H550V155H570V160H600V165H630V160H650V155H670V150H690V145H700V140H720V135H740V130H750V125H760V120H770V115H780V120H790V130H800V140H820V150H840V155H860V160H880V170H900V175H920V170H940V165H960V170H980V180H1000V200Z" fill="#C9A467" />
          </svg>
        </div>

        {/* Subtle ambient glow */}
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(ellipse, #C9A467, transparent)' }}
        />

        {/* Content */}
        <div className="relative z-10 py-16 md:py-20 px-8 md:px-16 lg:px-20 md:pr-[90px] lg:pr-[110px] max-w-[600px] ml-auto">
          <h3
            className="font-heading text-[20px] md:text-[24px] lg:text-[28px] mb-5 tracking-[0.05em]"
            style={{
              background: 'linear-gradient(90deg, #C9A467, #E8D5A8, #C9A467)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            OUR VISION
          </h3>
          <p className="text-white/80 text-[13.5px] md:text-[14px] font-body font-light leading-[1.85]">
            To become one of the Middle East's most trusted investment and business development companies, creating enduring value through strategic investments and transformative business partnerships.
          </p>
        </div>
      </motion.div>

      {/* Right: Our Mission — Warm cream background */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex-1 bg-[#F5F0E7] relative overflow-hidden flex items-center"
      >
        {/* Architectural background image — faded */}
        <div 
          className="absolute inset-0 opacity-[0.08] bg-cover bg-center pointer-events-none"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')`,
            mixBlendMode: 'multiply',
          }}
        />

        {/* Gold tint overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#C9A467]/[0.03] to-transparent pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 py-16 md:py-20 px-8 md:px-16 lg:px-20 md:pl-[90px] lg:pl-[110px] max-w-[600px]">
          <h3 className="font-heading text-[#1A1A1A] text-[20px] md:text-[24px] lg:text-[28px] mb-5 tracking-[0.05em]">
            OUR MISSION
          </h3>
          <p className="text-[#3A3A3A] text-[13.5px] md:text-[14px] font-body font-light leading-[1.85]">
            To identify promising businesses, invest with purpose, accelerate growth through operational excellence, and build sustainable enterprises that contribute to the economic development of the UAE and GCC.
          </p>
        </div>
      </motion.div>

      {/* Mobile center badge */}
      <div className="md:hidden flex justify-center -mt-6 -mb-6 relative z-30">
        <div className="w-[80px] h-[80px] bg-[#F5F0E7] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.1)] border-2 border-[#C9A467]/20">
          <span
            className="font-heading text-[40px] leading-none mt-1"
            style={{
              background: 'linear-gradient(135deg, #C9A467, #E8D5A8, #C9A467)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            S
          </span>
        </div>
      </div>

    </section>
  );
};

export default VisionMission;
