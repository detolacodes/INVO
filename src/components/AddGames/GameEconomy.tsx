import {useState} from 'react'
import './addgames.css'
import paypal from '../../assets/cc-paypal.png'
import stripe from '../../assets/image 1.png'
import mastercard from '../../assets/cc-mastercard.png'


const GameEconomy = () =>{

	return(

		<>
		<div className='mt-1 fos13 flex-1 p-2 bg-cont box-sh'>
			<div className='intro1 mt-4'>
				Start Your Game Economy
			</div>

			<div className='intro2 mt-2'>
				Starting Game Balance
			</div>

			<div className='mt-4 text-white flex-h-new1 w-100 fos12'>

				<div className='flex-v-new w-100'>
					<div className='flex-1'>
						<div>Amount:</div>
						<input className='input3 rounded mt-2  px-2' type='text' placeholder='$10,000' />
					</div>
					
					<div className='flex-h-new5 px-3 bal fos23 mt-4'>
						<div>
							$10,000
						</div>
					</div>
				</div>

				<div className='flex-h-new1 mt-3 '>Payment Method:</div>

				<div className='flex-v-new mt-3 w-100 text-dark'>
					<div className='flex-1 bg-white flex-v-new mr-2 w-100 p-3'>
						<img src={mastercard} width='30px' />
						<div className='ml-2'>Credit / Debit Card</div>
					</div>

					<div className='flex-1 bg-white flex-v-new mx-2 w-100 p-3'>
						<img src={paypal} width='30px' />
						<div className='ml-3'>PayPal</div>
					</div>

					<div className='flex-1 bg-white flex-v-new mx-2 w-100 p-3'>
						<img src={stripe} width='30px' />
						<div className='ml-3'>Stripe</div>
					</div>
				</div>

				<div className='w-100 flex-v-new mt-4 pr-3'>
					<div className='flex-1 flex-v-new'>
						<div className='flex-1'>
							<div>Card Holder's Name:</div>
							<input className='rounded mt-1 input3 w-100 px-2' type='text' placeholder='Full Name'/>
						</div>

						<div className='flex-1'>
							<div className='ml-2'>Card:</div>
							<input className='rounded mt-1 ml-2 input3 w-100 px-2' type='text' placeholder='XXXX XXXX XXXX XXXX'/>
						</div>
					</div>
				</div>

				<div className='w-100 flex-v-new mt-4 pr-3'>
					<div className='flex-1 flex-v-new'>
						<div className='flex-1'>
							<div>Expiration:</div>
							<input className='rounded mt-1 input3 w-100 px-2' type='text' placeholder='MM/YY'/>
						</div>

						<div className='flex-1'>
							<div className='ml-2'>CVC/CVV:</div>
							<input className='rounded mt-1 ml-2 input3 w-100 px-2' type='text' placeholder='XXX'/>
						</div>
					</div>
				</div>

				<div className='w-100 flex-h-new mt-4'>
					<div className='flex-1 flex-h-new1 w-100'>
							<div>Billing Address:</div>
							<input className='rounded mt-1 input3 w-100 px-2' type='text' placeholder='Street Address'/>
							<input className='rounded mt-2 input3 w-100 px-2' type='text' placeholder='Suite, apt, #, e.t.c'/>
					</div>
				</div>

				<div className='w-100 flex-h-new mt-4'>
					<div className='flex-1 flex-h-new1 w-100'>
							<div>City:</div>
							<input className='rounded mt-1 input3 w-100 px-2' type='text' placeholder='City'/>
					</div>
				</div>

				<div className='w-100 flex-v-new mt-4 pr-3'>
					<div className='flex-1 flex-v-new'>
						<div className='flex-1'>
							<div>State/Province:</div>
							<select className='rounded mt-1 w-100 p-2'>
								<option>-- state --</option>
								<option></option>
								<option></option>
							</select>
						</div>

						<div className='flex-1'>
							<div className='ml-2'>Zip Code / Postal Code:</div>
							<input className='rounded mt-1 ml-2 input3 w-100 px-2' type='text' placeholder='Zip code -- postal code'/>
						</div>
					</div>
				</div>

				<div className='flex-h-new5 w-100 '>
					<button className='primarybtn mt-4'>
						Start Economy
					</button>
				</div>
			</div>
		</div>

		</>
	)
}

export default GameEconomy
