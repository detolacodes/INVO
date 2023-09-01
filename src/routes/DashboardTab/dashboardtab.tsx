import react from 'react'
import Layout from "../Layout";
import DashboardSidebar from '../../components/DashboardSidebar/dashboardsidebar'
import bg from "../../assets/litecoin-icon.png";
import bottomImage from '../../assets/image 3.png'
import andriodchrome from "../../assets/android-chrome.png";
import transfer4 from "../../assets/transfer-4.png";
import image from '../../assets/henry wells.png'
import stock from '../../assets/price.png'
import orderBook from '../../assets/order Book.png'
import Line from '../../assets/line.png'
import arrowicon from '../../assets/bx-right-arrow-circle.png'
import arrowicon2 from '../../assets/bx-right-arrow-alt.png'
import withdraw from '../../assets/withdraw.png'
// import CandleSticks from "../../components/CandleSticks/candlesticks.html";
import icons from '../../../b-icon/font/bootstrap-icons.css'
import './dashboardtab.css'


const DashboardTab = () =>{


	return(
		<Layout>
			<div className='col-lg-11 text-white'>
					<div className='wrap'>
						<div className='mainbar'>
							<div className='bg-img'>
								<img src={image} />
							</div>

							<div className='flex-2 flex-h-new91 w-100'>
								<div className='flex-2'>
									<div className='bg-candlestick w-100'>
										<iframe src='candlestick/candlestick.html' width='100%' height='100%' ></iframe>
										{/*<img src={stock} />*/}
									</div>
								</div>

								<div className='flex-1 balance'>
									<div className=''>
										<i></i>
										<div className=''>
											Available Balance
										</div>
									</div>

									<div className='mt-3 bal fos23'>
										<span className='fos11'>$</span> 434,148.23
									</div>

									<div>
										<div className='fos10 m-2'>
											From
										</div>

										<div className='m-2 fos10 bg-white w-60 flex-v-new2 text-dark'>
											<div className='bg-gray p-1'>
												Game Name
											</div>
											<div className='mx-2 flex-h-new91'>
												<div>Grand Theft Auto 6</div>
											</div>
											<div className='mr-1'>
												<i className='bi-caret-right-fill'></i>
											</div>
										</div>
									</div>

									<div className='my-4'>
										<div className='fos10 m-2'>
											Where To Sent Payment 
										</div>

										<div className='m-2 fos11 bg-white w-60 flex-h-new91 text-dark'>
											<div className='bg-gray p-1'>
												Pay To
											</div>
											<div className=''>
												<div>Bank Account #1</div>
											</div>
											<div className='mr-1'>
												<i className='bi-caret-right-fill'></i>
											</div>
										</div>
									</div>

									<div className='mx-4 mt-5'>
										<button className='w-100 rounded secondarybtn'>
											<img src={withdraw} className='mr-2' /> Withdraw Now 
										</button>
									</div>
								</div>
							</div>

							<div className='flex-h-new91 flex-1 w-100 mt-3'>
								<div className='flex-1 bg-orderbook px-3'>
									<div className='table-wrap'>
										<iframe src='gameorderbooktable.html' className='frame' width='100%' height='100%' ></iframe>

										<button className='w-50 mt-3 primarybtn'>
											View All
										</button>
									</div>
								</div>

								<div className='flex-1 orderbook'>
									<div className='orderbook-wrap p-3'>
										<div className='noti'>
											Notifications
										</div>

										<div className='flex-v-new2 mt-3 icon-wrap'>
											<div className='flex-v-new'>
												<div className=''>
													{/*<img src={Line} height='300px' />*/}
												</div>

												<div className='flex-1 flex-h-new1 noti-wrap w-100 fos11'>
													<div className='flex-v-new1 flex-1'>
														<img src={arrowicon} width='25px' />
														<div className='mx-1'>
															INVO token values
														</div>
														<img src={arrowicon2} className='ml-3' width='12px' />
														<div className='w-60'>
															Stability Notice: INVO token value remains stable. Consider running limited-time promotions to further ground your game's default currency
														</div>
													</div>

													<div className='flex-v-new1 flex-1 mt-2'>
														<img src={arrowicon} width='25px' />
														<div className='mx-1'>
															Dynamic Lock Adjustments
														</div>
														<img src={arrowicon2} className='' width='12px' />
														<div className='w-50'>
															Opportunity: there's a high volume of Dynamic Lock Adjustments! Leverage this momentum with special promotions for in-game purchase 
														</div>
													</div>

													<div className='flex-v-new1 flex-1 mt-2'>
														<img src={arrowicon} width='25px' />
														<div className='mx-1'>
															Market Favorability
														</div>
														<img src={arrowicon2} className='ml-3' width='12px' />
														<div className='w-60'>
															Market Insight Notice: the current INVO market dynamics are favourable for player spending. Roll out special offers or bundles for a likely boost in sales
														</div>
													</div>

													<div className='flex-v-new1 flex-1 mt-2'>
														<img src={arrowicon} width='25px' />
														<div className='mx-1'>
															On High Player Activity
														</div>
														<img src={arrowicon2} className='ml-2' width='12px' />
														<div className='w-50'>
															Trending Now: Your game's activity level are soaring! Use the dynamic lock insights to craft the perfect incentives for your players.
														</div>
													</div>

													<div className='flex-v-new1 flex-1 mt-2'>
														<img src={arrowicon} width='25px' />
														<div className='mx-1'>
															Periodic Reminders
														</div>
														<img src={arrowicon2} className='ml-3' width='12px' />
														<div className='w-60'>
															Friendly Reminders: Analyze the recent trends in INVO's value and consider if it's time for an in-game promotion to capitalize on the current market
														</div>
													</div>

												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className='sidebar'>
							{/*<img src={deposits} />*/}
							<DashboardSidebar/>
						</div>
					</div>

					<div className='mt-5 w-100'>
						<img src={bottomImage} width='1220px' />
					</div>
				</div>
		</Layout>

	)
}

export default DashboardTab
