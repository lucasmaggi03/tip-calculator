import { useState } from "react";
import type { MenuItem, OrderItem } from "../types/index";

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0);


  const addItem = (item: MenuItem) => {
    const newItem: OrderItem = { ...item, quantity: 1 };
    setOrder([...order, newItem]);

    const existItem = order.find((orderItem) => orderItem.id === item.id);
    if (existItem) {
      const updatedOrder = order.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );
      setOrder(updatedOrder);
    } else {
      setOrder([...order, newItem]);
    }
  };

  const removeItem = (id: MenuItem['id']) => {
    setOrder(order.filter((item) => item.id !== id));
  }

  const placeOrder = () => {
    setOrder([]);
    setTip(0);
    console.log("Orden guardada");
  }

  return {
    order,
    tip,
    setTip,
    addItem,
    removeItem,
    placeOrder
  };
}
