import Layout from "../Layout";
import Delete from '../../components/GDPR/DeleteRequests/Delete'
import SendInfo from '../../components/GDPR/SendInfoRequests/SendInfo'
import CriticalInfo from '../../components/GDPR/CriticalRequests/CriticalInfo'
import './gdprDashboard.css'


const GDPRDashboard = () =>{


	return(
		<Layout>
			<div className='col-lg-11 my-3'>

				<div className='intro'>
					GDPR/CCPA
				</div>

				<div className='flex-h-new91 text-white mt-3'>
					<div className='flex-1'>
						<Delete />
					</div>

					<div className='flex-1'>
						<SendInfo />
					</div>

					<div className='flex-1'>
						<CriticalInfo />
					</div>
				</div>

				<div className='text-center mt-4 flex-h-new9 w-100'>
					<div className='flex-h-new9 numbg'>
						<div className='bg-nums'>
							<i className='bi-chevron-left'></i>
						</div>
						<div className='bg-nums'>
							1
						</div>
						<div className='bg-nums'>
							2
						</div>
						<div className='bg-nums'>
							3
						</div>
						<div className='bg-nums'>
							4
						</div>
						<div className='bg-nums'>
							5
						</div>
						<div className='bg-nums'>
							<i className='bi-chevron-right text-dark'></i>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)

}

export default GDPRDashboard
