import React, { Component, PropTypes } from 'react'
import SecondsTohhmmss from './SecondsTohhmmss'
import Quotes from './Quotes';
import MessageForm from './MessageForm';

let offset = null, interval = null
const quotes = ["It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness"];
// const quotes = ["It was"];
/**
* Timer module
* A simple timer component.
**/
export default class Timer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      clock: 0,
      time: '00:00:00',
      name: '',
      score: '',
      isPlaying: false,
      isDone: true,
      quotes: quotes,
      inputMessage: ''
    }
    this.onType = this.onType.bind(this);

  }

  onType (event) {
    this.setState({ inputMessage: event.target.value });
  }

  componentDidMount() {
  }

  componentWillUnmount() {
    this.pause()
  }

  pause() {
    if (interval) {
      clearInterval(interval)
      interval = null
    }

  }

  play() {
    this.setState({isPlaying: true })

    if (!interval) {
      offset = Date.now()
      interval = setInterval(this.update.bind(this), this.props.options.delay)
    }
  }

  reset() {

    let clockReset = 0
    this.setState({clock: clockReset })
    let time = SecondsTohhmmss(clockReset / 1000)
    this.setState({time: time })
    this.setState({inputMessage: '' })
    this.setState({isPlaying: true })
  }

  update() {
    if(this.state.inputMessage === this.state.quotes[0] ) {
      this.setState({isPlaying: false })
  } else {
    let clock = this.state.clock
    clock += this.calculateOffset()
    this.setState({clock: clock })
    let time = SecondsTohhmmss(clock / 1000)
    this.setState({time: time })
  }
  }

  calculateOffset() {
    let now = Date.now()
    let newOffset = now - offset
    offset = now
    return newOffset
  }


  render() {
    const timerStyle = {
      margin: "0px",
      padding: "2em"
    };

    const buttonStyle = {
      background: "#fff",
      color: "#666",
      border: "1px solid #ddd",
      margin: "0.25em",
      padding: "0.75em",
      fontWeight: "200"
    };

    const secondsStyles = {
      fontSize: "200%",
      fontWeight: "200",
      lineHeight: "1.5",
      margin: "0px",
      color: "#666"
    };

    return (
        <div style={timerStyle} className="react-timer">
          <div className="row text-center">
            <div className="col-md-12">
              {this.state.isPlaying && <Quotes inputMessage={this.state.inputMessage} quotes={this.state.quotes}/>}
                <b>Name:</b> <br />
                <input
                  type="text"
                  value={this.state.name}
                  onChange={e => this.setState({ name: e.target.value })}
                />
            </div>
            <div className="row">
              <div className="col-md-12">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => this.props.onAddScore(this.state.name, this.state.time)}
                  >
                    Submit
                  </button>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
              <br /><b>Score:</b>
            </div>
          <h3 style={secondsStyles} className="seconds"> {this.state.time} {this.props.prefix}</h3>
          <br />
          <button onClick={this.reset.bind(this)} style={buttonStyle} >reset</button>
          <button onClick={this.play.bind(this)} style={buttonStyle} >play</button>
        </div>
          <div className="row">
            <MessageForm onChange={this.onType} value={this.state.inputMessage} />
            </div>
        </div>
      </div>
      )
    }
  }

  Timer.propTypes = {
    options: PropTypes.object
  }
