import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCheck } from "lucide-react";
export default function stripeSuccess() {
  return (
    <div className="h-screen">
      <div className="mt-12 md:max-w-[50vw] mx-auto">
        <CheckCheck className="text-green-600 w-16 h16 mx-auto my-6" />
        <div className="text-center">
          <h3 className="md:text-2xl text-base test-gray-900 font-semibold text-center">
            Payment Done !
          </h3>
          <p className="text-gray-600 my-2">
            Thank you for your purchase. We will send you a confirmation email
            shortly.
          </p>
          <p>have a great day !</p>
          <Button asChild className="mt-5">
            <Link href="/">Go back</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
