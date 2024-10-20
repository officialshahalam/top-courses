import React, { useState } from 'react'
import Card from './Card';
function Cards({courses,category}) {
  let allCourses=[];
  const [likedCourses,setLikedCourses]=useState([]);
  function getcourses(){
    if(category==="All"){
      Object.values(courses).forEach((category)=>{
        category.forEach((course)=>{
          allCourses.push(course);
        })
      });
      return allCourses;
    }
    else{
      return courses[category];
    }
  }
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {
        getcourses().map((course)=>{
          return (<Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>)
        })
      }
    </div>
  )
}

export default Cards;