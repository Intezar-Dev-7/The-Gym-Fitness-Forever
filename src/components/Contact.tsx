import React, { useState } from "react";
import { Phone, MapPin, MessageSquare, Clock, Navigation, Send, CheckCircle2 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import GlassCard from "./GlassCard";

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formInterest, setFormInterest] = useState("");
  const [formMessage, setFormMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message with user details
    const textMessage = `Hello The Gym - Fitness Forever!

I'd like to request a coaching session / join the gym. Here are my details:
*Name:* ${formName}
*Phone:* ${formPhone}
*Interest:* ${formInterest || "Not specified"}
*Message:* ${formMessage || "None"}`;

    const whatsappUrl = `https://wa.me/919422439614?text=${encodeURIComponent(textMessage)}`;
    
    // Open WhatsApp URL in a new tab
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    
    setFormSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-neutral-950 text-white relative overflow-hidden px-4 border-t border-white/[0.03]"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-amber-500/[0.01] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-amber-500/[0.015] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="text-xs uppercase font-extrabold tracking-[0.25em] text-amber-500 mb-3 block">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">
            VISIT THE STUDIO
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto rounded" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          
          {/* Left Column: Coordinates & Hours Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 md:gap-8 max-w-2xl mx-auto w-full lg:max-w-none lg:mx-0">
            <AnimatedSection className="w-full">
              <GlassCard className="p-8 bg-white/[0.03] border-white/[0.08] relative">
                {/* Glowing border accent */}
                <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
                
                <h3 className="text-2xl font-black text-white mb-6 tracking-tight">
                  THE GYM – FITNESS FOREVER
                </h3>

                {/* Contact Coordinates list */}
                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-1">
                        Location
                      </span>
                      <p className="text-sm text-gray-300 leading-relaxed font-semibold">
                        1792/7, Vidya Nagar, Porvorim, Aradi Socorro, Goa 403521, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-1">
                        Phone
                      </span>
                      <p className="text-sm text-gray-300 leading-none font-bold">
                        094224 39614
                      </p>
                    </div>
                  </div>
                </div>

                {/* Dialers & Actions Cluster */}
                <div className="grid grid-cols-3 gap-2.5 mt-8 pt-6 border-t border-white/[0.05]">
                  <a
                    href="tel:+919422439614"
                    className="
                      py-3 rounded-lg text-[10px] sm:text-xs font-extrabold uppercase text-center tracking-widest
                      bg-amber-500 text-black shadow-lg shadow-amber-500/5 hover:bg-amber-400 hover:scale-105 active:scale-95 transition-all
                      flex flex-col items-center justify-center gap-1.5
                    "
                  >
                    <Phone className="w-4 h-4" /> CALL
                  </a>
                  <a
                    href="https://wa.me/919422439614"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      py-3 rounded-lg text-[10px] sm:text-xs font-extrabold uppercase text-center tracking-widest
                      bg-green-600 hover:bg-green-500 text-white hover:scale-105 active:scale-95 transition-all
                      flex flex-col items-center justify-center gap-1.5
                    "
                  >
                    <MessageSquare className="w-4 h-4" /> CHAT
                  </a>
                  <a
                    href="https://maps.google.com/?q=The+Gym+Fitness+Forever+Porvorim+Goa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      py-3 rounded-lg text-[10px] sm:text-xs font-extrabold uppercase text-center tracking-widest
                      bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-105 active:scale-95 transition-all
                      flex flex-col items-center justify-center gap-1.5
                    "
                  >
                    <Navigation className="w-4 h-4 text-amber-500" /> ROUTE
                  </a>
                </div>
              </GlassCard>
            </AnimatedSection>

            {/* Opening Hours Specific Card */}
            <AnimatedSection className="w-full">
              <GlassCard className="p-8 bg-white/[0.02] border-white/[0.08]">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-5 h-5 text-amber-500" />
                  <h4 className="text-lg font-bold uppercase tracking-wider text-white">
                    OPENING HOURS
                  </h4>
                </div>
                
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center py-2 border-b border-white/[0.04]">
                    <span className="text-sm font-semibold text-gray-300">Monday - Saturday</span>
                    <span className="text-sm font-bold text-amber-400">6:00 AM – 11:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/[0.04]">
                    <span className="text-sm font-semibold text-gray-300">Sunday</span>
                    <span className="text-sm font-bold text-red-500">Closed</span>
                  </div>
                </div>

                <p className="text-xs text-gray-500 leading-relaxed mt-5">
                  * Dynamic schedules apply on public holidays. Please call or message on WhatsApp to confirm.
                </p>
              </GlassCard>
            </AnimatedSection>
          </div>

          {/* Right Column: Message form / Map (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6 w-full max-w-2xl mx-auto lg:max-w-none lg:mx-0">
            
            {/* Interactive Form Section */}
            <AnimatedSection className="w-full">
              <GlassCard className="p-8 bg-white/[0.03] border-white/[0.08]">
                {formSubmitted ? (
                  <div className="py-8 text-center flex flex-col items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 mb-6 animate-bounce">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-black text-white mb-2">
                      THANK YOU, {formName.toUpperCase()}!
                    </h3>
                    <p className="text-gray-400 text-sm max-w-md">
                      Your details have been pre-filled and sent to our WhatsApp contact. We will connect with you shortly to schedule your tour or counseling session!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <h3 className="text-xl font-bold text-white mb-2">
                      REQUEST A FREE COACHING CALL
                    </h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formName}
                          onChange={(e) => setFormName(e.target.value)}
                          placeholder="Enter your name"
                          className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none focus:border-amber-500 transition-colors"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                          Your Phone
                        </label>
                        <input
                          type="tel"
                          required
                          value={formPhone}
                          onChange={(e) => setFormPhone(e.target.value)}
                          placeholder="Enter contact number"
                          className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none focus:border-amber-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                        Primary Fitness Discipline Interest
                      </label>
                      <select
                        required
                        value={formInterest}
                        onChange={(e) => setFormInterest(e.target.value)}
                        className="w-full px-4 py-3 bg-neutral-900 border border-white/10 rounded-xl text-sm text-gray-300 focus:outline-none focus:border-amber-500 transition-colors"
                      >
                        <option value="">Select interest...</option>
                        <option value="Weight Training">Weight Training</option>
                        <option value="CrossFit">CrossFit</option>
                        <option value="Kickboxing">Kickboxing</option>
                        <option value="Zumba / Dance Fitness">Zumba / Dance Fitness</option>
                        <option value="Yoga Classes">Yoga Classes</option>
                        <option value="Other Conditioning">Other Conditioning</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                        Message (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={formMessage}
                        onChange={(e) => setFormMessage(e.target.value)}
                        placeholder="Any queries, target fitness goals, or timing preferences..."
                        className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="
                        w-full py-4 rounded-xl text-xs font-extrabold uppercase tracking-widest
                        bg-amber-500 text-black shadow-lg shadow-amber-500/10 hover:bg-amber-400 hover:scale-[1.01] transition-all
                        flex items-center justify-center gap-2
                      "
                    >
                      Submit & Send to WhatsApp <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </GlassCard>
            </AnimatedSection>

            {/* Embed Map section */}
            <AnimatedSection className="w-full">
              <div className="w-full h-64 md:h-80 rounded-[24px] overflow-hidden border border-white/[0.08] shadow-lg relative group">
                <iframe
                  title="The Gym - Fitness Forever Location Map Porvorim Goa"
                  src="https://maps.google.com/maps?q=The%20Gym%20-%20Fitness%20Forever,%20Porvorim,%20Goa&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-90 transition-all duration-500"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </AnimatedSection>

          </div>

        </div>

      </div>
    </section>
  );
}
