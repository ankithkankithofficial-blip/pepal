import { Product, Review } from '../types';

import heroBottleImg from '../assets/images/pepal_hero_bottle_1786324519040.jpg';
import smartBottleImg from '../assets/images/pepal_gold_vessel_1786372076974.jpg';
import twinBottlesImg from '../assets/images/pepal_twin_bottles_1786372483448.jpg';
import onyxImg from '../assets/images/pepal_onyx_vessel_1786324550067.jpg';

export const PRODUCTS: Product[] = [
  {
    id: 'pepal-pure-glass',
    name: 'PEPAL Pure Glass Gold Edition',
    tagline: 'Wellness in Every Drop',
    price: 149,
    originalPrice: 189,
    category: 'glass',
    rating: 4.9,
    reviewCount: 312,
    image: heroBottleImg,
    badge: 'Flagship Edition',
    description: 'Forged with medical-grade borosilicate glass, deep emerald anodized aluminum shield, and a hand-polished 24K gold brass cap. Features an optical water clarity window that captures ambient light while preserving pure taste.',
    capacityOptions: ['500 ml', '750 ml'],
    colors: [
      { name: 'Emerald Gold', hex: '#0F2C1D' },
      { name: 'Imperial Gold', hex: '#D4AF37' }
    ],
    keyFeatures: [
      'Pure taste borosilicate glass interior',
      'Hand-crafted 24K gold brushed lid',
      'Light-refracting optical water window',
      '100% Leak-proof vacuum seal with silicone gasket',
      'Ergonomic non-slip tactile coating'
    ],
    materials: [
      'Borosilicate Medical Glass',
      'Anodized Aircraft Aluminum',
      'Electroplated 24K Gold Brass',
      'BPA-Free Food Grade Silicone'
    ],
    techSpecs: [
      { label: 'Thermal Retention', value: '18h Cold / 8h Warm' },
      { label: 'Weight (Empty)', value: '420g (500ml)' },
      { label: 'Base Diameter', value: '72mm' },
      { label: 'Warranty', value: 'Lifetime Guarantee' }
    ],
    inStock: true,
    stockCount: 14
  },
  {
    id: 'pepal-smart-vessel-p2',
    name: 'PEPAL Smart Vessel P2',
    tagline: 'Because You Deserve Better Hydration',
    price: 229,
    originalPrice: 269,
    category: 'smart',
    rating: 5.0,
    reviewCount: 489,
    image: smartBottleImg,
    badge: 'Smart Tech Winner',
    description: 'The world\'s most intelligent hydration vessel. Embedded OLED display delivers real-time water temperature (19°C), self-sterilization UV-C matrix, and gentle tactile hydration reminders.',
    capacityOptions: ['600 ml', '800 ml'],
    colors: [
      { name: 'Oceanic Emerald', hex: '#0C2A20' },
      { name: 'Deep Slate Navy', hex: '#0D2235' }
    ],
    keyFeatures: [
      'Self-cleaning UV-C sterilization destroys 99.99% bio-contaminants',
      'Real-time OLED display showing temperature & water purity',
      'Customizable hydration goal reminders via haptic vibration',
      'Recycled ocean-bound social plastic® reinforced base',
      'Magnetic wireless fast-charging dock (30-day battery life)'
    ],
    materials: [
      'Vacuum Insulated Stainless Steel 316',
      'Ocean Bound Recycled Polymer Base',
      'Brushed Champagne Brass Accent',
      'Gorilla Glass OLED Display Panel'
    ],
    techSpecs: [
      { label: 'Display', value: 'High-Contrast OLED Touch Screen' },
      { label: 'UV-C Wavelength', value: '265nm Deep UV Sterilization' },
      { label: 'Battery', value: '30 Days Single Charge' },
      { label: 'Connectivity', value: 'Bluetooth 5.3 Low Energy' }
    ],
    inStock: true,
    stockCount: 8
  },
  {
    id: 'pepal-twin-edition',
    name: 'PEPAL Executive Twin Bottle Set',
    tagline: 'Dual Vessel Precision Hydration System',
    price: 189,
    originalPrice: 219,
    category: 'twin',
    rating: 4.9,
    reviewCount: 276,
    image: twinBottlesImg,
    badge: 'Executive Duo',
    description: 'The ultimate paired hydration set. Features the PEPAL Emerald Gold Glass vessel alongside the Obsidian Titanium Thermal flask. Designed for seamless transition from workspace to active outdoor living.',
    capacityOptions: ['500 ml + 750 ml Duo Set'],
    colors: [
      { name: 'Emerald & Onyx Duo', hex: '#0e221b' },
      { name: 'Imperial Gold & Obsidian', hex: '#d4af37' }
    ],
    keyFeatures: [
      'Matching dual-vessel set with complementary emerald and obsidian finishes',
      '24K Gold electroplated leak-proof vacuum caps',
      'Medical-grade borosilicate glass interior & titanium shield',
      'Dual-wall thermal containment keeps drinks ice cold for 24+ hours',
      'Includes luxury bespoke leather carrying sleeves'
    ],
    materials: [
      'Borosilicate Medical Glass',
      'Aerospace Grade 5 Titanium',
      '24K Gold Electroplated Brass',
      'BPA-Free Food Grade Silicone'
    ],
    techSpecs: [
      { label: 'Thermal Shield', value: '24h Ice Cold / 12h Hot' },
      { label: 'Included Vessels', value: '2 Luxury Bottles (Glass + Titanium)' },
      { label: 'Total Weight', value: '680g (Pair)' },
      { label: 'Warranty', value: 'Lifetime Guarantee' }
    ],
    inStock: true,
    stockCount: 19
  },
  {
    id: 'pepal-onyx-titanium',
    name: 'PEPAL Onyx Titanium Thermal Vessel',
    tagline: 'Ultra-Lightweight Precision Thermal Engineering',
    price: 269,
    originalPrice: 299,
    category: 'onyx',
    rating: 4.95,
    reviewCount: 164,
    image: onyxImg,
    badge: 'Limited Executive Edition',
    description: 'Constructed from aerospace-grade Grade 5 Titanium with a matte obsidian ceramic shield. Weighs 40% lighter than standard flasks with unmatched thermal containment.',
    capacityOptions: ['550 ml', '750 ml'],
    colors: [
      { name: 'Matte Onyx Black', hex: '#121212' },
      { name: 'Champagne Titanium', hex: '#8C8275' }
    ],
    keyFeatures: [
      'Aerospace Grade 5 Titanium construction',
      'Obsidian ceramic heat-reflecting interior',
      '40% lighter than standard double-wall steel bottles',
      'Zero metallic transfer guarantee',
      'Subtle laser-etched PEPAL gold leaf monogramming'
    ],
    materials: [
      'Grade 5 Pure Titanium',
      'Sub-micron Ceramic Shielding',
      'Champagne Gold Anodized Cap',
      'Acoustic Dampening Silicone Base'
    ],
    techSpecs: [
      { label: 'Material Strength', value: 'Aerospace Grade 5 Ti' },
      { label: 'Weight', value: '260g (Superlight)' },
      { label: 'Thermal Shield', value: '24h Cold / 12h Hot' },
      { label: 'Finish', value: 'Scratch-Proof Matte Ceramic' }
    ],
    inStock: true,
    stockCount: 5
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Elena Rostova',
    rating: 5,
    date: '2 days ago',
    title: 'The epitome of functional luxury',
    content: 'The PEPAL Pure Glass bottle feels like a work of art in hand. The gold brass lid and optical glass window always draw compliments. Water genuinely tastes crisper and cooler.',
    verified: true,
    productName: 'PEPAL Pure Glass Gold Edition'
  },
  {
    id: 'rev-2',
    author: 'Dr. Julian Thorne',
    rating: 5,
    date: '1 week ago',
    title: 'Self-sterilizing UV tech is flawless',
    content: 'As a surgeon, hygiene is paramount. The 19°C temperature monitor and UV-C light cycle on the Smart Vessel P2 give me peace of mind every single shift.',
    verified: true,
    productName: 'PEPAL Smart Vessel P2'
  },
  {
    id: 'rev-3',
    author: 'Marcus Vance',
    rating: 5,
    date: '2 weeks ago',
    title: 'Terracotta Pod System changed my routine',
    content: 'I replaced my daily sugary energy drinks with PEPAL Terracotta and the doctor-formulated passion fruit pods. Increased focus, zero crash, and stays ice cold all afternoon.',
    verified: true,
    productName: 'PEPAL Terracotta Vitality System'
  }
];
