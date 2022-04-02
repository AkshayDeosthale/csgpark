import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  const [home, setHome] = useState(true);

  const [services, setServices] = useState(false);
  const [tech, setTech] = useState(false);
  const [blog, setBlog] = useState(false);
  const [about, setAbout] = useState(false);

  const pathCheck = () => {
    if (router.pathname == "/") {
      setHome(true);
      setServices(false);
      setTech(false);
      setBlog(false);
      setAbout(false);
    } else if (router.pathname == "/Services") {
      setHome(false);
      setServices(true);
      setTech(false);
      setBlog(false);
      setAbout(false);
    } else if (router.pathname == "/Tech") {
      setHome(false);
      setServices(false);
      setTech(true);
      setBlog(false);
      setAbout(false);
    } else if (router.pathname == "/Blog") {
      setHome(false);
      setServices(false);
      setTech(false);
      setBlog(true);
      setAbout(false);
    } else if (router.pathname == "/About") {
      setHome(false);
      setServices(false);
      setTech(false);
      setBlog(false);
      setAbout(true);
    }
  };

  useEffect(() => {
    pathCheck();
  }, []);

  console.log(router.pathname);

  return (
    <div className=" bg-white top-0 fixed opacity-100 visible h-16 flex flex-row justify-between w-full">
      <div className="sm:w:full lg:w-1/3 flex justify-center items-center ml-10 ">
        <h1>Cognitive park</h1>
      </div>

      <div className="lg:w-1/3 lg:flex lg:items-center lg:justify-center lg:h-full hidden">
        <nav className="w-full flex flex-row items-center justify-between h-full">
          <button
            className={`border-b-2  h-full  ${
              home ? "text-blue-600 border-blue-600" : "text-gray-500"
            }`}
            onClick={(e) => {
              e.preventDefault();
              pathCheck();
              router.push("/");
            }}
          >
            Home
          </button>

          <button
            className={`border-b-2  h-full  ${
              services ? "text-blue-600 border-blue-600" : "text-gray-500"
            }`}
            onClick={(e) => {
              e.preventDefault();
              pathCheck();
              router.push("/Services");
            }}
          >
            Services
          </button>

          <button
            className={`border-b-2  h-full  ${
              tech ? "text-blue-600 border-blue-600" : "text-gray-500"
            }`}
            onClick={(e) => {
              e.preventDefault();
              pathCheck();
              router.push("/Tech");
            }}
          >
            Technology
          </button>

          <button
            className={`border-b-2  h-full  ${
              blog ? "text-blue-600 border-blue-600" : "text-gray-500"
            }`}
            onClick={(e) => {
              e.preventDefault();
              pathCheck();
              router.push("/Blog");
            }}
          >
            Blog
          </button>

          <button
            className={`border-b-2  h-full  ${
              about ? "text-blue-600 border-blue-600" : "text-gray-500"
            }`}
            onClick={(e) => {
              e.preventDefault();
              pathCheck();
              router.push("/About");
            }}
          >
            About Us
          </button>
        </nav>
      </div>

      <div className="sm:w:1/2 lg:w-1/3 flex justify-center items-center p-5">
        <div className=" w-full flex justify-center items-center space-x-5">
          <div className=" w-auto flex justify-around items-center border-r-2 space-x-5 p-5">
            <span className="underline">En</span>
            <span>Heb</span>
          </div>

          <button>Contactus</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
