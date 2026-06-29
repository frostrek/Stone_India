
import './MarqueeTicker.css';

const MarqueeTicker = () => {
  const items = [
    "PREMIUM QUALITY STONES",
    "GLOBAL EXPORTS",
    "CUSTOM SIZES AVAILABLE",
  ];

  // Repeat items many times to ensure it fills wide screens and can scroll smoothly by 50%
  const repeatedItems = Array(20).fill(items).flat();

  return (
    <div className="w-full bg-gold text-white py-3 overflow-hidden flex">
      <div className="flex gap-8 items-center whitespace-nowrap px-4 text-sm font-semibold tracking-widest w-max animate-marquee-custom">
        {repeatedItems.map((item, index) => (
          <div key={index} className="flex gap-8 items-center">
            <span>{item}</span>
            <span>•</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeTicker;
