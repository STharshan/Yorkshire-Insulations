import React from 'react';
import { Contact, Phone } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT CONTENT */}
          <div className="order-2 lg:order-1">
            <h4 className="text-[#E9B155] font-bold uppercase text-sm mb-4">
              Quick Inquiry
            </h4>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.4] mb-8">
              Are You Looking for <br className="hidden md:block" /> Roofing Service?
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-10 max-w-xl">
              Enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos ratione voluptatem sequi nesciunt porro quisquam qui numquam eius modi
            </p>

            {/* Phone Contact */}
            <div className="flex items-center gap-4 group cursor-pointer w-fit">
              <div className="bg-[#E9B155] p-4 rounded-full transition-transform group-hover:scale-110">
                <Phone className="text-black" size={24} fill="currentColor" />
              </div>
              <span className="text-2xl  font-bold text-gray-900 tracking-tight">
                +92 (003) 68-090
              </span>
            </div>
          </div>

          {/* RIGHT FORM CARD */}
          <div className="order-1 lg:order-2">
            <div className="bg-[#F8F8F8] p-8 md:p-12 rounded-[2rem] shadow-sm">
              <h3 className="text-3xl font-black text-gray-900 mb-8">
                Book a Schedule
              </h3>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Your full name" 
                    className="w-full px-6 py-4 bg-white border-none rounded-lg focus:ring-2 focus:ring-[#E9B155] outline-none text-gray-700 placeholder:text-gray-400"
                  />
                  <input 
                    type="text" 
                    placeholder="Phone number" 
                    className="w-full px-6 py-4 bg-white border-none rounded-lg focus:ring-2 focus:ring-[#E9B155] outline-none text-gray-700 placeholder:text-gray-400"
                  />
                </div>

                <input 
                  type="email" 
                  placeholder="Enter email address" 
                  className="w-full px-6 py-4 bg-white border-none rounded-lg focus:ring-2 focus:ring-[#E9B155] outline-none text-gray-700 placeholder:text-gray-400"
                />

                <input 
                  type="text" 
                  placeholder="Address location" 
                  className="w-full px-6 py-4 bg-white border-none rounded-lg focus:ring-2 focus:ring-[#E9B155] outline-none text-gray-700 placeholder:text-gray-400"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <select className="w-full px-6 py-4 bg-white border-none rounded-lg focus:ring-2 focus:ring-[#E9B155] outline-none text-gray-400 appearance-none cursor-pointer">
                    <option>Select time</option>
                    <option>Morning</option>
                    <option>Afternoon</option>
                  </select>
                  <input 
                    type="date" 
                    className="w-full px-6 py-4 bg-white border-none rounded-lg focus:ring-2 focus:ring-[#E9B155] outline-none text-gray-400 cursor-pointer"
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full mt-4 bg-[#E9B155] hover:bg-[#d4a049] text-black font-black uppercase tracking-widest py-5 rounded-lg shadow-lg transition-all transform hover:-translate-y-1"
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