export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  image:string;
}

export const productCategories = [
  { id: 'stone-products', name: 'Stone Products', slug: 'stone-products' },
  { id: 'sandstone', name: 'Sandstone', slug: 'sandstone' },
  { id: 'stone-artcrafts', name: 'Stone Artcrafts', slug: 'stone-artcrafts' }
];

export const products: Product[] = [
  // Stone Products
  { id: 'sp-1', slug: 'wall-panel', name: 'Wall Panel', category: 'stone-products', description: 'Premium wall panels for interior and exterior design.', image: '/wall_panel.webp' },
  { id: 'sp-2', slug: 'wall-cladding', name: 'Wall Cladding', category: 'stone-products', description: 'High-quality wall cladding natural stones.', image: '/wall-cladding1.webp'},
  { id: 'sp-3', slug: 'mint-flagstone-tiles', name: 'Mint Flagstone Tiles', category: 'stone-products', description: 'Durable and beautiful mint flagstone tiles.', image: '/Flagstones-Tiles1.webp' },
  { id: 'sp-4', slug: 'sandstone-palisade', name: 'Sandstone Palisade', category: 'stone-products', description: 'Sturdy sandstone palisades for structural edges.', image: '/sandstone_palisades.webp' },
  { id: 'sp-5', slug: 'sandstone-circle', name: 'Sandstone Circle', category: 'stone-products', description: 'Decorative sandstone circles for paving.', image: '/sandstone_circle.webp' },
  { id: 'sp-6', slug: 'mint-stone-blocks', name: 'Mint Stone Blocks', category: 'stone-products', description: 'Large mint stone blocks for structural use.', image: '/Mint-Stone-Blocks1.jpg' },
  { id: 'sp-7', slug: 'mosaic-stone-tiles', name: 'Mosaic Stone Tiles', category: 'stone-products', description: 'Intricate mosaic stone tiles.', image: '/Mosaic-Stone-Tiles1.webp' },
  { id: 'sp-8', slug: 'gwalior-mint-cobbles', name: 'Gwalior Mint Cobbles', category: 'stone-products', description: 'Traditional Gwalior mint cobbles for driveways.', image: '/Gwalior-Mint-Cobbles1.jpg' },
  { id: 'sp-9', slug: 'stepping-stone-tiles', name: 'Stepping Stone Tiles', category: 'stone-products', description: 'Natural stepping stone tiles for gardens.', image: '/Stepping-Stone-Tiles1.jpg' },
  { id: 'sp-10', slug: 'fossil-mint-natural-stone', name: 'Fossil Mint Natural Stone', category: 'stone-products', description: 'Unique fossil mint natural stones.', image: '/Mint-Fossil-Indian-Sandstone-02.webp' },
  { id: 'sp-11', slug: 'gwalior-mint-stone-elevation', name: 'Gwalior Mint Stone Elevation', category: 'stone-products', description: 'Elevation stones in Gwalior mint.', image: '/gwalior_stone.jpg' },
  { id: 'sp-12', slug: 'gwalior-mint-sandstone-slabs', name: 'Gwalior Mint Sandstone Slabs', category: 'stone-products', description: 'Large Gwalior mint sandstone slabs.',  image: '/Gwalior-Mint-sandstone1.webp' },
  { id: 'sp-13', slug: 'gwalior-mint-wall-panels-stone', name: 'Gwalior Mint Wall Panels Stone', category: 'stone-products', description: 'Gwalior mint wall panels.', image: '/wall_panel.webp' },

  // Sandstone
  { id: 'ss-1', slug: 'modak-sandstone', name: 'Modak Sandstone', category: 'sandstone', description: 'Warm and durable Modak sandstone.', image: '/Modak-Sandstone-04.webp' },
  { id: 'ss-2', slug: 'rainbow-sandstone', name: 'Rainbow Sandstone', category: 'sandstone', description: 'Vibrant rainbow sandstone.', image: '/Rainbow-Sandstone-04.webp' },
  { id: 'ss-3', slug: 'shivpuri-sandstone', name: 'Shivpuri Sandstone', category: 'sandstone', description: 'Classic Shivpuri sandstone.', image: '/shivpuri-sand-stone-4.webp' },
  { id: 'ss-4', slug: 'teakwood-sandstone', name: 'Teakwood Sandstone', category: 'sandstone', description: 'Wood-textured teakwood sandstone.', image: '/Teakwood-Sandstone.webp' },
  { id: 'ss-5', slug: 'katni-grey-sandstone', name: 'Katni Grey Sandstone', category: 'sandstone', description: 'Neutral Katni grey sandstone.', image: '/Katni-Grey-Sandstone-04.jpg' },
  { id: 'ss-6', slug: 'sagar-black-sandstone', name: 'Sagar Black Sandstone', category: 'sandstone', description: 'Deep Sagar black sandstone.', image: '/Sagar-black-sand-stone-5.jpg' },
  { id: 'ss-7', slug: 'desert-mint-sandstone', name: 'Desert Mint Sandstone', category: 'sandstone', description: 'Subtle desert mint sandstone.', image: 'https://cdn-dalam.nitrocdn.com/kguhBJWzDLyySbbqHIdBxyNEaqCdTVBM/assets/images/optimized/rev-f4c4023/www.stoneindia.co/wp-content/uploads/2024/04/stone-02-1.webp' },
  { id: 'ss-8', slug: 'katni-yellow-sandstone', name: 'Katni Yellow Sandstone', category: 'sandstone', description: 'Bright Katni yellow sandstone.', image: 'https://cdn-dalam.nitrocdn.com/kguhBJWzDLyySbbqHIdBxyNEaqCdTVBM/assets/images/optimized/rev-f4c4023/www.stoneindia.co/wp-content/uploads/2024/04/stone-02-1.webp' },
  { id: 'ss-9', slug: 'lalitpur-yellow-sandstone', name: 'Lalitpur Yellow Sandstone', category: 'sandstone', description: 'Vibrant Lalitpur yellow sandstone.', image: '/Lalitpur-yellow-sandstone-04.webp' },
  { id: 'ss-10', slug: 'gwalior-mint-white-sandstone', name: 'Gwalior Mint White Sandstone', category: 'sandstone', description: 'Pristine Gwalior mint white sandstone.', image: '/Gwalior-mint-white-sand-stone-3.webp' },
  { id: 'ss-11', slug: 'gwalior-mint-yellow-sandstone', name: 'Gwalior Mint Yellow Sandstone', category: 'sandstone', description: 'Warm Gwalior mint yellow sandstone.', image: '/gwalior-mint-yellow-sand-stone-5.webp' },
  { id: 'ss-12', slug: 'mint-fossil-indian-sandstone', name: 'Mint Fossil Indian Sandstone', category: 'sandstone', description: 'Textured mint fossil Indian sandstone.', image: '/Mint-Fossil-Indian-Sandstone-02.webp' },

  // Stone Artcrafts
  { id: 'sa-1', slug: 'stone-figures', name: 'Stone Figures', category: 'stone-artcrafts', description: 'Hand-carved stone figures.', image: '/Stone-Figures.webp' },
  { id: 'sa-2', slug: 'sandstone-jaali', name: 'Sandstone Jaali', category: 'stone-artcrafts', description: 'Intricate sandstone jaali work.', image: '/Sandstone-Jaali-02.jpg' },
  { id: 'sa-3', slug: 'stone-planters', name: 'Stone Planters', category: 'stone-artcrafts', description: 'Durable natural stone planters.', image: '/Stone_Planters.webp' },
  { id: 'sa-4', slug: 'sandstone-balls', name: 'Sandstone Balls', category: 'stone-artcrafts', description: 'Decorative sandstone balls.', image: '/Sandstone-Balls.jpg' },
  { id: 'sa-5', slug: 'sandstone-benches', name: 'Sandstone Benches', category: 'stone-artcrafts', description: 'Solid sandstone benches for gardens.', image: 'https://cdn-dalam.nitrocdn.com/kguhBJWzDLyySbbqHIdBxyNEaqCdTVBM/assets/images/optimized/rev-f4c4023/www.stoneindia.co/wp-content/uploads/2024/04/stone-02-1.webp' },
  { id: 'sa-6', slug: 'stone-waterfalls', name: 'Stone Waterfalls', category: 'stone-artcrafts', description: 'Elegant stone waterfall features.', image: 'https://cdn-dalam.nitrocdn.com/kguhBJWzDLyySbbqHIdBxyNEaqCdTVBM/assets/images/optimized/rev-f4c4023/www.stoneindia.co/wp-content/uploads/2024/04/stone-02-1.webp' }
];

