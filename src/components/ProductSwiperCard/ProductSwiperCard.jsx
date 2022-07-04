import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addItem } from "../../features/cartSlice";

const ProductSwiperCard = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col items-center">
      <Link to={`product/${product.id}`}>
        <img src={product.pictures[0].url} alt={product.name} />
      </Link>
      <h3>{product.name}</h3>
      <span>€{product.price}</span>
      <button
        className="bg-blue-600 rounded p-2"
        onClick={() => {
          dispatch(
            addItem({
              ...product,
              number: 1,
            })
          );
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductSwiperCard;
