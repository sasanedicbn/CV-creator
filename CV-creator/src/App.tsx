import PersonalInformation from './components/PersonalInformation'
import './App.css'
import Header from './components/Header'
import Education from './components/Education'

function App() {
  return (

    <div className='main-container'>
    <Header/>
    <PersonalInformation/>
    <Education/>
    </div>
  )
}

export default App
