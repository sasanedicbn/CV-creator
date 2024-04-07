import FormGroup from "./FormGroup";
import { typeCV } from "./TypeScript";

const Experience = ({ setCV, CV }:{setCV:React.Dispatch<React.SetStateAction<typeCV>>}) => {
  const addExperience = () => {
    setCV(prevState => ({
      ...prevState,
      experience: [
        ...prevState.experience,
        {
          position: '',
          company: '',
          city: '',
          from: '',
          to: ''
        }
      ]
    }));
  };

  const deleteExperience = (index:number) => {
    setCV(prevState => ({
      ...prevState,
      experience: prevState.experience.filter((_, i) => i !== index)
    }));
  };

  const handleInputData = (event:any, index:number) => {
    const { value, name } = event.target;
    setCV(prevState => ({
      ...prevState,
      experience: prevState.experience.map((exp, i) => {
        if (index === i) {
          return {
            ...exp,
            [name]: value
          };
        }
        return exp;
      })
    }));
  };
  
  return (
    <div className="container">
      {CV.experience.map((experience:string, index:number) => (
        <div key={index}>
          <h2 className="form-title">Experience</h2>
          <div className="experience">
            <div className="experience-item">
              <FormGroup
                label="Position:"
                id={`position-${index}`}
                name="position"
                type="text"
                className="form-input"
                onChange={(e) => handleInputData(e, index)}
              />
              <FormGroup
                label="Company:"
                id={`company-${index}`}
                name="company"
                type="text"
                className="form-input"
                onChange={(e) => handleInputData(e, index)}
              />
              <FormGroup
                label="City:"
                id={`city-${index}`}
                name="city"
                type="text"
                className="form-input"
                onChange={(e) => handleInputData(e, index)}
              />
              <FormGroup
                label="From (dd/mm/yyyy):"
                id={`from_date-${index}`}
                name="from_date"
                type="text"
                className="form-input"
                onChange={(e) => handleInputData(e, index)}
              />
              <FormGroup
                label="To (dd/mm/yyyy):"
                id={`to_date-${index}`}
                name="to_date"
                type="text"
                className="form-input"
                onChange={(e) => handleInputData(e, index)}
              />
              {index === 0 ? null : <button className="delete-button" onClick={() => deleteExperience(index)}>Delete</button>}
            </div>
          </div>
        </div>
      ))}
      <button className="add-button" onClick={addExperience} >Add Experience</button>
    </div>
  );
};

export default Experience;
