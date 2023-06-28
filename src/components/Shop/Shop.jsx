import { useParams } from "react-router-dom";
import shopsData from "../../data/shopsData";
import "./Shop.scss";
import monsterData from "../../data/monsterData";
import ShopMonsterItem from "../ShopMonsterItem/ShopMonsterItem";

const Shop = () =>{
    const {id} = useParams();
    const shopId = id;
    let shopDataObject = {};
    shopsData.forEach(data =>{
        if(data.id == shopId){
            shopDataObject = data;
        }
    })
    
    let address  = shopDataObject.adres.replace(/ /g, "+");
    const mapsLink = "https://www.google.com/maps/dir/?api=1&destination=" + address + "&travelmode=driving";



    return (
        <div className="shop">
            <div className="shop__leftpane">
                <figure className="shop__leftpane__figure">
                    <img className="shop__leftpane__figure__img" src={shopDataObject.image} alt="" />
                </figure>
                <div className="shop__leftpane__info">
                    <h1 className="shop__leftpane__info__title">{shopDataObject.shop}</h1>
                    <p className="shop__leftpane__info__adress">{shopDataObject.adres}</p>
                    <a className="shop__leftpane__info__route" target="_blank" href={mapsLink}>get route</a>
                </div>
            </div>
            <div className="rightpane">
                {shopDataObject.has.map(item =>{
                    return <ShopMonsterItem  monsterId={item.id} price={item.price} />
                })}
            </div>
        </div>
    );
}

export default Shop;