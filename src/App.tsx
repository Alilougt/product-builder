import "./App.css";
import ProductCard from "./components/ProductCard";
import Button from "./components/ui/Button";
import Modal from "./components/ui/Modal";
import { productList } from "./data";
import { useState } from "react";

function App() {
  /* STATE */
  const [isOpen, setIsOpen] = useState(false);

  /* HANDLER */
  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  /* RENDER */
  const renderProductList = productList.map((product) => {
    return <ProductCard key={product.id} product={product} />; // ** Renders ProductCard component
  });

  return (
    <main className="container mx-auto">
      <Button className="bg-indigo-700 hover:bg-indigo-600" onClick={open}>
        Add Product
      </Button>
      <div className="m-5 p-2 grid grid-cols-1 md:grid-cols-2 gap-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-4">
        {renderProductList}
      </div>
      <Modal isOpen={isOpen} close={close} title="Add A New Product">
        <div className="flex items-center space-x-3">
          <Button className="bg-indigo-700 hover:bg-indigo-600">Submit</Button>
          <Button className="bg-gray-600 hover:bg-gray-400">Cancel</Button>
        </div>
      </Modal>
    </main>
  );
}

export default App;
