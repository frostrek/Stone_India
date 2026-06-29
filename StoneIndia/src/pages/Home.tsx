import HeroCarousel from '../components/home/HeroCarousel';
import MarqueeTicker from '../components/home/MarqueeTicker';
import FeaturedProducts from '../components/home/FeaturedProducts';
import AboutTeaser from '../components/home/AboutTeaser';

import CTABanner from '../components/home/CTABanner';

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <MarqueeTicker />
      <AboutTeaser />
      <FeaturedProducts />

      <MarqueeTicker />
      <CTABanner />
    </>
  );
}
