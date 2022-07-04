import { useParams } from "react-router-dom";
const ProductPage = () => {
  let { id } = useParams();
  return <div>Single product page: {id}</div>;
};

export default ProductPage;
