import React, {Component} from 'react';
class Tugas11 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {date : new Date(),
                  time: 100,
                  run:true };
  }


  componentDidMount(){
      if (this.props.start !== undefined){
        this.setState({time: this.props.start})
      }
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }

  tick() {
    this.setState({
      date: new Date(),
     time: this.state.time -1
    });
  }

  componentWillUnmount(){
      clearInterval(this.timerID);

  }


  render() {
    if (this.state.time >= 0) {
      this.state.run = true
    } else {
      this.state.run= false
    }
    return (

            <div>

              {this.state.run? <h1 style={{textAlign: 'center'}}>Sekarang jam : {this.state.date.toLocaleTimeString()} hitung mundur : {this.state.time}</h1>:null}

            </div>
           );
  }
}


  export default Tugas11;
