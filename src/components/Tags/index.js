import './index.css'

const Tags = props => {
  const {details} = props
  const {displayText} = details

  return (
    <li className="list">
      <button type="button">{displayText}</button>
    </li>
  )
}
export default Tags
