export interface PhotoSession {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  link: string;
}

export const photoSessions: PhotoSession[] = [
  {
    id: '1',
    title: 'Urban Stories',
    subtitle: 'City Life',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&h=1200&fit=crop&q=80',
    link: '/sesiones/urban-stories'
  },
  {
    id: '2',
    title: 'MIDNIGHT TALES',
    subtitle: 'After Dark',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=1200&fit=crop&q=80',
    link: '/sesiones/midnight-tales'
  },
  {
    id: '3',
    title: 'Golden Hour',
    subtitle: 'Natural Light',
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=1200&fit=crop&q=80',
    link: '/sesiones/golden-hour'
  },
  {
    id: '4',
    title: 'monochrome ♥',
    subtitle: 'B&W Series',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=1200&fit=crop&q=80',
    link: '/sesiones/monochrome'
  }
];
