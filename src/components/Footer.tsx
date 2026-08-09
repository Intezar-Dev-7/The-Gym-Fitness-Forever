import React from "react";
import SocialIcon from "./SocialIcon";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Programs", href: "#programs" },
    { name: "Reviews", href: "#reviews" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const coreServices = [
    { name: "Aerobics", href: "#services" },
    { name: "Kickboxing", href: "#services" },
    { name: "CrossFit", href: "#services" },
    { name: "Zumba", href: "#services" },
    { name: "Personal Training", href: "#services" },
    { name: "Weight Training", href: "#services" },
    { name: "Yoga Classes", href: "#services" },
    { name: "Cycling", href: "#services" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-neutral-950 text-gray-400 pt-20 pb-10 border-t border-white/[0.05] relative overflow-hidden px-4">
      {/* Subtle top horizontal gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-12 mb-16">
        
        {/* Column 1: Brand & Bio (4 cols) */}
        <div className="lg:col-span-4 flex flex-col items-start gap-4">
          <a href="#home" onClick={(e) => handleScrollTo(e, "#home")} className="flex flex-col">
            <span className="text-xl font-black text-white tracking-widest leading-none">
              THE GYM
            </span>
            <span className="text-[10px] tracking-[0.25em] font-extrabold text-amber-500 leading-none mt-1">
              FITNESS FOREVER
            </span>
          </a>
          <p className="text-sm leading-relaxed text-gray-500 max-w-sm mt-2">
            Providing premium modern fitness, high-end conditioning, professional weight coaching, and dynamic group environments in Porvorim, North Goa.
          </p>
          
          {/* Social Icons Stack */}
          <div className="flex items-center gap-3 mt-4">
            <SocialIcon platform="instagram" href="https://instagram.com" />
            <SocialIcon platform="facebook" href="https://facebook.com" />
            <SocialIcon platform="whatsapp" href="https://wa.me/919422439614" />
          </div>
        </div>

        {/* Column 2: Quick Links (2 cols) */}
        <div className="lg:col-span-2 flex flex-col items-start gap-4">
          <h4 className="text-xs uppercase font-extrabold tracking-widest text-white border-l-2 border-amber-500 pl-2">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-2.5">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="text-sm text-gray-500 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Featured Services (3 cols) */}
        <div className="lg:col-span-3 flex flex-col items-start gap-4">
          <h4 className="text-xs uppercase font-extrabold tracking-widest text-white border-l-2 border-amber-500 pl-2">
            Our Disciplines
          </h4>
          <ul className="flex flex-col gap-2.5">
            {coreServices.map((service) => (
              <li key={service.name}>
                <a
                  href={service.href}
                  onClick={(e) => handleScrollTo(e, service.href)}
                  className="text-sm text-gray-500 hover:text-white transition-colors"
                >
                  {service.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Location Info (3 cols) */}
        <div className="lg:col-span-3 flex flex-col items-start gap-4">
          <h4 className="text-xs uppercase font-extrabold tracking-widest text-white border-l-2 border-amber-500 pl-2">
            Location
          </h4>
          <div className="flex flex-col gap-3 text-sm">
            <p className="text-gray-500 leading-relaxed">
              1792/7, Vidya Nagar, <br />
              Porvorim, Aradi Socorro, <br />
              Goa 403521
            </p>
            <div className="flex flex-col mt-2">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-gray-600">
                Call Us Direct
              </span>
              <a
                href="tel:+919422439614"
                className="text-white font-bold hover:text-amber-400 transition-colors"
              >
                094224 39614
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Legal bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
        <p>© 2026 The Gym – Fitness Forever. All rights reserved.</p>
        <p>Premium dark theme designed for peak performance.</p>
      </div>
    </footer>
  );
}
