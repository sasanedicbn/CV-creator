import FormGroup from "./FormGroup";
import { typeCV } from "./TypeScript";
const Education = ({setCV, CV}:{setCV:React.Dispatch<React.SetStateAction<typeCV>>, CV:any}) => {
    
  function addExperience() {
    setCV(prevCV => ({
      ...prevCV,
      educationData: [
        ...prevCV.educationData,
        {
          universityName: '',
          city: '',
          degree: '',
          subject: '',
          from: '',
          to: '',
        }
      ]
    }));
  }
  
  function deleteExperience(index:number) {
   setCV(prevCV => ({
    ...prevCV,
    educationData: prevCV.educationData.filter((_, i) => i !== index)
   }))
  }
  

  function handleInputData(event: React.ChangeEvent<HTMLInputElement>, index:number) {
    const { name, value } = event.target;
  
    setCV(prevCV => ({
      ...prevCV,
      educationData: prevCV.educationData.map((edu, i) => {
        if (i === index) {
          return {
            ...edu,
            [name]: value
          };
        }
        return edu;
      })
    }));
  }
  
  
  return (
    <div className="container">
    {CV.educationData.map((education:any, index:number) => (
      <div key={index}>
        <h2 className="form-title">Education</h2>
        <div className="education">
          <div className="education-item">
            <FormGroup
              label="University Name:"
              id={`university_name_${index}`}
              name="universityName"
              type="text"
              className="form-input"
              onChange={e => handleInputData(e, index)}
            />
            <FormGroup
              label="City:"
              id={`city_${index}`}
              name="city"
              type="text"
              className="form-input"
              onChange={e => handleInputData(e, index)}
            />
            <FormGroup
              label="Degree:"
              id={`degree_${index}`}
              name="degree"
              type="text"
              className="form-input"
              onChange={e => handleInputData(e, index)}
            />
            <FormGroup
              label="Subject:"
              id={`subject_${index}`}
              name="subject"
              type="text"
              className="form-input"
              onChange={e => handleInputData(e, index)}
            />
            <FormGroup
              label="From (dd/mm/yyyy):"
              id={`from_date_${index}`}
              name="from"
              type="text"
              className="form-input"
              onChange={e => handleInputData(e, index)}
            />
            <FormGroup
              label="To (dd/mm/yyyy):"
              id={`to_date_${index}`}
              name="to"
              type="text"
              className="form-input"
              onChange={e => handleInputData(e, index)}
            />
            {index === 0 ? null : <button className="delete-button" onClick={() => deleteExperience(index)}>Delete</button>}
          </div>
        </div>
        <button className="add-button" onClick={addExperience}>Add Education</button>
      </div>
    ))}
  </div>
  );
};

export default Education;
