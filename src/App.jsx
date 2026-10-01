
import './App.css'
import data from './data.json';
import PeopleCardComponent from './PeopleCardComponent';

function App() {


  return (
    <div className='people-container'>
      {
        data.map((people) => {
          return <PeopleCardComponent people={people} />
        })
      }
    
  </div>
  )
}

export default App
