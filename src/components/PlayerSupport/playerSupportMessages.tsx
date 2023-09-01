import './playersupport.css'
import playerData from './playerSupportData'
import PSMPreview from './PSMPreview'



interface playerData {

	name:string;
	notiLevel:string;
	notiAmount:string;
	message:string;
	date:number;
}


const PlayerSupportMessages: React.FC<playerData> = ({name, notiLevel, notiAmount, message, date}) =>{


	return 		<div className='flex-4 p-2 bg-white pSS ml-3 rounded fos12'>
					<div className='flex-h-new12'>
						<div className='rounded pssIconcarrier flex-v-new'>
							 <i className='bi-archive-fill'></i>
							 <i className='bi-exclamation-circle-fill ml-2'></i>
							 <i className='bi-trash ml-2'></i>
						</div>

						<div className='rounded pssIconcarrier flex-v-new'>
							 <i className='bi-folder-fill'></i>
							 <i className='bi-chevron-down ml-2'></i>
						</div>

						<div className='rounded pssIconcarrier flex-v-new'>
							 <i className='bi-tag-fill'></i>
							 <i className='bi-chevron-down ml-2'></i>
						</div>

						<div className='rounded pssIconcarrier flex-v-new'>
							 <div>
							 	More
							 </div>
							 <i className='bi-chevron-down ml-2'></i>
						</div>
					</div>

					{

						playerData.map((item, index)=>{

							return <div className='w-100 flex-v-new1 mt-3' key={index}>			
									<div className='mt-3 flex-v-new1 ml-2'>
										<div className=''>
											<input type='checkbox' className='input' />
											<i className='bi-star ml-2 '></i>
										</div>

										<div className='ml-3 flex-v-new'>
											<div>
												{item.name}
											</div>
											<div>
												{item.notiAmount}
											</div>
										</div>

										<div>
											{<button className='labelbtn bg-primary ml-2'>{item.notiLevel}</button>}
										</div>

										<div className='ml-1'>
											{item.message}
										</div>

										<div className='ml-1'>
											{item.date}
										</div>
									</div>						
								</div>

						})

					}
			</div>


}

export default PlayerSupportMessages