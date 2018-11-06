import React, { Component } from "react"
import { Input } from 'mdbreact'

export default class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: this.props.label || "Form Component",
      type: this.props.type || "text",
      data: this.props.data || [1]
    }
  }

  renderList() {
    switch (this.state.type) {
      default:
        return this.state.data.map(() => (
          <Input className="regform-input"/>
        ))

      case "checkbox":
        return this.state.data.map((data) => (
          <Input type="checkbox" label={data.label}/>
        ))
    }
  }

  render() {
    return(
      <div className="form-component">
        <label className="regform-label">
          {this.state.label}
        </label>
        {this.renderList()}
      </div>
    )
  }
}