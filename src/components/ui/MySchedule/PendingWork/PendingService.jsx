// import { useEffect, useState } from "react";
// import { Helmet } from "react-helmet-async";
// import Swal from "sweetalert2";
// import useAuth from "../../../../hooks/useAuth";

// const PendingService = () => {
//     const { user } = useAuth();
//     const [pendingService, setPendingService] = useState([]);
  
//     const url = `http://localhost:5007/bookings?email=${user?.email}`;
  
//     useEffect(() => {
//       fetch(url)
//         .then((res) => res.json())
//         .then((data) => {
//             setPendingService(data);
//           console.log(data);
//         });
//     }, [url]);

//     const handleStatus = (id) => {
//         Swal.fire({
//           title: "Are you sure?",
//           text: "Are You sure you want to delete!",
//           icon: "warning",
//           showCancelButton: true,
//           confirmButtonColor: "#3085d6",
//           cancelButtonColor: "#d33",
//           confirmButtonText: "Yes, confirm it!",
//         }).then((result) => {
//           if (result.isConfirmed) {
//             fetch(`http://localhost:5007/addService/pending/status/${id}`, {
//               method: "PATCH",
//               headers: {
//                 "content-type": "application/json",
//               },
//               body: JSON.stringify({ status: "confirmed" }),
//             })
//               .then((res) => res.json())
//               .then((data) => {
//                 console.log(data);
//                 if (data.modifiedCount > 0) {
//                   Swal.fire("Confirm!", "Confirm Successfully.", "success");
//                   const remaining = setPendingService.filter(
//                     (pendingService) => pendingService._id !== id
//                   );
//                   const updated =setPendingService.filter(pendingService => pendingService._id === id);
//                   updated.status = 'confirmed'
//                   const newStatusService = [updated, ...remaining]
//                   setPendingService(newStatusService);
//                 }
//               });
//           }
//         });
//       };
  
  
//     return (
//       <>
//         <Helmet>
//           <title>TongAdda || PendingService</title>
//         </Helmet>
//         <div className="w-full mx-auto flex justify-center gap-28 my-24">
//           <div className="mb-24">
//             <h1 className="text-center text-4xl font-semibold mb-8">
//               Your add Service {pendingService.length}
//             </h1>
//             <div className="max-w-2xl mx-auto">
//               <div className="overflow-x-auto">
//                 <table className="table">
//                   {/* head */}
//                   <thead className="bg-gray-200 text-center">
//                     <tr className="text-sm">
//                       <th>Image</th>
//                       <th>Service Name</th>
//                       <th>Price</th>
//                       <th>Status</th>
//                     </tr>
//                   </thead>
//                   <tbody className="text-center">
//                     {pendingService.map((pending) => (
//                       <PendingService
//                         key={pending._id}
//                         pending={pending}
//                         handleStatus={handleStatus}
//                       ></PendingService>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   };
// export default PendingService;