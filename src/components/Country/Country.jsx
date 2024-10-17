import { useState } from "react";
import "./Country.css"
const Country = ({country}) => {
    const {name, flags, region, status} = country ;

    const [visited, setVisited]= useState(false);

    const handleVisit = ()=>{
        setVisited(!visited)
    }
    return (
        <div className="country">
            <h2>Name : {name.common}</h2>
            
            <h3>Region : {region}</h3>
            <h3>Status : {status}</h3>
            <img src={flags?.png} alt="" />
            <br /> <br />
            <button onClick={handleVisit}>{visited ? "visited" : "Going"}</button>
            {visited ? "I have visited" : "Not visited"}
            
        </div>
    );
};

export default Country;