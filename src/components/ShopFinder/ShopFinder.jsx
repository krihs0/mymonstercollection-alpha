import { useParams } from "react-router-dom";
import monsterData from "../../data/monsterData";
import shopsData from "../../data/shopsData";
import "./ShopFinder.scss";
import ShopItem from "../ShopItem/ShopItem";
import { monster } from "../../data/monster-images";

const ShopFinder = () =>{
    const {id} = useParams()
    const monsterId = id;
    let dataObject = {};
    monsterData.forEach(data =>{
        if(data.id == monsterId){
            dataObject = data;
        }
    })

    const shopItems = shopsData.filter(shop =>{
        let hasCurrentItem = false
        shop.has.forEach(item =>{
            if(item.id == monsterId){
                hasCurrentItem = true;
            }
        })
        if  (hasCurrentItem){
            return shop;
        }
    })

        

    return (
        <div className="shopfinder">
            {id && <><div className="shopfinder__leftpane">
                <figure className="finderitem__figure">
                    <img src={(dataObject.versions[0] == "eu") ? monster.eu[dataObject.img] : monster.usa[dataObject.img]} alt="" />
                </figure>
                <div className="shopfinder__leftpane__info">
                    <h2 className="shopfinder__leftpane__info__name">{dataObject.name}</h2>
                    <p className="shopfinder__leftpane__info__series">{dataObject.series}</p>
                </div>
            </div>
            <div className="shopfinder__rightpane">
                {shopItems && shopItems.map(shop =>{
                    return <ShopItem shopId={shop.id} monsterId={monsterId}/>
                })}
            </div></>}
            {!id && <div className="shopfinder__noitem">
            {shopsData.map(shop =>{
                    return <ShopItem shopId={shop.id} monsterId={monsterId}/>
                })}
            </div>

            }
        </div> 
    ); 
}

export default ShopFinder;