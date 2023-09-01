import { useState } from "react";

interface objects {
	name: string;
	icon: string;
	notiAmount:string;
}

interface Props {
	PSSMenuitems: item[];
	heading:string;
	onSelectItem: (PSSMenuitems: string) => void;
}


const PlayerSidebarMenu = ({PSSMenuitems, heading, onSelectItem}: Props) =>{

	const [selectedCategory, setSelectedCategory] = useState(-1)

	return(

		<div>
			{
				PSSMenuitems.map((item, index)=>
					<div className={selectedCategory === index ? 'flex-h-new91 options px-4 w-100 mt-3 PSSactive' : 'flex-h-new91 px-4 w-100 mt-3' }>
						<div className='flex-v-new'
							key={index}
							onClick={() => { setSelectedCategory(index); onSelectItem(item.name); }}>
							<img src={item.icon}/>
							<div className='ml-2'>{item.name}</div>
						</div>
						<div className='ml-3'>{item.notiAmount}</div>
					</div>
				)
			}
		</div>


	)
}


export default PlayerSidebarMenu