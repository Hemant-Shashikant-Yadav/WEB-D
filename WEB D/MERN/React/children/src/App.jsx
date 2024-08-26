import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.css'
import ErrorMessage from './components/ErrorMessege'
import PrintList from './components/PrintList'
import Container from './components/Container'
import TextInput from './components/TextInput'
function App() {

  // let cars = ['Mahindra', 'Audi', 'BMW', 'Mercedes', 'Porsche', 'Ferrari', 'Aston Martin', 'Pagani', 'Bugatti', 'Tata', 'Land Rower', 'Volvo'];
  // let cars = [];


  // let textToShow = "Text to display"

  // let textState = useState();
  // let textState = useState("Text to display");
  // let textToShow = textState[0];
  // let setTextState = textState[1];

  let [cars, setCarsState] = useState([]);


  // const handleOnChange = (event) => {  
  //   console.log(event.target.value)
  //   setTextState(event.target.value)
  // }


  const handleOnKeyDown = (event) => {
    if (event.key === 'Enter') {

      console.log(event.target.value)
      let tp = event.target.value
      event.target.value = ""
      let temp = [...cars, tp]
      setCarsState(temp)

    }
    // setTextState(event.target.value)
  }


  return <>

    <Container>
      <h1>Hello, React!</h1>
      <h2>Printing the list of car names.</h2>
      {/* <TextInput /> */}
      {/* <TextInput handleOnChange={handleOnChange} /> */}
      <TextInput handleOnKeyDown={handleOnKeyDown} />
      {/* <p>{textToShow}</p> */}
      <ErrorMessage CarNames={cars}></ErrorMessage>
      <PrintList CarNames={cars} />
    </Container>

    <Container>

      <p>The list of car names is shown below and can The list of car names is shown below and can The list of car names is shown below and can The list of car names is shown below and can The list of car names is shown below and can The list of car names is shown below and can The list of car names is shown below and can The list of car names is shown below and can The list of car names is shown below and can The list of car names is shown below and can The list of car names is shown below and can The list of car names is shown below and can The list of car names is shown below and can The list of car names is shown below and can The list of car names is shown below and can </p>
    </Container>
  </>
}

export default App
