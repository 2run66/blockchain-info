import React from "react";
import BlockchainImage from '../../uygulamalar.png'; // Update this path
export default function Uygulamalar(){
    return(
    <div className={"giris-container"} style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ flex: 1 }}>
            <h1>Blockchain'in Uygulamaları</h1>
            <p>
                Blockchain, finans, tedarik zinciri, sağlık gibi çeşitli endüstrilerde
                uygulama bulur. İşlemlerde süreçleri hızlandırabilir, sahtekarlığı
                azaltabilir ve şeffaflığı artırabilir.
            </p>
        </div>
        <img src={BlockchainImage} alt="Blockchain Technology" style={{ width: '50%', height: 'auto' }} />
    </div>
    )
}