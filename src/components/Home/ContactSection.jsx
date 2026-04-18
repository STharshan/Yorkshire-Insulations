import React from 'react';
import { Contact, Phone } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          
          <div className="order-2 lg:order-1">
            <h4 className="heading-font mb-4 text-[13px] font-bold uppercase tracking-[0.24em] text-[var(--brand-gold)]">
              Quick Inquiry
            </h4>
            <h2 className="heading-font mb-8 text-4xl font-bold leading-[1.2] text-[var(--brand-text)] md:text-5xl">
              Are You Looking for <br className="hidden md:block" /> Roofing Service?
            </h2>
            <p className="mb-10 max-w-xl text-base leading-relaxed text-[var(--brand-muted)]">
              Enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos ratione voluptatem sequi nesciunt porro quisquam qui numquam eius modi
            </p>

            <div className="group flex w-fit cursor-pointer items-center gap-4">
              <div className="rounded-full bg-[var(--brand-gold)] p-4 transition-transform group-hover:scale-110">
                <Phone className="text-white" size={24} fill="currentColor" />
              </div>
              <span className="heading-font text-2xl font-bold tracking-tight text-[var(--brand-text)]">
                +92 (003) 68-090
              </span>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="brand-card-panel rounded-[2rem] p-8 md:p-12">
              <h3 className="heading-font mb-8 text-3xl font-bold text-[var(--brand-text)]">
                Book a Schedule
              </h3>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <input 
                    type="text" 
                    placeholder="Your full name" 
                    className="brand-input"
                  />
                  <input 
                    type="text" 
                    placeholder="Phone number" 
                    className="brand-input"
                  />
                </div>

                <input 
                  type="email" 
                  placeholder="Enter email address" 
                  className="brand-input"
                />

                <input 
                  type="text" 
                  placeholder="Address location" 
                  className="brand-input"
                />

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <select className="brand-input cursor-pointer appearance-none">
                    <option>Select time</option>
                    <option>Morning</option>
                    <option>Afternoon</option>
                  </select>
                  <input 
                    type="date" 
                    className="brand-input cursor-pointer"
                  />
                </div>

                <button 
                  type="submit" 
                  className="heading-font mt-4 w-full rounded-md bg-[var(--brand-blue)] py-5 text-[15px] font-semibold uppercase tracking-[0.2em] text-white shadow-lg transition hover:bg-[var(--brand-navy)]"
                >
                  Send Request
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
