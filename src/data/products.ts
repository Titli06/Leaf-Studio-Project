import { Product } from '@/contexts/CartContext';

export const products: Product[] = [
  {
    id: '1',
    name: 'Monstera Deliciosa',
    price: 45.99,
    image: '/src/assets/product-plants.jpg',
    description: 'Also known as the Swiss Cheese Plant, this stunning tropical plant features large, glossy leaves with natural holes. Perfect for brightening any indoor space with its dramatic foliage.',
    category: 'tropical',
    inStock: true,
    rating: 4.8
  },
  {
    id: '2',
    name: 'Snake Plant',
    price: 29.99,
    image: '/src/assets/product-plants.jpg',
    description: 'An incredibly resilient and low-maintenance plant perfect for beginners. Known for its air-purifying qualities and striking upright leaves with yellow edges.',
    category: 'succulents',
    inStock: true,
    rating: 4.9
  },
  {
    id: '3',
    name: 'Fiddle Leaf Fig',
    price: 79.99,
    image: '/src/assets/product-plants.jpg',
    description: 'A statement plant with large, violin-shaped leaves. This elegant tree brings a touch of sophistication to any room and thrives in bright, indirect light.',
    category: 'tropical',
    inStock: true,
    rating: 4.6
  },
  {
    id: '4',
    name: 'Peace Lily',
    price: 34.99,
    image: '/src/assets/product-plants.jpg',
    description: 'Elegant white blooms and lush green foliage make this plant a favorite. Known for its air-purifying qualities and ability to thrive in lower light conditions.',
    category: 'flowering',
    inStock: true,
    rating: 4.7
  },
  {
    id: '5',
    name: 'ZZ Plant',
    price: 39.99,
    image: '/src/assets/product-plants.jpg',
    description: 'The ultimate low-maintenance plant with glossy, dark green leaves. Tolerates neglect and low light conditions while adding modern appeal to any space.',
    category: 'tropical',
    inStock: false,
    rating: 4.8
  },
  {
    id: '6',
    name: 'Rubber Plant',
    price: 49.99,
    image: '/src/assets/product-plants.jpg',
    description: 'Features thick, glossy leaves in deep green with burgundy undersides. A classic houseplant that grows into an impressive indoor tree with proper care.',
    category: 'tropical',
    inStock: true,
    rating: 4.5
  },
  {
    id: '7',
    name: 'Pothos Golden',
    price: 19.99,
    image: '/src/assets/product-plants.jpg',
    description: 'A trailing vine with heart-shaped leaves marbled in green and gold. Perfect for hanging baskets or shelves, and incredibly easy to propagate.',
    category: 'vines',
    inStock: true,
    rating: 4.9
  },
  {
    id: '8',
    name: 'Bird of Paradise',
    price: 89.99,
    image: '/src/assets/product-plants.jpg',
    description: 'Dramatic paddle-shaped leaves create a tropical paradise in your home. With proper care, mature plants may even produce stunning orange and blue flowers.',
    category: 'tropical',
    inStock: true,
    rating: 4.4
  }
];

export const categories = [
  { id: 'all', name: 'All Plants', count: products.length },
  { id: 'tropical', name: 'Tropical', count: products.filter(p => p.category === 'tropical').length },
  { id: 'succulents', name: 'Succulents', count: products.filter(p => p.category === 'succulents').length },
  { id: 'flowering', name: 'Flowering', count: products.filter(p => p.category === 'flowering').length },
  { id: 'vines', name: 'Vines', count: products.filter(p => p.category === 'vines').length }
];