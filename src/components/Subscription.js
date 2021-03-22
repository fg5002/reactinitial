import React, {useState} from "react";
import LoadingMask from './LoadingMask'

const Subscription = (props) => {
    
    const [loadMask, setLoadMask] = useState(false)
    const [show, setShow] = useState(false);   
    const [email, setEmail] = useState("");

    const [message, setMessage] = useState(null);

    const sendSubscribe = (e) => {
        e.preventDefault();
        setLoadMask(true) 
        setShow(!show)

        fetch("api/hotels/subscribe", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ email: email })
        })
        .then((response) => response.json())
        .then((data) => {
            setMessage(data);
            setLoadMask(false);
            setTimeout(() => {
                props.showsubs()
            }, 5000)
        });

    
    };
    
    
    return (
        
        <>
            <h5>Request more info about</h5>
            { !show && (
                <form onSubmit={(e) => sendSubscribe(e)}>
                    <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <input
                    type="submit" 
                    value="Submit"
                    disabled={ !(email.includes('@') && email.includes('.'))}
                />
                </form> ) 
            }
                { message && <h3>{ props.name==="Hotel Curabitur suscipit suscipit" ? 
                    "Already subscribed" :
                    "Subscribed"}</h3> }
            { loadMask && <LoadingMask /> }
        </>
    )
};

    export default Subscription;