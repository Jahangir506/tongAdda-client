const PendingServiceCard = ({ pending, handleStatus }) => {
  const { _id, pictureURL, price, serviceName, status } = pending || {};
  console.log(pending);
  return (
    <>
      <tr>
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
        <td>
          <span className="text-base font-bold">$ </span>
          {price}
        </td>
        <th>
          <div className="dropdown dropdown-end my-20">
            <label tabIndex={0} className="btn btn-ghost btn-xs bg-blue-300/20">
              Pending
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32"
            >
              {status === "confirmed" ? (
                <span className="font-bold text-blue-700">In Progress</span>
              ) : (
                <>
                  <div className="space-y-3 flex flex-col">
                    <button
                      onClick={() => handleStatus(_id)}
                      className="btn btn-ghost btn-xs bg-blue-300/20"
                    >
                      In Progress
                    </button>
                    <button
                      onClick={() => handleStatus(_id)}
                      className="btn btn-ghost btn-xs bg-blue-300/20"
                    >
                      Completed
                    </button>
                  </div>
                </>
              )}
            </ul>
          </div>
        </th>
      </tr>
    </>
  );
};
export default PendingServiceCard;
