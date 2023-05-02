import {v4 as uuidv4} from 'uuid'
import {Component} from 'react'

import Tags from './components/Tags'

import Tasks from './components/Tasks'

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
    inputText: '',
    activeOption: tagsList[0].optionId,
    tasksList: [],
  }

  onChangeInput = event => {
    this.setState({
      inputText: event.target.value,
    })
  }

  onChangeOption = event => {
    this.setState({
      activeOption: event.target.value,
    })
  }

  submitForm = event => {
    event.preventDefault()
    const {inputText, activeOption} = this.state
    const newTask = {
      id: uuidv4(),
      inputText,
      activeOption,
    }
    this.setState(prevState => ({
      tasksList: [...prevState.tasksList, newTask],
      inputText: '',
      activeOption: tagsList[0].optionId,
    }))
  }

  renderTasks = tasksList => (
    <ul className="tasks-container-two">
      {tasksList.map(eachTask => (
        <Tasks key={eachTask.id} details={eachTask} />
      ))}
    </ul>
  )

  render() {
    const {inputText, activeOption, tasksList} = this.state
    const lengthOfList = tagsList.length > 0
    return (
      <div className="app-container">
        <div className="input-container">
          <h1 className="main-heading">Create a task!</h1>
          <form className="form" onSubmit={this.submitForm}>
            <label htmlFor="input" className="label">
              Task
            </label>
            <input
              value={inputText}
              type="text"
              id="input"
              placeholder="Enter the task here"
              className="input"
              onChange={this.onChangeInput}
            />
            <label htmlFor="tag" className="label">
              Tags
            </label>
            <select
              className="input"
              id="select"
              value={activeOption}
              onChange={this.onChangeOption}
            >
              {tagsList.map(eachOption => (
                <option key={eachOption.optionId} value={eachOption.optionId}>
                  {eachOption.displayText}
                </option>
              ))}
            </select>
          </form>
          <button type="submit" className="button">
            Add Task
          </button>
        </div>
        <div className="tasks-container">
          <div>
            <h1 className="heading">Tags</h1>
            <ul className="container">
              {tagsList.map(eachTag => (
                <Tags key={eachTag.optionId} details={eachTag} />
              ))}
            </ul>
          </div>
          <div className="another-container">
            <h1 className="heading">Tasks</h1>
            {lengthOfList ? (
              this.renderTasks(tasksList)
            ) : (
              <p className="no-tasks">No Tasks Yet</p>
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default App
