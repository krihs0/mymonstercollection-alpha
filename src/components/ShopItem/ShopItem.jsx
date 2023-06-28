import "./ShopItem.scss";
import shopsData from "../../data/shopsData";
import monsterData from "../../data/monsterData";
import { Link } from "react-router-dom";
import {useState} from "react";
import DepositPopup from "../DepositPopup/DepositPopup.jsx";

const ShopItem = ({shopId, monsterId}) =>{
    const [depositPopupOpen, setDepositPopupOpen] = useState(false);

    let dataObject = {};
    shopsData.forEach(data =>{
        if(data.id == shopId){
            dataObject = data;
        }
    })
    let monsterObject = {};
    monsterData.forEach(data =>{
        if(data.id == monsterId){
            monsterObject = data;
        }
    })

    let shopMonsterObject = {};
    dataObject.has.forEach(item =>{
        if(item.id == monsterId){
            shopMonsterObject = item;
        }
    })
    // https://www.google.com/maps/dir/?api=1&destination=Thompson+St,+New+York,+NY,+USA&travelmode=driving

    let address  = dataObject.adres.replace(/ /g, "+");
    const mapsLink = "https://www.google.com/maps/dir/?api=1&destination=" + address + "&travelmode=driving";

    return (
        <div className="shopitem">
            <figure className="shopitem__figure">
                <img className="shopitem__figure__img" src={dataObject.image} alt="" />
            </figure>
            <div className="shopitem__info">
                <div className="shopitem__info__wrapper">
                    <h2 className="shopitem__info__wrapper__title">{dataObject.shop}</h2>
                    <p className="shopitem__info__wrapper__address">{dataObject.adres}</p>
                    <a className="shopitem__info__wrapper__route" target="_blank" href={mapsLink}>get route</a>
                </div>
                {monsterId && <>
                    <p className="shopitem__info__price">
                        {monsterObject.name}
                        <span className="shopitem__info__price--small">for</span>
                        €{shopMonsterObject.price.toFixed(2) || "unknown"}
                        <i onClick={()=>setDepositPopupOpen(!depositPopupOpen)} className="fa-solid fa-circle-info shopitem__info__price__info">
                            {depositPopupOpen && <DepositPopup />}
                        </i>
                    </p>
                    <Link to={"/shop/" + dataObject.id} className="shopitem__info__hasmore">{dataObject.has.length - 1 + " more"}</Link>
                </>}
                {!monsterId && <><p className="shopitem__info__price">{dataObject.has.length} items</p>
                <Link to={"/shop/" + dataObject.id} className="shopitem__info__hasmore">view all</Link></>}
            </div>
        </div>
    );
}

export default ShopItem;
