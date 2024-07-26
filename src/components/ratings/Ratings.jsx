import React from "react";

const Ratings = () => {
  const Rating = (props) => {
    return (
      <>
        <div className=" py-10 flex flex-col gap-4">
          <div className="title text-[#041E37] lg:font-normal font-semibold lg:text-lg text-[11px]">
            {props.title}
          </div>
          <div className="price text-[#2A2A2A] lg:text-3xl text-[16px] font-extralight text-center">
            {props.price}
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div>
        <div className="h-3 bg-[#2C3E50]"></div>
        <div className="flex justify-around items-center  bg-[#A8C5B8]">
          <Rating title="RUNNING DAYS" price="1560 DAYS" />
          <Rating title="TOTAL INVESTORS" price="20,000" />
          <Rating title="TOTAL INVESTED" price="$500,000" />
          <Rating title="TOTAL WITHDRAWN" price="$300,000" />
        </div>
      </div>
    </>
  );
};

export default Ratings;
