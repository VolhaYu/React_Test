import { Container, Grid } from '@material-ui/core';
import Favorites from '../components/favorites/Favorites';
import ProductDetails from '../components/productDetails/ProductDetails';

function ProductDetailsPage() {
  return (
    <main className="main">
      <Container maxWidth="xl">
        <Grid container alignItems="center">
          <Grid item xs={4}>
            <Favorites />
          </Grid>
          <Grid item xs={8}>
            <ProductDetails />
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}

export default ProductDetailsPage;
