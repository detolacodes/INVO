import './playersupport.css'
import playerData from './playerSupportData'
import PSMPreview from './PSMPreview'



const PlayerSupportMessages = () =>{


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
							return <PSMPreview name={item.name} message={item.message} notiLevel={item.notiLevel} notiAmount={item.notiAmount} date={item.date} />

						})

					}
			</div>


}

export default PlayerSupportMessages