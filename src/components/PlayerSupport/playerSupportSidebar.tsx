import './playersupport.css'
import PlayerSidebarMenu from './PSSMenu'
import PlayerSidebarLabel from './PSSLabelMenu'
import mail from '../../assets/email-outline.png'
import star from '../../assets/star-outline.png'
import important from '../../assets/diamond-stone.png'
import draft from '../../assets/file-outline.png'
import sentMail from '../../assets/email-check-outline.png'
import trash from '../../assets/trash-can-outline.png'

const PlayerSupportSidebar = () =>{


	// array for the menu

	const PSSMenuitems = [
		{name: 'Inbox', icon: mail, notiAmount: '(18)' },
		{name: 'Starred', icon: star },
		{name: 'Important', icon: important },
		{name: 'Drafts', icon: draft },
		{name: 'Sent Mail', icon: sentMail },
		{name: 'Trash', icon: trash },
	];

	const handleSelectItem = (PSSMenuitems: string) => {
	    console.log(PSSMenuitems);
	  };


	  // array for the labels

	  const PSSLabelitems = [
		{name: 'Support', icon: mail,},
		{name: 'Warning', icon: star },
		{name: 'General Questions', icon: important },
		{name: 'Transfer Errors', icon: draft },
		{name: 'Questions', icon: sentMail },
	];

	const handleLabelItem = (PSSLabelitems: string) => {
	    console.log(PSSLabelitems);
	  };


	return(

		<>
				<div className='pSS py-2 flex-1 bg-white rounded'>
					<div className=''>
						<button className='compbtn w-80 rounded'>
							Compose
						</button>
					</div>


					<PlayerSidebarMenu
						PSSMenuitems={PSSMenuitems}
						heading="Player support sidebar menu"
						onSelectItem={handleSelectItem}
					 />

					<div className='ml-2 mt-2 fwb'>
						Labels
					</div>

					<div className='flex-h-new91 px-3 options w-100 mt-3'>
						<div className='flex-v-new'>
							<div className='ml-2'>Support</div>
						</div>
						<div className='ml-3 labelcircle bg-support'>
							<i className='bi-caret-right-fill text-white fos10'></i>
						</div>
					</div>

					<div className='flex-h-new91 px-3 options w-100 mt-3'>
						<div className='flex-v-new'>
							<div className='ml-2'>Warning</div>
						</div>
						<div className='ml-3 labelcircle bg-warning'>
							<i className='bi-caret-right-fill text-white fos10'></i>
						</div>
					</div>

					<div className='flex-h-new91 px-3 options w-100 mt-3'>
						<div className='flex-v-new'>
							<div className='ml-2'>General Questions</div>
						</div>
						<div className='ml-3 labelcircle bg-primary'>
							<i className='bi-caret-right-fill text-white fos10'></i>
						</div>
					</div>

					<div className='flex-h-new91 px-3 options w-100 mt-3'>
						<div className='flex-v-new'>
							<div className='ml-2'>Transfer Errors</div>
						</div>
						<div className='ml-3 labelcircle bg-danger'>
							<i className='bi-caret-right-fill text-white fos10'></i>
						</div>
					</div>

					<div className='flex-h-new91 px-3 options w-100 mt-3'>
						<div className='flex-v-new'>
							<div className='ml-2'>Questions</div>
						</div>
						<div className='ml-3 labelcircle bg-success'>
							<i className='bi-caret-right-fill text-white fos10'></i>
						</div>
					</div>

					{/*<PlayerSidebarLabel
						PSSLabelitems={PSSLabelitems}
						heading="Player support sidebar labels"
						onSelectItem={handleLabelItem}
					/>*/}
				</div>

		</>

	)

}

export default PlayerSupportSidebar