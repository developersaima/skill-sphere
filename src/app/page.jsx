import HeroSection from '.././section/Hero'
import Instructors from '.././section/Instructor'
import Latest from '.././section/Latest'
import PopularCourses from '.././section/PopularCourse'
import Tips from '.././section/Tips'
import React from 'react'

const HomePage = () => {
  return (
    <div>

      <HeroSection></HeroSection>
      <PopularCourses></PopularCourses>
      <Tips></Tips>
      <Latest></Latest>
      <Instructors></Instructors>
      
    </div>
  )
}

export default HomePage
