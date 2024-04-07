import FormGroup from "./FormGroup";


const PersonalInformation = ({setCV}) => {

    function handleInputData  (event: React.ChangeEvent<HTMLInputElement>){
        const value = event.target.value;
        const name = event.target.name
        // za sliku ovo dole ne citam sliku sa event.trget.value
        // {console.log(URL.createObjectURL(event.target.files[0]))}

        setCV(prevCV => ({...prevCV, personalInformation: {...prevCV.personalInformation, [name]: value}}));
    }

  return (
    <div className="container">
      <h2 className="form-title">Personal Information</h2>
      <FormGroup label="First Name:" id="first_name" name="first_name" type="text" className="form-input" onChange={handleInputData} />
      <FormGroup label="Last Name:" id="last_name" name="last_name" type="text" className="form-input" onChange={handleInputData} />
      <FormGroup label="Title:" id="title" name="title" type="text" className="form-input" onChange={handleInputData} />
      <FormGroup label="Photo:" id="photo" name="photo" type="file" className="form-input" onChange={handleInputData} />
      <FormGroup label="Address:" id="address" name="address" type="text" className="form-input" onChange={handleInputData} />
      <FormGroup label="Phone Number:" id="phone" name="phone" type="tel" className="form-input" onChange={handleInputData} />
      <FormGroup label="Email:" id="email" name="email" type="email" className="form-input" onChange={handleInputData} />
      <FormGroup label="Description:" id="description" name="description" type="text" className="form-input" onChange={handleInputData} />
    </div>
  );
};

export default PersonalInformation;
