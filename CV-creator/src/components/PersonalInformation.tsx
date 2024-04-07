import FormGroup from "./FormGroup";


const PersonalInformation = ({setCV}) => {

    function handleInputData  (event: React.ChangeEvent<HTMLInputElement>){
        const {value,name,files } = event.target;

        if(files && files.length > 0){
          const file = files[0]
          const URLPHOTO = URL.createObjectURL(file)
          setCV(prevState => ({...prevState, personalInformation: {...prevState.personalInformation, photo: URLPHOTO}}))
        }else{
          setCV(prevCV => ({...prevCV, personalInformation: {...prevCV.personalInformation, [name]: value}}));
        }
       
        // za sliku ovo dole ne citam sliku sa event.trget.value

       
    }

  return (
    <div className="container">
      <h2 className="form-title">Personal Information</h2>
      <FormGroup label="First Name:" id="first_name" name="first_name" type="text" className="form-input" onChange={handleInputData} />
      <FormGroup label="Last Name:" id="last_name" name="last_name" type="text" className="form-input" onChange={handleInputData} />
      <FormGroup label="Title:" id="title" name="title" type="text" className="form-input" onChange={handleInputData} />
      <FormGroup label="" id="photo" name="photo" type="file" className="form-input" onChange={handleInputData} />
      <FormGroup label="Address:" id="address" name="address" type="text" className="form-input" onChange={handleInputData} />
      <FormGroup label="Phone Number:" id="phone" name="phone" type="tel" className="form-input" onChange={handleInputData} />
      <FormGroup label="Email:" id="email" name="email" type="email" className="form-input" onChange={handleInputData} />
      <FormGroup label="Description:" id="description" name="description" type="text" className="form-input" onChange={handleInputData} />
    </div>
  );
};

export default PersonalInformation;
