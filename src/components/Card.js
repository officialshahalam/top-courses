import React, { useState } from 'react'
import { FcLike ,FcLikePlaceholder} from "react-icons/fc";
import { toast } from 'react-toastify';
function Card({course,likedCourses,setLikedCourses}) {
  const [fullDes,setFullDes]=useState(false);
  function likeHandler(){
    if(likedCourses.includes(course.id)){
      setLikedCourses((prev)=>prev.filter((cid)=>cid!==course.id));
      toast.warning("remove like");
    }
    else{
      setLikedCourses((prev)=>[...prev,course.id]);
      toast.success("liked successfully");
    }
  }
  function descriptionHandler(){
    setFullDes(!fullDes);
  }
  let description=fullDes?`${course.description}...`:`${course.description.substring(0,150)}...`;
  return (
    <div className='bg-bgDark rounded-md pb-6'>
      <div className='rounded-md relative'>
        <img
          className='rounded-md'
          src={course.image.url}
        />
        <button
          onClick={likeHandler}
          className='absolute right-3 text-2xl bg-white p-1 rounded-full bottom-[-16px] '>
          {
            likedCourses.includes(course.id)?(<FcLike />):(<FcLikePlaceholder />)
          }
        </button>
      </div>
      <div className='mt-4 px-4 text-white'>
        <h1 className='text-xl'>{course.title}</h1>
        <p className='text-sm mt-2'>
          {description}
          <span
            className='text-blue-600'
            onClick={descriptionHandler}>
            {
              fullDes?`show less`:`show more`
            }
          </span>
        </p>
      </div>
    </div>
  )
}
export default Card;