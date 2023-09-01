import React, {useState, useEffect} from 'react'
import  './Sendinfo.css'
import rocket from '../../../assets/rocket.png'

interface SendData{
	name: string;
	message: string;
    date: number;
    requestType: string;
    timeline: string;
}

const SendInfoRequest: React.FC<SendData> = ({name, message, date, requestType, timeline}) => {

	return <div className='bg-chart flex-h-new1'>
				<div className='flex-h-new12 upperrequestcard w-100'>
					<div className='m-2'>
						<div className='name-bg-sendinfo'>
							<img src={rocket} width='40px' />
						</div>
					</div>

					<div className='flex-h-new1 ml-3 mt-2 pt-2 flex-1'>
						<div className='fos12 title'>
							Data Request From - {name}
						</div>

						<div className='fos12 w-100 flex-h-new1 pb-5'>
							{message}
						</div>
					</div>
				</div>

				<div className='flex-h-new12 mt-2 fos12 mb-3 w-100'>
					<div className='flex-h-new9'>
						<div className='ml-2'>
							<button className='warningbtn fos11'>Critical</button>
						</div>

						<div className='flex-h-new9 fos10 flex-1'>
							<i className='bi-calendar3'></i>
							<div className='ml-1'>{date}</div>
							<div className=' w-45 ml-1'>this request is over 30 days late</div>
						</div>

						<div className='mr-5'>
							<button className='sendinfobtn'>
								Send Info
							</button>
						</div>
					</div>
				</div>
			</div>

}

export default SendInfoRequest
