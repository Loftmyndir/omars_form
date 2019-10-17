import React from "react";
import { stat } from "fs";

class Form extends React.Component {
  state = {
    nafn: "",
    notandi: "",
    email: ""
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log("submittum data", this.state);
  };
  render() {
    return (
      <form>
        <div className="form-group row">
          <input
            name="nafn"
            placeholder="fullt nafn"
            value={this.state.nafn}
            onChange={e => this.change(e)}
          />
          <input
            name="notandi"
            placeholder="notandi"
            value={this.state.notandi}
            onChange={e => this.change(e)}
          />
          <input
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={e => this.change(e)}
          />

          <button onClick={e => this.onSubmit(e)} className="btn btn-primary">
            Submit
          </button>
        </div>

        <h3>
          <small className="text-muted">Nafn</small>: {this.state.nafn}
        </h3>
        <h3>
          <small className="text-muted">Notandi</small>: {this.state.notandi}
        </h3>
        <h3>
          <small className="text-muted">Tölvupóstfang</small>:{" "}
          {this.state.email}
        </h3>
      </form>
    );
  }
}

export default Form;
