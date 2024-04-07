import { PersonalInfo } from "./TypeScript";
type personalInfoProp = {
    handlePersonInfo: (data:PersonalInfo) => void;
}


const PersonalInformation = ({handlePersonInfo, setCV}:personalInfoProp) => {

    function handleInputData  (event: React.ChangeEvent<HTMLInputElement>){
        const value = event.target.value;
        const name = event.target.name
        // za sliku ovo dole ne citam sliku sa event.trget.value
        // {console.log(URL.createObjectURL(event.target.files[0]))}

        setCV(prevCV => ({...prevCV, personalInformation: {...prevCV.personalInformation, [name]: value}}));
    }
    
    // napraviti child komponentu za form-group da bude citljivije

  return (
    <div className="container">
      <h2 className="form-title">Personal Information</h2>
      <div className="form-group">
        <label htmlFor="first_name">First Name:</label>
        <input type="text" id="first_name" name="first_name" className="form-input" onChange={(e) => handleInputData(e)}/>
      </div>
      <div className="form-group">
        <label htmlFor="last_name">Last Name:</label>
        <input type="text" id="last_name" name="last_name" className="form-input"  onChange={(e) => handleInputData(e)}/>
      </div>
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" className="form-input"  onChange={(e) => handleInputData(e)}/>
      </div>
      <div className="form-group">
        <label htmlFor="photo">Photo:</label>
        <input type="file" id="photo" name="photo" className="form-input" onChange={(e) => handleInputData(e)} />
      </div>
      <div className="form-group">
        <label htmlFor="address">Address:</label>
        <input type="text" id="address" name="address" className="form-input" onChange={(e) => handleInputData(e)} />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" className="form-input" onChange={(e) => handleInputData(e)}/>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" className="form-input" onChange={(e) => handleInputData(e)} />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <input type="text" id="title" name="title" className="form-input" onChange={(e) => handleInputData(e)}/>
      </div>
    </div>
  );
};

export default PersonalInformation;
