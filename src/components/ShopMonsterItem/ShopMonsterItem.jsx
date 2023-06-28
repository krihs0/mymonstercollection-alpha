import "./ShopMonsterItem.scss";
import monsterData from "../../data/monsterData";
import DepositPopup from "../DepositPopup/DepositPopup.jsx";
import {useState} from "react";

const ShopMonsterItem = ({monsterId, price}) =>{
    const [depositPopupOpen, setDepositPopupOpen] = useState(false);

    let dataObject = {};
    monsterData.forEach(data =>{
        if(data.id === monsterId){
            dataObject = data;
        }
    })
    return (
        <div className="shopmonsteritem">
            <figure className="shopmonsteritem__figure">
            </figure>
            <div className="shopmonsteritem__info">
                <h2 className="shopmonsteritem__info__name">{dataObject.name}</h2>
                <p className="shopmonsteritem__info__series">{dataObject.series}</p>
                <p className="shopmonsteritem__info__contents">{dataObject.contents}ML</p>

                <p className="shopmonsteritem__info__price">
                    €{price.toFixed(2)}
                    <i onClick={()=>setDepositPopupOpen(!depositPopupOpen)} className="fa-solid fa-circle-info shopmonsteritem__info__price__info">
                        {depositPopupOpen && <DepositPopup />}
                    </i>
                </p>
            </div>
        </div>
    );
}

export default ShopMonsterItem;
