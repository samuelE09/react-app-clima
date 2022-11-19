import React from 'react'

function DataCard({data}) {
  return (
    <>
    <div className='card p-5 mx-auto my-5 bg-dark text-white'>
    <label className="card-title fw-bold fs-4 mb-3 text-center"> Datos de {data.name}, {data.sys.country}</label>
    <hr />
    <p className='fs-4 fw-bold'>Temperature: <span>{data.main.temp} °C</span></p>
    <p className='fs-4 fw-bold'>Humidity: <span>{data.main.humidity} %</span></p>
    <p className='fs-4 fw-bold'>Win Speed: <span>{data.wind.speed}</span></p>
    <p className='fs-4 fw-bold'>Pressure : <span>{data.main.pressure}</span></p>
    <iframe 
    src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31788.21187829265!2d${data.coord.lon}!3d ${data.coord.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2spe!4v1668880125370!5m2!1ses-419!2spe`}
    height="450"
    loading="lazy"></iframe>
    </div>
    
    </>
  )
}

export default DataCard