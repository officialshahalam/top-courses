import React from 'react'

function Filter({filterData,category,setCategory}) {
  console.log(category);

  function filterHandler(title ){
    setCategory(title);
  }
  
  return (
    <div className='flex justify-center my-4 gap-2 w-full'>
      {
        filterData.map((filter)=>{
          return (
            <button
              onClick={()=>filterHandler(filter.title)}
              className={`px-1 lg:px-3 text-xs lg:text-base py-1 rounded-md bg-bgDark text-white border
              ${category===filter.title?"bg-opacity-60 border-white":"bg-opacity-40 border-transparent"}`}
              key={filter.id}>
              {filter.title}
            </button>
          )
        })
      }
    </div>
  )
}

export default Filter;