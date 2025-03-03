import React from "react";

const AdminLogin = () => {
  return (
    <div>
      <div className="flex">
        {/* Left Side - Login Form */}
        <div className="w-1/2 bg-blue-200 h-screen flex">
          <div className="w-[50%] bg-white border-2 border-blue-300 p-5 mx-auto my-auto h-1/3">
            <h1 className="text-2xl mb-5 font-semibold text-[#2196f3]">
              Admin Login
            </h1>
            <form className="flex flex-col space-y-5">
              <input
                type="text"
                placeholder="Username"
                className="p-2 border w-full"
              />
              <input
                type="password"
                placeholder="Password"
                className="p-2 border w-full"
              />
              <button type="submit" className="bg-blue-600 w-1/4 cursor-pointer hover:bg-blue-500 text-white py-1">
                Login
              </button>
            </form>
          </div>
        </div>

        {/* Right Side - Background Image */}
        <div className="w-1/2 h-screen bg-cover bg-center bg-no-repeat" 
             style={{ backgroundImage: "url('https://images.pexels.com/photos/8566521/pexels-photo-8566521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
