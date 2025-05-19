import type { OrderItem } from "../types";

type OrderContentProps = {
  order: OrderItem[];
};

export default function OrderContent({ order }: OrderContentProps) {
  return (
    <div>
      <h2 className="font-black text-4xl">Consumo</h2>

      <div className="space-y-3mt-10">
        {order.length === 0 ? (
          <p className="text-center text-xl">No hay consumos aún</p>
        ) : (
          order.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-t border-gray-200 py-5 last-of-type:border-b">
              <div>
                <p className="text-lg">{item.name} - ${item.price}</p>
                <p className="text-sm font-bold">Cantidad: {item.quantity} - ${item.price * item.quantity}</p>
              </div>
              <button className="bg-red-600 h-8 w-8 rounded-full text-white font-black">X</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
