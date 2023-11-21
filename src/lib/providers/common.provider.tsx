import { DeepRequired } from 'react-hook-form';

import { ICartItem } from '../graphql';
import createGlobalContext from './global.provider';

export interface ICommonState {
  cart: {
    element: HTMLButtonElement | null;
    items: DeepRequired<ICartItem>[];
    update: Function | null;
    updating: boolean;
  };
  popoverEl: HTMLElement | null;
  filters: {
    meta?: {
      minPrice: number | null;
      maxPrice: number | null;
      fetched: number | null;
      max: number | null;
    };
    category: string[];
    price: number[];
    view: 'grid' | 'card';
  };
}
const initialState: ICommonState = {
  cart: {
    element: null,
    items: [],
    update: null,
    updating: false,
  },
  popoverEl: null,
  filters: { category: [], price: [], view: 'grid' },
};

type ICommonActions =
  | { type: 'cart-element'; payload: ICommonState['cart']['element'] }
  | { type: 'cart-items'; payload: ICommonState['cart']['items'] }
  | { type: 'cart-update'; payload: ICommonState['cart']['update'] }
  | { type: 'cart-updating'; payload: ICommonState['cart']['updating'] }
  | { type: 'popover'; payload: ICommonState['popoverEl'] }
  | { type: 'filter-category'; payload: ICommonState['filters']['category'] }
  | { type: 'filter-price'; payload: ICommonState['filters']['price'] }
  | { type: 'filter-view'; payload: ICommonState['filters']['view'] }
  | { type: 'filter-meta'; payload: ICommonState['filters']['meta'] }
  | { type: 'filter-clear' };

function reducer(state: ICommonState, action: ICommonActions): ICommonState {
  switch (action.type) {
    case 'cart-element':
      return { ...state, cart: { ...state.cart, element: action.payload } };
    case 'cart-items':
      return { ...state, cart: { ...state.cart, items: action.payload } };
    case 'cart-update':
      return { ...state, cart: { ...state.cart, update: action.payload } };
    case 'cart-updating':
      return { ...state, cart: { ...state.cart, updating: action.payload } };
    case 'filter-category':
      return {
        ...state,
        filters: { ...state.filters, category: action.payload },
      };
    case 'filter-price':
      return { ...state, filters: { ...state.filters, price: action.payload } };
    case 'filter-view':
      return { ...state, filters: { ...state.filters, view: action.payload } };
    case 'filter-meta':
      return { ...state, filters: { ...state.filters, meta: action.payload } };
    case 'filter-clear':
      return { ...state, filters: initialState.filters };
    case 'popover':
      return { ...state, popoverEl: action.payload };
    default:
      throw new Error();
  }
}

const [ctx, commonProvider] = createGlobalContext(
  reducer,
  initialState,
  'CommonContext',
);

export const CommonContext = ctx;

export const CommonProvider = commonProvider;
