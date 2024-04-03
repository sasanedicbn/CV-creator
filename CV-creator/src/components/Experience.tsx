import { useEffect, useState } from "react";

const Experience = () => {
    const [experience, setExperience] = useState([{}])
    
   function addExperience (){
    setExperience([...experience, {}])
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
                <input type="text" id="position" name="position" className="form-input" />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company:</label>
                <input type="text" id="company" name="company" className="form-input" />
              </div>
              <div className="form-group">
                <label htmlFor="city">City:</label>
                <input type="text" id="city" name="city" className="form-input" />
              </div>
              <div className="form-group">
                <label htmlFor="from_date">From (dd/mm/yyyy):</label>
                <input type="text" id="from_date" name="from_date" className="form-input" />
              </div>
              <div className="form-group">
                <label htmlFor="to_date">To (dd/mm/yyyy):</label>
                <input type="text" id="to_date" name="to_date" className="form-input" />
              </div>
              {index === 0 ? null : <button className="delete-button" onClick={() => deleteExperience(index)}>Delete</button>}
            </div>
          </div>
          <button className="add-button" onClick={addExperience} >Add Experience</button>
          </div>
       ))}
     
    </div>
  );
};

export default Experience;
