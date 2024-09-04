import { Link } from "react-router-dom";

const ProductCard = ({ info }) => {
  return (
    <Link
      className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md hover:shadow-lg transition duration-300"
      to={`/product/${info.id}`}
    >
      <div className="bg-white rounded-lg overflow-hidden">
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-48 rounded-lg hover:scale-150 transition duration-300"
          src={info.thumbnail}
        />
        <div className="p-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            {info.category}
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            {info.title}
          </h2>
          <p className="mt-1 text-lg font-bold text-gray-900">${info.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;