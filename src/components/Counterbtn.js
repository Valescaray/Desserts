function Counterbtn({ number, setNumber }) {
  function handleIncrease(e) {
    e.preventDefault();
    e.stopPropagation();
    setNumber((prevNumber) => prevNumber + 1);
  }

  function handleDecrease(e) {
    e.preventDefault();
    e.stopPropagation(); // Prevent triggering parent onClick
    setNumber((prevNumber) => Math.max(0, prevNumber - 1)); // Prevent negative numbers
  }

  return (
    <button className="flex border-red-400 shadow-xl border-2 bg-red-400 rounded-full  w-36 h-9 justify-center items-center gap-9 center">
      <span
        className="font-bold text-white border-white border-2 text-[15px] rounded-full w-6 h-6 flex items-center justify-center"
        onClick={handleDecrease}
      >
        -
      </span>
      <span>{number}</span>
      <span
        className="font-bold text-white border-white border-2 text-[15px] rounded-full w-6 h-6 flex items-center justify-center"
        onClick={handleIncrease}
      >
        +
      </span>
    </button>
  );
}

export default Counterbtn;
