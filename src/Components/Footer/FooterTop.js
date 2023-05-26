import React from "react";

function FooterTop() {
  return (
    <div className="w-full bg-white py-4">
      <div className="w-full bprder-t-[1px]  py-2">
        <div className="w-64 mx-auto text-center flex flex-col gap-1">
          <p className="text-sm"> See Personalised Recommendations</p>
          <button
            className="w-full bg-lightyellow rounded-md py-1 font-semibold cursor-pointer 
          hover:bg-mdyellow active:bg-yellow"
          >
            Sign In
          </button>
          <p className="text-xs mt-1">
            New Customers{""}
            <span className="text-blue ml-1 cursor-pointer">Start Here</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default FooterTop;
