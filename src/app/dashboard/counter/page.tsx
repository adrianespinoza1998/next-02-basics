import type { Metadata } from "next";
import { CardCounter } from "@/shopping-cart/component";

export const metadata: Metadata = {
  title: "Shopping Cart",
  description: "A simple shopping cart",
};

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
      <CardCounter value={20} />
    </div>
  );
}
