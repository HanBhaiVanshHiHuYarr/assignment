import React, {FC} from 'react';

const TopPane: FC = () => {
  return (
    <div className="p-4 py-2 flex">
      <div className="bg-white flex drop-shadow-sm rounded-md outline outline-2 outline-neutral-300 divide-x-2 divide-neutral-300">
        <button className="py-2 px-6 font-medium rounded-l-md text-neutral-500 hover:bg-neutral-100 hover:font-bold hover:text-neutral-600 ">
          General
        </button>
        <button className="py-2 px-6 font-bold bg-neutral-100 text-neutral-600 ">
          Users
        </button>
        <button className="py-2 px-6 font-medium  text-neutral-500  hover:bg-neutral-100 hover:font-bold hover:text-neutral-600 ">
          Plan
        </button>
        <button className="py-2 px-6 font-medium  text-neutral-500  hover:bg-neutral-100 hover:font-bold hover:text-neutral-600 ">
          Billing
        </button>
        <button className="py-2 px-6 font-medium rounded-r-md text-neutral-500  hover:bg-neutral-100 hover:font-bold hover:text-neutral-600">
          Integrations
        </button>
      </div>
    </div>
  );
};

export default TopPane;
