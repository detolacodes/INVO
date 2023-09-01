import Layout from "../Layout";
import PlayerSupportSidebar from '../../components/PlayerSupport/playerSupportSidebar'
import PlayerSupportReadMail from '../../components/ReadMail/ReadMail'

const ReadMail = () =>{


	return(
		<Layout>
			<div className='col-lg-11 my-3'>

				<div className='intro'>
					Support Tickets
				</div>

				<div className='flex-h-new12 h-100 mt-3 fos13'>
					<PlayerSupportSidebar/>
					<PlayerSupportReadMail/>
				</div>
			</div>
		</Layout>
	)

}

export default ReadMail
