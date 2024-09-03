import {Component} from 'react'
import {Loader} from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {
    initialteamlist: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getapicallfetch()
  }

  getapicallfetch = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    // console.log(data)
    const formatedata = data.teams.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))

    this.setState({
      initialteamlist: formatedata,
      isLoading: false,
    })
  }

  render() {
    const {initialteamlist, isLoading} = this.state
    return (
      <div className="main-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          alt="ipl logo"
        />
        <h1>IPL Dashboard</h1>
        {/* <div testid="loader">
          {isLoading ? (
            <Loader
              type="Oval"
              color="#00BFFF"
              height={50}
              width={50}
              className="loader"
            />
          ) : (
            initialteamlist.map(each => (
              <TeamCard key={each.id} source={each} />
            ))
          )}
        </div> */}
        <ul>
          {initialteamlist.map(each => (
            <TeamCard key={each.id} source={each} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
