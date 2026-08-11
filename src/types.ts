export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;
  originalPrice?: number;
  category: 'smart' | 'glass' | 'terracotta' | 'onyx' | 'twin';
  rating: number;
  reviewCount: number;
  image: string;
  hoverImage?: string;
  badge?: string;
  description: string;
  capacityOptions: string[];
  colors: { name: string; hex: string }[];
  keyFeatures: string[];
  materials: string[];
  techSpecs: {
    label: string;
    value: string;
  }[];
  inStock: boolean;
  stockCount: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedCapacity: string;
  selectedColor: string;
  engravingText?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  verified: boolean;
  productName: string;
  avatar?: string;
}
