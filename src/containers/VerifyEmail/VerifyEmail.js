import React, { Component } from "react";
import API from './../../services/apis'

export default class VerifyEmail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hashed: this.props.match.params.hashed,
      guest_email: this.props.match.params.guest_email,
      event_id: this.props.match.params.event_id,
      verified: 0
    }
  }

  fetchVerify = () => {
    const {hashed, guest_email, event_id} = this.state;
    API.postVerifyEmail(hashed, guest_email, event_id)
    .then(res => {
      if (res.message === 'OK') {
        this.setState({verified: 1})
      }
      else {
        this.setState({verified: -1})
      }
    })
  }

  componentDidMount = () => {
    this.fetchVerify()
  }

  renderInner = () => {
    let inner = <div></div>
    switch (this.state.verified) {
      case 0:
        inner = <h1 style={styles.h1}>Please Wait</h1>
        break
      case 1:
        inner = <h1 style={styles.h1}>Verified!</h1>
        break
      case -1:
        inner = <h1 style={styles.h1}>Not verified...</h1>
        break
      default:
        inner = <div></div>
    }
    return inner;
  }

  render() {
    return(
      <div style={styles.container}>
        <img src={require('./../../assets/images/logo.png')} alt=""
          style={this.state.verified === 1 ? styles.image : styles.unverified}/>
        {this.renderInner()}
      </div>
    )
  }
}

const styles = {
  container: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '40vh',
    marginBottom: 20
  },
  unverified: {
    width: '40vh',
    marginBottom: 20,
    filter: 'grayscale(100%)'
  },
  h1: {
    fontWeight: 'bold',
    fontSize: 50
  }
}