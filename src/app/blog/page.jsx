import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

async function getdata() {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

async function blog() {
  const data = await getdata();
  const products = data || [];
console.log(products)
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
        padding: '15px',
      }}
    >
      {products.map((product) => (
        <Link href={`/blog/${product.id}`} style={{ textDecoration: 'none' }} key={product.id}>
          <div
            style={{
              border: '1px solid #555',
              borderRadius: '15px',
              padding: '10px',
              textAlign: 'center',
            }}
          >
            <Image
              src={product. image}
              width={250}
              height={250}
              alt="Hero Image"
              style={{ borderRadius: '15px', width: '100%' }}
            />
            <div>
              <h1 style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }}>
                {product.title}
              </h1>
              <p style={{ color: '#999', fontWeight: 'bold', fontSize: '16px' }}>{product.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default blog;
