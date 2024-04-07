import PersonalInformation from './components/PersonalInformation'
import './App.css'
import Header from './components/Header'
import Education from './components/Education'
import Experience from './components/Experience'
import Preview from './components/Preview'
import Wrapper from './components/Wrapper'
import { useState } from 'react'
function App() {
const [CV, setCV] = useState({
  personalInformation:{
    firstName: '',
    lastName: '',
    title: '',
    photo: '',
    address: '',
    phoneNumber: '',
    email: '',
    description: '',
  },
  educationData: [{
    universityName: '',
    city:'',
    degree:'',
    subject: '',
    from: '',
    to: '',
  }],
  experience: [{
    position: '',
    company: '',
    city: '',
    from: '',
    to: '',
  }],
})
{console.log(CV)}

  return (
    <Wrapper>
    <Header/>
    <PersonalInformation setCV={setCV}/>
    <Education setCV={setCV} CV={CV}/>
    <Experience  setCV={setCV} CV={CV}/>
    <Preview CV={CV}  />
    </Wrapper>
  )
}

export default App
