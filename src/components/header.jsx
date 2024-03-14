import React from 'react'
import logoLV from "../assets/lv-logo.png"


const Header = () => {
    return (
        <header>
            <div class="logo">
            <img src={logoLV} alt="LV Consulting" className="logo"/>
            </div>
            <nav class="largeur_trait_mobile">
                <ul class="menu">
                    <li class="expertises">Expertises</li>
                    <li class="a-propos">A propos</li>
                    <li class="contact">Contact</li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;