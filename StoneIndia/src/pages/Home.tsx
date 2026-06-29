import HeroCarousel from '../components/home/HeroCarousel';
import MarqueeTicker from '../components/home/MarqueeTicker';
import FeaturedProducts from '../components/home/FeaturedProducts';
import AboutTeaser from '../components/home/AboutTeaser';
import StatsCounter from '../components/home/StatsCounter';
import CTABanner from '../components/home/CTABanner';

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <MarqueeTicker />
      <AboutTeaser />
      <FeaturedProducts />
      <StatsCounter />
      <MarqueeTicker />
      <CTABanner />
    </>
  );
}
