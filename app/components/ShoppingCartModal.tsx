import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
export default function ShoppingCartModal() {
  return (
    <Sheet defaultOpen>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you sure absolutely sure?</SheetTitle>
          <div>
            <h1>hello</h1>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
