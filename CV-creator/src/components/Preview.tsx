import { useState } from "react";
import CVAccount from "./CVAccount";

const Preview = ({experienceData, educationData, personalnfo}) => {
    const [showAccount, setShowAccount] = useState(false)
    
    function showAccountComponent(){
        setShowAccount(!showAccount)
    }
    const dataForAccount = {
        experienceData: experienceData,
        educationData: educationData,
        personalnfo: personalnfo
    }
    return(
        <div className="container">
         <button className="preview-button" onClick={showAccountComponent}>Preview</button>
         <button className="delete-button" >Reset</button>
         {showAccount && <CVAccount dataForAccount={dataForAccount} removeAccountComponent={showAccountComponent}/>}
        </div>
    )
}
export default Preview;