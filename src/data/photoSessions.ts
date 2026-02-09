export interface PhotoSession {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  link: string;
}

export const photoSessions: PhotoSession[] = [
  {
    id: '3',
    title: 'PRESETS',
    subtitle: '',
    image: '/assets/images/sesiones/presets.jpg',
    link: '/sesiones/presets'
  },
  {
    id: '1',
    title: 'URBANOLOGÍA',
    subtitle: 'FOTOGRAFÍA CALLEJERA AL REDEDOR DEL MUNDO',
    image: '/assets/images/sesiones/urbanologia.jpg',
    link: '/sesiones/urbanologia'
  },
  {
    id: '2',
    title: 'EVENTOS',
    subtitle: '',
    image: '/assets/images/sesiones/eventos.jpg',
    link: '/sesiones/eventos'
  },
  {
    id: '4',
    title: 'PRODUCTO',
    subtitle: '',
    image: '/assets/images/sesiones/producto.jpg',
    link: '/sesiones/producto'
  }
];
