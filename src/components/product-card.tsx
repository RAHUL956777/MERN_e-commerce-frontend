import { FaPlus } from "react-icons/fa";

type ProductCartProps = {
  productId: string;
  photo: string;
  name: string;
  price: number;
  stock: number;
  handler: () => void;
};

const server = "sjbchac5";

const ProductCart = ({
  productId,
  photo,
  name,
  price,
  stock,
}: ProductCartProps) => {
  return (
    <div className="product-card">
      <img src={photo} alt={name} />

      <p>{name}</p>
      <span>₹{price}</span>
      <div>
        <button onClick={()=>handler()}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
