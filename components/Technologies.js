import React from "react";
import Link from "next/link";

function TopCollegeItems() {
  return (
    <Link href="/">
      <div className="relative flex h-40 w-40 flex-col border-2  rounded-md pb-4 mx-5 md:my-5"></div>
    </Link>
  );
}

const Technologies = () => {
  const handleScroll = (no) => {
    const scrollAmount = 150;
    const scrollContainer = document.querySelector(".scrollbarCollege");
    scrollContainer.scrollBy(no * scrollAmount, 0);
  };

  return (
    <div className="flex justify-center md:my-6 relative ">
      <div className="no-scrollbar flex overflow-hidden py-5 scroll-smooth scrollbarCollege">
        <TopCollegeItems
        //   key={index + 1}
        //   imgSrc={`${process.env.imageApi}/${item.cover}`}
        //   header={item.name}
        //   location={item.locatedin.name}
        />
        <TopCollegeItems
        //   key={index + 1}
        //   imgSrc={`${process.env.imageApi}/${item.cover}`}
        //   header={item.name}
        //   location={item.locatedin.name}
        />
        <TopCollegeItems
        //   key={index + 1}
        //   imgSrc={`${process.env.imageApi}/${item.cover}`}
        //   header={item.name}
        //   location={item.locatedin.name}
        />
        <TopCollegeItems
        //   key={index + 1}
        //   imgSrc={`${process.env.imageApi}/${item.cover}`}
        //   header={item.name}
        //   location={item.locatedin.name}
        />
        <TopCollegeItems
        //   key={index + 1}
        //   imgSrc={`${process.env.imageApi}/${item.cover}`}
        //   header={item.name}
        //   location={item.locatedin.name}
        />
        <TopCollegeItems
        //   key={index + 1}
        //   imgSrc={`${process.env.imageApi}/${item.cover}`}
        //   header={item.name}
        //   location={item.locatedin.name}
        />
        <TopCollegeItems
        //   key={index + 1}
        //   imgSrc={`${process.env.imageApi}/${item.cover}`}
        //   header={item.name}
        //   location={item.locatedin.name}
        />
        <TopCollegeItems
        //   key={index + 1}
        //   imgSrc={`${process.env.imageApi}/${item.cover}`}
        //   header={item.name}
        //   location={item.locatedin.name}
        />
        <TopCollegeItems
        //   key={index + 1}
        //   imgSrc={`${process.env.imageApi}/${item.cover}`}
        //   header={item.name}
        //   location={item.locatedin.name}
        />
        <TopCollegeItems
        //   key={index + 1}
        //   imgSrc={`${process.env.imageApi}/${item.cover}`}
        //   header={item.name}
        //   location={item.locatedin.name}
        />

        <div className="hidden md:flex absolute right-0 md:right-10 top-[-4rem] space-x-5 ">
          <svg
            onClick={() => handleScroll(-1)}
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hover:bg-blue-200  rounded-full hover:border-blue-200 "
          >
            <circle cx="19" cy="19" r="18" stroke="#9092A9" strokeWidth="2" />
            <path
              d="M21 13L15 19L21 25"
              stroke="#9092A9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            width="38"
            onClick={() => handleScroll(1)}
            className="mx-2 hover:bg-blue-200  rounded-full hover:border-blue-200  "
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="19"
              cy="19"
              r="18"
              transform="rotate(180 19 19)"
              stroke="#404366"
              strokeWidth="2"
            />
            <path
              d="M17 25L23 19L17 13"
              stroke="#404366"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
