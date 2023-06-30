import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ReactImageMagnify from 'react-image-magnify';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import { useNavigate } from 'react-router-dom';
import { Product } from '../../api/api';
import { useGlobalState } from '../../state/index';
import './card.scss';

function CardItem({ src, name, price, id, className }: Product) {
  const navigate = useNavigate();
  const [likesId, setLikesId] = useGlobalState('likesId');
  const [favoritCard, setFavoritCard] = useGlobalState('favoriteCard');
  const [products] = useGlobalState('products');
  const [cardId, setCardId] = useGlobalState('cardDetails');

  const onClick = (e: React.SyntheticEvent) => {
    setCardId(e.currentTarget.id);
    navigate('/details');
  };

  const HendleFavorite = (e: React.SyntheticEvent) => {
    const currentId = e.currentTarget.id;
    if (!likesId.includes(currentId)) {
      products.forEach((item) => {
        item.id === +currentId ? setFavoritCard(() => [...favoritCard, item]) : item;
      });
      setLikesId(() => [...likesId, currentId]);
    } else {
      const idRemove = likesId.indexOf(currentId);
      const copy = [...likesId];
      copy.splice(idRemove, 1);
      setLikesId(() => copy);
      const copyFavorit = [...favoritCard];
      copyFavorit.splice(idRemove, 1);
      setFavoritCard(() => copyFavorit);
    }
  };

  return (
    <div className={className}>
      <div className="wrap-img" id={String(id)} onClick={onClick}>
        {className === 'card-details' ? (
          <>
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: 'img product',
                  isFluidWidth: true,
                  src: `${src}`,
                },
                largeImage: {
                  src: `${src}`,
                  width: 1200,
                  height: 1800,
                },
                isHintEnabled: true,
              }}
            />
            <ZoomInIcon className="zoom-icon" />
          </>
        ) : (
          <img className="img" src={src} alt="img" />
        )}
      </div>
      <div className="wrap-content">
        <p className="title">{name} </p>
        <div className="content-flex">
          <p className="price">$ {price}</p>
          <FavoriteIcon
            className={likesId.includes(String(id)) ? 'icon icon-active' : 'icon'}
            id={String(id)}
            onClick={HendleFavorite}
          />
        </div>
      </div>
    </div>
  );
}

export default CardItem;
