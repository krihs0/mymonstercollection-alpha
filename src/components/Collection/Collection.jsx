import "./Collection.scss";
import monsterData from "../../data/monsterData";
import dummyCollectionData from "../../data/dummyCollectionData";
import { useEffect, useState } from "react";
import CollectionItem from "../CollectionItem/CollectionItem";


const Collection = () =>{
    const [data, setData] = useState();
    const [initialData, setInitialData] = useState();
    const [versionValue, setVersionValue] = useState("nofilter");
    const [seriesValue, setSeriesValue] = useState("nofilter");
    const [searchValue, setSearchValue] = useState("");

    useEffect(()=>{
        let tempData = [];
        monsterData.forEach(data => {
            if(dummyCollectionData.includes(data.id)){
                tempData.push(data);}
        });
        setData(tempData);
        setInitialData(tempData);
    },[]);
    
    useEffect(()=>{
        if(initialData){
        let tempData = initialData;
        if(versionValue !== "nofilter"){
            tempData = tempData.filter(data => data.version === versionValue);
        }
        if(seriesValue !== "nofilter"){
            tempData = tempData.filter(data => data.series === seriesValue);
        }
        if(searchValue !== ""){
            tempData = tempData.filter(data => data.name.toLowerCase().includes(searchValue.toLowerCase()));
        }
        setData(tempData);}
    },[versionValue, seriesValue, searchValue]);


    return(
        <div className="collection">
            <h1 className="collection__h1">Username's collection</h1>
            <header className="collection__header">
                <input onChange={(ev)=>setSearchValue(ev.target.value)} type="text"  className="collection__header__input input"/>
                <select onChange={(ev)=>setSeriesValue(ev.target.value)} className="collection__header__select" name="series" id="series">
                    <option className="collection__header__select__option" value="nofilter">--No Filter--</option>
                    <option className="collection__header__select__option" value="juiced">Juiced</option>
                    <option className="collection__header__select__option" value="ultra">Ultra</option>
                    <option className="collection__header__select__option" value="zero sugar">Zero sugar</option>
                    <option className="collection__header__select__option" value="super fuel">Fuel</option>
                </select>
                <select onChange={(ev)=>setVersionValue(ev.target.value)} className="collection__header__select" name="version" id="version">
                    <option className="collection__header__select__option" value="nofilter">All</option>
                    <option className="collection__header__select__option" value="eu">EU</option>
                    <option className="collection__header__select__option" value="usa">USA</option>
                </select>
                <i class="fa-solid fa-magnifying-glass collection__header__button"></i>
            </header>
            <div className="collection__wrapper">
                Soon you will be able to keep track of your collection here
                {/* {data && data.map(data =>(
                    <CollectionItem key={data.id} monsterId={data.id}/>
                ))} */}
            </div>
        </div>
    )
}

export default Collection;