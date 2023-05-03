import './index.css'

const Tags = props => {
  const {details, clickTag} = props
  const {displayText} = details

  return (
    <li className="each-list">
      <button type="button" className="btn">
        {displayText}
      </button>
    </li>
  )
}
export default Tags
