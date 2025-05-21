
import type { MenuItem, OrderItem } from "../types";

type OrderContentProps = {
  order: OrderItem[];
  removeItem: (id: MenuItem["id"]) => void;
};

export default function OrderContent({ order, removeItem }: OrderContentProps) {

  return (
    <div>
      <h2 className="font-black text-4xl">Consumo</h2>

      <div className="space-y-3mt-10">
        {order.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-t border-gray-200 py-5 last-of-type:border-b"
            >
              <div>
                <p className="text-lg">
                  {item.name} - ${item.price}
                </p>
                <p className="text-sm font-bold">
                  Cantidad: {item.quantity} - ${item.price * item.quantity}
                </p>
              </div>
              <button
                className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
                onClick={() => removeItem(item.id)}
              >
                X
              </button>
            </div>
          ))
        }
      </div>
    </div>
  );
}
