import React, {useState, useEffect} from 'react'
// import {DeleteData} from './deleteRequestData'
import  './deleteRequest.css'
import rocket from '../../../assets/rocket.png'


interface DeleteData{
	name: string;
	message: string;
    date: number;
}

const DeleteRequest: React.FC<DeleteData> = ({name, message, date}) => {

	return <div className='bg-chart flex-h-new1'>
				<div className='flex-h-new12 upperrequestcard w-100'>
					<div className='m-2'>
						<div className='name-bg'>
							<img src={rocket} width='40px' />
						</div>
					</div>

					<div className='flex-h-new1 ml-3 mt-2 pt-2 pb-5 flex-1'>
						<div className='fos12 title'>
							Data Deletion Request From - {name}
						</div>

						<div className='fos12 w-80'>
							{message}
						</div>
					</div>
				</div>

				<div className='flex-h-new4 mt-2 fos12 ml-3 mb-3'>
					<div className='flex-h-new91'>
						<div className=''>
							<button className='requestbtn fos11'>
								New Request
							</button>
						</div>

						<div className='ml-2 flex-h-new91 fos10'>
							<i className='bi-calendar3'></i>
							<div className='ml-1'>{date}</div>
						</div>
					</div>

					<div className='flex-h-new51 ml-5'>
						<button className='deletebtn'>
							Delete
						</button>
					</div>
				</div>
			</div>

}

export default DeleteRequest
