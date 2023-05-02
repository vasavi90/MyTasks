import {Component} from 'react'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

// Replace your code here
class App extends Component {
  state = {
    input: '',
    option: tagsList[0].displayText,
  }

  render() {
    return (
      <div className="app-container">
        <div className="input-container">
          <h1 className="main-heading">Create a task!</h1>
          <form className="form">
            <label>Task</label>
          </form>
        </div>
      </div>
    )
  }
}
export default App
