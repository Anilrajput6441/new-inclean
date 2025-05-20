import React from "react";

const RecentWork = () => {
  return (
    <div>
      <h1 className="lato-regular border-2 border-red-600 pl-15 pt-15 ">
        Recent Work
      </h1>
      <div className="p-20 pt-10 flex flex-col gap-8">
        <div className="w-full flex gap-8">
          <div className="w-1/2 h-[70vh] border-2 rounded-2xl"></div>
          <div className="w-1/2 h-[70vh] border-2 rounded-2xl"></div>
        </div>
        <div className="w-full flex gap-8">
          <div className="w-1/2 h-[70vh] border-2 rounded-2xl"></div>
          <div className="w-1/2 h-[70vh] border-2 rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default RecentWork;
