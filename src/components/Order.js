function Order({ newDessert, onDeleteItems, onConfirmOrder }) {
  // Calculate subtotal dynamically
  const subtotal = newDessert.reduce(
    (acc, sert) => acc + sert.number * parseFloat(sert.price),
    0
  );

  return (
    <div>
      <ul className="mt-3">
        {newDessert.map((sert) => (
          <Orders sert={sert} key={sert.id} onDeleteItems={onDeleteItems} />
        ))}
      </ul>
      <div className="flex justify-between items-center py-4">
        <h4 className="text-sm">Order Total</h4>
        <span className="font-bold text-2xl">${subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-center items-center bg-amber-50 h-12">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            fill="none"
            viewBox="0 0 21 20"
          >
            <path
              fill="#1EA575"
              d="M8 18.75H6.125V17.5H8V9.729L5.803 8.41l.644-1.072 2.196 1.318a1.256 1.256 0 0 1 .607 1.072V17.5A1.25 1.25 0 0 1 8 18.75Z"
            />
            <path
              fill="#1EA575"
              d="M14.25 18.75h-1.875a1.25 1.25 0 0 1-1.25-1.25v-6.875h3.75a2.498 2.498 0 0 0 2.488-2.747 2.594 2.594 0 0 0-2.622-2.253h-.99l-.11-.487C13.283 3.56 11.769 2.5 9.875 2.5a3.762 3.762 0 0 0-3.4 2.179l-.194.417-.54-.072A1.876 1.876 0 0 0 5.5 5a2.5 2.5 0 1 0 0 5v1.25a3.75 3.75 0 0 1 0-7.5h.05a5.019 5.019 0 0 1 4.325-2.5c2.3 0 4.182 1.236 4.845 3.125h.02a3.852 3.852 0 0 1 3.868 3.384 3.75 3.75 0 0 1-3.733 4.116h-2.5V17.5h1.875v1.25Z"
            />
          </svg>
        </span>
        <p className="text-sm">This is a carbon-neutral delivery</p>
      </div>
      <button
        className="flex justify-center items-center bg-red-400 text-white w-[500px] md:w-[350px] h-[40px] rounded-full mt-6"
        onClick={onConfirmOrder}
      >
        Confirm Order
      </button>
    </div>
  );
}

function Orders({ sert, onDeleteItems }) {
  const totalOrder = sert.number * parseFloat(sert.price);
  return (
    <div className="flex justify-between border-b-2 border-gray-100 pb-4 pt-2 items-center">
      <div className="flex flex-col gap-1">
        <h3>{sert.description}</h3>
        <div className="text-xs flex gap-2 ">
          <span className="text-red-400 px-3 font-bold">{sert.number}X</span>
          <span className="text-gray-300">@${sert.price}</span>
          <span className="text-gray-400">${totalOrder.toFixed(2)}</span>
        </div>
      </div>
      <span
        className="flex items-center justify-center text-gray-400 border-1 border-gray-400 rounded-full h-4 w-4 text-lg hover:text-black cursor-pointer"
        onClick={() => onDeleteItems(sert.id)}
      >
        &times;
      </span>
    </div>
  );
}

export default Order;
