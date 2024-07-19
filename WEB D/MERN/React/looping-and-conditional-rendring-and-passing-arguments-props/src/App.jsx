import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.css'
import ErrorMessage from './components/ErrorMessege'
import PrintList from './components/PrintList'
function App() {

  let cars = ['Mahindra', 'Audi',  'BMW', 'Mercedes', 'Porsche', 'Ferrari', 'Aston Martin', 'Pagani', 'Bugatti', 'Tata', 'Land Rower', 'Volvo'];

  // let cars = [];

  return (
    <>
      <h1>Hello, React!</h1>
      <h2>Printing the list of car names.</h2>
      <ErrorMessage CarNames={cars}></ErrorMessage>
      <PrintList CarNames={cars} />
    </>
  )
}

export default App
