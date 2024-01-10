import React from "react";
import BlockchainImage from "../../nasilcalisir.png";

export default function NasilCalisir(){
    return(
    <div className={"giris-container"} style={{ display: 'flex', alignItems: 'center' }}>
        <img src={BlockchainImage} alt="Blockchain Technology" style={{ width: '50%', height: 'auto' }} />
        <div style={{ flex: 1 }}>
            <h1>Blockchain Nasıl Çalışır?</h1>
            <p>
                Blockchain, katılımcıların işlemlerin geçerliliği konusunda anlaştığı
                bir konsensüs mekanizmasıyla çalışır. Her blok, önceki bloğun bir
                karmaşasını içerir, böylece oynanmasına karşı dirençli bir zincir
                oluşturur.
            </p>
        </div>

    </div>
    )
}