import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/createSlice";

function Products() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const handleAdd = (product) => () => {
    dispatch(add(product));
  };

  return (
    <div className="grid grid-cols-3 gap-8">
      {products.map((product) => (
        <div className="card bg-base-100 w-96 shadow-xl" key={product.id}>
          <figure className="px-10 pt-10">
            <img
              src={product.image}
              alt={product.title}
              className="rounded-xl h-24"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{product.title}</h2>
            <p>${product.price}</p>
            <div className="card-actions">
              <button
                onClick={handleAdd(product)}
                className="btn bg-[#764abc] text-white hover:bg-[#513282]"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
