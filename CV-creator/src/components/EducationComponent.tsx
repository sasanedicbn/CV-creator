
const EducationComponent = () => {
  return (
    <div className="container">
      <h2 className="form-title">Education</h2>
      <div className="education">
        <div className="education-item">
          <div className="form-group">
            <label htmlFor="university_name">University Name:</label>
            <input type="text" id="university_name" name="university_name" className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="city">City:</label>
            <input type="text" id="city" name="city" className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="degree">Degree:</label>
            <input type="text" id="degree" name="degree" className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" name="subject" className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="from_date">From (dd/mm/yyyy):</label>
            <input type="text" id="from_date" name="from_date" className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="to_date">To (dd/mm/yyyy):</label>
            <input type="text" id="to_date" name="to_date" className="form-input" />
          </div>
          <button className="delete-button" >Delete</button>
        </div>
      </div>
      <button className="add-button" >Add Education</button>
    </div>
  );
};

export default EducationComponent;
