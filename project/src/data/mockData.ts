import { Product } from '../types/product';
import { Complaint } from '../types/complaint';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Premium NPK Fertilizer',
    description: 'High-quality NPK fertilizer for all types of crops. Balanced nutrition for optimal growth.',
    price: 150000,
    category: 'fertilizer',
    imageUrl: 'https://images.pexels.com/photos/2321837/pexels-photo-2321837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    inStock: true,
    quantity: 100,
    manufacturer: 'AgriGrow',
    applicationMethod: 'Broadcast application',
    dosage: '25kg per hectare',
    bestFor: ['Rice', 'Corn', 'Vegetables'],
    createdAt: '2023-01-15T08:00:00Z',
    updatedAt: '2023-05-20T10:30:00Z'
  },
  {
    id: '2',
    name: 'Organic Pest Control',
    description: 'Eco-friendly pesticide that targets common agricultural pests without harming beneficial insects.',
    price: 85000,
    category: 'pesticide',
    imageUrl: 'https://images.pexels.com/photos/2449452/pexels-photo-2449452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    inStock: true,
    quantity: 75,
    manufacturer: 'NaturDefend',
    applicationMethod: 'Spray application',
    dosage: '5ml per liter of water',
    bestFor: ['Tomatoes', 'Cabbage', 'Fruit trees'],
    createdAt: '2023-02-10T09:15:00Z',
    updatedAt: '2023-06-05T14:20:00Z'
  },
  {
    id: '3',
    name: 'High-Yield Rice Seeds',
    description: 'Premium rice seeds engineered for the Konawe district climate. Produces higher yields with better resistance to local diseases.',
    price: 120000,
    category: 'seed',
    imageUrl: 'https://images.pexels.com/photos/621810/pexels-photo-621810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    inStock: true,
    quantity: 200,
    manufacturer: 'SeedTech',
    bestFor: ['Wetland rice fields'],
    createdAt: '2023-03-01T07:30:00Z',
    updatedAt: '2023-05-12T11:45:00Z'
  },
  {
    id: '4',
    name: 'Broad-Spectrum Fungicide',
    description: 'Effective against a wide range of plant fungal diseases common in humid environments.',
    price: 95000,
    category: 'pesticide',
    imageUrl: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    inStock: false,
    quantity: 0,
    manufacturer: 'CropProtect',
    applicationMethod: 'Spray application',
    dosage: '10ml per liter of water',
    bestFor: ['Rice', 'Vegetables', 'Fruit crops'],
    createdAt: '2023-01-25T10:20:00Z',
    updatedAt: '2023-06-15T09:10:00Z'
  },
  {
    id: '5',
    name: 'Organic Compost',
    description: 'Nutrient-rich organic compost ideal for improving soil structure and fertility.',
    price: 75000,
    category: 'fertilizer',
    imageUrl: 'https://images.pexels.com/photos/2284170/pexels-photo-2284170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    inStock: true,
    quantity: 150,
    manufacturer: 'EcoFarm',
    applicationMethod: 'Mix with soil',
    dosage: '2kg per square meter',
    bestFor: ['Vegetables', 'Flowers', 'Fruit trees'],
    createdAt: '2023-02-05T12:40:00Z',
    updatedAt: '2023-05-30T15:25:00Z'
  },
  {
    id: '6',
    name: 'Drought-Resistant Corn Seeds',
    description: 'Specially developed corn seeds that perform well during dry seasons in the Konawe region.',
    price: 135000,
    category: 'seed',
    imageUrl: 'https://images.pexels.com/photos/547264/pexels-photo-547264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    inStock: true,
    quantity: 120,
    manufacturer: 'SeedTech',
    bestFor: ['Dry land farming'],
    createdAt: '2023-03-20T08:50:00Z',
    updatedAt: '2023-06-10T13:15:00Z'
  }
];

export const mockComplaints: Complaint[] = [
  {
    id: '1',
    title: 'Fertilizer not working as expected',
    description: 'I applied the Premium NPK Fertilizer to my rice field two weeks ago, but I haven\'t seen the expected improvement in plant growth. The application was done according to the recommended dosage.',
    status: 'in-progress',
    createdAt: '2023-05-10T09:23:00Z',
    userId: '2',
    category: 'Product Effectiveness',
    response: {
      message: 'We\'re investigating this issue and have sent a field officer to inspect your rice field. They will arrive within the next 3 days to assess the situation and provide recommendations.',
      respondedBy: 'Support Team',
      respondedAt: '2023-05-12T14:30:00Z'
    }
  },
  {
    id: '2',
    title: 'Damaged seed packaging',
    description: 'I received the High-Yield Rice Seeds today, but the packaging was torn and some seeds were spilled inside the delivery box. I\'m concerned about the quality of the remaining seeds.',
    status: 'resolved',
    createdAt: '2023-04-15T13:45:00Z',
    userId: '2',
    category: 'Product Quality',
    attachmentUrls: ['https://example.com/images/damaged-package.jpg'],
    response: {
      message: 'We apologize for the inconvenience. A replacement package of High-Yield Rice Seeds has been dispatched and should arrive within 2 days. You can keep the original package as well.',
      respondedBy: 'Customer Service',
      respondedAt: '2023-04-16T10:20:00Z'
    }
  },
  {
    id: '3',
    title: 'Need advice on pest management',
    description: 'I\'m experiencing an unusual pest infestation in my vegetable garden that doesn\'t seem to respond to the Organic Pest Control product. The pests are small, green insects that primarily attack the leaves.',
    status: 'pending',
    createdAt: '2023-06-01T16:10:00Z',
    userId: '2',
    category: 'Technical Advice',
    attachmentUrls: ['https://example.com/images/pest-image.jpg']
  }
];