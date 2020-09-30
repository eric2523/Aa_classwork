import React from 'react'

class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = { time: new Date().toLocaleTimeString(), 
                    date: new Date().toLocaleDateString() }
    this.timer = setInterval( ()=>{ this.tick() }, 1000 )
  }

  tick() { 
      this.setState({ time: new Date().toLocaleTimeString() })
  }
    
  componentDidMount() { this.timer }
  
  componentWillUnmount() { clearInterval(this.timer) }
  
  render() {
    return (
      <div className="date">
        <h1>{this.state.time}</h1>
        <h1>{this.state.date}</h1>
      </div>
    );
  }
}
  
export default Clock;