import "./CollectionItem.scss";
import monsterData from "../../data/monsterData";

const CollectionItem = ({monsterId}) =>{
    let dataObject = {};
    monsterData.forEach(data =>{
        if(data.id === monsterId){
            dataObject = data;
        }
    })
    return (
        <div className="collectionitem">
            <figure className="collectionitem__figure">

            </figure>
            <div className="collectionitem__info">
                <h2 className="collectionitem__info__name">{dataObject.name}</h2>
                <p className="collectionitem__info__series">{dataObject.series}</p>
                <p className="collectionitem__info__contents">{dataObject.contents}ML</p>
                <div className="collectionitem__info__actionwrapper">
                    <i class="fa-solid fa-square-minus collectionitem__info__actionwrapper__remove"></i>
                </div>
            </div>
        </div>
    );
}

export default CollectionItem;