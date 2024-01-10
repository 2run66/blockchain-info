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
import {useEffect, useState} from "react";
import SwitchButton from "./views/Components/SwitchButton";

export default function App() {
    const [theme, setTheme] = useState('light');
    // Toggle between light and dark theme
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    // Apply the theme to the body element
    useEffect(() => {
        const themeSwitch = darkMode ? 'dark' : 'light';
        setTheme(themeSwitch)
    }, [darkMode]);

    // Apply the theme to the body element
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);
    return (
        <div className="App">
            <header className="">
                <nav className={theme}>
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
                    <SwitchButton isToggled={darkMode} onToggle={toggleTheme} />
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
