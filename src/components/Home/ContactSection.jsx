import React, { useState } from 'react';
import { Phone, Check } from 'lucide-react';

export const servicesList = [
  { title: "Loft Insulation" },
  { title: "Cavity Wall Insulation" },
  { title: "Spray Foam Removal" },
  { title: "Underfloor Insulation" },
  { title: "New Build Insulation" },
];

const ContactSection = () => {
  const initialState = {
    fullName: '',
    phone: '',
    email: '',
    address: '',
    service: [], // Changed to array for multiple selections
    time: '',
    date: ''
  };

  const [formData, setFormData] = useState(initialState);

  const whatsappNumber = "447526322379";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Toggle function for multiple services
  const handleServiceToggle = (title) => {
    setFormData((prev) => {
      const isSelected = prev.service.includes(title);
      const updatedServices = isSelected
        ? prev.service.filter((t) => t !== title) // Remove if already selected
        : [...prev.service, title]; // Add if not selected
      
      return { ...prev, service: updatedServices };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.service.length === 0) {
      alert("Please select at least one service.");
      return;
    }

    // Join the array into a string for the WhatsApp message
    const selectedServicesText = formData.service.join(", ");

    const message = `*New Inquiry*%0a` +
      `Name: ${formData.fullName}%0a` +
      `Services: ${selectedServicesText}%0a` +
      `Phone: ${formData.phone}%0a` +
      `Email: ${formData.email}%0a` +
      `Address: ${formData.address}%0a` +
      `Preferred Time: ${formData.time}%0a` +
      `Preferred Date: ${formData.date}%0a`;

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    setFormData(initialState);
  };

  return (
    <section id='contact' className="bg-white py-16 md:py-24 scroll-m-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Left Column: Text Content */}
          <div className="order-2 lg:order-1 lg:sticky lg:top-24">
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

          {/* Right Column: Multi-Select Form */}
          <div className="order-1 lg:order-2">
            <div className="brand-card-panel rounded-[2rem] p-8 md:p-12 shadow-xl border border-gray-50">
              <h3 className="heading-font mb-8 text-3xl font-bold text-[var(--brand-text)]">
                Get in Touch
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <input
                    required
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    placeholder="Your full name"
                    className="brand-input"
                    onChange={handleChange}
                  />
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    placeholder="Phone number"
                    className="brand-input"
                    onChange={handleChange}
                  />
                </div>

                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="Email address"
                  className="brand-input"
                  onChange={handleChange}
                />

                {/* Multiple Options Selection Area */}
                <div className="py-2">
                  <p className="mb-3 text-sm font-bold text-[var(--brand-muted)] uppercase tracking-wider">
                    Select Required Services:
                  </p>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {servicesList.map((service) => {
                      const isSelected = formData.service.includes(service.title);
                      return (
                        <button
                          key={service.title}
                          type="button"
                          onClick={() => handleServiceToggle(service.title)}
                          className={`flex items-center gap-3 rounded-xl border p-3 text-left transition-all ${
                            isSelected 
                              ? "border-[var(--brand-blue)] bg-[var(--brand-blue)]/5 ring-1 ring-[var(--brand-blue)]" 
                              : "border-gray-200 bg-white hover:border-gray-300"
                          }`}
                        >
                          <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-colors ${
                            isSelected ? "bg-[var(--brand-blue)] border-[var(--brand-blue)]" : "bg-white border-gray-300"
                          }`}>
                            {isSelected && <Check size={14} className="text-white" />}
                          </div>
                          <span className={`text-sm font-medium ${isSelected ? "text-[var(--brand-blue)]" : "text-gray-700"}`}>
                            {service.title}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <input
                  required
                  type="text"
                  name="address"
                  value={formData.address}
                  placeholder="Property address"
                  className="brand-input"
                  onChange={handleChange}
                />

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    className="brand-input cursor-pointer w-full"
                    onChange={handleChange}
                  />
                  <input
                    required
                    type="date"
                    name="date"
                    value={formData.date}
                    className="brand-input cursor-pointer"
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className="heading-font mt-4 w-full bg-[var(--brand-blue)] py-5 text-[15px] font-semibold uppercase tracking-[0.2em] text-white shadow-lg transition hover:bg-[var(--brand-navy)] rounded-xl"
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