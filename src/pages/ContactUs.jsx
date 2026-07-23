import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { MapPin, Phone, Mail, Clock, Target, Users, Globe, TrendingUp } from 'lucide-react';

const contactInfo = [
  { icon: MapPin, title: "Office Address", detail: "DIFC Complex, WS-E.5, Dubai Investment Park 2, Dubai, UAE" },
  { icon: Phone, title: "Phone Support", detail: "+971 4 276 6331 / +971 4 880 5504" },
  { icon: Mail, title: "Email Inquiry", detail: "info@sahmorainvestment.com" },
  { icon: Clock, title: "Business Hours", detail: "Monday – Friday: 9:00 AM – 6:00 PM (GST)" },
];

const connectReasons = [
  { icon: Target, title: "Strategic Investments", desc: "For growth-stage ventures looking to secure active corporate capital." },
  { icon: Users, title: "Business Partnerships", desc: "For established operations seeking local distribution pathways." },
  { icon: Globe, title: "Market Expansion", desc: "For international brands planning regional GCC localization." },
  { icon: TrendingUp, title: "Business Development", desc: "For founders seeking digital, legal, and operational restructuring." },
];

const ContactUs = () => {
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful } } = useForm();
  
  const onSubmit = (data) => {
    console.log("Contact Form Submitted Data:", data);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Sahmora Investment LLC</title>
      </Helmet>

      {/* 1. Hero Banner */}
      <section className="bg-[#0D0D0D] pt-[140px] pb-20 md:py-32 relative overflow-hidden flex items-center min-h-[50vh]">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full relative z-10 text-center">
          <span className="text-[#C9A467] text-[11px] font-body tracking-[0.25em] uppercase font-semibold mb-6 block">Get In Touch</span>
          <h1 className="mb-6 font-heading font-normal" style={{ lineHeight: 1.05 }}>
            <span
              className="block text-white text-[36px] md:text-[42px] lg:text-[48px] xl:text-[54px]"
              style={{ fontStyle: 'italic' }}
            >
              Let's Start a
            </span>
            <span
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
              Conversation.
            </span>
          </h1>
          <p className="text-[#8A8A8A] text-base font-light max-w-xl mx-auto leading-relaxed">
            Reach out to our investment board or logistical coordination desk. We stand ready to discuss strategic partnerships.
          </p>
        </div>
      </section>

      {/* 2. Contact Information Cards */}
      <section className="bg-white py-16 md:py-24 border-t border-[#C9A467]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid md:grid-cols-4 gap-8">
            {contactInfo.map((info, idx) => (
              <div key={idx} className="bg-[#FAFAF7] p-8 border border-black/5 rounded-[4px] flex flex-col gap-4">
                <info.icon className="text-[#C9A467] w-8 h-8" strokeWidth={1} />
                <h4 className="text-[#1A1A1A] font-bold text-[14px] uppercase tracking-wider">{info.title}</h4>
                <p className="text-[#8A8A8A] text-[13.5px] leading-relaxed font-light">{info.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Contact Form & Why Connect Split */}
      <section className="bg-[#FAFAF7] py-20 md:py-32 border-t border-[#C9A467]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left: Contact Form */}
          <div className="bg-white p-8 md:p-12 border border-black/5 rounded-[4px] shadow-[0_4px_25px_rgba(0,0,0,0.02)]">
            <h3 className="text-[#1A1A1A] text-2xl font-heading font-normal mb-8">Send a Message</h3>
            
            {isSubmitSuccessful ? (
              <div className="bg-[#F5F0E7] border border-[#C9A467]/30 text-[#1A1A1A] p-6 rounded-[4px] font-body text-sm font-light leading-relaxed">
                Thank you. Your strategic inquiry has been received. Our investment coordination team will reach out shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#1A1A1A] text-xs font-bold uppercase tracking-wider mb-2">Name *</label>
                    <input 
                      type="text" 
                      {...register("name", { required: true })}
                      className="w-full bg-[#FAFAF7] border border-black/10 focus:border-[#C9A467] outline-none text-[#1A1A1A] text-sm p-4 rounded-[2px] transition-colors"
                    />
                    {errors.name && <span className="text-red-500 text-[11px] mt-1 block">Name is required.</span>}
                  </div>
                  <div>
                    <label className="block text-[#1A1A1A] text-xs font-bold uppercase tracking-wider mb-2">Company Name</label>
                    <input 
                      type="text" 
                      {...register("company")}
                      className="w-full bg-[#FAFAF7] border border-black/10 focus:border-[#C9A467] outline-none text-[#1A1A1A] text-sm p-4 rounded-[2px] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#1A1A1A] text-xs font-bold uppercase tracking-wider mb-2">Email *</label>
                    <input 
                      type="email" 
                      {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                      className="w-full bg-[#FAFAF7] border border-black/10 focus:border-[#C9A467] outline-none text-[#1A1A1A] text-sm p-4 rounded-[2px] transition-colors"
                    />
                    {errors.email && <span className="text-red-500 text-[11px] mt-1 block">Valid email is required.</span>}
                  </div>
                  <div>
                    <label className="block text-[#1A1A1A] text-xs font-bold uppercase tracking-wider mb-2">Phone</label>
                    <input 
                      type="text" 
                      {...register("phone")}
                      className="w-full bg-[#FAFAF7] border border-black/10 focus:border-[#C9A467] outline-none text-[#1A1A1A] text-sm p-4 rounded-[2px] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#1A1A1A] text-xs font-bold uppercase tracking-wider mb-2">Subject *</label>
                  <input 
                    type="text" 
                    {...register("subject", { required: true })}
                    className="w-full bg-[#FAFAF7] border border-black/10 focus:border-[#C9A467] outline-none text-[#1A1A1A] text-sm p-4 rounded-[2px] transition-colors"
                  />
                  {errors.subject && <span className="text-red-500 text-[11px] mt-1 block">Subject is required.</span>}
                </div>

                <div>
                  <label className="block text-[#1A1A1A] text-xs font-bold uppercase tracking-wider mb-2">Message *</label>
                  <textarea 
                    rows="5"
                    {...register("message", { required: true })}
                    className="w-full bg-[#FAFAF7] border border-black/10 focus:border-[#C9A467] outline-none text-[#1A1A1A] text-sm p-4 rounded-[2px] transition-colors resize-none"
                  ></textarea>
                  {errors.message && <span className="text-red-500 text-[11px] mt-1 block">Message is required.</span>}
                </div>

                <button 
                  type="submit"
                  className="w-full bg-black text-white font-semibold text-[12px] tracking-[0.15em] uppercase py-4 hover:bg-[#1A1A1A] transition-colors duration-300"
                >
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>

          {/* Right: Why Connect With Sahmora */}
          <div className="flex flex-col justify-center">
            <span className="text-[#C9A467] text-[11px] font-body tracking-[0.25em] uppercase font-semibold mb-6 block">Why Partner With Us</span>
            <h2 className="text-[#1A1A1A] text-4xl md:text-5xl leading-[1.1] mb-12 font-heading font-normal">
              Expanding GCC Horizons.
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {connectReasons.map((reason, idx) => (
                <div key={idx} className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <reason.icon className="text-[#C9A467] w-5 h-5 flex-shrink-0" strokeWidth={1.5} />
                    <h4 className="text-[#1A1A1A] font-bold text-[14.5px]">{reason.title}</h4>
                  </div>
                  <p className="text-[#8A8A8A] text-[13px] leading-relaxed font-light">{reason.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. Embedded Map Placeholder */}
      <section className="bg-white h-[450px] relative overflow-hidden border-t border-[#C9A467]/10">
        <iframe 
          title="Sahmora Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.0069359367123!2d55.143899476239615!3d25.033878438294625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f72db7738f731%3A0xe54e60bfbbbf61df!2sDubai%20Investment%20Park%202!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae" 
          className="absolute inset-0 w-full h-full border-0 grayscale opacity-80"
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      {/* 5. CTA */}
      <section className="bg-[#0D0D0D] py-28 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-heading font-normal mb-8 leading-tight tracking-tight">
            We're Ready to Build the <span className="italic text-[#C9A467]">Future Together.</span>
          </h2>
          <a href="mailto:info@sahmorainvestment.com" className="bg-[#C9A467] text-black font-semibold text-[12px] tracking-[0.15em] uppercase px-10 py-4 hover:bg-[#B08D4F] transition-colors duration-300">
            Send Email Directly
          </a>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
