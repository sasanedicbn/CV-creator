
const PersonalInformation = () => {
  return (
    <div className="container">
      <h2 className="form-title">Form</h2>
      <div className="form-group">
        <label htmlFor="first_name">First Name:</label>
        <input type="text" id="first_name" name="first_name" className="form-input" />
      </div>
      <div className="form-group">
        <label htmlFor="last_name">Last Name:</label>
        <input type="text" id="last_name" name="last_name" className="form-input" />
      </div>
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" className="form-input" />
      </div>
      <div className="form-group">
        <label htmlFor="photo">Photo:</label>
        <input type="file" id="photo" name="photo" className="form-input" />
      </div>
      <div className="form-group">
        <label htmlFor="address">Address:</label>
        <input type="text" id="address" name="address" className="form-input" />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" className="form-input" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" className="form-input" />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" className="form-textarea"></textarea>
      </div>
    </div>
  );
};

export default PersonalInformation;
