import React, { Component } from "react"
import "./registerform.css"
import { Card, CardBody, CardText, CardTitle, Button, Input} from 'mdbreact'
import { Footer } from './../../components/Footer'
import { FormComponent } from './FormComponent'
import { Form } from 'informed';
import { formdata } from './../../services/fakedata'
import API from './../../services/apis'

export default class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event_id: this.props.match.params.event_id,
      event_name: this.props.event_name || "Tên sự kiện",
      event_instruction: this.props.event_instruction || 
      `Thời gian: \nĐịa điểm: \nLiên lạc với chúng tôi: example@gmail.com`,
      data: formdata,
      value: null
    }
  }
  
  onSubmit = (values) => {
    const guest = {
      name: values.name,
      email: values.email,
      eventID: this.state.event_id,
      reason: values.reason,
      job_title: values.job_title, 
    }
    API.putGuest(guest)
    .then(res => {
      if (res.message === 'OK') {
        alert('Đăng ký thành công!');
        this.props.history.push('/event/' + this.state.event_id);
      }
    })
  }

  render() {
    return(
      <div className="regform">
        <div className="regform-body">
          <Card className="regform-card">
            <CardBody>
              <CardTitle>{this.state.event_name}</CardTitle>
              <hr />
              <CardText className="pre regform-instruction">{this.state.event_instruction}</CardText>
              <CardText className="regform-warn">Các ô có dấu * là bắt buộc</CardText>

              <Form id="regform-form"
                onSubmit={this.onSubmit}>
                {({ formState }) => (
                  <div>
                    { this.state.data.map((data) => <FormComponent data={data}/>) }

                    {
                      Object.keys(formState.errors).map((key) => (
                        <div style={{color: "red"}}>
                          <span>* {key}: </span>
                          <span>{formState.errors[key]}</span>
                        </div>
                      ))
                    }

                    <Button type="submit" size="sm" color="yellow" className="regform-submit">Gửi đăng ký</Button>
                    
                    {/* <h5>Values:</h5>
                    <code>{JSON.stringify(formState.values)}</code>
                    <h5>State</h5>
                    <code>{JSON.stringify(formState)}</code> */}
                  </div>
                )}
              </Form>

            </CardBody>
          </Card>
        </div>

        <Footer />
      </div>
    )
  }
}