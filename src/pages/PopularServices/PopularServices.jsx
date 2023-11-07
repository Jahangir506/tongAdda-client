import { Link } from "react-router-dom";

const PopularServices = ({service}) => {
  const {
    _id,
    service_image,
    service_name,
    service_description,
    service_price,
  } = service || {};
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={service_image} alt="Shoes" className="h-64 w-96 object-fill"/>
        </figure>
        <div className="card-body p-4np">
          <h2 className="card-title text-center text-3xl">{service_name}</h2>
          <p className="my-4">
            {service_description.slice(0, 50)}{" "}
            <span className="text-blue-700 hover:underline font-medium">
              read...
            </span>
          </p>
          <div className="card-actions justify-between">
            <p className="">Price: {service_price}</p>
            <Link to={`/services/singleService/${_id}`}>
              <button className="btn btn-sm text-white border-none bg-darkBrown hover:bg-darkBrownHover">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );}
export default PopularServices;
