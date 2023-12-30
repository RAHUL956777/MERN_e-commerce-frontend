import { Link } from "react-router-dom";
import ProductCard from "../components/product-card";

const Home = () => {
  const addToCartHandler = () => {};

  return (
    <div className="home">
      <section></section>

      <h1>
        Latest Products{" "}
        <Link to={"/search"} className="findmore">
          More
        </Link>
      </h1>

      <main>
        <ProductCard
          productId="1"
          name="mobile"
          price={10005}
          stock={200}
          handler={addToCartHandler}
          photo="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/1/i/x/-original-imagtc6fhhtqjnr9.jpeg?q=70"
        />
      </main>
    </div>
  );
};

export default Home;
