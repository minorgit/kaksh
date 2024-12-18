import React from "react";
import { MdAdd } from "react-icons/md";
const AddButton = ({toggleForm}) =>{
    return (
<button
        className="w-16 h-16 flex items-center justify-center rounded-2xl bg-yellow-400 hover:bg-yellow-500 fixed right-10 bottom-10"
        onClick={toggleForm}
      >
        <MdAdd className="text-[32px] text-gray-100" />
      </button>

    );

}
export default AddButton;