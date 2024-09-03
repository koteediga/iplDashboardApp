import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    initialmatcheslist: [],
    latestMatchDetails: '',
    recentMatches: [],
    teamBannerUrl: '',
  }

  componentDidMount() {
    this.getapicall()
  }

  getapicall = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    // const formatteddata = data.map(each => ({
    //   latestMatchDetails: data.latest_match_details,
    //   recentMatches: data.recent_matches,
    //   teamBannerUrl: data.team_banner_url,
    // }))
    console.log(data.team_banner_url)
    this.setState({
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
      team_banner_url: data.team_banner_url,
    })
  }

  render() {
    const {latestMatchDetails, recentMatches, team_banner_url} = this.state
    return (
      <div testid="loader">
        <img src={team_banner_url} alt="team banner" />
        <h1>Latest Matches</h1>
        <div>
          <ul>
            <LatestMatch
              key={latestMatchDetails.id}
              latestMatchDetails={latestMatchDetails}
            />
          </ul>
          <div>
            <ul>
              {recentMatches.map(each => (
                <MatchCard key={each.id} each={each} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default TeamMatches
