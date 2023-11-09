import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";

const BookingService = ({booking, handleDelete}) => {
    const { _id, pictureURL, price, serviceName, status } = booking || {};
    console.log(booking);
    return (
      <>
        <tr>
          <th>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-circle btn-sm hover:text-darkBrownHover hover:bg-black/10 border-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </th>
          <td>
            <div className="avatar">
              <div className="w-24 rounded h-24">
                {pictureURL && (
                  <img src={pictureURL} alt="Avatar Tailwind CSS Component" />
                )}
              </div>
            </div>
          </td>
          <td>{serviceName}</td>
          <td><span className="text-base font-bold">$ </span>{price}</td>
        </tr>
      </>
    );
  };
export default BookingService;
