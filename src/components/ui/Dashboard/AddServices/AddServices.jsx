import axios from "axios";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import loadingImg from "../../../../assets/images/BeanEater.gif";
import useAuth from "../../../../hooks/useAuth";
import { useServices } from "../../../../hooks/useServices";
import Footer from "../../../../pages/Footer/Footer";

const AddServices = () => {
  const { isLoading } = useServices();
  const { user } = useAuth();
  const navigate = useNavigate();

  console.log(user);

  const handleAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = user?.email;
    const pictureURL = form.pictureURL.value;
    const serviceName = form.serviceName.value;
    const yourName = form.yourName.value;
    const yourEmail = form.yourEmail.value;
    const serviceArea = form.serviceArea.value;
    const price = form.price.value;
    const description = form.description.value;

    const addService = {
      email,
      pictureURL,
      serviceName,
      yourName,
      yourEmail,
      serviceArea,
      price,
      description
    };
    console.log(addService);

    axios.post("https://tong-adda-server.vercel.app/addService", addService).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          title: "success!",
          text: "Service added successfully",
          icon: "success",
          confirmButtonText: "Ok",
        });
        navigate(-1);
      }
    });
  };
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <img src={loadingImg} alt="" className="w-60" />
      </div>
    );
  }

  return (
    <>
      <div>
        <Helmet>
          <title>TongAdda || AddService</title>
        </Helmet>
        <div className="max-w-7xl mx-auto my-32">
          <h1 className="text-4xl font-semibold text-center mb-10 font-rancho">
            Add Product Services
          </h1>
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleAdd} className="my-6">
              <div className="flex justify-between gap-6">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text dark:text-white">
                      Picture URL
                    </span>
                  </label>
                  <label className="form-group">
                    <input
                      type="text"
                      name="pictureURL"
                      placeholder="Picture url"
                      className="dark:bg-black/10 input input-bordered w-full select-warning bg-blue-300/10"
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
                      className="dark:bg-black/10 input input-bordered w-full select-warning bg-blue-300/10"
                    />
                  </label>
                </div>
              </div>
              <div className="flex justify-between gap-6">
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text dark:text-white">
                      Your Name
                    </span>
                  </label>
                  <label className="form-group">
                    <input
                      type="text"
                      name="yourName"
                      placeholder="Your Name"
                      defaultValue={user?.displayName}
                      disabled
                      className="input input-bordered w-full select-warning dark:bg-black/10 opacity-50"
                    />
                  </label>
                </div>
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text dark:text-white">
                      Your Email
                    </span>
                  </label>
                  <label className="form-group">
                    <input
                      type="text"
                      name="yourEmail"
                      placeholder="Your Email"
                      defaultValue={user?.email ? user?.email : ""}
                      disabled
                      className="input input-bordered w-full select-warning dark:bg-black/10 opacity-50"
                    />
                  </label>
                </div>
              </div>
              <div className="flex justify-between gap-6">
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text dark:text-white">
                      Service Area
                    </span>
                  </label>
                  <label className="form-group">
                    <input
                      type="text"
                      name="serviceArea"
                      placeholder="Service Area"
                      className="input input-bordered w-full select-warning dark:bg-black/10 bg-blue-300/10"
                    />
                  </label>
                </div>
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text dark:text-white">Price</span>
                  </label>
                  <label className="form-group">
                    <input
                      type="text"
                      name="price"
                      placeholder="Price"
                      className="input input-bordered w-full select-warning dark:bg-black/10 bg-blue-300/10"
                    />
                  </label>
                </div>
              </div>

              <div className="flex justify-between gap-6">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text dark:text-white">
                      Description
                    </span>
                  </label>
                  <label className="form-group ">
                    <textarea
                      name="description"
                      id=""
                      cols="131"
                      rows="4"
                      placeholder="Description"
                      className="dark:bg-black/10 w-full rounded-lg p-4 textarea textarea-warning bg-blue-200/10"
                      required
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
      <Footer></Footer>
    </>
  );
};
export default AddServices;
