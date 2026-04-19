import React, { useState } from 'react';
import { Phone, Clock, Calendar } from 'lucide-react';

const ContactSection = () => {
  // 1. Create a state to hold form data
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    time: '09:00',
    date: ''
  });

  const whatsappNumber = "447526322379"; // International format (UK +44)

  // 2. Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the formatted message
    const message = `*New Inquiry*%0a` +
      `Name: ${formData.fullName}%0a` +
      `Phone: ${formData.phone}%0a` +
      `Email: ${formData.email}%0a` +
      `Address: ${formData.address}%0a` +
      `Preferred Time: ${formData.time}%0a` +
      `Preferred Date: ${formData.date}%0a` +

    // Open WhatsApp
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section id='contact' className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">

          <div className="order-2 lg:order-1">
            <h4 className="heading-font mb-4 text-[13px] font-bold uppercase tracking-[0.24em] text-[var(--brand-gold)]">
              QUICK INQUIRY
            </h4>
            <h2 className="heading-font mb-8 text-4xl font-bold leading-[1.2] text-[var(--brand-text)] md:text-5xl">
              Thinking About Insulating <br className="hidden md:block" />Your Home?
            </h2>
            <p className="mb-10 max-w-xl text-base leading-relaxed text-[var(--brand-muted)]">
              Get in touch and we'll talk you through the best option for your property. No jargon, no pressure - just straight advice from a local Yorkshire team.
            </p>

            <div className="group flex w-fit cursor-pointer items-center gap-4">
              <div className="rounded-full bg-[var(--brand-gold)] p-4 transition-transform group-hover:scale-110">
                <Phone className="text-white" size={24} fill="currentColor" />
              </div>
              <a 
                href="tel:+447526322379"
                className="heading-font text-2xl font-bold tracking-tight text-[var(--brand-text)]"
                >
                07526322379
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="brand-card-panel rounded-[2rem] p-8 md:p-12">
              <h3 className="heading-font mb-8 text-3xl font-bold text-[var(--brand-text)]">
                Get in Touch
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <input
                    required
                    type="text"
                    name="fullName"
                    placeholder="Your full name"
                    className="brand-input"
                    onChange={handleChange}
                  />
                  <input
                    required
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    className="brand-input"
                    onChange={handleChange}
                  />
                </div>

                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Email address"
                  className="brand-input"
                  onChange={handleChange}
                />

                <input
                  required
                  type="text"
                  name="address"
                  placeholder="Property address"
                  className="brand-input"
                  onChange={handleChange}
                />

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="relative">
                    <input
                      type="time"
                      name="time"
                      className="brand-input cursor-pointer w-full"
                      defaultValue="09:00"
                      onChange={handleChange}
                    />
                  </div>
                  <input
                    required
                    type="date"
                    name="date"
                    className="brand-input cursor-pointer"
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className="heading-font mt-4 w-full rounded-md bg-[var(--brand-blue)] py-5 text-[15px] font-semibold uppercase tracking-[0.2em] text-white shadow-lg transition hover:bg-[var(--brand-navy)]"
                >
                  Send My Enquiry
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