import { useState  } from "react";
import CVAccount from "./CVAccount";
import { EducationData, ExperienceData, PersonalInfo } from "./TypeScript";

type Props = {
    experienceData: ExperienceData[],
    educationData: EducationData[],
    personalnfo: PersonalInfo,
}

const Preview = ({CV}:Props) => {
    const [showAccount, setShowAccount] = useState(false)
    
    function showAccountComponent(){
        setShowAccount(!showAccount)
    }
    const dataForAccount = CV

    console.log(dataForAccount)
 
    return(
        <div className="container">
         <button className="preview-button" onClick={showAccountComponent}>Preview</button>
         <button className="delete-button" >Reset</button>
         {showAccount && <CVAccount dataForAccount={dataForAccount} removeAccountComponent={showAccountComponent}/>}
        </div>
    )
}
export default Preview;