import PersonalInformation from './components/PersonalInformation'
import './App.css'
import Header from './components/Header'
import Education from './components/Education'
import Experience from './components/Experience'
import Preview from './components/Preview'
import Wrapper from './components/Wrapper'
import { useState } from 'react'
function App() {
const [educationData, setEducationData] = useState([])
const [experienceData, setExperienceData] = useState([])
const [personalnfo, setPersonalInfo] = useState({})
console.log(educationData)
console.log(experienceData)
console.log(personalnfo)
const handleEducationData = (data) => {
  setEducationData(data)
}
const handleExperienceData = (data) => {
  setExperienceData(data)
}
const handlePersonInfo = (data) => {
  setPersonalInfo(data)
}
  return (
    <Wrapper>
    <Header/>
    <PersonalInformation handlePersonInfo={handlePersonInfo}/>
    <Education handleEducationData={handleEducationData}/>
    <Experience handleExperienceData={handleExperienceData}/>
    <Preview/>
    </Wrapper>
  )
}

export default App
