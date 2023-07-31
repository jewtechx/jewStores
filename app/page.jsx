'use client'
import Image from 'next/image';
import ProductCard from '@/components/prodcard';
import { stripe } from '@/utils/stripe';

export default async function page() {
  const inventory = await stripe.products.list({
    limit: 8,
  });

  const products = inventory.data.map((product) => {
    const price = product.default_price || {}; // Set default value as an empty object if default_price is null
    return {
      currency: price.currency,
      id: product.id,
      name: product.name,
      price: price.unit_amount || 2200,
      image: product.images[0] || null,
    };
  });

  return (

    <div className='min-h-screen flex flex-col'>
      <main className='flex-grow bg-[#f7f7f7]'>
        <div className='container xl:max-w-screen-xl mx-auto py-12 px-6'>
          <div className='grid gap-8 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
            {products.map((product, index) => (
              <ProductCard index={index} key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}


// export async function getStaticProps(){
     
// }