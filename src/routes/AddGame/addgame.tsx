import Layout from "../Layout";
import EpicAdmin from "../../components/GameTab/EpicAdmin/EpicAdmin";
import SideTopThree from "../../components/GameTab/sideTopThree/sidetopthree";
import bg from "../../assets/litecoin-icon.png";
import andriodchrome from "../../assets/android-chrome.png";
import transfer4 from "../../assets/transfer-4.png";
import LineChart from "../../components/GameTab/LineChart/linechart";
import Assets from "../../components/GameTab/assets/asset";
import BasicInformation from '../../components/AddGames/BasicInformation'
import GameEconomy from '../../components/AddGames/GameEconomy'
import GamePoster from '../../components/AddGames/GamePoster'

const AddGame = () =>{


	return(
		<Layout>
			<div className='col-lg-11 m-2'>
				<div className='col-lg-12'>
					<div className='intro mt-5'>
						ADD GAME
					</div>

					<div className='flex-h-new w-100 mt-5'>
						<div className='px-1 py-2'>
							<BasicInformation/>
						</div>

						<div className='flex-v-new1 w-98 mt-2 px-3 py-2'>
							<GameEconomy/>
							<GamePoster/>
						</div>
					</div>

				</div>
			</div>
		</Layout>
	)

}

export default AddGame
