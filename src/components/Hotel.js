import React, {useState} from "react";
import Subscription from "./Subscription";

const Hotel = ({hotel}) => {
    const [show, setShow] = useState(false)
    const [subs, setSubs] = useState(false)

    const showSuscription=()=> setSubs(!subs);

    return (

        <div className="hotel">
            <h2>{ hotel.name }</h2>
            { !show 
            ? <button onClick={() => setShow(!show)} >Show More</button> 
            : <button onClick={() => setShow(!show)} >Show Less</button>}
            { show && 
                <>
                    <h4>{hotel.city} ({hotel.stars})</h4>
                    <button onClick={() => showSuscription()}>Request more info</button> 
                    {subs && <Subscription name={hotel.name} showsubs={showSuscription}/>}
                </>
            }
        </div>
    
    )
};

export default Hotel;