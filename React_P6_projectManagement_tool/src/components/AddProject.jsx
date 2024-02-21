import { useRef, useState } from "react";

// AddProject.js
export default function AddProject({
  isMainBtnclick,
  handleCancel,
  inputvalue,
  handleChange,
  SaveInputHandler,
}) {
  console.log(inputvalue);
  return (
    <section
      className={`${
        isMainBtnclick ? "flex-col justify-center w-2/4 ml-20" : "hidden"
      } `}
    >
      <div className='flex justify-end gap-10'>
        <button
          className='px-6 py-1  text-black text-lg rounded hover:bg-black hover:text-white'
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          className='px-6 py-1 width- text-white text-lg bg-black rounded hover:opacity-80'
          onClick={SaveInputHandler}
        >
          Save
        </button>
      </div>
      <div className=' mt-6'>
        <label className='block py-1  font-medium text-gray-400  '>TITLE</label>
        <input
          ref={titleName}
          required
          type='text'
          className='w-full bg-slate-200 p-2 text-gray-600  focus:bg-transparent focus:outline-none focus:border-b-2 '
        />
      </div>
      <div className=' mt-6'>
        <label className='block py-1  font-medium text-gray-400'>
          DESCRIPTION
        </label>
        <input
          value={inputvalue.description}
          required
          type='text'
          className='w-full text-gray-600 bg-slate-200 p-2   focus:bg-transparent focus:outline-none focus:border-b-2 '
          onChange={(e) => handleChange("description", e.target.value)}
        />
      </div>
      <div className=' mt-6'>
        <label className='block py-1  font-medium text-gray-400  '>
          DUE DATE
        </label>
        <input
          value={inputvalue.date}
          required
          type='date'
          className='w-full text-gray-600 bg-slate-200 p-2 focus:bg-transparent focus:outline-none focus:border-b-2 '
          onChange={(e) => handleChange("date", e.target.value)}
        />
      </div>
    </section>
  );
}
