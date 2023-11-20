import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

const ShowAllServicesCard = ({ service }) => {
  
  const {
    _id,
    service_image,
    service_name,
    service_description,
    service_price,
    service_area,
    service_provider,
  } = service || {};

  return (
    <>
    <Helmet>
      <title>TongAdda || ShowAllServices</title>
    </Helmet>
      <div className="card w-full border">
        <figure>
          <img
            src={service_image}
            alt="Shoes"
            className="h-96 w-full object-fill"
          />
        </figure>
        <div className="flex items-center gap-4 px-4 py-2">
          <div className="avatar">
            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div className="">
            <span>
              Provider by{" "}
              <span className="font-medium">
                {service_provider.provider_name}
              </span>
              , {service_area}
            </span>
          </div>
        </div>
        <div className="card-body">
          <div>
            <h2 className="card-title text-center text-3xl">{service_name}</h2>
            <p className="my-4 w-[600px]">
              {service_description?.slice(0, 100)}
              <span className="text-blue-700 hover:underline font-medium ml-0.5 cursor-pointer">
                <span>Read...</span>
              </span>
            </p>
          </div>
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
  );
};

ShowAllServicesCard.propTypes = {
  service: PropTypes.node
}

export default ShowAllServicesCard;
