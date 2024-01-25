import { Link } from "react-router-dom";
import ProductCard from "../components/product-card";
import { useLatestProductsQuery } from "../redux/api/productAPI";

const Home = () => {
  const { data } = useLatestProductsQuery("");
  console.log("userdata", data);

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
        {data?.products.map((i) => (
          <ProductCard
            key={i._id}
            productId={i._id}
            name={i.name}
            price={i.price}
            stock={i.stock}
            handler={addToCartHandler}
            photo={i.photo}
          />
        ))}
        :<p>error</p>
      </main>
    </div>
  );
};

export default Home;
