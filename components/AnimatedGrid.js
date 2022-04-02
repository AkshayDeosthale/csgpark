import React from "react";

const AnimatedGrid = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-10 lg:flex-row lg:space-x-10 ">
      <div className=" flex flex-col justify-center items-center h-auto w-full space-y-10  mt-24">
        <div className=" h-auto w-60 sm:w-[28rem] border-2 flex items-center justify-center  hover:border-black  ">
          <h1 className="text-xl  sm:text-3xl font-bold ">
            Services we provide
          </h1>
        </div>
        {/* this is tile one */}
        <div className="h-[30rem] w-60 sm:w-[28rem] sm:h-[28rem] border-2 flex flex-col  hover:border-black group">
          <div className="h-3/5 w-full border-2 ">Image</div>
          <div className="h-1/5 flex flex-col justify-start">
            <div className=" ml-1 mr-1 mt-2 md:h-14 flex sm:justify-start justify-between items-center space-x-2 md:space-x-5 sm:ml-6">
              <button className=" border-blue-500 p-1 border-2 rounded-lg text-blue-500 bg-white group-hover:bg-blue-500 group-hover:text-white">
                JAVA
              </button>
              <button className=" border-blue-500 p-1 border-2 rounded-lg text-blue-500 bg-white group-hover:bg-blue-500 group-hover:text-white">
                JAVASCRIPT
              </button>
              <button className="  border-blue-500 p-1 border-2 rounded-lg text-blue-500 bg-white group-hover:bg-blue-500 group-hover:text-white">
                REACT
              </button>
            </div>
            <p className=" text-xl  sm:text-4xl font-bold ml-6 mb-3">
              Consulting
            </p>
            <p className=" font-bold ml-6 group-hover:hidden">
              Finding suitable solutions <br></br> friction points to iomplement
              solutions
            </p>
            <p className="font-bold ml-6  group-hover:visible"></p>
          </div>
        </div>

        {/* this is tile two */}
        <div className="h-60 w-60 sm:w-[28rem] sm:h-[28rem] border-2 flex flex-col  hover:border-black group">
          <div className="h-3/5 w-full border-2 ">Image</div>
          <div className="h-1/5 flex flex-col justify-start">
            <div className=" ml-3 mr-3 mt-2 md:h-14 flex sm:justify-start justify-between items-center space-x-5 sm:ml-6">
              <button className=" border-blue-500 p-1 border-2 rounded-lg text-blue-500 bg-white group-hover:bg-blue-500 group-hover:text-white">
                Java
              </button>
              <button className=" border-blue-500 p-1 border-2 rounded-lg text-blue-500 bg-white group-hover:bg-blue-500 group-hover:text-white">
                Js
              </button>
              <button className=" border-blue-500 p-1 border-2 rounded-lg text-blue-500 bg-white group-hover:bg-blue-500 group-hover:text-white">
                React
              </button>
            </div>
            <p className=" text-xl  sm:text-4xl font-bold ml-6">Consulting</p>
          </div>
        </div>
      </div>

      <div className=" flex flex-col justify-center items-center h-auto w-full space-y-10">
        {/* this is tile three */}
        <div className="h-60 w-60 sm:w-[28rem] sm:h-[28rem] border-2 flex flex-col  hover:border-black group">
          <div className="h-3/5 w-full border-2 ">Image</div>
          <div className="h-1/5 flex flex-col justify-start">
            <div className=" ml-3 mr-3 mt-2 md:h-14 flex sm:justify-start justify-between items-center space-x-5 sm:ml-6">
              <button className=" border-blue-500 p-1 border-2 rounded-lg text-blue-500 bg-white group-hover:bg-blue-500 group-hover:text-white">
                Java
              </button>
              <button className=" border-blue-500 p-1 border-2 rounded-lg text-blue-500 bg-white group-hover:bg-blue-500 group-hover:text-white">
                Js
              </button>
              <button className=" border-blue-500 p-1 border-2 rounded-lg text-blue-500 bg-white group-hover:bg-blue-500 group-hover:text-white">
                React
              </button>
            </div>
            <p className=" text-xl  sm:text-4xl font-bold ml-6">Consulting</p>
          </div>
        </div>
        {/* this is tile four */}
        <div className="h-60 w-60 sm:w-[28rem] sm:h-[28rem] border-2 flex flex-col  hover:border-black group">
          <div className="h-3/5 w-full border-2 ">Image</div>
          <div className="h-1/5 flex flex-col justify-start">
            <div className=" ml-3 mr-3 mt-2 md:h-14 flex sm:justify-start justify-between items-center space-x-5 sm:ml-6">
              <button className=" border-blue-500 p-1 border-2 rounded-lg text-blue-500 bg-white group-hover:bg-blue-500 group-hover:text-white">
                Java
              </button>
              <button className=" border-blue-500 p-1 border-2 rounded-lg text-blue-500 bg-white group-hover:bg-blue-500 group-hover:text-white">
                Js
              </button>
              <button className=" border-blue-500 p-1 border-2 rounded-lg text-blue-500 bg-white group-hover:bg-blue-500 group-hover:text-white">
                React
              </button>
            </div>
            <p className=" text-xl  sm:text-4xl font-bold ml-6">Consulting</p>
          </div>
        </div>
        <div className=" h-auto w-60 sm:w-[28rem] border-2 flex items-center justify-center  hover:border-black  ">
          <h1 className="text-xl  sm:text-3xl font-bold ">
            Services we provide
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AnimatedGrid;
