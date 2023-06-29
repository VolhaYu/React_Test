/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ReactImageMagnify from 'react-image-magnify';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import { useLocation, useNavigate } from 'react-router-dom';
import { Product } from '../../api/api';
import { useGlobalState } from '../../state/index';
import './card.scss';

function CardItem({ src, name, price, id, className }: Product) {
  const navigate = useNavigate();
  const location = useLocation();
  const [likesId, setLikesId] = useGlobalState('likesId');
  const [favoritCard, setFavoritCard] = useGlobalState('favoriteCard');
  const [products] = useGlobalState('products');
  const [cardId, setCardId] = useGlobalState('cardDetails');
  // let isLike = false;

  const onClick = (e: React.SyntheticEvent) => {
    setCardId(e.currentTarget.id);
    navigate('/details');
  };

  const HendleFavorite = (e: React.SyntheticEvent) => {
    // e.currentTarget.classList.toggle('icon-active');
    const like = e.currentTarget as HTMLElement;
    const currentId = e.currentTarget.id;
    if (!likesId.includes(currentId)) {
      like.style.color = '#414141';
      products.forEach((item) => {
        item.id === +currentId ? setFavoritCard(() => [...favoritCard, item]) : item;
      });
      setLikesId(() => [...likesId, currentId]);
    } else {
      like.style.color = '#FBFBFB';
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
        {location.pathname.split('/')[1] === 'details' ? (
          <>
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: 'Wristwatch by Ted Baker London',
                  isFluidWidth: true,
                  src: `${src}`,
                  sizes: '(min-width: 448px) 33.5vw, (min-width: 415px) 50vw, 100vw',
                },
                largeImage: {
                  alt: '',
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
          <FavoriteIcon className="icon" id={String(id)} onClick={HendleFavorite} />
        </div>
      </div>
    </div>
  );
}

export default CardItem;
