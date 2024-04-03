import PersonalInformation from './components/PersonalInformation'
import './App.css'
import Header from './components/Header'
import Education from './components/Education'
import Experience from './components/Experience'
import Preview from './components/Preview'
function App() {
  return (

    <div className='main-container'>
    <Header/>
    <PersonalInformation/>
    <Education/>
    <Experience/>
    <Preview/>
    </div>
  )
}

export default App
