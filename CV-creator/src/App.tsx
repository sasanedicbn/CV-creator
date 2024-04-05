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
const [personalnfo, setPersonalInfo] = useState()

const handleEducationData = (data) => {
  setEducationData(data)
}
const handleExperienceData = (data) => {
  setEducationData(data)
  console.log(data)

}
  return (
    <Wrapper>
    <Header/>
    <PersonalInformation/>
    <Education handleEducationData={handleEducationData}/>
    <Experience handleExperienceData={handleExperienceData}/>
    <Preview/>
    </Wrapper>
  )
}

export default App
