export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  category: 'pack' | 'single';
  previewImage: string;
  beforeAfter: {
    before: string;
    after: string;
  };
  tags: string[];
  featured: boolean;
}

export const featuredProducts: Product[] = [
  {
    id: '1',
    slug: 'cinematic-pack',
    name: 'Cinematic Pack',
    description: 'Tonos cinematográficos perfectos para retratos y lifestyle. 15 presets profesionales.',
    price: 99000,
    category: 'pack',
    previewImage: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=600&fit=crop',
    beforeAfter: {
      before: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=1000&fit=crop&sat=-100',
      after: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=1000&fit=crop'
    },
    tags: ['Retratos', 'Lifestyle', 'Moody'],
    featured: true
  },
  {
    id: '2',
    slug: 'film-look-pack',
    name: 'Film Look Pack',
    description: 'Aspecto de película analógica para tus fotografías digitales. 12 presets vintage.',
    price: 129000,
    category: 'pack',
    previewImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&h=600&fit=crop',
    beforeAfter: {
      before: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=1000&fit=crop&sat=-100',
      after: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=1000&fit=crop'
    },
    tags: ['Vintage', 'Film', 'Analógico'],
    featured: true
  },
  {
    id: '3',
    slug: 'urban-pack',
    name: 'Urban Pack',
    description: 'Tonos urbanos modernos para fotografía callejera y arquitectura. 10 presets.',
    price: 79000,
    category: 'pack',
    previewImage: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&h=600&fit=crop',
    beforeAfter: {
      before: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=1000&fit=crop&sat=-100',
      after: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=1000&fit=crop'
    },
    tags: ['Urbano', 'Street', 'Arquitectura'],
    featured: true
  },
  {
    id: '4',
    slug: 'golden-hour-pack',
    name: 'Golden Hour Pack',
    description: 'Captura la magia de la hora dorada en cualquier momento. 8 presets cálidos.',
    price: 89000,
    category: 'pack',
    previewImage: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop',
    beforeAfter: {
      before: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&h=1000&fit=crop&sat=-100',
      after: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&h=1000&fit=crop'
    },
    tags: ['Golden Hour', 'Cálido', 'Sunset'],
    featured: true
  }
];

export const allProducts: Product[] = [
  ...featuredProducts,
  // Aquí se pueden agregar más productos no destacados
];
