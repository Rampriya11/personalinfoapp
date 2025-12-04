import { useState } from 'react'
import './App.css'
function App() {
  const [active, setActive] = useState('home')
  const [personalInfo, setPersonalInfo] = useState({
    name: 'Ram Priya R',
    age: 19,
    education: 'B.Tech in Information Technology',
    year: '3rd Year',
    collegeName: 'National Engineering College, Kovilpatti.'
  })
  const renderContent = () => {
    switch (active) {
      case 'home':
        return (

          <div>
            <h2>Personal Information</h2>
            <p><strong>Name: </strong> {personalInfo.name}</p>
            <p><strong>Age: </strong> {personalInfo.age}</p>
            <p><strong>Education: </strong> {personalInfo.education}</p>
            <p><strong>Year: </strong>{personalInfo.year}</p>
            <p><strong>College Name: </strong> {personalInfo.collegename}</p>
          </div>

        )
        case 'about':
        return (
          <div>
            <h2>About Me</h2>
            <p>Hello! I'm {personalInfo.name}, a {personalInfo.year} student pursuing {personalInfo.education} at {personalInfo.collegeName}.</p>
          </div>
        )
        case 'edit':
        return (
          <div>
            <h2> Edit Infromation </h2>
            <form onSubmit ={(e) =>{
              e.preventDefault();
              const fromData = new FormData(e.traget)
              const updatedInfo = {
                name: fromData.get('name'),
                age: fromData.get('age'),
                education: fromData.get('education'),
                year: fromData.get('year'),
                collegeName: fromData.get('collegeName')
              }
              setPersonalInfo(updatedInfo)
              setActive('home')
            }}>
              <lable>Name:</lable>
              <input type="text" name="name" defaultValue={personalInfo.name}/>
              <lable>Age: </lable>
              <input type="number" age="age" defaultValue={personalInfo.age}/>
              <lable>Education:  </lable>
              <input type = "text" name ="education" defaultValue={personalInfo.education}/>
              <lable>Year: </lable>
              <input type="text" name="year" defaultValue={personalInfo.year}/>
              <lable>College Name: </lable>
              <input type="text" name="collegeName" defaultValue={personalInfo.collegeName}/>
              <button type="submit">Save</button>
             
            </form>
          </div>
        )
    }
  }
  return (
    <div>
      <nav>
        <button onClick={() => setActive('home')} className={active === 'home' ? 'active' : ''}>Home</button>
        <button onClick={() => setActive('about')} className={active === 'about' ? 'active' : ''}>About Me</button>
        <button onClick={() => setActive('edit')} className={active === 'edit' ? 'active' : ''}>Edit Info</button>
      </nav>
      {renderContent()}
    </div>
  )
}
export default App
