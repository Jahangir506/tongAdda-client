import PropTypes from "prop-types";
import Footer from "../../pages/Footer/Footer";
import Banner from "../Banner/Banner";

const Container = ({ children }) => {
  return (
    <>
     <div>
          <Banner></Banner>
        </div>
      <div className="max-w-7xl mx-auto px-[50px]">{children}</div>
     <div>
      <Footer></Footer>
     </div>
    </>
  );
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
