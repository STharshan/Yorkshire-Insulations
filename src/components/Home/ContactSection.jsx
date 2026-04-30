import React, { useState } from 'react';
import { ChevronDown, Phone } from 'lucide-react';

export const services = [
  { title: "Loft Insulation" },
  { title: "Cavity Wall Insulation" },
  { title: "Spray Foam Removal" },
  { title: "Underfloor Insulation" },
  { title: "New Build Insulation" },
];

const ContactSection = () => {
  // Define initial state in a variable for easy reuse
  const initialState = {
    fullName: '',
    phone: '',
    email: '',
    address: '',
    service: '',
    time: '',
    date: ''
  };

  const [formData, setFormData] = useState(initialState);

  const whatsappNumber = "447526322379";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Construct the WhatsApp message
    const message = `*New Inquiry*%0a` +
      `Name: ${formData.fullName}%0a` +
      `Service: ${formData.service}%0a` +
      `Phone: ${formData.phone}%0a` +
      `Email: ${formData.email}%0a` +
      `Address: ${formData.address}%0a` +
      `Preferred Time: ${formData.time}%0a` +
      `Preferred Date: ${formData.date}%0a`;

    // 2. Open WhatsApp
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');

    // 3. CLEAR FORM DATA - Reset state to initial values
    setFormData(initialState);
  };

  return (
    <section id='contact' className="bg-white py-16 md:py-24 scroll-m-20">
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
                    value={formData.fullName} // Added value binding
                    placeholder="Your full name"
                    className="brand-input"
                    onChange={handleChange}
                  />
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={formData.phone} // Added value binding
                    placeholder="Phone number"
                    className="brand-input"
                    onChange={handleChange}
                  />
                </div>

                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email} // Added value binding
                  placeholder="Email address"
                  className="brand-input"
                  onChange={handleChange}
                />

                <div className="relative">
                  <select
                    required
                    name="service"
                    value={formData.service}
                    className="brand-input w-full appearance-none bg-white pr-10"
                    onChange={handleChange}
                  >
                    <option value="" disabled>Select a Service</option>
                    {services.map((service) => (
                      <option key={service.title} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[var(--brand-muted)]">
                    <ChevronDown size={20} />
                  </div>
                </div>

                <input
                  required
                  type="text"
                  name="address"
                  value={formData.address} // Added value binding
                  placeholder="Property address"
                  className="brand-input"
                  onChange={handleChange}
                />

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="relative">
                    <input
                      type="time"
                      name="time"
                      value={formData.time} // Added value binding
                      className="brand-input cursor-pointer w-full"
                      onChange={handleChange}
                    />
                  </div>
                  <input
                    required
                    type="date"
                    name="date"
                    value={formData.date} // Added value binding
                    className="brand-input cursor-pointer"
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className="heading-font mt-4 w-full bg-[var(--brand-blue)] py-5 text-[15px] font-semibold uppercase tracking-[0.2em] text-white shadow-lg transition hover:bg-[var(--brand-navy)]"
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