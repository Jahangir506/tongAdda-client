import { Helmet } from "react-helmet-async";
import Footer from "../../pages/Footer/Footer";

const ManageServices = () => {
  return (
    <>
    <Helmet>
      <title>TongAdda || Dashboard/Manage Service</title>
    </Helmet>
      <div className="max-w-7xl mx-auto my-24">
        <div className="space-y-10">
          <h1 className="text-7xl font-bold">
            Quality Cleaning <br />{" "}
            <span className="text-red-800">for Your Home</span>
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
            deserunt soluta eius asperiores et natus molestias adipisci
            laboriosam dolores! Officiis dolorum impedit unde quod a fugit
            facere, aspernatur eveniet mollitia.
          </p>
          <div className="space-x-4">
            <button className="btn bg-red-800 hover:bg-red-700 text-white ">
              Book a Service
            </button>
            <button className="btn">Read more</button>
          </div>
          <div className="divider"></div>
          <div>
            <div>
              <div className="avatar-group -space-x-6">
                <div className="avatar">
                  <div className="w-12">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D" />
                  </div>
                </div>
              </div>
            </div>
            <p>Rated 5 out of 5 by our client</p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
export default ManageServices;
