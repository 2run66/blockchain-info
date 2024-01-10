import React from "react";
import BlockchainImage from "../../dezavantajlar.png";

export default function Dezavantajlar(){
    return(
    <div className={"giris-container"} style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ flex: 1 }}>
            <h1>Blockchain'in Dezavantajları</h1>
            <p>
                Faydalarına rağmen, blockchain, ölçeklenebilirlik, enerji tüketimi ve
                düzenleyici belirsizlik gibi zorluklarla karşı karşıyadır. Geniş
                çapta benimsenmesi için bu sorunların ele alınması önemlidir.
            </p>
        </div>
        <img src={BlockchainImage} alt="Blockchain Technology" style={{ width: '50%', height: 'auto' }} />
    </div>
    )
}