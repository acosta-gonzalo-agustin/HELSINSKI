import Course from "./Course"
import Header from "./Header"




const Courses = ({header, courses}) => {


  return (
    <div>
      <Header name={header} />  
      {courses.map(course => <Course key={course.id} course={course} /> )}
    </div>
  )
}

export default Courses