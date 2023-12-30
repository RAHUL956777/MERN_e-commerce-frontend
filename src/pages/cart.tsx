import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";

const cartItems = [];
const Subtotal = 12000;
const tax = Math.round(Subtotal * 0.18);
const shippingChanregs = 100;
const discount = 300;
const total = Subtotal + tax + shippingChanregs;

const Cart = () => {
  const [couponCode, setCouponCode] = useState<string>("");
  const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);

  useEffect(() => {
    const tineOutId = setTimeout(() => {
      if (Math.random() > 0.5) {
        setIsValidCouponCode(true);
      } else {
        setIsValidCouponCode(false);
      }
    }, 1000);

    return () => {
      clearTimeout(tineOutId);
      setIsValidCouponCode(false);
    };
  }, [couponCode]);

  return (
    <div className="cart">
      <main></main>
      <aside>
        <p>Subtotal: ₹{Subtotal} </p>
        <p>Shipping Chanregs: ₹{shippingChanregs} </p>
        <p>Tax: ₹{tax} </p>
        <p>
          Discount: <em> - ₹{discount}</em>{" "}
        </p>
        <p>
          <b>Total: ₹{total}</b>
        </p>
        <input
          type="text"
          value={couponCode}
          placeholder="Coupon Code"
          onChange={(e) => setCouponCode(e.target.value)}
        />

        {couponCode &&
          (isValidCouponCode ? (
            <span className="green">
              ₹{discount} off using the <code>{couponCode}</code>
            </span>
          ) : (
            <span className="red">
              Invalid Coupon Code <VscError />
            </span>
          ))}
      </aside>
    </div>
  );
};

export default Cart;
