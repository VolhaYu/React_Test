import { createGlobalState } from 'react-hooks-global-state';
import { Product } from '../api/api';

type State = {
  likesId: string[];
  favoriteCard: Product[];
  products: Product[];
  cardDetails: string;
};

const initialState: State = {
  likesId: [],
  products: [],
  favoriteCard: [],
  cardDetails: '' || JSON.parse(`${localStorage.getItem('detailsId')}`),
};
const { setGlobalState, useGlobalState } = createGlobalState(initialState);

export { setGlobalState, useGlobalState };
