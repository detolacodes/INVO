import {useState} from 'react'
import './addgames.css'


const BasicInformation = () =>{

	return(

		<>

			<div className='fos13 bg-chart box-sh p-2'>
				<div className='intro1 mt-4'>
					Basic Information
				</div>

				<div className='intro2 mt-2'>
					Fill all information below
				</div>

				<div className='mt-4 text-white w-100 fos12'>
					<div className='w-100 flex-v-new'>
						<div className='flex-1'>
							<div>Game Name</div>
							<input className=' rounded mt-1 input1 px-2' type='text' />
						</div>
						
						<div className='flex-1 ml-3'>
							<div>Game Genre</div>
							<select className='rounded mt-1 input2 p-2'>
								<option>Select</option>
								<option></option>
								<option></option>
							</select>
						</div>
					</div>

					<div className='w-100 flex-v-new mt-4'>
						<div className='flex-1'>
							<div>Developer's Name</div>
							<input className=' rounded mt-1 input1 px-2' type='text' />
						</div>
						
						<div className='flex-1 ml-3 flex-v-new pr-3'>
							<div className='flex-1'>
								<div>SDK Public Key</div>
								<input className='rounded mt-1 input3 w-100 px-2' type='text'/>
							</div>

							<div className='flex-1'>
								<div className='ml-2'>SDK Secret Key</div>
								<input className='rounded mt-1 ml-2 input3 w-100 px-2' type='text'/>
							</div>
						</div>
					</div>

					<div className='w-100 mt-4 flex-v-new1'>
							<div className='flex-h-new1 flex-1'>
								<div>Universal Transfers? Or Allow Players to Transfer to Games That I Own</div>

								<div className='flex-v-new flex-1 w-100 mt-3'>
									<div className='flex-1 flex-v-new1'>
										<input className='rounded mt-1 ' type='checkbox'/>
										<div className='ml-2'>Yes <span className='fos10'>(Manually select game player can transfer to)</span></div>
									</div>

									<div className='flex-1 flex-v-new1'>
										<input className='rounded mt-1 ' type='checkbox'/>
										<div className='ml-2'>No <span className='fos10'>(Manually select game player can transfer to)</span></div>
									</div>
								</div>

								<div className='mt-4'>Select Games</div>

								<div className='mt-1 w-70'>
									<input className='rounded input2 w-100 px-2' type='text' placeholder='Choose....' />
								</div>
							</div>
							
							<div className='flex-1 ml-3'>
								<div>Game Description</div>
								<textarea className='py-5 w-100 mt-1' type='text'></textarea>
							</div>
						</div>
					</div>
			</div>

		</>

	)

}

export default BasicInformation
