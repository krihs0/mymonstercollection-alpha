import { Link } from "react-router-dom";
import monsterData from "../../data/monsterData";
import { monster } from "../../data/monster-images";
import "./FinderItem.scss";
import { useEffect, useState } from "react";

const FinderItem = ({data}) =>{
    const [versionState, setVersionState] = useState("");
    let dataObject = data;

    useEffect(() => {
        setVersionState(dataObject.versions[0]);
    }, [])


    return (
        <div className="finderitem">
            {(dataObject.versions.length > 1) &&
            <select className="finderitem__select" name="versions" id="versions">
                {dataObject.versions.map(version =>{
                    return <option onClick={()=>setVersionState(version)} className="finderitem__select__option" value={version}>{version}</option>;
                })}
            </select>}
            <figure className="finderitem__figure">
                {monster && <img src={(versionState == "eu") ? monster.eu[dataObject.img] : monster.usa[dataObject.img]} alt=""/>}
            </figure>
            <div className="finderitem__info">
                <h2 className="finderitem__info__name">{dataObject.name}</h2>
                <p className="finderitem__info__series">{dataObject.series}</p>
                <div className="finderitem__info__actionwrapper">
                    <Link to={'/shopfinder/' + data.id} className="finderitem__info__actionwrapper__find btn btn--">find shops</Link>
                    <i class="fa-solid fa-square-plus finderitem__info__actionwrapper__add"></i>
                </div>
            </div>
        </div>
    );
}

export default FinderItem;
