import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import loadingImg from "../assets/images/BeanEater.gif";
import Container from "../components/ui/Container";
import { useServices } from "../hooks/useServices";
import Contact from "./Contact";
import PopularServices from "./PopularServices/PopularServices";

const Home = () => {
  const { services, isLoading } = useServices();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <img src={loadingImg} alt="" className="w-60" />
      </div>
    );
  }

  return (
    <>
      <Container>
        <Helmet>
          <title>TongAdda || Home</title>
        </Helmet>
        <div className="mt-52 md:mt-0 lg:mt-10">
          <h1 className="text-center font-bold text-3xl lg:text-5xl mb-12 lg:mb-20">
            Popular Services
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl  mx-auto justify-items-center lg:mt-0 gap-20 lg:gap-x-40 items-center">
            {services.slice(0, 4).map((service) => (
              <PopularServices
                key={service._id}
                service={service}
              ></PopularServices>
            ))}
          </div>
          <div className="flex justify-center items-center mt-16 mb-4">
            <Link to="/showAllServices">
              <button className="btn bg-darkBrown hover:bg-darkBrownHover border-none text-white capitalize">
                Show All Services
              </button>
            </Link>
          </div>
          {/* Contact Section  */}
          <Contact></Contact>
        </div>
      </Container>
    </>
  );
};
export default Home;
