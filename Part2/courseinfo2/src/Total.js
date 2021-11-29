const Total = ({content}) =>{

  let total = content.reduce( (sum, part) => sum += part.exercises , 0)

  return(<h5>Number of exercises {total}</h5>)
}

export default Total;