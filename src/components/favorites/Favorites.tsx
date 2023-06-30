import './favorites.scss';
import { useGlobalState } from '../../state/index';
import CardItem from '../card/Card';
import { Product, baseUrl } from '../../api/api';

function Favorites() {
  const [favoritCard] = useGlobalState('favoriteCard');

  return (
    <>
      <div className="wrap-favorites">
        <h3 className="h3-favorites">FAVORITES</h3>
        <div className="wrap-block">
          {favoritCard &&
            favoritCard.map((data: Product) => (
              <CardItem
                className="card-favorite"
                id={data.id}
                key={data.id}
                src={`${baseUrl}${data.src}`}
                name={data.name}
                price={data.price}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default Favorites;
