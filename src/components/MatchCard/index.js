// Write your code here
const MatchCard = props => {
  const {each} = props
  const {competing_team, competing_team_logo, result, match_status} = each
  return (
    <li>
      <p>{competing_team}</p>
      <img src={competing_team_logo} alt={`competing team ${competing_team}`} />
      <p>{result}</p>
      <p>{match_status}</p>
    </li>
  )
}

export default MatchCard
