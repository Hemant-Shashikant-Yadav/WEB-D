// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// // import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <h1>Vite + React</h1>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//     </>
//   )
// }

// export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Random from './components/Random'

function App() {
  let name = "Hemant Shashikant Yadav"
  let person = {
    name: "Hemant Shashikant Yadav",
    age: 30,
    city: "Pune"
  }
  function getDetails() {
    let str = ""
    for (let i in person) {
      str += `${i}: ${person[i]} `
    }
    return str
  }

  return (
    <>
      <h1>This is from App.jsx</h1>
      <h4>{name}</h4>
      <hr />
      <p>{person.age}</p>
      <p>{getDetails()}</p>
      <Random></Random>

    </>
  )
}

export default App
