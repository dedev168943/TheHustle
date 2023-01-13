import React from "react";
import { FaTimes } from "react-icons/fa";
import icon3 from "assets/images/icons/clean-cash.png";
import icon4 from "assets/images/icons/hst-final.png";
import icon2 from "assets/images/icons/hustler-clean-cash-token.png";
import icon1 from "assets/images/icons/slot.png";
import Modal from "../../../../shared/Modal";

import { v4 as uuid } from "uuid";
const data = [
  {
    id: uuid(),
    icon: icon2,
    cost: "25000",
    classes: "w-10 mx-auto my-2",
  },
  {
    id: uuid(),
    icon: icon3,
    cost: "15000",
    classes: "w-16",
  },
  {
    id: uuid(),
    icon: icon4,
    cost: "1000",
    classes: "w-16",
  },
];
const UpgradeForm = ({ isOpen, setIsOpen, startUpgradeTimer }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    startUpgradeTimer(1000 * 60 * 60);
    setIsOpen(false);
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      //   className='w-8/12'
    >
      <div
        className="w-full bg-[#1a1b1f] border rounded-xl border-[#252525]  py-4 px-6"
        style={{ boxShadow: "#a5a5a5eb 0px 0px 9px 0px" }}
      >
        <form onSubmit={submitHandler}>
          <div className="mb-2 flex items-center justify-between">
            <div />
            <div />
            <h2 className="px-5 py-2 text-center font-Montserrat text-2xl font-bold text-olive">
              Upgrade Character
            </h2>
            <FaTimes
              className="block text-2xl text-olive hover:cursor-pointer"
              onClick={() => {
                setIsOpen(false);
              }}
            />
          </div>

          <div className="flex justify-center">
            <div>
              <div
                className="flex items-center justify-center gap-x-3"
                key={Math.random()}
              >
                <div className="w-10">
                  <img
                    src={icon1}
                    className="h-full w-full object-contain"
                    alt="Wallet Icon"
                  />
                </div>
                <p className="font-bold text-white">1000</p>
              </div>
              {data.map((item) => (
                <div className="flex  items-center gap-x-3" key={Math.random()}>
                  <div className={item.classes}>
                    <img
                      src={item.icon}
                      className="h-full w-full object-contain"
                      alt="Token Icon"
                    />
                  </div>
                  <p className="font-bold text-white">{item.cost}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-5 flex justify-center">
            <button className="my-5 flex flex-col items-center justify-center rounded-lg border border-[#2F2F2E] py-3 px-3 text-lime-400 hover:bg-[#252525]">Upgrade</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default UpgradeForm;
