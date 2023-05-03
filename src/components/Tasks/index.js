import './index.css'

const Tasks = props => {
  const {details} = props
  const {inputText, activeOption} = details

  return (
    <li className="list">
      <p className="input-text">{inputText}</p>
      <button type="button" className="button-style">
        {activeOption}
      </button>
    </li>
  )
}
export default Tasks
