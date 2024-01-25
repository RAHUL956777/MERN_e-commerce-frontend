import { FaPlus } from "react-icons/fa";
import { server } from "../redux/store";

type ProductCartProps = {
  productId: string;
  photo: string;
  name: string;
  price: number;
  stock: number;
  handler: () => void;
};

const handler = () => {};

const ProductCart = ({
  productId,
  photo,
  name,
  price,
  stock,
}: ProductCartProps) => {
  return (
    <div className="product-card">
      <img src={`${server}/${photo}`} alt={name} />

      <p>{name}</p>
      <span>₹{price}</span>
      <div>
        <button onClick={() => handler()}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
