import './index.css'

const Tasks = props => {
  const {details} = props
  const {inputText, activeOption} = details

  return (
    <li>
      <p className="text">{inputText}</p>
      <button type="button" className="button">
        {activeOption}
      </button>
    </li>
  )
}
export default Tasks
