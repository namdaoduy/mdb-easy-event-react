import React, { Component } from "react"
import { Text, TextArea, Checkbox, RadioGroup, Radio } from 'informed'

export default class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.inputType = this.props.data.inputType || null;
    this.type = this.props.data.type || null;
    this.field = this.props.data.field || null;
    this.label = this.props.data.label || null;
    this.list = this.props.data.list || [];
    this.required = this.props.data.required || false;
  }

  validateRequired = (value) => {
    return (this.required && !value) ? 'This field is required' : null;
  }

  renderRequired() {
    if (this.required) {
      return <span style={{color: "red"}}> *</span>
    }
  }

  renderSection() {
    switch (this.type) {
      case "text":
        return (
          <div className="regform-item-container">
            <h4 className="regform-label">{this.label}{this.renderRequired()}</h4>
            <Text field={this.field} id={this.field} type={this.inputType ? this.inputType : ""}
              validate={this.validateRequired}
              className="regform-input"/>
          </div>
        )
      case "textarea":
        return (
          <div className="regform-item-container">
            <h4 className="regform-label">{this.label}{this.renderRequired()}</h4>
            <TextArea field={this.field} id={this.field} 
              validate={this.validateRequired}
              className="regform-textarea"/>
          </div>
        )
      case "checkbox":
        return (
          <div className="regform-item-container">
            <h4 className="regform-label">{this.label}{this.renderRequired()}</h4>
            <Checkbox field={this.field} id={this.field} 
              validate={this.validateRequired}/>
          </div>
        )
      case "multi-checkbox":
        return (
          <div className="regform-item-container">
            <h4 className="regform-label">{this.label}{this.renderRequired()}</h4>
            {
              this.list.map((item, i) => (
                <div>
                  <Checkbox field={`${this.field}[${i}]`} id={`${this.field}[${i}]`}
                  validate={this.validateRequired}/>
                  <label htmlFor={`${this.field}[${i}]`}>{item}</label>
                </div>
              ))
            }
          </div>
        )
      case "radio":
        return (
          <div className="regform-item-container">
            <h4 className="regform-label">{this.label}{this.renderRequired()}</h4>
            <RadioGroup field={this.field}
              validate={this.validateRequired}>
              {
                this.list.map((item, i) => (
                  <div>
                    <Radio value={item} id={item} />
                    <label htmlFor={item}>{item}</label>
                  </div>
                ))
              }
            </RadioGroup>
          </div>
        )
      default:
        return <div>Error</div>
    }
  }

  render() {
    return(
      this.renderSection()
    )
  }
}