export const homepageFeaturedProducts = [
  { slug: 'sandstone-palisade', name: 'Sandstone Palisade', blurb: 'Best manufacturers and suppliers of high-quality sandstone palisades', image: '/sandstone_palisades.webp' },
  { slug: 'stone-planters', name: 'Stone Planters', blurb: 'Best stone planters in the market', image: '/Stone_Planters.webp' },
  { slug: 'stone-artcrafts', name: 'Stone Artcrafts', blurb: 'Highly attractive and useful stone artcrafts for our customers', image: '/srone_artifacts.webp' },
  { slug: 'wall-panel', name: 'Wall Panel', blurb: 'Popularly used for internal and external wall cladding', image: '/wall_panel.webp' },
  { slug: 'sandstone-circle', name: 'Sandstone Circle', blurb: 'Serving diverse construction project requirements', image: '/sandstone_circle.webp' },
  { slug: 'sandstone-jaali', name: 'Sandstone Jaali', blurb: 'Leading manufacturer and supplier of top sandstone jaali', image: '/sandstone_jaali.webp' },
];

export const heroBanners = [
  { title: 'Mint Stone Block', subtitle: 'Interiors and Exteriors', ctaText: 'View Products', link: '/products/mint-stone-blocks', image: '/hero-1-interior.jpg' },
  { title: 'Mosaic Stone Tiles', subtitle: 'Best Quality Natural Stone', ctaText: 'Read More', link: '/products/mosaic-stone-tiles', image: '/hero-2.jpg' }
];
