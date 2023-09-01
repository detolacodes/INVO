import Layout from "../Layout";
import EpicAdmin from "../../components/GameTab/EpicAdmin/EpicAdmin";
import SideTopThree from "../../components/GameTab/sideTopThree/sidetopthree";
import bg from "../../assets/litecoin-icon.png";
import andriodchrome from "../../assets/android-chrome.png";
import transfer4 from "../../assets/transfer-4.png";
import LineChart from "../../components/GameTab/LineChart/linechart";
import Assets from "../../components/GameTab/assets/asset";

const GameTab = () => {
    const arrayForTopThreeItem = [
        {name: "Dynamic Lock", image: bg, rate: 957129, amount: 1914258.00},
        {name: "Staking Profits", image: andriodchrome, rate: 957129, amount: 1914258.00},
        {name: "Transaction Profits", image: transfer4, rate: 1757360.5, amount: 3514721.00}
    ];
    const assetinfo = [
        {name: 'grand theft auto', status: "verified", dateadded: "1/23", 
        economy: [{summaryname:"Economy Value", summarygain: "32M", summarypercentageincrease: "+23%" },{summaryname:"Stakers value", summarygain: "32M", summarypercentageincrease: "+23%" },{summaryname:"dynamic lock value", summarygain: "32M", summarypercentageincrease: "+23%" },{summaryname:"Total Transaction", summarygain: "10231", summarypercentageincrease: "+15%" }, ]},
        {name: 'Rocket league', status: "verified game", dateadded: "1/23", 
        economy: [{summaryname:"Economy Value", summarygain: "32M", summarypercentageincrease: "+23%" },{summaryname:"Stakers value", summarygain: "32M", summarypercentageincrease: "+23%" },{summaryname:"dynamic lock value", summarygain: "32M", summarypercentageincrease: "+23%" },{summaryname:"Total Transaction", summarygain: "10231", summarypercentageincrease: "+15%" }, ]},
        {name: 'Borderlands', status: "verified game", dateadded: "1/23", 
        economy: [{summaryname:"Economy Value", summarygain: "32M", summarypercentageincrease: "+23%" },{summaryname:"Stakers value", summarygain: "32M", summarypercentageincrease: "+23%" },{summaryname:"dynamic lock value", summarygain: "32M", summarypercentageincrease: "+23%" },{summaryname:"Total Transaction", summarygain: "10231", summarypercentageincrease: "+15%" }, ]},
        {name: 'far cry 5', status: "verified game", dateadded: "1/23", 
        economy: [{summaryname:"Economy Value", summarygain: "32M", summarypercentageincrease: "+23%" },{summaryname:"Stakers value", summarygain: "32M", summarypercentageincrease: "+23%" },{summaryname:"dynamic lock value", summarygain: "32M", summarypercentageincrease: "+23%" },{summaryname:"Total Transaction", summarygain: "10231", summarypercentageincrease: "+15%" }, ]},
        {name: 'fortniite', status: "verified game", dateadded: "1/23", 
        economy: [{summaryname:"Economy Value", summarygain: "32M", summarypercentageincrease: "+23%" },{summaryname:"Stakers value", summarygain: "32M", summarypercentageincrease: "+23%" },{summaryname:"dynamic lock value", summarygain: "32M", summarypercentageincrease: "+23%" },{summaryname:"Total Transaction", summarygain: "10231", summarypercentageincrease: "+15%" }, ]}
    ]

    return (
        <Layout>
            <div className="col-11 m-2">
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <EpicAdmin email="larawells@epic.com" accountNo="#IN0-234H-W345" profit="28.5k" economyBalance={2000000} avgtranferamount={48.23} availableBalance={2465148.23} />
                        </div>
                        <div className="col-8">
                            <div className="container">
                                <div className="row">
                                    {
                                        arrayForTopThreeItem.map((item, index)=>{
                                            return <div className="col-4" key={index} >
                                             <SideTopThree title={item.name} image={item.image} rate={item.rate} amount={item.amount} /> </div>
                                        })

                                    }
                                    <div className="col-12">
                                        <LineChart />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {
                            assetinfo.map((item, index)=>{
                                return  <div className="col mx-1" key={index}>
                                <Assets assetname={item.name}  status={item.status} dateadded={item.dateadded} economy={item.economy} />
                            </div>
                            })
                        }
                 <div className="col-3">
                    <div className="game-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path d="M21.4216 11.0011C21.4216 13.0517 20.8135 15.0563 19.6742 16.7613C18.5349 18.4663 16.9155 19.7952 15.021 20.5799C13.1264 21.3646 11.0417 21.5699 9.03049 21.1698C7.01926 20.7696 5.17187 19.7821 3.72192 18.332C2.27196 16.8819 1.28459 15.0344 0.884648 13.0231C0.484709 11.0119 0.690173 8.92719 1.47506 7.0327C2.25994 5.13822 3.58899 3.51902 5.29413 2.37989C6.99927 1.24076 9.00391 0.632859 11.0546 0.633057C13.8041 0.633322 16.441 1.72578 18.3852 3.67013C20.3293 5.61448 21.4216 8.25147 21.4216 11.0011Z" stroke="#B1BAC9" stroke-miterlimit="10" stroke-linecap="round"/>
  <path d="M11.0547 5.34607V16.6561" stroke="#3062FF" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5.40039 11.0011H16.7104" stroke="#3062FF" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M11.0547 5.34607V16.6561" stroke="#37AFA3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5.40039 11.0011H16.7104" stroke="#37AFA3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<p>add game</p>
                    </div>
                 </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default GameTab;