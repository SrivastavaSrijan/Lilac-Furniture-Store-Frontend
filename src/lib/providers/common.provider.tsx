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
}
const initialState: ICommonState = {
  cart: {
    element: null,
    items: [],
    update: null,
    updating: false,
  },
  popoverEl: null,
};

type ICommonActions =
  | { type: 'cart-element'; payload: ICommonState['cart']['element'] }
  | { type: 'cart-items'; payload: ICommonState['cart']['items'] }
  | { type: 'cart-update'; payload: ICommonState['cart']['update'] }
  | { type: 'cart-updating'; payload: ICommonState['cart']['updating'] }
  | { type: 'popover'; payload: ICommonState['popoverEl'] };

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
