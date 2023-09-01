import './playersupport.css'
import playerData from './playerSupportData'

interface playerData {

	name:string;
	notiLevel:string;
	notiAmount:string;
	message:string;
	date:number;
}


const PSMPreview: React.FC<playerData> = ({name, notiLevel, notiAmount, message, date}) =>{

	return <div className='w-100 flex-v-new1 mt-3'>			
				<div className='mt-3 flex-v-new1 ml-2'>
					<div className=''>
						<input type='checkbox' className='input' />
						<i className='bi-star ml-2 '></i>
					</div>

					<div className='ml-3 flex-v-new'>
						<div>
							{name}
						</div>
						<div>
							{notiAmount}
						</div>
					</div>

					<div>
						{/*{
							notiLevel.map((item, index)=>{
								if(item.notiLevel === 'support'){
									return <div key={index}>
											<button className='labelbtn bg-support ml-2'>{notiLevel}</button>
										</div>
								}
								else if(item.notiLevel === 'warning'){
									return <div key={index}>
											<button className='labelbtn bg-warning ml-2'>{notiLevel}</button>
										</div>
								}
								else if(item.notiLevel === 'general questions'){
									return <div key={index}>
											<button className='labelbtn bg-primary ml-2'>{notiLevel}</button>
										</div>
								}
								else if(item.notiLevel === 'transfer errors'){
									return <div key={index}>
											<button className='labelbtn bg-danger ml-2'>{notiLevel}</button>
										</div>
								}
								else if(item.notiLevel === 'questions'){
									return <div key={index}>
											<button className='labelbtn bg-success ml-2'>{notiLevel}</button>
										</div>
								}
							})
						}*/}
						{<button className='labelbtn bg-primary ml-2'>{notiLevel}</button>}
					</div>

					<div className='ml-1'>
						{message}
					</div>

					<div className='ml-1'>
						{date}
					</div>
				</div>						
			</div>


}

export default PSMPreview