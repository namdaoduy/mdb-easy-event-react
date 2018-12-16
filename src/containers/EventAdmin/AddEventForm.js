import React, { Component } from "react"
import { Form, Text, TextArea, Select, Option } from 'informed'
import { Card, CardTitle, Button, CardText } from 'mdbreact'
import API from './../../services/apis'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
      error: ""
    }
  }
  
  validateRequired = (value) => {
    return (!value) ? 'This field is required' : null;
  }

  onSubmit = (values) => {
  }

  render() {
    return(
      <div className="login-container">
        <Form className="login-form" id="login" 
          onSubmit={this.onSubmit}>
        {({ formState }) => (
          <Card className="login-card">
            <h5>Tên sự kiện</h5>
            <Text type="text" 
              field="name" 
              placeholder=" Tên sự kiện" 
              className={"admin-form-input" + (formState.errors.name ? " error" : "")}
              validate={this.validateRequired}/>
            
            <h5>Mô tả sự kiện</h5>
            <TextArea type="text" 
              field="description" 
              placeholder=" Tên sự kiện" 
              className={"admin-form-input" + (formState.errors.description ? " error" : "")}
              validate={this.validateRequired}/>

            <h5>Thể loại</h5>
            <Select 
              field="type" 
              className={"admin-form-input" + (formState.errors.description ? " error" : "")}
              validate={this.validateRequired}>
              <Option value="" disabled>Chọn thể loại ...</Option>
              <Option value="Entertainment">Entertainment</Option>
              <Option value="Technology">Technology</Option>
              <Option value="Sport">Sport</Option>
              <Option value="Education">Education</Option>
              <Option value="Other">Other</Option>
            </Select>

            <h5>Thể loại</h5>
            <Select 
              field="type" 
              className={"admin-form-input" + (formState.errors.description ? " error" : "")}
              validate={this.validateRequired}>
              <Option value="" disabled>Chọn thể loại ...</Option>
              <Option value="Entertainment">Entertainment</Option>
              <Option value="Technology">Technology</Option>
              <Option value="Sport">Sport</Option>
              <Option value="Education">Education</Option>
              <Option value="Other">Other</Option>
            </Select>



            <h2 className="login-error">{this.state.error}</h2>
            <Button 
              type="submit" 
              size="sm" color="yellow" 
              className="login-submit"
              disabled={this.state.disabled}>
              {this.state.disabled ? "Please Wait ..." : "Đăng nhập"}
            </Button>
            <code>{JSON.stringify(formState)}</code>
          </Card>
        )}
        </Form>
      </div>
    )
  }
}