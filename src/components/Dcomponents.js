/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Counterbtn from "./Counterbtn";
import Addtocartbtn from "./Addtocartbtn";

function Dcomponents({
  image,
  alt,
  name,
  description,
  price,

  onAddItems = () => {},
}) {
  const [number, setNumber] = useState(0);
  const [add, setAdd] = useState(false);

  function handleTogglebtn() {
    setAdd((prevAdd) => !prevAdd);
  }

  function sendOrder() {
    if (!add && number > 0) {
      const newOrder = {
        description,
        price,
        number,
        image,
      };
      console.log("Order sent:", newOrder);
      onAddItems?.(newOrder);
    }
    setNumber(0);
  }

  // Call sendOrder when `add` becomes false and number > 0
  useEffect(() => {
    if (!add && number > 0) {
      sendOrder();
    }
  }, [add, number]);

  return (
    <div className="mt-5">
      <div className="relative ">
        <img className="rounded-md  " src={image} alt={alt} />
        <div onClick={handleTogglebtn}>
          {add ? (
            <Counterbtn number={number} setNumber={setNumber} />
          ) : (
            <Addtocartbtn />
          )}
        </div>
      </div>
      <div className="mt-4">
        <h4 className="text-gray-300">{name}</h4>
        <h3 className="font-semibold">{description}</h3>
        <span className="text-red-400">${price}</span>
      </div>
    </div>
  );
}

Dcomponents.propTypes = {
  onAddItems: PropTypes.func,
};

export default Dcomponents;
