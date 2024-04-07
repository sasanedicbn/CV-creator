import { useState  } from "react";
import CVAccount from "./CVAccount";


const Preview = ({CV}) => {
    const [showAccount, setShowAccount] = useState(false)
    
    function showAccountComponent(){
        setShowAccount(!showAccount)
    }
    

    // console.log(dataForAccount)
 
    return(
        <div className="container">
         <button className="preview-button" onClick={showAccountComponent}>Preview</button>
         <button className="delete-button" >Reset</button>
         {showAccount && <CVAccount dataForAccount={CV} removeAccountComponent={showAccountComponent}/>}
        </div>
    )
}
export default Preview;