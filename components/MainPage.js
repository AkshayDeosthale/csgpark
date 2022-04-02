import React from "react";

const MainPage = ({ showRight }) => {
  return (
    <div className="h-screen w-screen  flex">
      <div className="h-full w-1/2 flex flex-col ml-40 justify-center items-start -mt-24 space-y-10">
        <div className="space-y-7">
          <p className="text-6xl font-bold">Improving the world</p>
          <p className="text-6xl font-bold text-blue-500">With right people</p>
        </div>

        <div className="space-y-7">
          <p className="font-bold">
            We specialize in development of the web <br />
            Starting from creating your one time project <br /> upto developing
            your long term endevours{" "}
          </p>
        </div>

        <button className="text-2xl bg-blue-500 text-white p-5 rounded-lg">
          START A PROJECT NOW
        </button>
      </div>

      {/* RHS */}
      {showRight && (
        <div className="h-1/2 w-1/2 flex flex-col justify-between items-center space-y-9 mt-28">
          <div className="w-full h-full ">
            <button className="border-2 p-6 w-1/2 rounded-full">
              <div className="flex justify-between">
                <div className="flex space-x-7 ">
                  <div className="border-2 rounded-full m-0 flex justify-center items-center">
                    Image
                  </div>
                  <div className="flex flex-col justify-start ">
                    <p className="text-xl font-bold">Web Developement</p>
                    <p className="font-semibold">Gathering requirements</p>
                  </div>
                </div>

                <div className="flex justify-center items-center">Arrow</div>
              </div>
            </button>
          </div>

          <div className="w-full h-full flex  lg:justify-center">
            <button className="border-2 p-6 w-1/2 rounded-full">
              <div className="flex justify-between">
                <div className="flex space-x-7 ">
                  <div className="border-2 rounded-full m-0 flex justify-center items-center">
                    Image
                  </div>
                  <div className="flex flex-col justify-start ">
                    <p className="text-xl font-bold">Web Developement</p>
                    <p className="font-semibold">Gathering requirements</p>
                  </div>
                </div>

                <div className="flex justify-center items-center">Arrow</div>
              </div>
            </button>
          </div>
          <div className="w-full h-full">
            <button className="border-2 p-6 w-1/2 rounded-full">
              <div className="flex justify-between">
                <div className="flex space-x-7 ">
                  <div className="border-2 rounded-full m-0 flex justify-center items-center">
                    Image
                  </div>
                  <div className="flex flex-col justify-start ">
                    <p className="text-xl font-bold">Web Developement</p>
                    <p className="font-semibold">Gathering requirements</p>
                  </div>
                </div>

                <div className="flex justify-center items-center">Arrow</div>
              </div>
            </button>
          </div>
          <div className="w-full h-full flex  lg:justify-center">
            <button className="border-2 p-6 w-1/2 rounded-full">
              <div className="flex justify-between">
                <div className="flex space-x-7 ">
                  <div className="border-2 rounded-full m-0 flex justify-center items-center">
                    Image
                  </div>
                  <div className="flex flex-col justify-start ">
                    <p className="text-xl font-bold">Web Developement</p>
                    <p className="font-semibold">Gathering requirements</p>
                  </div>
                </div>

                <div className="flex justify-center items-center">Arrow</div>
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainPage;
