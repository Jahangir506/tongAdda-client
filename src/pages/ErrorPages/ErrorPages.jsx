import { Link } from "react-router-dom";
import error404 from "../../assets/images/404.gif";
const ErrorPages = () => {
  return (
    <>
      <div className="flex justify-center relative items-center mt-36">
        <img src={error404} alt="" className=""/>
        <div className="absolute -bottom-10">
          <Link to='/' className="btn bg-darkBrown text-white border-none hover:bg-darkBrownHover">Go to Home </Link>
        </div>
      </div>
    </>
  );
};
export default ErrorPages;
