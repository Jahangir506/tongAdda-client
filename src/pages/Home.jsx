import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import loadingImg from "../assets/images/BeanEater.gif";
import introImg from "../assets/images/intro.jpg";
import Container from "../components/ui/Container";
import { useServices } from "../hooks/useServices";
import Services from "./PopularServices/PopularServices";

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
        <div>
          <h1 className="text-center font-bold text-5xl mb-20">
            Popular Services
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto justify-items-center gap-y-16 items-center">
            {services.slice(0, 4).map((service) => (
              <Services key={service._id} service={service}></Services>
            ))}
          </div>
          <div className="flex justify-center items-center my-16">
            <Link to="/showAllServices">
              <button className="btn bg-darkBrown hover:bg-darkBrownHover border-none text-white capitalize">
                Show All Services
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};
export default Home;
