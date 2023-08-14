import React from "react";
import './footer.css';


function Footer(){
    return(
        <footer className="footer">
         <div className="footer__container">
            <a className="footer__group" href="https://vk.com/travel_skidki" target="_blank">Название группы</a>
            <a className="footer__connect" href="https://t.me/stasi_split" target="_blank">ОБРАТНАЯ СВЯЗЬ</a>
         </div>
        </footer>
    );
}

export default Footer;