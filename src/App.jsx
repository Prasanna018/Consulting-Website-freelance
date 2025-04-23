import React from 'react'
import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

function App() {


  return (
    <div className=''>
      <div>
        <img src='bgimg.jpg' className='h-1/2 w-full absolute object-cover z-10 opacity-70 pointer-events-none' />

      </div>
      <div className='z-100 relative'>
        <Header></Header>


        <div>

          <Outlet >


          </Outlet>
        </div>

      </div>


    </div>
  )
}

export default App
