import "./App.css";
import { Link } from "react-scroll";
import logo from "./logo.png";
import Giris from "./views/Pages/Giris";
import NasilCalisir from "./views/Pages/NasilCalisir";
import Uygulamalar from "./views/Pages/Uygulamalar";
import Avantajlar from "./views/Pages/Avantajlar";
import Dezavantajlar from "./views/Pages/Dezavantajlar";
import Kaynaklar from "./views/Pages/Kaynaklar";
import PriceCard from "./views/Price/PriceCard";

export default function App() {
    return (
        <div className="App">
            <header className="nav">
                <nav className="nav__container__actions">
                    <img src={logo} alt="Logo" className="navbar-logo" />
                    <ul>
                        <li>
                            <Link activeClass="active" smooth spy to="giris">
                                GİRİS
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="active" smooth spy to="nasil-calisir">
                                NASIL ÇALIŞIR
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="active" smooth spy to="uygulamalar">
                                UYGULAMALAR
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="active" smooth spy to="avantajlar">
                                AVANTAJLAR
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="active" smooth spy to="dezavantajlar">
                                DEZAVANTAJLAR
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="active" smooth spy to="kaynaklar">
                                KAYNAKLAR
                            </Link>
                        </li>
                    </ul>
                    <ul className={"price"}>
                        <li><span><PriceCard/></span></li>
                    </ul>
                </nav>
            </header>
            <section id="giris"><Giris/></section>
            <section id="nasil-calisir"><NasilCalisir/></section>
            <section id="uygulamalar"><Uygulamalar/></section>
            <section id="avantajlar"><Avantajlar/></section>
            <section id="dezavantajlar"><Dezavantajlar/></section>
            <section id="kaynaklar"><Kaynaklar/></section>
        </div>
    );
}
