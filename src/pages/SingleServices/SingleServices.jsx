import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import Footer from "../Footer/Footer";

const SingleServices = () => {
  const { user } = useAuth();
  const services = useLoaderData();
    const navigate = useNavigate()

  const {
    _id,
    service_image,
    service_name,
    service_description,
    service_area,
    service_provider,
    service_price,
  } = services || {};

  const handleUpdateProducts = (e) => {
    e.preventDefault();
    const form = e.target;
    const serviceImage = form.serviceImage.value;
    const serviceName = form.serviceName.value;
    const providerEmail = form.providerEmail.value;
    const price = form.price.value;
    const date = form.date.value;
    const email = user?.email;
    const instruction = form.instruction.value;

    const booking = {
      serviceImage,
      email,
      serviceName,
      providerEmail,
      price,
      instruction,
      date
    };
    console.log(booking);

    axios
      .post("http://localhost:5007/bookings", booking)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "Service Booking successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          navigate(-1)
        }
      });
  };

  return (
    <>
      <div className="max-w-7xl mx-auto my-32">
        <div className="card lg:card-side">
          <figure>
            <img
              src={service_image}
              alt="Album"
              className="w-[600px] h-[400px]"
            />
          </figure>
          <div className="card-body pb-2 pt-1 w-[800px]">
            <h2 className="card-title text-5xl flex justify-center items-center">
              {service_name}
            </h2>
            <p>{service_description}</p>
            <p>Price: {service_price}</p>
            <div></div>
            <div className="flex justify-end items-center gap-4 px-4 py-2">
              <div className="avatar">
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div>
                <span>
                  Provider by
                  <span className="font-medium">
                    {service_provider.provider_name}
                  </span>
                  , {service_area}
                </span>
              </div>
            </div>
            <div className="card-actions justify-end">
              <button
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
                className="btn btn-block bg-darkBrown hover:bg-darkBrownHover text-white"
              >
                Book Now
              </button>
              <dialog id="my_modal_3" className="modal">
                <div className="modal-box bg-white">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                  </form>
                  <div>
                    <div className="rounded mt-2 pb-4">
                      <div className="text-center">
                        <h1 className="text-4xl font-semibold font-rancho">
                          Booking Services
                        </h1>
                      </div>
                      <div className="max-w-4xl mx-auto">
                        <form onSubmit={handleUpdateProducts} className="my-6">
                          <div className="flex justify-between gap-6">
                            <div className="form-control w-full">
                              <label className="label">
                                <span className="label-text dark:text-white">
                                  Service Image
                                </span>
                              </label>
                              <label className="form-group">
                                <input
                                  type="text"
                                  name="serviceImage"
                                  placeholder="service image url"
                                  defaultValue={service_image}
                                  disabled
                                  className="dark:bg-black/10 input input-bordered w-full select-warning opacity-50"
                                />
                              </label>
                            </div>
                            <div className="form-control w-full">
                              <label className="label">
                                <span className="label-text dark:text-white">
                                  Service Name
                                </span>
                              </label>
                              <label className="form-group">
                                <input
                                  type="text"
                                  name="serviceName"
                                  placeholder="Service name"
                                  defaultValue={service_name}
                                  disabled
                                  className="dark:bg-black/10 input input-bordered w-full select-warning opacity-50"
                                />
                              </label>
                            </div>
                          </div>
                          <div className="flex justify-between gap-6">
                            <div className="form-control w-1/2">
                              <label className="label">
                                <span className="label-text dark:text-white">
                                  Provider Email
                                </span>
                              </label>
                              <label className="form-group">
                                <input
                                  type="text"
                                  name="providerEmail"
                                  placeholder="Provider Email"
                                  defaultValue={service_provider.provider_email}
                                  disabled
                                  className="input input-bordered w-full select-warning dark:bg-black/10 opacity-50"
                                />
                              </label>
                            </div>
                            <div className="form-control w-1/2">
                              <label className="label">
                                <span className="label-text dark:text-white">
                                  User Email
                                </span>
                              </label>
                              <label className="form-group">
                                <input
                                  type="text"
                                  name="UserEmail"
                                  placeholder="User Email"
                                  defaultValue={user?.email}
                                  disabled
                                  className="input input-bordered w-full select-warning dark:bg-black/10 opacity-50 underline"
                                />
                              </label>
                            </div>
                          </div>
                          <div className="flex justify-between gap-6">
                            <div className="form-control w-1/2">
                              <label className="label">
                                <span className="label-text dark:text-white">
                                  Service Talking Date
                                </span>
                              </label>
                              <label className="form-group">
                                <input
                                  type="date"
                                  name="date"
                                  placeholder="Service Talking Date"
                                  className="input input-bordered w-full select-warning dark:bg-black/10"
                                />
                              </label>
                            </div>
                            <div className="form-control w-1/2">
                              <label className="label">
                                <span className="label-text dark:text-white">
                                  Price
                                </span>
                              </label>
                              <label className="form-group">
                                <input
                                  type="text"
                                  name="price"
                                  placeholder="Price"
                                  defaultValue={service_price}
                                  className="input input-bordered w-full select-warning dark:bg-black/10 opacity-50"
                                />
                              </label>
                            </div>
                          </div>

                          <div className="flex justify-between gap-6">
                            <div className="form-control w-full">
                              <label className="label">
                                <span className="label-text dark:text-white">
                                  Special instruction
                                </span>
                              </label>
                              <label className="form-group ">
                                <textarea
                                  name="instruction"
                                  id=""
                                  cols="131"
                                  rows="4"
                                  placeholder="Special instruction"
                                  className="dark:bg-black/10 w-full rounded-lg p-4 textarea textarea-warning"
                                ></textarea>
                              </label>
                            </div>
                          </div>

                          <div className="my-5">
                            <input
                              type="submit"
                              value="Confirm Book"
                              className="btn bg-darkBrown hover:bg-darkBrownHover text-white w-full"
                            ></input>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
export default SingleServices;
