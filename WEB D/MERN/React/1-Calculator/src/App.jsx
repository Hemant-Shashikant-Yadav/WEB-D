import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import styles from './App.module.css'
import InputExpression from './components/InputExpression'
import ButtonContainer from './components/ButtonContainer'

function App() {

  return (
    <>
      <div className={styles.container}>

        <InputExpression />
        <ButtonContainer />
      </div>

    </>
  )
}

export default App