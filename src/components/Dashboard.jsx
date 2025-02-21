import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const { user, handleLogout } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log("here's the user in dashboard from auth",user?.username); 

  // ✅ Redirect to login if not authenticated
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]); // Runs when `user` changes

  if (!user) return null; // Avoid rendering while redirecting

  return (
    <div className="min-h-full p-10">
      <div className="first ">
        <h1 className="text-2xl font-bold">
          Welcome, {user.username}👋{" "}
        </h1>
        <p className="">
          You've total of <span className="underline text-lg font-semibold">{0}
            </span>  shortURLs.
        </p>
      </div>

      <hr className="hr-secondary" />

      <div className="dash_fav">
        <h2>Favorites</h2>
        <div className="bg-gray-200 rounded-lg p-5 text-center">
          Not available yet
        </div>
        {/* <div className="dash_fav_list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <div className="dash_fav_list_box border-secondary border-1 p-2 hover:shadow-lg duration-300 ease-in-out top-0 relative hover:-top-1 rounded-lg">
            <div className="flex justify-between">
              <p>Heart</p>
              <p>:</p>
            </div>
            <div className="dash_fav_list_box_img grid justify-items-center">
              <img className="w-1/2 " src="https://docs.lightburnsoftware.com/legacy/img/QRCode/ExampleCode.png" alt="" />
            </div>
            <div className="dash_fav_list_box_content">
              <p>https://example.com</p>
              <p>https://google.com</p>
              <div className="active flex justify-between">
                <p>Active</p>
                <p className="date">12-11-2003</p>
              </div>
            </div>
          </div>
          <div className="dash_fav_list_box border-1 p-2 hover:shadow-lg duration-300 ease-in-out top-0 relative hover:-top-1 rounded-lg">
            <div className="flex justify-between">
              <p>Heart</p>
              <p>:</p>
            </div>
            <div className="dash_fav_list_box_img grid justify-items-center">
              <img className="w-1/2" src="https://docs.lightburnsoftware.com/legacy/img/QRCode/ExampleCode.png" alt="" />
            </div>
            <div className="dash_fav_list_box_content">
              <p>https://example.com</p>
              <p>https://google.com</p>
              <div className="active flex justify-between">
                <p>Active</p>
                <p className="date">12-11-2003</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      <hr className = "hr-secondary" />
      <div className="dash_collection">
        <h2>Collection</h2>
        <div className="bg-gray-200 rounded-lg p-5 text-center">
          Not available yet
        </div>
        {/* <div className="dash_collection_list grid  gap-4">
          <div className="grid grid-cols-10 border-1 rounded-sm">
            <p className="border-r-1">p</p>
            <p className="col-span-6 border-r-1">Collection 1</p>
            <p>500</p>
            <p className="col-span-2 border-l-1">Active</p>
          </div>
          <div className="grid grid-cols-10 border-1 rounded-sm">
            <p className="border-r-1">p</p>
            <p className="col-span-6 border-r-1">Collection 2</p>
            <p>500</p>
            <p className="col-span-2 border-l-1">Active</p>
            </div>
        </div> */}
      </div>

      <hr className="hr-secondary" />

      <div className="dash_api">
        <h2>API</h2>
        <div className="bg-gray-200 rounded-lg p-5 text-center">
          Not available yet
        </div>
        {/* <div className="dash_api_list grid grid-cols-2 gap-4 blur-xs">
          <div className="grid grid-cols-2 border-1 rounded-sm">
            <p className="col-span-2">API 1</p>
            <p className="col-span-2">Active</p>
          </div>
          <div className="grid grid-cols-2 border-1 rounded-sm">
            <p className="col-span-2">API 2</p>
            <p className="col-span-2">Active</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Dashboard;
