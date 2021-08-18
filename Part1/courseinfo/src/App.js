import React from 'react';
import { useState } from 'react';

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  return (
    <div>
      {left}
      <button onClick={() => setLeft(left + 1)}>
        left
      </button>
      <button onClick={() => setRight(right + 1)}>
        right
      </button>
      {right}
    </div>
  )
}
// const Header = (props) => {
//   return(
//     <h1>{props.courseName}</h1>
//   )
// }


// const Content = (props) => {

//   return(
    
//     <table>
//       {props.parts.map(prop => {
//           return (
//             <tr>
//               <td>{prop.name}</td>
//               <td>{prop.exercises}</td>
//             </tr>
//           )
//       })}       
//     </table>
  
//   )
// }

// const Total = (props) => {
//   let total = 0;
//   props.parts.forEach(prop => {
//     total += prop.exercises;
//   });
//   console.log(total);
//   return(
//     <div>Number of exercises {total}</div>
//   )
// }

// const App = () => {
//   const course = {
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7
//       },
//       {
//         name: 'State of a component',
//         exercises: 14
//       }
//     ]
//   }

//   return (
//     <div>
//       <Header courseName = {course.name}/>
//       <Content parts={course.parts} />
//       <Total parts={course.parts} />
//     </div>
//   )
// }

export default App