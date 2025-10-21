import Image from 'next/image';

interface PartnerLogoProps {
  name: string;
  className?: string;
}

function PartnerLogo({ name, className = "" }: PartnerLogoProps) {
  const logos = {
    Microsoft: (
      <svg viewBox="0 0 24 24" className="w-16 h-16">
        <rect x="0" y="0" width="11" height="11" fill="#F25022"/>
        <rect x="13" y="0" width="11" height="11" fill="#7FBA00"/>
        <rect x="0" y="13" width="11" height="11" fill="#00A4EF"/>
        <rect x="13" y="13" width="11" height="11" fill="#FFB900"/>
      </svg>
    ),
    Crowdstrike: (
      <Image 
        src="/crowdstrike-1.svg"
        alt="CrowdStrike"
        width={200}
        height={80}
        className="w-40 h-16 object-contain"
      />
    ),
    Tenable: (
      <Image 
        src="/tenable.svg"
        alt="Tenable"
        width={200}
        height={80}
        className="w-40 h-16 object-contain"
      />
    ),
    SentinelOne: (
      <Image 
        src="/sentinelone.svg"
        alt="SentinelOne"
        width={200}
        height={80}
        className="w-40 h-16 object-contain"
      />
    )
  };

  return (
    <div className={`bg-white rounded-lg p-6 shadow-sm flex items-center justify-center h-24 hover:shadow-md transition-shadow duration-300 border border-gray-200 ${className}`}>
      {logos[name as keyof typeof logos] || <span className="text-gray-400 font-semibold text-sm">{name}</span>}
    </div>
  );
}

export default function PartnerLogos() {
  const partners = ['Microsoft', 'Crowdstrike', 'Tenable', 'SentinelOne'];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white slide-up">
            Technology Partners
          </h2>
          <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto fade-in">
            Trusted by leading technology partners to deliver comprehensive cybersecurity solutions
          </p>
        </div>

        {/* Partner Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {partners.map((partner) => (
            <PartnerLogo key={partner} name={partner} />
          ))}
        </div>
      </div>
    </section>
  );
}
