import { useSelector } from "react-redux";

import { FaShoppingCart } from "react-icons/fa";

const CartNavButton = () => {
  const itemCount = useSelector((state) => state.cart.itemCount);
  return (
    <button className="relative text-white bg-blue-600 rounded p-2.5">
      <FaShoppingCart />
      {itemCount ? (
        <div className="w-5 h-5 text-sm font-bold absolute -top-2 -right-2 bg-red-500 rounded-full">
          {itemCount}
        </div>
      ) : null}
    </button>
  );
};

export default CartNavButton;
