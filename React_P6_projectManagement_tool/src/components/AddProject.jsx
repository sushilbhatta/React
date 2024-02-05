export default function AddProject() {
  return (
    <section className='flex-col justify-center w-2/4 ml-20'>
      <div className='flex justify-end gap-10'>
        <button className='px-6 py-1  text-black text-lg rounded'>
          Cancle
        </button>
        <button className='px-6 py-1 width- text-white text-lg bg-black rounded hover:opacity-80'>
          Save
        </button>
      </div>
      <div className=' mt-6'>
        <label className='block py-1  font-medium text-gray-400  '>TITLE</label>
        <input
          type='text'
          placeholder='Add a title'
          className='w-full bg-slate-200 p-2 text-gray-600  focus:bg-transparent focus:outline-none focus:border-b-2 '
        />
      </div>
      <div className=' mt-6'>
        <label className='block py-1  font-medium text-gray-400  '>
          DESCRIPTION
        </label>
        <input
          type='text'
          placeholder='Add a description'
          className='w-full text-gray-600 bg-slate-200 p-2   focus:bg-transparent focus:outline-none focus:border-b-2 '
        />
      </div>
      <div className=' mt-6'>
        <label className='block py-1  font-medium text-gray-400  '>
          DUE DATE
        </label>
        <input
          type='date'
          className='w-full text-gray-600 bg-slate-200 p-2 focus:bg-transparent focus:outline-none focus:border-b-2 '
        />
      </div>
    </section>
  );
}
