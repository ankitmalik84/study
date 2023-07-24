import React, { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

// Importing React Icons
import { HiUsers } from "react-icons/hi";
import { ImTree } from "react-icons/im";

const CourseCard = ({ cardData, currentCard, setCurrentCard }) => {
  useEffect(() => {
    AOS.init();
  }, [setCurrentCard, currentCard]);
  return (
    <div
      data-aos='zoom-in'
      data-aos-duration='400'
      data-aos-offset='100'
      data-aos-anchor-placement='top-center'
      className={`w-[360px] lg:w-[30%] ${
        currentCard === cardData?.heading
          ? "bg-white shadow-[12px_12px_0_0] shadow-yellow-50"
          : "bg-richblack-800"
      }  text-richblack-25 h-[300px] box-border cursor-pointer rounded`}
      onClick={() => setCurrentCard(cardData?.heading)}
    >
      <div className='border-b-[2px] border-richblack-400 border-dashed h-[80%] p-6 flex flex-col gap-3'>
        <div
          className={` ${
            currentCard === cardData?.heading && "text-richblack-800"
          } font-semibold text-[20px]`}
        >
          {cardData?.heading}
        </div>

        <div className='text-richblack-400'>{cardData?.description}</div>
      </div>

      <div
        className={`flex justify-between ${
          currentCard === cardData?.heading
            ? "text-blue-300"
            : "text-richblack-300"
        } px-6 py-3 font-medium`}
      >
        {/* Level */}
        <div className='flex items-center gap-2 text-[16px]'>
          <HiUsers />
          <p>{cardData?.level}</p>
        </div>

        {/* Flow Chart */}
        <div className='flex items-center gap-2 text-[16px]'>
          <ImTree />
          <p>{cardData?.lessionNumber} Lession</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
