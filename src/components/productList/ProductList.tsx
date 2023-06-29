import React, { useEffect, useState } from 'react';
// import AutoSizer from 'react-virtualized-auto-sizer';
import { Product, baseUrl, AllProducts } from '../../api/api';
import './ProductList.scss';
import CardItem from '../card/Card';
import { useGlobalState } from '../../state';

function ProductList() {
  const [products, update] = useGlobalState('products');
  const [result, setResult] = useState<[Product]>();
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${AllProducts}`)
      .then((res) => {
        if (!res.ok) {
          throw Error('Сould not fetch the data for that resours');
        }
        return res.json();
      })
      .then((data) => {
        if (!result) {
          setResult(data);
          update(() => data);
        }
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
      });
  }, [result, setResult]);

  return (
    <>
      {isPending && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}
      <div className="product-list">
        {result &&
          !error &&
          result.map((data: Product) => (
            <CardItem
              className="card"
              id={data.id}
              key={data.id}
              src={`${baseUrl}${data.src}`}
              name={data.name}
              price={data.price}
            />
          ))}
      </div>
    </>
  );
}

export default ProductList;
