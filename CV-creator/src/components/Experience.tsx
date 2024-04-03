
const Experience = () => {
  return (
    <div className="container">
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
          <button className="delete-button" >Delete</button>
        </div>
      </div>
      <button className="add-button" >Add Experience</button>
    </div>
  );
};

export default Experience;
