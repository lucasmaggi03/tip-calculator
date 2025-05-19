import type { MenuItem } from "../types/index";

type MenuItemsProps = {
  item: MenuItem;
  addItem: (item: MenuItem) => void;
};

export default function MenuItem({ item, addItem }: MenuItemsProps) {
  return (
    <button
      className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between"
      onClick={() => addItem(item)}
    >
      <p className="text-lg font-bold">{item.name}</p>
      <p className="text-lg font-bold">${item.price}</p>
    </button>
  );
}
