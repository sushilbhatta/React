import { useState } from "react";
import penImage from "../assets/no-projects.png";

export default function ProjectIntro({
  introPage,
  addProjectHandler,
  isClick,
}) {
  console.log(addProjectHandler);
  return (
    <div
      className={
        (introPage ? "flex-col items-center gap-5" : "hidden") &&
        (!isClick ? "flex-col items-center gap-5" : "hidden")
      }
    >
      <div className='w-1/5 h-1/5'>
        <img
          src={penImage}
          alt='pen and pad with a small note template'
          className='w-full h-full min-w-24'
        />
      </div>

      <h1 className='text-2xl font-bold text-yellow-900/80'>
        No projects Selected
      </h1>
      <p className='text-lg font-normal text-neutral-500'>
        Select a project or get started by creating a new one
      </p>
      <button
        className='px-6 py-1 width- text-white text-lg bg-yellow-950/80 rounded hover:opacity-75'
        onClick={addProjectHandler}
      >
        Create new project
      </button>
    </div>
  );
}
