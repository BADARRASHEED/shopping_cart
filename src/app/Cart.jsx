import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/createSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  return (
    <>
      <h3 className="py-[25px] text-center text-5xl text-[#764abc] font-semibold mb-8 mt-20">
        Your Cart ❤️
      </h3>
      <div>
        {products.map((product) => (
          <div
            key={product.id}
            className="card bg-base-100 shadow-xl w-[100%] mb-12"
          >
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
              <div className="card-actions w-[100%]">
                <button
                  className="btn w-[100%] bg-[#764abc] text-white hover:bg-[#513282]"
                  onClick={() => handleRemove(product.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
