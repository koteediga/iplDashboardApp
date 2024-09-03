// Write your code here
const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    competing_team,
    competing_team_logo,
    date,
    first_innings,
    id,
    man_of_the_match,
    match_status,
    result,
    second_innings,

    venue,
  } = latestMatchDetails
  return (
    <li>
      <p>{competing_team}</p>
      <img src={competing_team_logo} alt={`latest match ${competing_team}`} />
      <p>{date}</p>
      <h1>First Ininngs</h1>
      <p>{first_innings}</p>
      <h1>Second Ininngs</h1>
      <p>{second_innings}</p>
      <p>{venue}</p>
      <h1>Man of the match</h1>
      <p>{man_of_the_match}</p>
      <p>{result}</p>
      <p>{umpires}</p>
    </li>
  )
}

export default LatestMatch
