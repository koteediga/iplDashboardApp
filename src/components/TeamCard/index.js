import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {source} = props
  const {name, teamImageUrl, id} = source
  return (
    <Link to={`/team-matches/${id}`}>
      <li>
        <p>{name}</p>
        <img src={teamImageUrl} alt={name} className="image" />
      </li>
    </Link>
  )
}

export default TeamCard
