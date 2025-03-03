import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Header from '../components/Header'


const Home = () => {
  const [showChat, setShowChat] = useState(false);
  const chatBoxRef = useRef(null);

  useEffect(() => {
    if (showChat) {
      gsap.fromTo(
        chatBoxRef.current,
        { opacity: 0, scale: 0.8, y: 50 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "power3.out" }
      );
    }
  }, [showChat]);

  return (
    <div>
        <Header />
      <div className="flex flex-col gap-7 justify-center items-center h-screen">
        <div>
          <h2 className="text-6xl text-[#2196f3] font-bold">
            Your AI Medical Assistance
          </h2>
        </div>
        <div>
          <p className="text-xl">
            Get instant medical information and guidance powered by advanced AI technology
          </p>
        </div>
        <div>
          <button
            className="bg-[#2196f3] hover:bg-[#3aa2f2] hover:scale-105 cursor-pointer text-white px-7 text-xl rounded-lg py-3 transition-transform duration-200"
            onClick={() => setShowChat(true)}
          >
            Start Consultation
          </button>
        </div>
      </div>

      {/* Centered Chat Box with GSAP Animation */}
      {showChat && (
        <div className="fixed inset-0 flex justify-center items-center bg-black/50">
          <div
            ref={chatBoxRef}
            className="bg-white shadow-lg border border-gray-300 rounded-lg w-1/2 h-[75vh] p-5 relative"
          >
            {/* Chat Header */}
            <div className="flex justify-between items-center border-b pb-2">
              <h3 className="text-lg font-bold">Chat with AI</h3>
              <button
                className="text-red-500 text-2xl cursor-pointer font-bold"
                onClick={() => setShowChat(false)}
              >
                ✖
              </button>
            </div>

            {/* Chat Messages */}
            <div className="h-[75%] overflow-y-auto p-2">
              <p className="text-gray-500"></p>
            </div>

            {/* Chat Input */}
            <div className="absolute bottom-2 left-3 right-3 p-2 bg-white flex">
              <input
                type="text"
                placeholder="Start your conversation..."
                className="w-full border border-gray-300 rounded-md p-2 outline-none"
              />
              <button className="bg-[#2196f3] text-white px-3 ml-2 rounded-md">
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
