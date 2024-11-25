import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
const Gadgets = ({ data }) => {
  const { product_image, product_title, price, id } = data;
  return (
    <div className="card card-compact bg-base-100  shadow-md border-2">
      <div className="rounded-lg p-4 h-56 2xl:h-64">
        {product_image ? (
          <img
            src={product_image}
            alt={data}
            className="object-cover border-2 rounded-lg h-full w-full"
          />
        ) : (
          <div className="h-44 2xl:h-56 flex  card card-compact justify-center items-center bg-gray-100 text-gray-500">
            No Image
          </div>
        )}
      </div>
      <div className="card-body pt-0">
        <h2 className="card-title font-bold ">{product_title}</h2>
        <p className="font-medium">
          <span>Price:</span> $ {price}{' '}
        </p>
        <div className="card-actions">
          <Link to={`/details/${id}`}>
            {' '}
            <button className="btn  text-prime border-2 font-medium hover:bg-prime hover:text-white border-prime rounded-full  ">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gadgets;
