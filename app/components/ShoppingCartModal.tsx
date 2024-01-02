"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useShoppingCart } from "use-shopping-cart";
export default function ShoppingCartModal() {
  const { cartCount, shouldDisplayCart, handleCartClick } = useShoppingCart();
  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent className="sm:max-w-lg w-[90vw]">
        <SheetHeader>
          <SheetTitle>Shopping-cart</SheetTitle>
        </SheetHeader>
        <div className="h-full flex flex-col justify-between">
          <div className="mt-8 flex-1 overflow-y-auto">
            <ul className="-my-6 divide-y divide-gray-200"></ul>
            {cartCount === 0 ? (
              <h1 className="py-6">You dont have any items</h1>
            ) : (
              <h1>hey you have some items</h1>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
