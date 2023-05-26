import React from "react";
import FooterMiddleList from "./FooterMiddleList";
import { middleList } from "../../Constants/FooterCategoryList";
import logo from '/home/dhruba/amazon/amazon-clone/src/images/amazon_logo.png'
import flag from '/home/dhruba/amazon/amazon-clone/src/images/india-flag-icon.png'

function FooterMiddle() {
  return (
    <div className="w-full bg-darkbluegray text-white">
      <div className="w-full border-b-[1px] border-gray p-10">
        <div className="max-w-5xl mx-auto text-lightgray  ">
          <div className="w-full grid grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-6 md:place-items-center md:items-start ">
          {
            middleList.map((item)=>(
              <FooterMiddleList
              key={item._id}
              title={item.title}
              listItem={item.listItem}
              />
            ))
          }
          </div>
        </div>
      </div>
      <div className="w-full flex gap-6 items-cemter justify-center py-6">
        <div>
          <img className="w-20 pt-3" src={logo} alt=""/>
        </div>
        <div className="flex gap-2">
          <p className="flex gap-1 items-center justify-center border  border-gray
           hover:border-yellow cursor-pointer duration-200 px-2 py-1">English</p>
        </div>
        <div className="flex gap-1 items-center justify-center border  border-gray
           hover:border-yellow cursor-pointer duration-200 px-2 py-1">
            <img className="w-5" src={flag} alt="flag"/>
            <p>INDIA</p>
           </div>
      </div>


    </div>
  );
}

export default FooterMiddle;
