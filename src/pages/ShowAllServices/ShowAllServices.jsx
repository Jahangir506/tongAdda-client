import ScrollToTop from "react-scroll-to-top";
import loadingImg from "../../assets/images/BeanEater.gif";
import { useServices } from "../../hooks/useServices";
import Footer from "../Footer/Footer";
import ShowAllServicesCard from "./ShowAllServicesCard";

const ShowAllServices = () => {
  const { services: allService, isLoading } = useServices();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <img src={loadingImg} alt="" className="w-60" />
      </div>
    );
  }

  return (
    <>
      <div className="mt-24">
        <div className="form-control mb-24 mt-14">
          <div className="input-group justify-center items-center">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered w-96"
            />
            <button className="btn btn-square">
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-[1] gap-14 justify-center border-t">
        <ScrollToTop
          smooth
          top="20"
          color="red"
          viewBox="0 0 150 256"
          width="28"
          height="28"
        />
        <div className="grid grid-cols-1 bg-red-100/20 justify-items-center pt-8 pb-20 gap-y-16 items-center border-r border-l px-48">
          {allService.map((service) => (
            <ShowAllServicesCard
              key={service._id}
              service={service}
            ></ShowAllServicesCard>
          ))}
        </div>
        <div className="w-72">
          <h1>dsfkdsfldf;g</h1>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
export default ShowAllServices;
