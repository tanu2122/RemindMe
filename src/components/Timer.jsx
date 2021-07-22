import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

class Timer extends React.Component {
    constructor() {
      super();
      this.state = {
        currentTime: ''
     };
  }
  
  componentDidMount(){
      this.clock = setInterval(
        () => this.Set_Current_Time(),
        1000
      )
  }

  Set_Current_Time(){
      this.setState({
      currentTime: new Date().toLocaleTimeString('en-US', { hour12: false })
      });
  }
    
  render() {
      return (
        <div>
          <h2 className="currentTime">Current Time: {this.state.currentTime}
          </h2>
        </div>
      );
    }
  }

export default Timer;