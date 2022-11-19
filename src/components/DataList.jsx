import React, {useContext} from 'react'
import {AppContext} from '../context/AppContext'
import DataCard from '../components/DataCard'

function DataList() {

    const {data} = useContext(AppContext)

    if (data.length===0) {
        return (
          <div className='col-sm-6'>
            <div className='card p-5 mx-auto my-5 bg-dark text-white text-center'>
              <p className='fs-4'>Aun no hay Informacion Disponible</p>
            </div>
          </div>
        )
      } 
      
    if (data.message){
      return (
        <div className='col-sm-6'>
          <div className="alert alert-warning" role='alert'>
          <h4 className="alert-heading mb-4 text-center">Upps! Algo acaba de Ocurrir</h4>
          <hr />
          <p className='fs-4 fw-bold'>Codigo: <span className='fst-italic'>{data.cod}</span></p>
          <p className='fs-4 fw-bold'>Error: <span className='fst-italic'>{data.message}</span></p>
          </div>
        </div>
      )
    }
    return (
      <div className='col-sm-6'>
        <DataCard data={data}/>
      </div>
    )
}

export default DataList