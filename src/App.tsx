import "./App.css";
import ProductCard from "./components/ProductCard";
import { productList } from "./data";

function App() {
  // ** Renders
  const renderProductList = productList.map((product) => {
    return <ProductCard key={product.id} product={product} />; // ** Renders ProductCard component
  });

  return (
    <main className="container mx-auto">
      <div className="m-5 p-2 grid grid-cols-1 md:grid-cols-2 gap-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-4">
        {renderProductList}
      </div>
    </main>
  );
}

export default App;
