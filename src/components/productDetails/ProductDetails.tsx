import React, { useEffect, useState } from 'react';
import { useGlobalState } from '../../state/index';
import { AllProducts, Product, baseUrl } from '../../api/api';
import CardItem from '../card/Card';

function ProductDetails() {
  const [cardId] = useGlobalState('cardDetails');
  const cardDetailsUrl = `${AllProducts}?id=${cardId}`;

  const [result, setResult] = useState<Product>();
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${cardDetailsUrl}`)
      .then((res) => {
        if (!res.ok) {
          throw Error('Сould not fetch the data for that resours');
        }
        return res.json();
      })
      .then((data) => {
        if (!result) {
          setResult(data);
          localStorage.setItem('detailsId', JSON.stringify(data.id));
        }
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
      });
  }, [cardDetailsUrl, result]);

  return (
    <>
      {isPending && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}
      {result && !error && (
        <CardItem
          className="card-details"
          id={result.id}
          src={`${baseUrl}${result.src}`}
          name={result.name}
          price={result.price}
        />
      )}
    </>
  );
}

export default ProductDetails;
