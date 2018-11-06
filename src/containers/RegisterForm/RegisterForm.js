import React, { Component } from "react"
import "./registerform.css"
import { Card, CardBody, CardText, CardTitle, Button, Input} from 'mdbreact'
import { FormComponent } from './FormComponent'

export default class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event_name: this.props.event_name || "Tên sự kiện",
      event_instruction: this.props.event_instruction || 
      `Thời gian: 
Địa điểm:
Liên lạc với chúng tôi: example@gmail.com`
    }
  }

  render() {
    return(
      <div className="regform">
        <div className="regform-body">
          <Card className="regform-card">
            <CardBody>
              <CardTitle>{this.state.event_name}</CardTitle>
              <hr />
              <CardText className="pre regform-instruction">
                {this.state.event_instruction}
              </CardText>
              <CardText className="regform-warn">
                Các ô có dấu * là bắt buộc
              </CardText>

              <FormComponent label="Tên của bạn" />

              <FormComponent label="Địa chỉ email" />

              <FormComponent label="Bạn thuộc đối tượng nào?"
                type="checkbox"
                data={[
                  {label: "Học sinh"},
                  {label: "Sinh viên"}
                ]} 
              />

            </CardBody>
          </Card>
        </div>
      </div>
    )
  }
}