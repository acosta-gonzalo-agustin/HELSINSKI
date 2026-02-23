const Total = ({parts}) => (
  <h3>
   total of {parts.reduce((sum,part) => sum + part.exercises,0)} exercies
  </h3>
)

export default Total;