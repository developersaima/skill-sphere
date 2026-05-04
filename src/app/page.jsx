import HeroSection from '@/section/Hero'
import Latest from '@/section/Latest'
import PopularCourses from '@/section/PopularCourse'
import Tips from '@/section/Tips'
import React from 'react'

const HomePage = () => {
  return (
    <div>

      <HeroSection></HeroSection>
      <PopularCourses></PopularCourses>
      <Tips></Tips>
      <Latest></Latest>
      
    </div>
  )
}

export default HomePage
