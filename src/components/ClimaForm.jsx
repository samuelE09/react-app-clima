import {useContext} from 'react'
import {AppContext} from "../context/AppContext"
import {useState} from 'react'



function ClimaForm() {

    const {GetData} = useContext(AppContext)

    return (
        <div className='col-sm-6'>
                <form action="" className='card p-5 mx-auto my-5 bg-dark text-white text-center'  onSubmit={GetData}>
                    <label className="fw-bold fs-4 mb-3"> Aplicación del Clima </label>
                    <input 
                        type="text"
                        name="city" 
                        className="form-control my-3" 
                        placeholder="Ingrese la Cuidad"
                        />
                    <input 
                        type="text"
                        name='country' 
                        className="form-control mb-3" 
                        placeholder="Ingrese el pais"
                        />
                    <button type="submit" className="btn btn-success mb-3">Solicitar Datos</button>
                </form>
        </div>
        
    )
}

export default ClimaForm