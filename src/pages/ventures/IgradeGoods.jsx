import React, { useEffect, useRef } from 'react';
import svcFmcgImg from '../../assets/images/svc-fmcg.png';
import svcHorecaImg from '../../assets/images/svc-horeca.png';
import svcWarehousingImg from '../../assets/images/svc-warehousing.png';
import svcLogisticsImg from '../../assets/images/svc-logistics.png';
import svcDistributionImg from '../../assets/images/svc-distribution.png';
import svcSupplyChainImg from '../../assets/images/svc-supply-chain.png';
import igradeHeroTruck from '../../assets/images/igrade-hero-truck.png';
import igradeWarehouse from '../../assets/images/igrade-warehouse.png';
import igradeOperations from '../../assets/images/igrade-operations.png';
import igradeCtaTrucks from '../../assets/images/igrade-cta-trucks.png';
import { Helmet } from 'react-helmet-async';
import { Shield, Sparkles, Navigation, Layers, CheckCircle2, ChevronRight, ShoppingCart, ConciergeBell, Package, ArrowRight, Warehouse, Truck, Network, ClipboardCheck, ClipboardList, UserCheck, ShieldCheck, Clock, Globe, ThumbsUp, Users, Handshake, BarChart, MapPin, Gauge } from 'lucide-react';

