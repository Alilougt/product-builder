import { IProduct } from "../interfaces";
import Image from "./Image";
import Button from "./ui/Button";
import { sliceText } from "./utilts/functions.ts";
interface Iprops {
  product: IProduct;
}
const ProductCard = ({ product }: Iprops) => {
  const { title, description, imageURL, category } = product;
  // max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col space-y-3
  return (
    <div className="max-w-sm mx-auto md:max-w-lg md:mx-0 border border-gray-400 flex flex-col p-2 rounded-lg">
      <Image
        imageUrl={imageURL}
        alt="Product Name"
        className="rounded-md h-52 w-full lg: object-cover"
      />
      <h3 className="text-lg font-semibold my-4">{title} </h3>
      <p className="text-sm text-gray-500 break-words">
        {sliceText(description, 100)}
      </p>
      <div className="flex items-center my-4 space-x-2">
        <span className="w-5 h-5 bg-stone-700 rounded-full inline-block cursor-pointer" />
        <span className="w-5 h-5 bg-green-700 rounded-full inline-block cursor-pointer" />
        <span className="w-5 h-5 bg-red-700 rounded-full inline-block cursor-pointer" />
      </div>
      <div className="flex items-center justify-between ">
        <span>500,000$</span>
        <Image
          imageUrl={category.imageURL}
          alt={category.name}
          className="w-8 h-8 rounded-full"
        />
      </div>
      <div className="flex items-center justify-between space-x-2 mt-5">
        <Button
          className="bg-indigo-700 hover:bg-indigo-600 "
          onClick={() => {
            console.log("Edit button clicked");
          }}
          width="w-full"
        >
          Edit
        </Button>
        <Button className="bg-red-700 hover:bg-red-600 " width="w-full">
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
