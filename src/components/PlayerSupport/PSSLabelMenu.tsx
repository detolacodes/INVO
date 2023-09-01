import { useState } from "react";

interface objects {
	name: string;
	icon: string;
}

interface Props {
	PSSLabelitems: item[];
	heading:string;
	onSelectItem: (PSSLabelitems: string) => void;
}


const PlayerSidebarLabel = ({PSSLabelitems, heading, onSelectItem}: Props) =>{


	return(

		<div>
			{
				PSSLabelitems.map((item, index)=>
					<div className='flex-h-new91 px-4 options w-100 mt-3'>
						<div className='flex-v-new'>
							<div className='ml-2'>{item.name}</div>
						</div>
						<div className={item.name === 'Support' ? 'bg-primary' : ''}>
							<i className='bi-caret-right-fill text-white fos10 mlx'></i>
						</div>
					</div>
				)
			}
		</div>


	)
}


export default PlayerSidebarLabel