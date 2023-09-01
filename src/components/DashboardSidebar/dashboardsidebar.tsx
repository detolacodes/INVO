import {useState} from 'react'
import './dashboardsidebar.css'
import '../../../public/b-icon/font/bootstrap-icons.css'
// import icons from '../../../b-icon/font/bootstrap-icons.css'
import andriodchrome from "../../assets/android-chrome.png";
import transfer4 from "../../assets/transfer-4.png";

const DashboardSidebar = () =>{

	return(

		<>

			<div className='text-white flex-h-new1 sidebar p-2'>

				<div className='fb'>Game Stakers</div>

				<div className='bg-chart rounded w-100 box-sh-lg px-2 py-3 flex-v-new1'>
					<div className='flex-h-new w-100'> 
						<div className='flex-h-new w-100'>
							<div className='flex-h-new91 w-100'>
								<div className='flex-v-new'>
									<div className='bg-white bora100 p-1 andriodchrome-bg flex-h-new'>
										<img src={andriodchrome} />
									</div>

									<div className='ml05 fos13'>
										Stackers Profits <span className='fos10'>(23 days)</span>
									</div>
								</div>
								<div className='fos12 flex-h-new'>
									<div>Last 24 Hrs</div>
									<div className='flex-v-new incr'>
										<div className=''>0.24% </div>
										<i className='bi-arrow-up fos12 ml-2'></i>
									</div>
								</div>
							</div>
						</div>

						<div>
							<div className='mt-3 bal fos25'>
								<span className='fos13'>$</span> 127,458.67
							</div>
						</div>

						<div className='flex-h-new91 w-100 mt-2'>
							<div className='flex-h-new'>
								<div className='fos11'>
									Current Stakers
								</div>
								<div className='fos23 incr'>
									752
								</div>
							</div>
							<div className='flex-h-new'>
								<div className='fos11'>
									Staking Value
								</div>
								<div className='fos23 incr'>
									$ 5.8M
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='fb'>Invo's Dynamic Lock</div>

				<div className='bg-chart rounded w-100 box-sh-lg px-2 py-3 flex-v-new1'>
					<div className='flex-h-new w-100'> 
						<div className='flex-h-new w-100'>
							<div className='flex-h-new91 w-100'>
								<div className='flex-v-new'>
									<div className='bg-white bora100 p-1 andriodchrome-bg flex-h-new'>
										<img src={andriodchrome} />
									</div>

									<div className='ml05 fos13'>
										Dynamic Lock Profits <span className='fos10'>(30 days)</span>
									</div>
								</div>
								<div className='fos12 flex-h-new'>
									<div>Last 24 Hrs</div>
									<div className='flex-v-new text-danger'>
										<div className=''>8.3% </div>
										<i className='bi-arrow-down fos12 ml-2'></i>
									</div>
								</div>
							</div>
						</div>

						<div>
							<div className='mt-3 bal fos25'>
								<span className='fos13'>$</span> 311,724.04
							</div>
						</div>

						<div className='flex-h-new91 w-100 mt-2'>
							<div className='flex-h-new'>
								<div className='fos11'>
									Locked Transactions
								</div>
								<div className='fos23 incr'>
									9,275
								</div>
							</div>
							<div className='flex-h-new'>
								<div className='fos11'>
									Value Locked
								</div>
								<div className='fos23 incr'>
									$ 12.1M
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='fb'>Transfer Transactions</div>

				<div className='bg-chart rounded w-100 box-sh-lg px-2 py-3 flex-v-new1'>
					<div className='flex-h-new w-100'> 
						<div className='flex-h-new w-100'>
							<div className='flex-h-new91 w-100'>
								<div className='flex-v-new'>
									<div className='bg-white bora100 p-1 andriodchrome-bg flex-h-new'>
										<img src={transfer4} />
									</div>

									<div className='ml05 fos13'>
										Transaction Profits <span className='fos10'>(30 days)</span>
									</div>
								</div>
								<div className='fos12 flex-h-new'>
									<div>Last 24 Hrs</div>
									<div className='flex-v-new incr'>
										<div className=''>18.3% </div>
										<i className='bi-arrow-up fos12 ml-2'></i>
									</div>
								</div>
							</div>
						</div>

						<div>
							<div className='mt-3 bal fos25'>
								<span className='fos13'>$</span> 58,342.47
							</div>
						</div>

						<div className='flex-h-new91 w-100 mt-2'>
							<div className='flex-h-new'>
								<div className='fos11'>
									Total Transactions
								</div>
								<div className='fos23 incr'>
									103K
								</div>
							</div>
							<div className='flex-h-new'>
								<div className='fos11'>
									AVG Amount
								</div>
								<div className='fos23 incr'>
									7.32
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</>

	)	

}


export default DashboardSidebar