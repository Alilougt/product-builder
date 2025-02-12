import "./App.css";
import ProductCard from "./components/ProductCard";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import Modal from "./components/ui/Modal";
import { formInputsList, productList } from "./data";
import { ChangeEvent, useState } from "react";
import { IProduct } from "./interfaces";

function App() {
  /* STATE */
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState<IProduct>({
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  });

  /* HANDLER */
  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  /* RENDER */
  const renderProductList = productList.map((product) => {
    return <ProductCard key={product.id} product={product} />; // ** Renders ProductCard component
  });
  const randerFormInputsList = formInputsList.map((input) => {
    return (
      <div className="flex flex-col">
        <label
          htmlFor={input.id}
          className="mb-[1px] text-sm font-medium text-gray-700"
        >
          {input.label}
        </label>
        <Input
          type="text"
          id={input.id}
          name={input.name}
          value={product[input.name]}
          onChange={onChangeHandler}
        />
      </div>
    );
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
        <form className="space-y-3">
          {randerFormInputsList}
          <div className="flex items-center space-x-3">
            <Button className="bg-indigo-700 hover:bg-indigo-600">
              Submit
            </Button>
            <Button className="bg-gray-600 hover:bg-gray-400">Cancel</Button>
          </div>
        </form>
      </Modal>
    </main>
  );
}

export default App;
