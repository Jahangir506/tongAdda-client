import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import Footer from "../../../pages/Footer/Footer";
import BookingService from "./BookingService";
import PendingServiceCard from "./PendingWork/PendingServiceCard";

const Booking = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);

  const url = `https://tong-adda-server.vercel.app/bookings?email=${user?.email}`;

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
        fetch(`https://tong-adda-server.vercel.app/bookings/${id}`, {
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

  const handleStatus = (id) => {
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
        fetch(`https://tong-adda-server.vercel.app/addService/pending/status/${id}`, {
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
              Swal.fire("Confirm!", "Confirm Successfully.", "success");
              const remaining = bookings.filter(
                (booking) => booking._id !== id
              );
              const updated =bookings.filter(booking => booking._id === id);
              updated.status = 'confirmed'
              const newStatusService = [updated, ...remaining]
              setBookings(newStatusService);
            }
          });
      }
    });
  };


  return (
    <>
      <Helmet>
        <title>TongAdda || MySchedule</title>
      </Helmet>
      <div className="w-full mx-auto flex justify-center gap-28 my-24">
        <div className="mb-24">
          <h1 className="text-center text-4xl font-semibold mb-8">
           Booking Service {bookings.length}
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
                  </tr>
                </thead>
                <tbody className="text-center">
                  {bookings.map((booking) => (
                    <BookingService
                      key={booking._id}
                      booking={booking}
                      handleDelete={handleDelete}
                    ></BookingService>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* pending  */}
       <div>
        <div className="w-full mx-auto flex justify-center gap-28">
          <div className="mb-24">
            <h1 className="text-center text-4xl font-semibold mb-8">
              Pending Service {bookings.length}
            </h1>
            <div className="max-w-2xl mx-auto">
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead className="bg-gray-200 text-center">
                    <tr className="text-sm">
                      <th>Image</th>
                      <th>Service Name</th>
                      <th>Price</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    {bookings.map((pending) => (
                      <PendingServiceCard
                        key={pending._id}
                        pending={pending}
                        handleStatus={handleStatus}
                      ></PendingServiceCard>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
       </div>
      </div>
      <Footer></Footer>
    </>
  );
};
export default Booking;
