import Desserts from "./components/Desserts.js";
import Cart from "./components/Cart.js";
import { useState, useEffect } from "react";
import Confirmation from "./components/Confirmation.js";

const Dessert = [
  {
    name: "Waffle with berries",
    price: 6.5,
    number: 1,
  },
  {
    name: "Vanilla Bean Creme brulee",
    price: 7.0,
    number: 1,
  },
  {
    name: "Macaron Mix of five",
    price: 8.0,
    number: 1,
  },
];

function App() {
  const [newDessert, setNewDessert] = useState([]);
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

  function handleNewDessert(item) {
    setNewDessert((items) => [...items, { ...item, id: Date.now() }]);
  }

  function handleDeleteDessert(id) {
    setNewDessert((items) => items.filter((item) => item.id !== id));
  }

  useEffect(() => {
    console.log("Updated newDessert:", newDessert);
  }, [newDessert]);

  return (
    <div className="relative">
      <div className="p-7 md:grid md:grid-cols-3 md:grid-rows-1 md:gap-5">
        <Desserts Dessert={Dessert} onAddItems={handleNewDessert} />
        <Cart
          newDessert={newDessert}
          onDeleteItems={handleDeleteDessert}
          onConfirmOrder={() => setIsOrderConfirmed(true)}
        />
      </div>
      {isOrderConfirmed && (
        <Confirmation
          onConfirm={() => setIsOrderConfirmed(false)}
          newDessert={newDessert}
          setIsOrderConfirmed={setIsOrderConfirmed}
          setNewDessert={setNewDessert}
        />
      )}
    </div>
  );
}

export default App;
