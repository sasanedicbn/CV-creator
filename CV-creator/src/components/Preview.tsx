import { useState } from "react";
import CVAccount from "./CVAccount";

const Preview = ({experienceData, educationData, personalnfo}) => {
    const [showAccount, setShowAccount] = useState(false)
    
    function showAccountCV(){
        setShowAccount(!showAccount)
    }
    const dataForAccount = {
        experienceData: experienceData,
        educationData: educationData,
        personalnfo: personalnfo
    }
    return(
        <div className="container">
         <button className="preview-button" onClick={showAccountCV}>Preview</button>
         <button className="delete-button" >Reset</button>
         {showAccount && <CVAccount dataForAccount={dataForAccount}/>}
        </div>
    )
}
export default Preview;