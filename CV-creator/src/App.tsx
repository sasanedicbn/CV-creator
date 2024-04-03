import PersonalInformation from './components/PersonalInformation'
import './App.css'
import Header from './components/Header'
import Education from './components/Education'
import Experience from './components/Experience'
import Preview from './components/Preview'
import Wrapper from './components/Wrapper'
function App() {

  return (
    <Wrapper>
    <Header/>
    <PersonalInformation/>
    <Education/>
    <Experience/>
    <Preview/>
    </Wrapper>
  )
}

export default App
