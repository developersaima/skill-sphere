import { getCourses } from '../../lib/courses'
import AllCourses from '../../section/AllCourses'
import React from 'react'


export const metadata = {
  title: "Courses - SkillSphere ",
}
const CoursePage =async () => {

    const courses= await getCourses()
  return (
    <div>
      <AllCourses initialCourses={courses} ></AllCourses>
    </div>
  )
}

export default CoursePage
