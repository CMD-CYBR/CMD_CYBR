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
      <span className="text-red-600 font-bold text-lg">Crowdstrike</span>
    ),
    Tenable: (
      <svg viewBox="0 0 120 40" className="w-24 h-10">
        {/* Tenable geometric icon - complex overlapping polygons */}
        <g fill="none" stroke="#1E3A8A" strokeWidth="1.5">
          {/* Outer octagon */}
          <path d="M8 6 L16 2 L24 2 L32 6 L36 14 L36 22 L32 30 L24 34 L16 34 L8 30 L4 22 L4 14 Z"/>
          {/* Middle octagon */}
          <path d="M10 8 L16 5 L22 5 L28 8 L31 14 L31 20 L28 26 L22 29 L16 29 L10 26 L7 20 L7 14 Z"/>
          {/* Inner octagon */}
          <path d="M12 10 L16 8 L20 8 L24 10 L26 14 L26 18 L24 22 L20 24 L16 24 L12 22 L10 18 L10 14 Z"/>
          {/* Center elements */}
          <path d="M14 12 L16 11 L18 11 L20 12 L21 14 L21 16 L20 18 L18 19 L16 19 L14 18 L13 16 L13 14 Z"/>
          <circle cx="17" cy="15" r="1" fill="#1E3A8A"/>
        </g>
        {/* Tenable text */}
        <text x="42" y="26" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="400" fill="#1E3A8A">tenable</text>
        {/* Registered trademark symbol */}
        <text x="95" y="18" fontFamily="Arial, sans-serif" fontSize="10" fill="#1E3A8A">®</text>
      </svg>
    ),
    SentinelOne: (
      <span className="text-gray-600 font-bold text-lg">SentinelOne</span>
    )
  };

  return (
    <div className={`bg-gray-900 rounded-lg p-6 shadow-sm flex items-center justify-center h-24 hover:shadow-md transition-shadow duration-300 border border-gray-700 ${className}`}>
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
