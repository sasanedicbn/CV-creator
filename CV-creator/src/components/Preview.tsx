import { useState } from "react";
import CVAccount from "./CVAccount";

const Preview = ({experienceData, educationData, personalnfo}) => {
    
    const dataForAccount = {
        experienceData: experienceData,
        educationData: educationData,
        personalnfo: personalnfo
    }
    return(
        <div className="container">
         <button className="preview-button" onClick={}>Preview</button>
         <button className="delete-button" >Reset</button>
         <CVAccount dataForAccount={dataForAccount}/>
        </div>
    )
}
export default Preview;