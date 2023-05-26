import React from "react";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function SideBar({title, one, two, three, four ,five,six,saven}) {
  return (
    <div>
      <h2 className="text-lg font-sans font-semibold mb-1 px-6">{title}</h2>
      <ul>
        <li className="SideBarLinks">{one}<span><KeyboardArrowRightIcon/></span></li>
        <li className="SideBarLinks">{two}<span><KeyboardArrowRightIcon/></span></li>
        <li className="SideBarLinks">{three}<span><KeyboardArrowRightIcon/></span></li>
      </ul>
    </div>
  );
}

export default SideBar;
