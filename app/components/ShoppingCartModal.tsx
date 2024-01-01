import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
export default function ShoppingCartModal() {
  return (
    <Sheet defaultOpen>
      <SheetContent className="sm:max-w-lg w-[90vw]">
        <SheetHeader>
          <SheetTitle>Are you sure absolutely sure?</SheetTitle>
          <div>
            <h1>hello</h1>
          </div>
        </SheetHeader>
        <div className="h-full flex flex-col justify-between">
          <div className="mt-8 flex-1 overflow-y-auto">
            <ul className="-my-6 divide-y divide-gray-200"></ul>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
