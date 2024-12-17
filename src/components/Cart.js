import Emptycart from "./Emptycart";
import Order from "./Order";

function Cart({ newDessert, onDeleteItems, onConfirmOrder }) {
  return (
    <div
      className={`rounded-md border-sky-50 border-2 shadow-lg flex flex-col px-4 mt-4 ${
        newDessert.length === 0
          ? "h-[17rem] overflow-auto"
          : "h-[29rem] overflow-y-scroll"
      }`}
    >
      <h1 className="text-2xl font-bold text-red-500 mt-5">
        Your Cart ({newDessert.length})
      </h1>
      {newDessert.length === 0 ? (
        <Emptycart />
      ) : (
        <Order
          newDessert={newDessert}
          onDeleteItems={onDeleteItems}
          onConfirmOrder={onConfirmOrder}
        />
      )}
    </div>
  );
}

export default Cart;
