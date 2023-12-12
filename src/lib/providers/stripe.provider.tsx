import { Elements } from '@stripe/react-stripe-js';
import { loadStripe, StripeElementsOptions } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY ?? '');

const options: StripeElementsOptions = {
  mode: 'payment',
  currency: 'inr',
};
interface IStripeProviderProps {
  children: JSX.Element;
  amount: number;
}
export const StripeProvider = ({ children, amount }: IStripeProviderProps) => (
  <Elements stripe={stripePromise} options={{ ...options, amount }}>
    {children}
  </Elements>
);
