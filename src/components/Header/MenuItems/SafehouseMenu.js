import React, { useState } from "react";
import DropDown from "components/shared/DropDown/DropDown";
import Menus from "./Menus";

const SafehouseMenu = () => {
  const [isShow, setIsShow] = useState(false);

  const menusList = [
    {
      id: 1,
      label: "Profile",
      url: "/profile",
    },
    {
      id: 2,
      label: "G-Rank",
      url: "/g-rank",
    },
    {
      id: 3,
      label: "Safe",
      url: "/safe",
    },
    {
      id: 4,
      label: "Leaderboard",
      url: "/leaderboard",
    },
  ];

  return (
    <DropDown
      isShow={isShow}
      onClose={setIsShow}
      width={'220px'}
      element={<Menus list={menusList} onSubmit={setIsShow} />}
    >
      <div type="button">
        <div
          className={`cursor-pointer bg-gradient-to-r bg-clip-text font-Montserrat font-bold capitalize tracking-wide ${
            isShow ? "text-[#e2e3e6]" : "text-[#787878]"
          }`}
          onClick={(e) => {
            e.preventDefault();
            setIsShow(true);
          }}
        >
          Safehouse
        </div>
      </div>
    </DropDown>
  );
};

export default SafehouseMenu;
