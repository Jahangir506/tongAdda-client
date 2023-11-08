import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import Footer from "../../../pages/Footer/Footer";
import BookingService from "./BookingService";
import PendingWork from "./PendingWork";

const Booking = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5007/bookings?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
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
        fetch(`http://localhost:5007/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Deleted Successfully.", "success");
              const remaining = bookings.filter(
                (booking) => booking._id !== id
              );
              setBookings(remaining);
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
        fetch(`http://localhost:5007/bookings/${id}`, {
          method: "PATCH",
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
              const remaining = bookings.filter(
                (booking) => booking._id !== id
              );
              const updated = bookings.filter((booking) => booking._id === id);
              updated.status = "confirmed";
              const newBookings = [updated, ...remaining];
              setBookings(newBookings);
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
      <div className="w-full mx-auto flex justify-center gap-28 my-24">
        <div className="mb-24">
          <h1 className="text-center text-4xl font-semibold mb-8">
            Your add Service {bookings.length}
          </h1>
          <div className="max-w-2xl mx-auto">
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead className="bg-gray-200 text-center">
                  <tr className="text-sm">
                    <th>Deleted</th>
                    <th>Image</th>
                    <th>Service Name</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Update</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {bookings.map((booking) => (
                    <BookingService
                      key={booking._id}
                      manageService={booking}
                      handleDelete={handleDelete}
                      handleUpdate={handleUpdate}
                    ></BookingService>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
       <div>
           <PendingWork></PendingWork>  
       </div>
      </div>
      <Footer></Footer>
    </>
  );
};
export default Booking;
