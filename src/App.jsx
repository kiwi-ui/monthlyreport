import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Detailed from './components/Detailed';
import UndoneTicket from './components/UndoneTicket';

function App() {
  return (
    <div className="">
      <UndoneTicket />
      <Detailed />
    </div>
  )
}

export default App
