export interface Service {
  id: string;
  name: string;
  description: string;
  iconName: string; // Used to dynamically select Lucide icons
}

export interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface Review {
  id: string;
  rating: number;
  text: string;
  author: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: string;
}
