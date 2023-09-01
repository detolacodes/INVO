import React from "react"; 
import CriticalData from './CriticalRequesData'
import CriticalRequest from './CriticalRequest'
import  './Criticalinfo.css'


const CriticalInfo = () =>{

	return(

		<div className='mt-3'>
			{

				CriticalData.map((item, index)=>{
					 return <div className='mt-3'>
					 	<CriticalRequest name={item.name} message={item.message} date={item.date} className='mt-3' />
					 </div>

				})

			}
		</div>


	)

}


export default CriticalInfo