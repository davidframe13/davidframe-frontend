export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: 'pack' | 'single';
  previewImage: string;
  collageImages: string[]; // 4-6 imágenes para el collage
  beforeAfter: {
    before: string;
    after: string;
  };
  tags: string[];
  presetCount?: number; // Cantidad de presets en el pack
  subtitle?: string; // Ej: "PRESETS PACK"
  featured: boolean;
}

export const featuredProducts: Product[] = [
  {
    id: '1',
    slug: 'cinematic-pack',
    name: 'Absolute',
    description: 'Tonos cinematográficos perfectos para retratos y lifestyle. 15 presets profesionales.',
    price: 100000,
    originalPrice: 150000,
    category: 'pack',
    presetCount: 80,
    subtitle: 'PRESETS PACK',
    previewImage: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=600&fit=crop',
    collageImages: [
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&h=400&fit=crop'
    ],
    beforeAfter: {
      before: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=1000&fit=crop&sat=-100',
      after: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=1000&fit=crop'
    },
    tags: ['CINEMATIC', 'EUROPA', "90'S", 'NEW YORK', 'PRECIOUS', 'FREE'],
    featured: true
  },
  {
    id: '2',
    slug: 'film-look-pack',
    name: 'Airport',
    description: 'Aspecto de película analógica para tus fotografías digitales. 12 presets vintage.',
    price: 15000,
    originalPrice: 20000,
    category: 'pack',
    presetCount: 45,
    subtitle: 'JOHNS PRESET',
    previewImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&h=600&fit=crop',
    collageImages: [
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
    ],
    beforeAfter: {
      before: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=1000&fit=crop&sat=-100',
      after: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=1000&fit=crop'
    },
    tags: ['VINTAGE', 'FILM', 'TRAVEL', 'LIFESTYLE'],
    featured: true
  },
  {
    id: '3',
    slug: 'urban-pack',
    name: 'City Streets',
    description: 'Tonos urbanos modernos para fotografía callejera y arquitectura. 10 presets.',
    price: 79000,
    originalPrice: 99000,
    category: 'pack',
    presetCount: 35,
    subtitle: 'URBAN PACK',
    previewImage: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&h=600&fit=crop',
    collageImages: [
      'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1534228746952-c58bc29db451?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=400&fit=crop'
    ],
    beforeAfter: {
      before: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=1000&fit=crop&sat=-100',
      after: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=1000&fit=crop'
    },
    tags: ['URBAN', 'STREET', 'ARCHITECTURE', 'MODERN'],
    featured: true
  },
  {
    id: '4',
    slug: 'golden-hour-pack',
    name: 'Golden Dreams',
    description: 'Captura la magia de la hora dorada en cualquier momento. 8 presets cálidos.',
    price: 89000,
    originalPrice: 120000,
    category: 'pack',
    presetCount: 25,
    subtitle: 'WARM TONES',
    previewImage: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop',
    collageImages: [
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=400&fit=crop'
    ],
    beforeAfter: {
      before: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&h=1000&fit=crop&sat=-100',
      after: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&h=1000&fit=crop'
    },
    tags: ['GOLDEN HOUR', 'WARM', 'SUNSET', 'NATURE'],
    featured: true
  }
];

export const allProducts: Product[] = [
  ...featuredProducts,
  // Aquí se pueden agregar más productos no destacados
];
