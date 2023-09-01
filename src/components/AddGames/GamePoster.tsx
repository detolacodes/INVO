import {useState} from 'react'
import './addgames.css'
import paypal from '../../assets/cc-paypal.png'
import stripe from '../../assets/image 1.png'
import mastercard from '../../assets/cc-mastercard.png'
import upload from '../../assets/upload icon.png'


const GamePoster = () =>{

	return(

		<>
		<div className='gameposter fos13 flex-1 px-3'>
			<div className='mt-2 text-white flex-h-new1 w-100 fos12'>
				<div className='flex-h-new w-100 fb bg-cont box-sh p-3'>
					<div className='flex-1 w-100'>
						<div>Game Poster <span className='fos10'>(1920 x 1080)</span></div>
						<div className='rounded mt-2 flex-h-new w-100 p-10 bg-white'>
							<div>
								<img src={upload} />
							</div>

							<div className='text-dark mt-2'>
								Drag files here or click to upload
							</div>
						</div>
					</div>
				</div>

				<div className='flex-h-new w-100 fb bg-cont box-sh p-3 mt-3'>
					<div className='flex-1 w-100'>
						<div>Game Icon</div>
						<div className='rounded mt-2 flex-h-new w-100 p-10 bg-white'>
							<div>
								<img src={upload} />
							</div>

							<div className='text-dark mt-2'>
								Drag files here or click to upload
							</div>
						</div>
					</div>
				</div>

				<div className='intro mt-5'>Advanced Options <span className='fos10'>(Recommended)</span></div>

				<div className='w-100 flex-h-new mt-4'>
					<div className='flex-1 flex-h-new1 w-100 ml-3'>
							<div>Gamer Server API</div>
							<input className='rounded mt-1 input3 w-80 px-2' type='text' placeholder='Endpoint URL'/>
					</div>

					<div className='w-100 flex-h-new mt-2 p-3'>
						<div className='flex-1 flex-v-new2 w-100'>
							<div className='flex-1'>
								<div>Authentication:</div>
								<input className='rounded input3 w-100 px-2 mb-3' type='text' placeholder='Username'/>
							</div>
 
							<div className='flex-1'>
								<div className='ml-2'></div>
								<input className='rounded ml-2 input3 w-100 px-2' type='text' placeholder='Password'/>
							</div>
						</div>

						<div className='flex-1 flex-h-new1 w-100'>
							<input className='rounded input3 w-100 px-2' type='text' placeholder='API key or Token'/>
						</div>
					</div>
				</div>
				
			</div>
		</div>
		</>
	)
}

export default GamePoster
