import React from 'react'
import ClimaForm from './components/ClimaForm'
import DataList from './components/DataList'

function App() {

  return (
    <div className='container'>
      <div className='row align-items-center my-5'>
        <ClimaForm/>
        <DataList/>
      </div>
    </div>
    
  )
}

export default App
