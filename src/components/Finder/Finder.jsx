import "./Finder.scss";
import monsterData from "./../../data/monsterData.js";
import FinderItem from "../FinderItem/FinderItem";
import { useEffect, useState } from "react";

const Finder = () =>{
    const [data, setData] = useState(monsterData);
    const [versionValue, setVersionValue] = useState("nofilter");
    const [seriesValue, setSeriesValue] = useState("nofilter");
    const [searchValue, setSearchValue] = useState("");

    useEffect(()=>{
        let tempData = monsterData;
        if(versionValue !== "nofilter"){
            console.log(data)
            tempData = tempData.filter(data => data.versions.includes(versionValue));
        }
        if(seriesValue !== "nofilter"){
            tempData = tempData.filter(data => data.series === seriesValue);
        }
        if(searchValue !== ""){
            tempData = tempData.filter(data => data.name.toLowerCase().includes(searchValue.toLowerCase()));
        }
        setData(tempData);
    },[versionValue, seriesValue, searchValue]);


    return(
        <div className="finder">
            <header className="finder__header">
                <input onChange={(ev)=>setSearchValue(ev.target.value)} type="text"  className="finder__header__input input"/>
                <select onChange={(ev)=>setSeriesValue(ev.target.value)} className="finder__header__select" name="series" id="series">
                    <option className="finder__header__select__option" value="nofilter">--No Filter--</option>
                    <option className="finder__header__select__option" value="juiced">Juiced</option>
                    <option className="finder__header__select__option" value="ultra">Ultra</option>
                    <option className="finder__header__select__option" value="zero sugar">Zero sugar</option>
                    <option className="finder__header__select__option" value="super fuel">Fuel</option>
                    <option className="finder__header__select__option" value="resealable">Resealable</option>
                    <option className="finder__header__select__option" value="rehab">Rehab</option>
                    <option className="finder__header__select__option" value="reserve">Reserve</option>
                    <option className="finder__header__select__option" value="java">Java</option>
                </select>
                <select onChange={(ev)=>setVersionValue(ev.target.value)} className="finder__header__select" name="version" id="version">
                    <option className="finder__header__select__option" value="nofilter">All</option>
                    <option className="finder__header__select__option" value="eu">EU</option>
                    <option className="finder__header__select__option" value="usa">USA</option>
                    <option className="finder__header__select__option" value="small">Small</option>
                </select>
                <i class="fa-solid fa-magnifying-glass finder__header__button"></i>
            </header>
            <div className="finder__wrapper">
                {data.map(data =>(
                    <FinderItem key={data.id} data={data}/>
                ))}
            </div>
        </div>
    )
}

export default Finder;
