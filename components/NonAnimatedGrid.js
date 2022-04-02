import React from "react";

const NonAnimatedGrid = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-10 lg:flex-row lg:space-x-10 ">
      <div className=" flex flex-col justify-center items-center h-auto w-full space-y-10  mt-24">
        <div className=" h-auto w-60 sm:w-[28rem] border-2 flex items-center justify-center  hover:border-black  ">
          <h1 className="text-xl  sm:text-3xl font-bold ">
            Services we provide
          </h1>
        </div>
        <div className="h-60 w-60 sm:w-[28rem] sm:h-[28rem] border-2 flex flex-col  hover:border-black ">
          <div className="h-3/5 w-full border-2 ">Image</div>
          <div className="h-1/5 flex flex-col justify-start">
            <p className=" text-xl  sm:text-4xl font-bold">Consulting</p>
          </div>
        </div>

        <div className="h-60 w-60 sm:w-[28rem] sm:h-[28rem] border-2 flex flex-col  hover:border-black ">
          <div className="h-3/5 w-full border-2 ">Image</div>
          <div className="h-1/5 flex flex-col justify-start">
            <p className=" text-xl  sm:text-4xl font-bold">Consulting</p>
          </div>
        </div>
      </div>

      <div className=" flex flex-col justify-center items-center h-auto w-full space-y-10">
        <div className="h-60 w-60 sm:w-[28rem] sm:h-[28rem] border-2 flex flex-col  hover:border-black ">
          <div className="h-3/5 w-full border-2 ">Image</div>
          <div className="h-1/5 flex flex-col justify-start">
            <p className=" text-xl  sm:text-4xl font-bold">Consulting</p>
          </div>
        </div>
        <div className="h-60 w-60 sm:w-[28rem] sm:h-[28rem] border-2 flex flex-col  hover:border-black ">
          <div className="h-3/5 w-full border-2 ">Image</div>
          <div className="h-1/5 flex flex-col justify-start">
            <p className=" text-xl  sm:text-4xl font-bold">Consulting</p>
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

export default NonAnimatedGrid;
