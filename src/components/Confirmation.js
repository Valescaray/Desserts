function Confirmation({
  onConfirm,
  newDessert,
  setIsOrderConfirmed,
  setNewDessert,
}) {
  const subtotal = newDessert.reduce(
    (acc, sert) => acc + sert.number * parseFloat(sert.price),
    0
  );

  function handleConfirm(e) {
    e.preventDefault();

    setIsOrderConfirmed(false);
    setNewDessert([]);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onConfirm} // Close modal on overlay click
      ></div>
      <div className="relative z-10 bg-white rounded-lg shadow-lg p-8 w-[90%] max-w-md ">
        <span>
          <svg
            width="40"
            height="40"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 32.121L13.5 24.6195L15.6195 22.5L21 27.879L32.3775 16.5L34.5 18.6225L21 32.121Z"
              fill="#1EA575"
            />
            <path
              d="M24 3C19.8466 3 15.7865 4.23163 12.333 6.53914C8.8796 8.84665 6.18798 12.1264 4.59854 15.9636C3.0091 19.8009 2.59323 24.0233 3.40352 28.0969C4.21381 32.1705 6.21386 35.9123 9.15077 38.8492C12.0877 41.7861 15.8295 43.7862 19.9031 44.5965C23.9767 45.4068 28.1991 44.9909 32.0364 43.4015C35.8736 41.812 39.1534 39.1204 41.4609 35.667C43.7684 32.2135 45 28.1534 45 24C45 18.4305 42.7875 13.089 38.8493 9.15076C34.911 5.21249 29.5696 3 24 3ZM24 42C20.4399 42 16.9598 40.9443 13.9997 38.9665C11.0397 36.9886 8.73256 34.1774 7.37018 30.8883C6.0078 27.5992 5.65134 23.98 6.34587 20.4884C7.04041 16.9967 8.75474 13.7894 11.2721 11.2721C13.7894 8.75473 16.9967 7.0404 20.4884 6.34587C23.98 5.65133 27.5992 6.00779 30.8883 7.37017C34.1774 8.73255 36.9886 11.0397 38.9665 13.9997C40.9443 16.9598 42 20.4399 42 24C42 28.7739 40.1036 33.3523 36.7279 36.7279C33.3523 40.1036 28.7739 42 24 42Z"
              fill="#1EA575"
            />
          </svg>
        </span>
        <h2 className="text-3xl font-bold">Order Confirmed</h2>
        <h3 className="text-xs text-amber-900">We hope you enjoy your food</h3>

        <ul className="mt-4 bg-amber-50 p-2 rounded-md ">
          {newDessert.map((sert) => (
            <Confirm sert={sert} key={sert.id} />
          ))}
        </ul>

        <div className="flex justify-between items-center py-4">
          <h4 className="text-sm">Order Total</h4>
          <span className="font-bold text-2xl">${subtotal.toFixed(2)}</span>
        </div>
        <button
          className="flex justify-center items-center bg-red-400 text-white w-[390px] md:w-[370px] h-[40px] rounded-full mt-6"
          onClick={handleConfirm}
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
}

function Confirm({ sert }) {
  const totalOrder = sert.number * parseFloat(sert.price);
  return (
    <div className="">
      <div
        className="flex justify-between items-center border-b-2 border-gray mb-3
     "
      >
        <div className="flex gap-3 mb-3">
          <img
            className="h-12 w-12"
            src={sert.image}
            alt={sert.description}
            s
          />
          <div className="flex flex-col gap-1">
            <h3>{sert.description}</h3>
            <div>
              <span className="text-red-400 px-3 font-bold text-sm">
                {sert.number}X
              </span>
              <span className="text-gray-300">@${sert.price}</span>
            </div>
          </div>
        </div>

        <span className="text-gray-400 self-center">
          ${totalOrder.toFixed(2)}
        </span>
      </div>
    </div>
  );
}

export default Confirmation;
