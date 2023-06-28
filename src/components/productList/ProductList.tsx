import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
// import AutoSizer from 'react-virtualized-auto-sizer';
import { Product, baseUrl, AllProducts } from '../../api/api';
import './ProductList.scss';
import CardItem from '../card/Card';

function ProductList() {
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
        }
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
      });
  }, [result]);

  return (
    <>
      {isPending && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}
      <div className="product-list">
        {result &&
          !error &&
          result.map((data: Product) => (
            <CardItem
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

// {
//   <Grid container>
//         {result &&
//           !error &&
//           result.map((data: Product) => (
//             <Grid item xs={3}>
//               <CardItem
//                 key={data.id}
//                 src={`${baseUrl}${data.src}`}
//                 name={data.name}
//                 price={data.price}
//               />
//             </Grid>
//           ))}
//       </Grid>
// }
