import Timer from './Timer' // 'react-timer'
import React, { Component } from 'react'
import HighScoresPlayers from './HighScoresPlayers';
import '../css/app.css';

class App extends Component {

  componentDidMount() {
  this.props.onGetScore();
}


  render () {
    let OPTIONS = { prefix: 'seconds elapsed!', delay: 1000}
    const { players } = this.props.game;


    return (
      <div>
        <nav className="navbar navbar-default">
  <div className="container">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="#">Can You Beat My Score?</a>
    </div>
    <div id="navbar" className="collapse navbar-collapse">
      <ul className="nav navbar-nav">
        <li className="active"><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Services</a></li>
        <li><a href="">Contact</a></li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li><a href="http://twitter.com"><i className="fa fa-twitter"></i></a></li>
        <li><a href="http://facebook.com"><i className="fa fa-facebook"></i></a></li>
        <li><a href="http://googleplus.com"><i className="fa fa-google-plus"></i></a></li>
        <li><a href="http://linkedin.com"><i className="fa fa-linkedin"></i></a></li>
      </ul>
    </div>
  </div>
</nav>

  <div className="container">
    <div className="row">
      <div className="col-md-4 col-md-offset-4">
        <Timer options={OPTIONS} onAddScore={this.props.onAddScore}/>
      </div>
    </div>
  </div>





      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 col-md-offset-4 text-center">
          </div>
        </div>
        <div className="row">
          <HighScoresPlayers players={players} />
        </div>

        </div>
      </div>
      )
    }
  }

  export default App;
