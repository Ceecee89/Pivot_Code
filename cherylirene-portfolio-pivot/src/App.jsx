import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// bring in the code
//"." means same place
// "/" means in folder
import Header from "./components/Header"
import Card from "./components/Card"
import Bio from "./components/Bio"
function App() {
  //javascript variables
  const name = "CeeCee";
  const description = "Coding is fun!!!"
  return (
    <>
      <Header/>
      <Card
      nameProps={name} descriptionProps={description}
      ></Card>
<Bio></Bio>
    </>
  )
}

export default App
