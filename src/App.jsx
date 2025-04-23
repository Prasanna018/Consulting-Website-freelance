import React from 'react'
import './App.css'
import Header from './components/Header'

function App() {


  return (
    <div className=''>
      <div>
        <img src='bgimg.jpg' className='h-1/2 w-full absolute object-cover z-50 opacity-60'></img>
      </div>
      <div className='z-100 relative'>
        <Header></Header>
      </div>
      consulting website
    </div>
  )
}

export default App
