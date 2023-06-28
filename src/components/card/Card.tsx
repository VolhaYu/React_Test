import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Product } from '../../api/api';
import './card.scss';

function CardItem({ src, name, price }: Product) {
  return (
    <div className="card">
      <div className="wrap-img">
        <img className="img" src={src} alt="img" />
      </div>
      <div className="wrap-content">
        <p className="title">{name} </p>
        <div className="content-flex">
          <p className="price">$ {price}</p>
          <FavoriteIcon className="icon" />
        </div>
      </div>
    </div>
  );
}

export default CardItem;

// {
//   /* <Card className="card">
// <CardMedia component="img" height="232" src={src} alt="img" />
// <CardContent>
//   <Typography variant="subtitle1">{name} </Typography>
// </CardContent>
// <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//   <Typography variant="h5">{price}</Typography>
//   <FavoriteIcon />
// </Box>
// </Card> */
// }
