"use client";
import { CartProvider as USCProvider } from "use-shopping-cart";
export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <USCProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
      successUrl="http://commerce-next-yt.vercel.app/stripe/success"
      cancelUrl="http://commerce-next-yt.vercel.app/stripe/error"
      currency="USD"
      billingAddressCollection={true}
      shouldPersist={true}
      language="en-US"
    >
      {children}
    </USCProvider>
  );
}
