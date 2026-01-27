export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export const compatibilityFeatures: Feature[] = [
  {
    icon: 'monitor',
    title: 'Lightroom Desktop',
    description: 'Classic & CC'
  },
  {
    icon: 'smartphone',
    title: 'Lightroom Mobile',
    description: 'iOS & Android'
  },
  {
    icon: 'file-image',
    title: 'RAW & JPG',
    description: 'Totalmente compatible'
  }
];

export const benefitFeatures: Feature[] = [
  {
    icon: 'palette',
    title: 'Tonos Cinematográficos',
    description: 'Colores profesionales inspirados en el cine'
  },
  {
    icon: 'zap',
    title: 'Un Solo Click',
    description: 'Instalación y aplicación instantánea'
  },
  {
    icon: 'sparkles',
    title: 'Probados Profesionalmente',
    description: 'Usados en miles de fotos reales'
  },
  {
    icon: 'dollar-sign',
    title: 'Pago Único',
    description: 'Tuyos para siempre, sin suscripciones'
  },
  {
    icon: 'smartphone',
    title: 'Mobile + Desktop',
    description: 'Edita desde cualquier dispositivo'
  },
  {
    icon: 'graduation-cap',
    title: 'Tutorial Incluido',
    description: 'Guía de instalación paso a paso'
  }
];

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=600&fit=crop',
    alt: 'Fotografía de viaje'
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=600&fit=crop',
    alt: 'Retrato profesional'
  },
  {
    id: '3',
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop',
    alt: 'Fotografía urbana'
  },
  {
    id: '4',
    url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=600&fit=crop',
    alt: 'Retrato masculino'
  },
  {
    id: '5',
    url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&h=600&fit=crop',
    alt: 'Fotografía de naturaleza'
  },
  {
    id: '6',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop',
    alt: 'Retrato casual'
  },
  {
    id: '7',
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=600&fit=crop',
    alt: 'Retrato femenino'
  },
  {
    id: '8',
    url: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=600&h=600&fit=crop',
    alt: 'Fotografía lifestyle'
  },
  {
    id: '9',
    url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=600&fit=crop',
    alt: 'Retrato profesional'
  },
  {
    id: '10',
    url: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&h=600&fit=crop',
    alt: 'Fotografía de moda'
  },
  {
    id: '11',
    url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=600&fit=crop',
    alt: 'Retrato artístico'
  },
  {
    id: '12',
    url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=600&fit=crop',
    alt: 'Fotografía editorial'
  }
];
