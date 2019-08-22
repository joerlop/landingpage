import React from "react";
import "./App.scss";

import { addEmail, resetState } from "./actions";
import { connect } from "react-redux";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      email: ""
    };
  }

  handleChange = e => {
    this.setState({
      email: e.target.value
    });
  };

  saveEmail = e => {
    e.preventDefault();
    const emailObject = {
      email: this.state.email
    };

    this.props.addEmail(emailObject).then(res => {
      setTimeout(() => {
        this.props.resetState();
      }, 3000);
    });

    this.setState({
      email: ""
    });
  };

  render() {
    return (
      <div className="app">
        <div className="main-content">
          <p>Pronto...</p>
          <h1>
            Préstamos en pesos.
            <br />
            Respaldados con bitcoin.
          </h1>
          <div className="email-form">
            <form onSubmit={e => this.saveEmail(e)}>
              <input
                onChange={this.handleChange}
                value={this.state.email}
                type="email"
                placeholder="Tu e-mail"
              />
            </form>
            <button onClick={e => this.saveEmail(e)}>Notifícame</button>
          </div>
          <div className="response-container">
            {this.props.success ? (
              <div className="success-message">
                <p>{this.props.success}</p>
              </div>
            ) : (
              <> </>
            )}
            {this.props.error ? (
              <div className="error-message">
                <p>{this.props.error}</p>
              </div>
            ) : (
              <> </>
            )}
          </div>
        </div>
        <div className="navigation">
          <p>veintiun</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  savingEmail: state.savingEmail,
  error: state.error,
  success: state.success
});

export default connect(
  mapStateToProps,
  {
    addEmail,
    resetState
  }
)(App);
