import { useRef } from 'react';
import { useReactToPrint} from 'react-to-print';

  
const CVAccount = ({dataForAccount, removeAccountComponent}) => {
    const printRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => printRef.current,
      });

    const {personalInformation } = dataForAccount
    
    return(
        <div ref={printRef}>
        <div className="overlay"></div>
        <div className="cv-account">
        <p className="profile-img"><strong>Photo:</strong> <img src={personalInformation?.photo} alt="Profile" /></p>
        <div className="personal-info">
          <h2>Personal Information</h2>
          <p><strong>First Name:</strong> {personalInformation?.firstName}</p>
          <p><strong>Last Name:</strong> {personalInformation?.lastName}</p>
          <p><strong>Title:</strong> {personalInformation?.title}</p>
          <p><strong>Address:</strong> {personalInformation?.address}</p>
          <p><strong>Phone Number:</strong> {personalInformation?.phoneNumber}</p>
          <p><strong>Email:</strong> {personalInformation?.email}</p>
          <p><strong>Description:</strong> {personalInformation?.description}</p>
        </div>
        
        <div className="education-info">
          <h2>Education</h2>
          {dataForAccount.educationData.map((edu, index) => (
            <div key={index}>
              <p><strong>University Name:</strong> {edu.universityName}</p>
              <p><strong>City:</strong> {edu.city}</p>
              <p><strong>Degree:</strong> {edu.degree}</p>
              <p><strong>Subject:</strong> {edu.subject}</p>
              <p><strong>From:</strong> {edu.from}</p>
              <p><strong>To:</strong> {edu.to}</p>
            </div>
          ))}
        </div>
  
        <div className="experience-info">
          <h2>Experience</h2>
          {dataForAccount.experience.map((exp, index) => (
            <div key={index}>
              <p><strong>Position:</strong> {exp.position}</p>
              <p><strong>Company:</strong> {exp.company}</p>
              <p><strong>City:</strong> {exp.city}</p>
              <p><strong>From:</strong> {exp.from}</p>
              <p><strong>To:</strong> {exp.to}</p>
            </div>
          ))}
        </div>
        <div className="btn-container">
            <button className="custom-btn" onClick={removeAccountComponent}> Go back </button>
            <button className="custom-btn" onClick={handlePrint}> Print </button>
        </div>
      </div>
      </div>
    )
}
export default CVAccount;