import { Link } from "react-router-dom";
import ProductCard from "../components/product-card";
import { useLatestProductsQuery } from "../redux/api/productAPI";
import toast from "react-hot-toast";
import { Skeleton } from "../components/loader";

const Home = () => {
  const { data, isLoading, isError } = useLatestProductsQuery("");
  console.log("userdata", data);

  const addToCartHandler = () => {};

  if (isError) toast.error("Cannot fetch the products");

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
        {isLoading ? (
          <Skeleton />
        ) : (
          data?.products.map((i) => (
            <ProductCard
              key={i._id}
              productId={i._id}
              name={i.name}
              price={i.price}
              stock={i.stock}
              handler={addToCartHandler}
              photo={i.photo}
            />
          ))
        )}
      </main>
    </div>
  );
};

export default Home;
