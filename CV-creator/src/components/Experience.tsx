import {  useState } from "react";

const Experience = ({handleExperienceData}) => {
    const [experience, setExperience] = useState([{
        position: '',
        company: '',
        city: '',
        from: '',
        to: '',
    }])
    
   function addExperience (){
    setExperience([...experience, {
        position: '',
        company: '',
        city: '',
        from: '',
        to: '',
    }])
   }
   function deleteExperience(index) {
    setExperience(experience.filter((_,i) => i !== index))
   }

   const handleInputData = (event, index, field) => {
    const value = event.target.value;
    const updateExperience = [...experience]
     updateExperience[index][field] = value
    setExperience(updateExperience)
    handleExperienceData(experience)
   }
  
  return (
    <div className="container">
       {experience.map((experience, index) => (
        <div key={index}>
          <h2 className="form-title">Experience</h2>
          <div className="experience">
            <div className="experience-item">
              <div className="form-group">
                <label htmlFor="position">Position:</label>
                <input type="text" id="position" name="position" value={experience.position} onChange={(e) => handleInputData(e, index, 'position')} className="form-input" />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company:</label>
                <input type="text" id="company" name="company" value={experience.company} onChange={(e) => handleInputData(e, index, 'company')} className="form-input" />
              </div>
              <div className="form-group">
                <label htmlFor="city">City:</label>
                <input type="text" id="city" name="city" value={experience.city} onChange={(e) => handleInputData(e, index, 'city')} className="form-input" />
              </div>
              <div className="form-group">
                <label htmlFor="from_date">From (dd/mm/yyyy):</label>
                <input type="text" id="from_date" value={experience.from} onChange={(e) => handleInputData(e, index, 'from')} name="from_date" className="form-input" />
              </div>
              <div className="form-group">
                <label htmlFor="to_date">To (dd/mm/yyyy):</label>
                <input type="text" id="to_date" name="to_date" value={experience.to} onChange={(e) => handleInputData(e, index, 'to')} className="form-input" />
              </div>
              {index === 0 ? null : <button className="delete-button"  onClick={() => deleteExperience(index)}>Delete</button>}
            </div>
          </div>
          <button className="add-button" onClick={addExperience} >Add Experience</button>
          </div>
       ))}
     
    </div>
  );
};

export default Experience;
