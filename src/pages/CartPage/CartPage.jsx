import { useSelector } from "react-redux";

const CartPage = () => {
  const items = useSelector((state) => state.cart.items);
  if (items )
  return <div>This is cart page.</div>;
};

export default CartPage;
