import productVogue from '../assets/images/magg.jpg';
import mag1 from '../assets/images/maggg1.jpg';
import mag3 from '../assets/images/maggg3.jpg';
import mag4 from '../assets/images/maggg4.jpg';
import mag5 from '../assets/images/maggg5.jpg';
import mag6 from '../assets/images/magg9.jpeg';
import mag7 from '../assets/images/magg7.jpg';
import productNewspaper from '../assets/images/neww1.jpg';
import new1 from '../assets/images/new2.jpg';
import new2 from '../assets/images/new3.jpg';
import pola from '../assets/images/poll.jpg';
import pol from '../assets/images/pol2.jpg';
import frame1 from '../assets/images/frame6.jpeg';
import frame3 from '../assets/images/frame8.jpeg';
import frame9 from '../assets/images/frame9.jpeg';
import magp1 from '../assets/images/magp1.jpeg';
import magp2 from '../assets/images/magp2.jpeg';
export const CATEGORIES = ['All', 'Magazine Prints', 'Newspaper Prints', 'Polaroids', 'Framed Prints'];

export const PRODUCTS = [
  {
    id: 'vogue-cover',
    badge: 'Best Seller',
    isSoldOut: false, // <-- تم التفعيل
    category: 'Magazine Prints',
    images: [productVogue, mag6, mag3, mag7, mag1, mag5, mag4],
    name: 'Customized Magazine',
    description: 'Choose from our ready-made magazine templates and personalize every detail to make it uniquely yours.',
    pricing: [
      { label: '8 PAGES', price: '350 EGP' },
      { label: '12 PAGES', price: '420 EGP' },
      { label: '16 PAGES', price: '470 EGP' },
      { label: '20 PAGES', price: '510 EGP' },
    ],
  },
  // أضيفي هذا الكود داخل مصفوفة PRODUCTS الموجودة في ملف data/products.js

  {
    id: 'premium-magazine',
    badge: 'Premium',
    isSoldOut: false, // يمكنك تغييرها لـ true إذا أردتِ قفله
    category: 'Magazine Prints',
    images: [magp1,magp2], // يمكنك إضافة صور مختلفة لهذا المنتج إذا أردتِ
    name: 'Premium Customized Magazine',
    description: 'Inspired by your ideas and personalized to your vision, we create a one-of-a-kind magazine made just for you.',
    pricing: [
      { label: '8 EXTRA PREMIUM', price: '480 EGP' },
      { label: '12 EXTRA PREMIUM', price: '580 EGP' },
      { label: '16 EXTRA PREMIUM', price: '680 EGP' },
    ],
  },
  {
    id: 'newspaper',
    badge: 'Trending',
    isSoldOut: false, // <-- تم التفعيل
    category: 'Newspaper Prints',
    images: [productNewspaper, new1, new2],
    name: 'Newspaper',
    description: 'Celebrate with a custom newspaper spread',
    pricing: [
      { label: 'Birthday', price: '160 EGP' },
      { label: 'Graduation', price: '160 EGP' },
      { label: 'Wedding', price: '160 EGP' },
    ],
  },
  {
    id: 'polaroid-set',
    badge: 'Popular',
    isSoldOut: false, // <-- تم التفعيل
    category: 'Polaroids',
    images: [pola, pol],
    name: 'Singing Polaroids',
    description: 'A nostalgic set of custom polaroid-style prints',
    pricing: [
      { label: '2 POLAROIDS', price: '30 EGP' },
      { label: '6 POLAROIDS', price: '80 EGP' },
      { label: '12 POLAROIDS', price: '150 EGP' },
    ],
  },
  {
    id: 'framed-collage',
    badge: 'New',
    isSoldOut: false, // <-- تم التفعيل
    category: 'Framed Prints',
    images: [frame1, frame3, frame9],
    name: 'Memory board',
    description: 'A frame made from your favorite memories\n Frame size (20*30)',
    pricing: [{ label: 'Standard', price: '380 EGP' }],
  },
];