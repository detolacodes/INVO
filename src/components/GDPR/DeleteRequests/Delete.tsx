import React from "react"; 
import DeleteData from './deleteRequestData'
import DeleteRequest from './deleteRequest'
import  './deleteRequest.css'


const Delete = () =>{

	return(

		<div className='mt-3'>
			{

				DeleteData.map((item, index)=>{
					 return <div className='mt-3'>
					 	<DeleteRequest name={item.name} message={item.message} date={item.date} className='mt-3' />
					 </div>

				})

			}
		</div>


	)

}


export default Delete
