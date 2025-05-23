import MenuItem from "./components/MenuItem";
import OrderTotals from "./components/OrderTotals";
import OrderContent from "./components/OrderContent";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";
import TipPercentageForm from "./components/TipPercentageForm";

function App() {
  const { order, tip, setTip, addItem, removeItem, placeOrder } = useOrder();

  return (
    <>
      <header className="bg-teal-400 py-10">
        <h1 className="text-center text-3xl font-bold">
          Calculadora de consumos
        </h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2 grid-cols-1 ">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menu</h2>

          <div className="space-y-3 mt-10">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>

        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {order.length > 0 ? (
            <>
              <OrderContent order={order} removeItem={removeItem} />
              <TipPercentageForm setTip={setTip} tip={tip} />
              <OrderTotals order={order} tip={tip} placeOrder={placeOrder} />
            </>
          ) : (
            <p className="text-center text-xl">No hay consumos aún</p>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
