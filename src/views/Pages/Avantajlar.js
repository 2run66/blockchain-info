import React from "react";
import BlockchainImage from "../../avantajlar.png";

export default function Avantajlar(){
    return(
        <div className={"giris-container"} style={{ display: 'flex', alignItems: 'center' }}>
            <img src={BlockchainImage} alt="Blockchain Technology" style={{ width: '50%', height: 'auto' }} />
            <div style={{ flex: 1 }}>
                <h1>Blockchain'in Avantajları</h1>
                <p>
                    Blockchain'in bazı avantajları arasında merkezi olmama, güvenlik,
                    maliyetlerin azalması ve verimliliğin artması bulunur. Araştırmacılara
                    ihtiyaç duymadan sağlam bir kayıt sunar.
                </p>
            </div>
        </div>
    )
}