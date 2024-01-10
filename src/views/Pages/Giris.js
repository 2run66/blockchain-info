import React from "react";
import BlockchainImage from '../../giris.webp'; // Update this path

export default function Giris() {
    return (
        <div className={"giris-container"} style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ flex: 1 }}>
                <h1>Blockchain Giriş</h1>
                <p>
                    Blockchain, bilgileri güvenli bir şekilde kaydeden merkezi olmayan ve
                    dağıtılmış bir defter teknolojisidir. Verinin şeffaflığını, güvenliğini
                    ve değiştirilemezliğini sağlar.
                </p>
            </div>
            <img src={BlockchainImage} alt="Blockchain Technology" style={{ width: '50%', height: 'auto' }} />
        </div>
    );
}
