import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Main from "./components/Main"
import NavBar from "./components/NavBar"

const App = () => {

  return (
    <>
      <NavBar />
      <Main />
    </>
  );
}

export default App
