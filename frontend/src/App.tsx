import axios from 'axios'
import React from 'react'

class App extends React.Component {
  
  state = { details: [], }

  componentDidMount(): void {
    let data;
    axios.get("http://127.0.0.1:8000/api/index/")
      .then(res => {
        data = res.data;
        this.setState({
          details: data
        })
      })
      .catch(error => { console.error(error)})
  }

  render(): React.ReactNode {
    return(
      <div>
        <header>Data from Django API</header>
        <hr />
        {this.state.details.map((output, id) => (
          <div key={id}>
            <div>
              <h2>Name: {output.name} Author: {output.author} Publish Date: {output.release_date}</h2>
              {/* <h3>{output.genre}</h3> */}
            </div>
          </div>
        ))}
      </div>
    )
  }
}


export default App
