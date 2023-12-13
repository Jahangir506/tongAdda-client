// import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

// const PopularServices = ({ service }) => {
//   const {
//     _id,
//     service_image,
//     service_name,
//     service_description,
//     service_price,
//   } = service || {};
//   return (
//     <>
//       <div className="card w-72 lg:w-96 bg-base-100 shadow-xl -skew-x-6">
//         <figure>
//           <img
//             src={service_image}
//             alt="Shoes"
//             className="h-40 lg:h-64 w-96 object-fill"
//           />
//         </figure>
//         <div className="card-body p-3 lg:p-4">
//           <h2 className="card-title text-center text-3xl">{service_name}</h2>
//           <p className="my-0 lg:my-4">
//             {service_description?.slice(0, 50)}{" "}
//             <span className="text-blue-700 hover:underline font-medium">
//               read...
//             </span>
//           </p>
//           <div className="card-actions justify-between">
//             <p className="">Price: {service_price}</p>
//             <Link to={`/services/singleService/${_id}`}>
//               <button className="btn btn-sm text-white border-none bg-darkBrown hover:bg-darkBrownHover">
//                 Details
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// PopularServices.propTypes = {
//   service: PropTypes.node,
// };

// export default PopularServices;


import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PopularServices = ({ service }) => {
  const { _id, service_image, service_name, service_description, service_price } = service || {};

  return (
    <>
      <motion.div
        className="card w-72 lg:w-96 bg-base-100 shadow-xl -skew-x-6"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <figure>
          <img src={service_image} alt="Shoes" className="h-40 lg:h-64 w-96 object-fill" />
        </figure>
        <div className="card-body p-3 lg:p-4">
          <h2 className="card-title text-center text-3xl">{service_name}</h2>
          <p className="my-0 lg:my-4">
            {service_description?.slice(0, 50)}{' '}
            <span className="text-blue-700 hover:underline font-medium">read...</span>
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
      </motion.div>
    </>
  );
};

PopularServices.propTypes = {
  service: PropTypes.node,
};

export default PopularServices;
