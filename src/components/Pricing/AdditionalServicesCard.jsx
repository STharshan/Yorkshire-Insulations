import { additionalServices } from "./pricingUtils";

const AdditionalServicesCard = () => {
  return (
    <section className="flex flex-col rounded-[12px] border border-[#E5E7EB] bg-white p-6">
      <span className="mb-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#C8962E]">
        Additional Services
      </span>
      <h2 className="text-[18px] font-semibold text-[#1B2A6B]">
        More Insulation & Energy Solutions
      </h2>
      <p className="mt-1 text-[13px] text-[#6B7280]">
        Competitive pricing for additional insulation and energy services
      </p>
      <div className="my-4 h-px bg-[#F0F0F0]" />

      <div className="grid gap-4">
        {additionalServices.map((service, index) => (
          <div
            key={index}
            className="flex flex-col rounded-[8px] border border-[#E5E7EB] bg-[#FAFAFA] p-4"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-[15px] font-semibold text-[#1B2A6B]">
                  {service.title}
                </h3>
                <p className="mt-1 text-[13px] text-[#6B7280]">
                  {service.description}
                </p>
              </div>
              <div className="ml-4 text-right">
                <p className="text-[16px] font-semibold text-[#1B2A6B]">
                  {service.priceRange}
                </p>
              </div>
            </div>
            <p className="mt-2 text-[11px] text-[#9CA3AF]">{service.note}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-[6px] border border-[#E9D7A8] bg-[#FFF8E8] px-3 py-2">
        <p className="text-[12px] text-[#C8962E]">
          All prices are estimates. Final quotes are provided after a free
          on-site survey. Contact us for accurate pricing tailored to your
          property.
        </p>
      </div>
    </section>
  );
};

export default AdditionalServicesCard;