import { useMemo } from "react";
import type { OrderItem } from "../types";

type OrderTotalsProps = {
  order: OrderItem[];
  tip: number;
  placeOrder: () => void;
  
};

export default function OrderTotals({ order, tip, placeOrder }: OrderTotalsProps) {
  const subTotalAmout = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );

  
  const tipAmount = useMemo(() => subTotalAmout * tip ,[tip, order])
  
  const totalAmount = useMemo(() => subTotalAmout + tipAmount,[order, tip]) 

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Total</h2>
        <p>
          Subtotal a pagar:<span className="font-bold"> ${subTotalAmout}</span>
        </p>

        <p>
          Propina:<span className="font-bold"> ${tipAmount}</span>
        </p>

        <p>
          Total a pagar:<span className="font-bold"> ${totalAmount}</span>
        </p>
      </div>

      <button className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10 hover:" disabled={totalAmount === 0 || order.length === 0} onClick={placeOrder}>
        Guardar Orden
      </button>
    </>
  );
}
