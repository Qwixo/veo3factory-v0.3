export interface StripeProduct {
  id: string;
  priceId: string;
  name: string;
  description: string;
  mode: 'payment' | 'subscription';
  price: number;
}

export const STRIPE_PRODUCTS: StripeProduct[] = [
  {
    id: 'prod_SleJcMKxzR2Ofo',
    priceId: 'price_1Rq70a1fqfaGAxK3iuKHpUZ7',
    name: 'Veo3Factory',
    description: 'An automated system that creates, posts, and grows your social media.',
    mode: 'payment',
    price: 97.00
  }
];

export function getProductByPriceId(priceId: string): StripeProduct | undefined {
  return STRIPE_PRODUCTS.find(product => product.priceId === priceId);
}

export function getProductById(id: string): StripeProduct | undefined {
  return STRIPE_PRODUCTS.find(product => product.id === id);
}

export function getMainProduct(): StripeProduct {
  return STRIPE_PRODUCTS[0]; // Return Veo3Factory as the main product
}