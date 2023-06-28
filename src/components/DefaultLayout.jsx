import {Link, Navigate, Outlet, useLocation, useParams} from "react-router-dom";
import {ReactSVG} from "react-svg";
import "./DefaultLayout.scss";
import {useEffect, useState} from "react";
import monsterlogo from "../assets/1981937_e34a7.png";

export default function DefaultLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    

    const onLogout = (ev) =>{
        ev.preventDefault()

        alert("This is a demo, you can't logout since you are not logged in.");
    }

    return(
    <div className="defaultlayout">
        <header className="defaultlayout__header">
            <div className="defaultlayout__header__wrapper">
                <Link  className="nolink" to="/homepage"> <div className={`defaultlayout__header__wrapper__logo ${sidebarOpen && " defaultlayout__header__wrapper__logo--isopen"}`}>
                    <figure className="defaultlayout__header__wrapper__logo__figure"><img src={monsterlogo} alt="" /></figure>
                    <p className="piss">LOGO</p>
                </div></Link>
                <i onClick={() => setSidebarOpen(!sidebarOpen)} class="fa-solid fa-bars defaultlayout__header__wrapper__button"></i>
            </div>
            <nav className="guestlayout__header__nav">
                <Link className="guestlayout__header__nav__link" to="/finder">Finder</Link>
                <Link className="guestlayout__header__nav__link" to="/collection">Collection</Link>
                <Link className="guestlayout__header__nav__link guestlayout__header__nav__link--bold" to="/account" >Account</Link>
            </nav>
        </header>
        <section className="defaultlayout__section">
            <div className={`defaultlayout__section__sidebar ${sidebarOpen && " defaultlayout__section__sidebar--isopen"}`}>
                <button onClick={onLogout} className="defaultlayout__section__sidebar__logout">
                    <i class="fa-solid fa-arrow-right-to-bracket defaultlayout__section__sidebar__logout__i"></i>
                    <p className="defaultlayout__section__sidebar__logout__p">Logout</p>
                </button>
                <a href="https://discord.gg/epezVHBeMj">
                <footer className="defaultlayout__section__sidebar__footer">
                    <p className="defaultlayout__section__sidebar__footer__p">Submit missing cans or shops</p>
                    <p className="defaultlayout__section__sidebar__footer__p">Suggestions or Bugs?</p>
                </footer>
                </a>
            </div>
            <Outlet/>
        </section>
    </div>
    );
}
