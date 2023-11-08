import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAuth from "../../../../hooks/useAuth";
import Footer from "../../../../pages/Footer/Footer";
import ManageServiceCard from "./ManageServiceCard";

const ManageServices = () => {
  const { user } = useAuth()
  const [manageServices, setManageServices] = useState([]);

  const url = `http://localhost:5007/addService?email=${user.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setManageServices(data);
        console.log(data);
      });
  }, [url]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Are You sure you want to delete!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5007/addService/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Deleted Successfully.", "success");
              const remaining = manageServices.filter(
                (manageService) => manageService._id !== id
              );
              setManageServices(remaining);
            }
          });
      }
    });
  };

  const handleUpdate = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Are You sure you want to delete!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, confirm it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5007/addService/${id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ status: "confirmed" }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              Swal.fire("confirm!", "Confirm Successfully.", "success");
              const remaining = manageServices.filter(
                (manageService) => manageService._id !== id
              );
              const updated = manageServices.filter(manageService => manageService._id === id);
              updated.status = 'confirmed'
              const newAddService = [updated, ...remaining]
              setManageServices(newAddService);
            }
          });
      }
    });
  };

  return (
    <>
    <Helmet>
      <title>TongAdda || ManageService</title>
    </Helmet>
      <div className="w-full mx-auto my-24">
      <div className="mb-24">
      <h1 className="text-center text-4xl font-semibold mb-8">
        Your add Service {manageServices.length}
      </h1>
      <div className="max-w-5xl mx-auto">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-gray-200 text-center">
              <tr className="text-sm">
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Image</th>
                <th>Service Name</th>
                <th>Price</th>
                <th>Status</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {manageServices.map((manageService) => (
                <ManageServiceCard
                  key={manageService._id}
                  manageService={manageService}
                  handleDelete={handleDelete}
                  handleUpdate={handleUpdate}
                ></ManageServiceCard>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
      </div>
      <Footer></Footer>
    </>
  );
};
export default ManageServices;