/* ── Animated Network Overlay (golden connected dots) ── */
const NetworkOverlay = () => {
  const canvasRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener('resize', resize);

    // Generate fixed node positions (concentrated in upper-right quadrant)
    const W = () => canvas.offsetWidth;
    const H = () => canvas.offsetHeight;

    const nodeCount = 18;
    const nodes = Array.from({ length: nodeCount }, (_, i) => {
      // Spread nodes with bias toward the upper-right
      const x = 0.25 + Math.random() * 0.75;
      const y = Math.random() * 0.85;
      return {
        baseX: x,
        baseY: y,
        radius: 2.5 + Math.random() * 3,
        phase: Math.random() * Math.PI * 2,
        speed: 0.3 + Math.random() * 0.5,
        ampX: 0.005 + Math.random() * 0.012,
        ampY: 0.005 + Math.random() * 0.012,
        pulse: Math.random() * Math.PI * 2,
      };
    });

    // Pre-calculate edges (connect nearby pairs)
    const edges = [];
    const maxDist = 0.32;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].baseX - nodes[j].baseX;
        const dy = nodes[i].baseY - nodes[j].baseY;
        if (Math.sqrt(dx * dx + dy * dy) < maxDist) {
          edges.push([i, j]);
        }
      }
    }

    let t = 0;
    const draw = () => {
      const w = W();
      const h = H();
      ctx.clearRect(0, 0, w, h);
      t += 0.008;

      // Current positions
      const positions = nodes.map(n => ({
        x: (n.baseX + Math.sin(t * n.speed + n.phase) * n.ampX) * w,
        y: (n.baseY + Math.cos(t * n.speed + n.phase) * n.ampY) * h,
        radius: n.radius,
        glow: 0.5 + 0.5 * Math.sin(t * 1.5 + n.pulse),
      }));

      // Draw edges
      edges.forEach(([i, j]) => {
        const a = positions[i];
        const b = positions[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxPx = maxDist * w;
        const opacity = Math.max(0, 1 - dist / maxPx) * 0.4;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = `rgba(201,164,103,${opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Draw nodes
      positions.forEach(p => {
        // Outer glow
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 4);
        grad.addColorStop(0, `rgba(201,164,103,${0.35 * p.glow})`);
        grad.addColorStop(1, 'rgba(201,164,103,0)');
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 4, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,164,103,${0.7 + 0.3 * p.glow})`;
        ctx.fill();

        // Inner bright center
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 0.45, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(232,213,168,${0.8 * p.glow})`;
        ctx.fill();
      });

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-10"
    />
  );
};

const services = [
  { 
    title: "FMCG Distribution", 
    desc: "Comprehensive distribution of quality FMCG products across diverse categories.", 
    img: svcFmcgImg,
    icon: ShoppingCart,
    bullets: ["Leading Global Brands", "Wide Product Range", "Market Expertise"]
  },
  { 
    title: "HORECA Supply", 
    desc: "Specialized supply for hotels, restaurants, cafés and institutional kitchens.", 
    img: svcHorecaImg, 
    icon: ConciergeBell,
    bullets: ["Quality Assured", "Bulk Supply", "On-time Delivery"]
  },
  { 
    title: "Warehousing", 
    desc: "Modern warehousing facilities with advanced inventory management systems.", 
    img: svcWarehousingImg, 
    icon: Warehouse,
    bullets: ["Secure Storage", "Inventory Control", "Temperature Management"]
  },
  { 
    title: "Logistics", 
    desc: "Efficient logistics solutions ensuring smooth transportation and timely delivery.", 
    img: svcLogisticsImg, 
    icon: Truck,
    bullets: ["Fleet Management", "Route Optimization", "Real-time Tracking"]
  },
  { 
    title: "Distribution", 
    desc: "Extensive distribution network ensuring products reach every business on time.", 
    img: svcDistributionImg, 
    icon: Package,
    bullets: ["Wide Network", "Rapid Distribution", "Business Flexibility"]
  },
  { 
    title: "Supply Chain Management", 
    desc: "Integrated supply chain solutions to improve efficiency and drive growth.", 
    img: svcSupplyChainImg, 
    icon: Network,
    bullets: ["Demand Planning", "Process Optimization", "End-to-End Visibility"]
  }
];

const networkNodes = [
  { label: "Warehousing", desc: "Modern facilities with secure & efficient storage", icon: Warehouse },
  { label: "Inventory Management", desc: "Real-time inventory tracking for accuracy & control", icon: ClipboardCheck },
  { label: "Order Fulfillment", desc: "Fast & accurate order processing", icon: ClipboardList },
  { label: "Transportation", desc: "Reliable transport with optimized routes", icon: Truck },
  { label: "Distribution Network", desc: "Strong distribution channels across multiple sectors", icon: Network },
  { label: "Customer Delivery", desc: "On-time delivery ensuring customer satisfaction", icon: UserCheck }
];

const processSteps = [
  { num: "01", title: "Order Received", desc: "We receive your orders and understand your requirements.", img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
  { num: "02", title: "Inventory Check", desc: "Real-time stock verification for accurate availability.", img: "https://images.unsplash.com/photo-1565891741441-64926e441838?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
  { num: "03", title: "Storage & Handling", desc: "Safe storage with proper handling and quality assurance.", img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
  { num: "04", title: "Distribution", desc: "Efficient distribution through our optimized network.", img: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
  { num: "05", title: "Delivery", desc: "On-time delivery with real-time tracking and updates.", img: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
  { num: "06", title: "Business Success", desc: "Building long-term partnerships that drive continuous growth.", img: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" }
];

const whyChooseValues = [
  { title: "Reliable Supply", desc: "Consistent supply you can depend on.", icon: ShieldCheck },
  { title: "Timely Delivery", desc: "On-time delivery every time.", icon: Clock },
  { title: "Wide Network", desc: "Extensive distribution network.", icon: Globe },
  { title: "Quality Assured", desc: "Commitment to quality and safety.", icon: ThumbsUp },
  { title: "Experienced Team", desc: "Skilled professionals at your service.", icon: Users },
  { title: "Strong Partnerships", desc: "Building long-term business relationships.", icon: Handshake }
];

const operationalStats = [
  { title: "Inventory Management", icon: ClipboardCheck },
  { title: "Demand Planning", icon: BarChart },
  { title: "Route Optimization", icon: MapPin },
  { title: "Performance Monitoring", icon: Gauge }
];

const IgradeGoods = () => {
  return (
    <>
      <Helmet>
        <title>Igrade Goods LLC | Smart Corporate Logistics</title>
      </Helmet>

      {/* 1. Hero Banner */}
      <section className="bg-[#0B0B0B] relative flex items-center min-h-[90vh] overflow-hidden">
        <div className="grid lg:grid-cols-2 w-full h-full min-h-[90vh]">
          {/* Left Content */}
          <div className="flex flex-col justify-center px-6 md:px-16 lg:px-24 py-24 lg:py-0 z-10">
            <span className="text-[#C9A467] text-[12px] font-bold tracking-[0.2em] uppercase mb-6 block">
              DISTRIBUTION THAT DRIVES BUSINESS
            </span>
            <h1 className="mb-6 font-heading font-normal" style={{ lineHeight: 1.05 }}>
              <span
                className="block text-white text-[36px] md:text-[42px] lg:text-[48px] xl:text-[54px]"
                style={{ fontStyle: 'italic' }}
              >
                Powering
              </span>
              <span
                className="block text-white text-[36px] md:text-[42px] lg:text-[48px] xl:text-[54px]"
                style={{ fontStyle: 'italic' }}
              >
                Distribution.
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
                Delivering Growth.
              </span>
            </h1>
            <p className="text-white/80 text-[15px] font-light max-w-xl leading-relaxed mb-10">
              Igrade Goods LLC is a leading FMCG and HORECA distribution company delivering efficient supply chain solutions, reliable product distribution, and operational excellence.<br /><br />
              We move your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="#partner" className="bg-[#C9A467] text-black font-semibold text-[13px] tracking-[0.15em] uppercase px-8 py-4 hover:bg-[#B08D4F] transition-colors duration-300 flex items-center justify-center gap-2">
                PARTNER WITH IGRADE <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/contact" className="border border-[#C9A467] text-white font-semibold text-[13px] tracking-[0.15em] uppercase px-8 py-4 hover:bg-[#C9A467]/10 transition-colors duration-300 flex items-center justify-center gap-2">
                CONTACT US <ArrowRight className="text-[#C9A467] w-4 h-4" />
              </a>
            </div>
          </div>
          
          {/* Right Image + Network Overlay */}
          <div className="relative h-full min-h-[400px] lg:min-h-full hidden lg:block">
            <img 
              src={igradeHeroTruck}
              alt="Igrade Goods LLC Logistics Truck" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Dark vignette over the image so the network glows pop */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0B0B0B]/70 via-transparent to-[#0B0B0B]/30 pointer-events-none" />
            {/* Animated golden network nodes */}
            <NetworkOverlay />
            {/* Left edge blend */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0B0B0B] to-transparent z-20" />
            {/* Bottom edge blend */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0B0B0B] to-transparent z-20" />
          </div>
        </div>
      </section>

      {/* 2. About Igrade */}
      <section className="bg-[#F8F6F0] py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className="relative h-[500px] lg:h-[600px] w-full overflow-hidden rounded-lg shadow-2xl group">
            <img 
              src={igradeWarehouse}
              alt="Igrade Warehouse Interior" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Warm overlay at the bottom for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-[#C9A467] text-[12px] font-bold tracking-[0.2em] uppercase mb-4 block">
              ABOUT IGRADE
            </span>
            <h2 className="text-[#1A1A1A] text-4xl md:text-[44px] lg:text-[50px] leading-[1.15] mb-8 font-heading font-normal">
              Distribution Excellence.<br />
              <span className="text-[#C9A467]">Delivered Every Day.</span>
            </h2>
            <p className="text-[#4A4A4A] text-[15px] font-body font-light leading-relaxed mb-12">
              Igrade Goods LLC specializes in the distribution of FMCG and HORECA products, backed by a strong infrastructure, experienced team, and a commitment to service excellence.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="flex flex-col">
                <ShoppingCart className="text-[#C9A467] w-8 h-8 mb-4" strokeWidth={1.5} />
                <h4 className="text-[#1A1A1A] font-bold text-[14px] mb-2">FMCG Distribution</h4>
                <p className="text-[#666] text-[12px] leading-relaxed">
                  Wide range of fast-moving consumer goods from trusted global brands.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col md:border-l md:border-[#1A1A1A]/10 md:pl-8">
                <ConciergeBell className="text-[#C9A467] w-8 h-8 mb-4" strokeWidth={1.5} />
                <h4 className="text-[#1A1A1A] font-bold text-[14px] mb-2">HORECA Supply</h4>
                <p className="text-[#666] text-[12px] leading-relaxed">
                  Dedicated supply solutions for hotels, restaurants, cafés and catering.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col md:border-l md:border-[#1A1A1A]/10 md:pl-8">
                <Package className="text-[#C9A467] w-8 h-8 mb-4" strokeWidth={1.5} />
                <h4 className="text-[#1A1A1A] font-bold text-[14px] mb-2">Supply Chain Solutions</h4>
                <p className="text-[#666] text-[12px] leading-relaxed">
                  End-to-end supply chain management ensuring efficiency and reliability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Services */}
      <section id="services" className="bg-[#F8F6F0] py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          {/* Section Header with gold diamond accent */}
          <div className="flex flex-col items-center mb-16">
            <div className="flex items-center justify-center gap-6 mb-3">
              <div className="h-[1px] w-16 md:w-24 bg-[#C9A467]/60" />
              <span className="text-[#1A1A1A] text-[13px] font-bold tracking-[0.2em] uppercase font-heading">Our Services</span>
              <div className="h-[1px] w-16 md:w-24 bg-[#C9A467]/60" />
            </div>
            {/* Gold diamond accent */}
            <div className="w-2.5 h-2.5 bg-[#C9A467] rotate-45 mt-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((svc, idx) => {
              const Icon = svc.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#FAFAF7] border border-[#E0D5C0]/60 rounded-lg overflow-visible relative shadow-sm group hover:border-[#C9A467] hover:shadow-md transition-all duration-300"
                >
                  {/* Card Image */}
                  <div className="h-52 w-full overflow-hidden rounded-t-lg">
                    <img
                      src={svc.img}
                      alt={svc.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Icon Circle — overlapping image/content boundary */}
                  <div className="absolute top-52 -translate-y-1/2 left-6 w-12 h-12 rounded-full bg-[#C9A467] flex items-center justify-center border-[3px] border-[#FAFAF7] z-10 shadow transition-transform duration-300 group-hover:scale-110">
                    <Icon className="text-white w-5 h-5" strokeWidth={2} />
                  </div>

                  {/* Card Content */}
                  <div className="px-6 pb-6 pt-9">
                    <h4 className="text-[#1A1A1A] font-bold text-[16px] mb-2 font-heading">
                      {svc.title}
                    </h4>
                    <p className="text-[#4A4A4A] text-[12.5px] leading-relaxed mb-5 min-h-[42px]">
                      {svc.desc}
                    </p>

                    {/* Bullet points in 2-column grid */}
                    <ul className="grid grid-cols-2 gap-y-2.5 gap-x-3 text-[11.5px] text-[#1A1A1A] mb-5 font-medium">
                      {svc.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-[#C9A467] rounded-full flex-shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    {/* Learn More link */}
                    <a
                      href="#services"
                      className="text-[#C9A467] font-bold text-[13px] flex items-center gap-2 hover:text-[#B08D4F] transition-colors w-fit group/link"
                    >
                      Learn More{' '}
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Distribution Network */}
      <section className="bg-[#0B0B0B] py-20 md:py-32 relative border-t border-[#C9A467]/20">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="flex items-center justify-center gap-6 mb-20">
            <div className="h-[1px] w-16 md:w-24 bg-[#C9A467]/60" />
            <span className="text-white text-[14px] font-bold tracking-[0.15em] uppercase font-heading">Our Distribution Network</span>
            <div className="h-[1px] w-16 md:w-24 bg-[#C9A467]/60" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8 lg:gap-x-12 relative">
            {/* Horizontal connector lines for desktop */}
            <div className="hidden md:block absolute top-[25%] left-[10%] right-[10%] h-[1px] border-t border-dashed border-[#C9A467]/40 z-0" />
            <div className="hidden md:block absolute top-[75%] left-[10%] right-[10%] h-[1px] border-t border-dashed border-[#C9A467]/40 z-0" />
            
            {networkNodes.map((node, idx) => (
              <div key={idx} className="relative z-10 flex items-center bg-[#0B0B0B] border border-[#C9A467]/30 p-6 rounded-sm hover:border-[#C9A467] transition-colors gap-6 group">
                <div className="flex-shrink-0">
                   <node.icon className="w-10 h-10 text-[#C9A467]" strokeWidth={1.2} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-[14px] mb-2 font-heading tracking-wide">{node.label}</h4>
                  <p className="text-[#8A8A8A] text-[12px] leading-relaxed font-light">{node.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our Process */}
      <section className="bg-[#F8F6F0] py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="flex items-center justify-center gap-6 mb-20">
            <div className="h-[1px] w-16 md:w-24 bg-[#C9A467]/60" />
            <span className="text-[#1A1A1A] text-[14px] font-bold tracking-[0.15em] uppercase font-heading">Our Process</span>
            <div className="h-[1px] w-16 md:w-24 bg-[#C9A467]/60" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
            {processSteps.map((step, idx) => (
              <div key={idx} className="flex flex-col group relative">
                <div className="relative h-32 md:h-40 w-full mb-6 overflow-hidden rounded-sm">
                  <img src={step.img} alt={step.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute bottom-0 left-0 bg-[#C9A467] text-white font-heading text-lg px-4 py-2 font-bold">
                    {step.num}
                  </div>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-[#1A1A1A] font-bold text-[13px] font-heading pr-2">{step.title}</h4>
                  {idx < 5 && <ChevronRight className="w-4 h-4 text-[#C9A467] hidden lg:block flex-shrink-0" strokeWidth={2} />}
                </div>
                <p className="text-[#666666] text-[12px] leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Why Choose Igrade */}
      <section className="bg-[#0B0B0B] py-24 relative overflow-hidden border-t border-[#C9A467]/20">
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://images.unsplash.com/photo-1586528116311-ad8ed7c66a4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center" />
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
          <div className="flex items-center justify-center gap-6 mb-24">
            <div className="h-[1px] w-16 md:w-24 bg-[#C9A467]/60" />
            <h2 className="text-white text-[16px] md:text-xl font-heading tracking-[0.1em] font-normal uppercase">WHY CHOOSE IGRADE?</h2>
            <div className="h-[1px] w-16 md:w-24 bg-[#C9A467]/60" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-12">
            {whyChooseValues.map((val, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="mb-6 flex items-center justify-center relative">
                  <val.icon className="w-10 h-10 text-[#C9A467] group-hover:scale-110 transition-transform duration-300" strokeWidth={1} />
                </div>
                <h4 className="text-[#C9A467] font-bold text-[13px] mb-3 font-heading">{val.title}</h4>
                <p className="text-[#A0A0A0] text-[12px] leading-relaxed font-light max-w-[160px] mx-auto">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Operational Excellence */}
      <section className="bg-[#F8F6F0] border-t border-[#C9A467]/10">
        <div className="grid lg:grid-cols-2 min-h-[550px]">
          {/* Left Image — full bleed, no padding */}
          <div className="relative h-[380px] lg:h-auto order-2 lg:order-1 overflow-hidden">
            <img
              src={igradeOperations}
              alt="Warehouse conveyor belt operations"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center px-6 md:px-12 lg:px-20 py-16 lg:py-20 order-1 lg:order-2">
            <span className="text-[#C9A467] text-[11px] font-bold tracking-[0.25em] uppercase mb-4 block">
              OPERATIONAL EXCELLENCE
            </span>
            <h2 className="text-[#1A1A1A] text-3xl md:text-4xl lg:text-[42px] leading-[1.15] mb-5 font-heading font-normal">
              Technology That<br />Keeps Business Moving
            </h2>
            <p className="text-[#666666] text-[14px] leading-relaxed font-light mb-12 max-w-lg">
              We leverage advanced technology and best practices to ensure seamless operations, real-time visibility and total control over the supply chain.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative">
              {operationalStats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center text-center relative">
                  {/* Circular icon container */}
                  <div className="w-14 h-14 rounded-full border-2 border-[#C9A467]/50 flex items-center justify-center mb-4 bg-white/60">
                    <stat.icon className="w-6 h-6 text-[#C9A467]" strokeWidth={1.5} />
                  </div>
                  <span className="text-[#1A1A1A] font-bold text-[11.5px] leading-tight font-heading">
                    {stat.title}
                  </span>
                  {/* Vertical dashed divider */}
                  {idx < 3 && (
                    <div className="hidden md:block absolute right-[-12px] top-2 bottom-2 w-[1px] border-r border-dashed border-[#C9A467]/40" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA — Split layout with image on right */}
      <section className="bg-[#0D0D0D] relative overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[380px]">
          {/* Left Content */}
          <div className="flex flex-col justify-center px-6 md:px-16 lg:px-24 py-16 lg:py-20 relative z-10">
            <span className="text-[#C9A467] text-[11px] font-bold tracking-[0.25em] uppercase mb-5 block">
              LET'S WORK TOGETHER
            </span>
            <h2 className="text-white text-3xl md:text-4xl lg:text-[44px] leading-[1.12] mb-5 font-heading font-normal">
              Let's Build a{' '}
              <span
                style={{
                  fontStyle: 'italic',
                  background: 'linear-gradient(135deg, #C9A467 0%, #E8D5A8 40%, #C9A467 60%, #A88B4A 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Stronger
              </span>
              <br />
              Supply Chain Together.
            </h2>
            <p className="text-white/60 text-[14px] leading-relaxed font-light mb-10 max-w-md">
              Whether you are a manufacturer, retailer, hotel or restaurant, Igrade Goods LLC is your trusted distribution partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#partner"
                className="bg-[#C9A467] text-black font-semibold text-[12px] tracking-[0.15em] uppercase px-8 py-4 hover:bg-[#B08D4F] transition-colors duration-300 flex items-center justify-center gap-2"
              >
                BECOME A PARTNER <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/contact"
                className="border border-[#C9A467] text-white font-semibold text-[12px] tracking-[0.15em] uppercase px-8 py-4 hover:bg-[#C9A467]/10 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                CONTACT US <ArrowRight className="text-[#C9A467] w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[320px] lg:h-auto overflow-hidden">
            <img
              src={igradeCtaTrucks}
              alt="Igrade logistics fleet at sunset"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Golden warm gradient overlay from left to blend into the dark bg */}
            <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#0D0D0D] to-transparent z-10" />
            {/* Bottom warmth */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0D0D0D]/60 to-transparent z-10" />
          </div>
        </div>
      </section>
    </>
  );
};

export default IgradeGoods;
