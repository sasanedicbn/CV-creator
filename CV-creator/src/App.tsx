import PersonalInformation from './components/PersonalInformation'
import './App.css'
import Header from './components/Header'
import Education from './components/Education'
import Experience from './components/Experience'
import Preview from './components/Preview'
import Wrapper from './components/Wrapper'
import { useState } from 'react'
import { EducationData, ExperienceData, PersonalInfo } from './components/TypeScript'
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
  educationData: [{}],
  experience: [{}],
})
{'ovvoo je',console.log(CV)}
const [educationData, setEducationData] = useState<EducationData[]>([])
const [experienceData, setExperienceData] = useState<ExperienceData[]>([])
const [personalnfo, setPersonalInfo] = useState<PersonalInfo>({
  firstName: '',
  lastName: '',
  title: '',
  photo: '',
  address: '',
  phoneNumber: '',
  email: '',
  description: '',
})


const handleEducationData = (data:EducationData[]) => {
  setEducationData(data)
}
const handleExperienceData = (data:ExperienceData[]) => {
  setExperienceData(data)
}
const handlePersonInfo = (data: PersonalInfo) => {
  setPersonalInfo(data)
}
  return (
    <Wrapper>
    <Header/>
    <PersonalInformation handlePersonInfo={handlePersonInfo} setCV={setCV}/>
    <Education handleEducationData={handleEducationData}/>
    <Experience handleExperienceData={handleExperienceData}/>
    <Preview  educationData={educationData} experienceData={experienceData} personalnfo={personalnfo} />
    </Wrapper>
  )
}

export default App
