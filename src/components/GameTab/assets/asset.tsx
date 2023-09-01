import React from "react"; 
import "./asset.css";


interface AssetsProps {
    assetname: string;
    status: string;
    dateadded: string;
    economy: Array<{summaryname: string;summarygain: string;summarypercentageincrease:string  }>
}

const Assets: React.FC<AssetsProps> = ({ assetname, status, dateadded, economy}) => {
    return <div className="Asset">
        <div className="asset-row">
            <p>{assetname}</p>
            <div className="asset-box">
                <p>{status}</p>
                <p>{dateadded}</p>
            </div>
        </div>
        <div className="asset-row">
            <h5>Economy Summary</h5>
            {
                economy.map((item, index)=>{
                 return   <div className="asset-row-info" key={index}>
                    <p>{item.summaryname}</p>
    
                    <div className="asset-row-profit">
                        <p>{item.summarygain}</p>
                        <p>{item.summarypercentageincrease}</p>
                    </div>
                </div>
                })
            }
    
            <button>view details</button>
        </div>
    </div>
}

export default Assets;