import React from 'react';
import { Container } from '@material-ui/core';
import { Grid } from '@mui/material';
import ProductList, { Example } from '../components/productList/ProductList';
import Favorites from '../components/favorites/Favorites';

function ProductListPage() {
  return (
    <main className="main">
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={4}>
            <Favorites />
          </Grid>
          <Grid item xs={8} height={1153}>
            <Example />
            {/* <ProductList /> */}
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}

export default ProductListPage;
