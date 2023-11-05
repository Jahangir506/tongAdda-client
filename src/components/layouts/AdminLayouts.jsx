import { Outlet } from "react-router-dom";

const AdminLayouts = () => {
    return(
        <>
           <div className="flex h-screen">
        <div className="bg-red-400 text-white flex-[1]">
          <h1>Sidebar</h1>
        </div>
        <div className="bg-green-400 flex-[3]">
          <Outlet></Outlet>
        </div>
      </div>
        </>
    )}
export default AdminLayouts;