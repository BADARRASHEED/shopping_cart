import Products from "../components/Products";

function Home() {
  return (
    <div>
      <h2 className="py-[25px] text-center text-5xl text-[#764abc] font-semibold mb-8 mt-20 underline">
        Welcome to Badar Store
      </h2>
      <section>
        <h3 className="text-center text-5xl text-[#764abc] font-semibold mb-8">
          Our Products
        </h3>
        <Products />
      </section>
    </div>
  );
}

export default Home;
