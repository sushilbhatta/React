import { FaPlus } from "react-icons/fa";
export default function ProjectSideBar({ addProjectHandler, inputvalue }) {
  return (
    <>
      <section className='wrapper h-screen pl-5 pr-20 bg-black  rounded-xl  rounded-l-none max-w-2xl my-auto mt-16 flex flex-col gap-10'>
        <h1 className='w-full text-white font-semibold mt-16 ml-4 text-xl'>
          YOUR PROJECTS
        </h1>
        <button
          className='flex gap-1 items-center bg-neutral-600 text-slate-300  p-2  rounded-lg w-max mx-4 hover:bg-slate-502'
          onClick={addProjectHandler}
        >
          <FaPlus />
          Add Projects
        </button>
        <ul className='flex flex-col gap-4 mx-4 text-xl list-none w-full'>
          <li className='w-full list-none text-white hover:bg-gray-500 p-2 rounded-sm cursor-pointer'>
            {inputvalue.title}
          </li>
        </ul>
      </section>
    </>
  );
}
