import Layout from "../Layout";
import bg from "../../assets/litecoin-icon.png";
import andriodchrome from "../../assets/android-chrome.png";
import transfer4 from "../../assets/transfer-4.png";
import upimg from "../../assets/image 11.png";
import OrderBookActivities from '../../components/BuyAndSell/orderbookactivities'

const BuyAndSell = () =>{


	return(
		<Layout>
			<div className='col-lg-11'>
				<div className='col-lg-12'>
					<div className='up-img'>
						<img src={upimg} width='100%' />
					</div>
				</div>

				<div className='h-41 col-lg-12 px-4 ml-1'>
						<OrderBookActivities />
					</div>
			</div>
		</Layout>
	)

}

export default BuyAndSell
