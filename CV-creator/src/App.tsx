import PersonalInformation from './components/PersonalInformation'
import './App.css'
import Header from './components/Header'
import EducationComponent from './components/EducationComponent'

function App() {
  return (

    <div className='main-container'>
    <Header/>
    <PersonalInformation/>
    <EducationComponent/>
    </div>
  )
}

export default App
