import PlayerSupportSidebar from './PlayerSupportSidebar'
import playerData from '../PlayerSupport/playerSupportData'



interface playerData {
	name:string;
	notiLevel:string;
	notiAmount:string;
	message:string;
	date:number;
}


const PlayerSupportReadMail: React.FC<playerData> = ({name, notiLevel, notiAmount, date, message}) =>{


	// let tempArray = []
	// for (let i = 0; i < playerData.length; i++){
	// 	tempArray.push({
	// 		name: playerData[i].name,
	// 		message: playerData[i].message
	// 	})
	// }
	// console.log(tempArray)

	// let arr = []

	// arr.map(a => {return {name: a.name, message: a.message}})
	return(

		<div className='flex-4 p-2 bg-white pSS2 ml-3 rounded fos12'>
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

			<div>
				{playerData.id}
			</div>

		</div>
	)
}


export default PlayerSupportReadMail