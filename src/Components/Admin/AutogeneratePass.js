import React from "react";
class AutogeneratePass extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        password: { length: 15, data: "" }
      }
    }
  
    componentDidMount() {
      this.buildPassword();
    }
  
    setLength = ({ value }) => {
      this.setState(({ progress, password }) => ({
        password: { ...password, length: value }
      }), () => this.buildPassword());
    }
  
    buildPassword = () => {
      let a = "",
          b = "abcdefghijklmnopqrstuvwxyz1234567890",
          c = this.state.password.length;
      for(let ma = 0; ma < c; ma++) {
        a += b[Math.floor(Math.random() * b.length)];
      }
      this.setState(state => ({
        password: { ...state.password, data: a }
      }));
    }
  
    render() {
      return (
      <>
          <p  className="generator-pass">{ this.state.password.data }</p>
          <div className="generator-strong">
            <label>
              <input
              type="range"
              min="1"
              max="64"
              defaultValue={ this.state.password.length }
              onChange={ e => this.setLength(e.target) }
            />
            { this.state.password.length }
          </label>
      
        </div> </>
      );
    }
  }
  export default AutogeneratePass;