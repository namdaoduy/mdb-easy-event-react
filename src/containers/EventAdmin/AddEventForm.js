import React, { Component } from "react"
import { Form, Text, TextArea, Select, Option } from 'informed'
import { Card, CardTitle, Button, CardText } from 'mdbreact'
import LocationPicker from 'react-location-picker';
import API from './../../services/apis'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const defaultPosition = {
  lat: 21.04192103737484,
  lng: 105.81603412628169
};

export default class AddEventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
      error: "",
      begin_date: new Date(),
      end_date: new Date(),
      position: {
         lat: 0,
         lng: 0
      }
    }
    this.handleLocationChange = this.handleLocationChange.bind(this);
  }

  validateRequired = (value) => {
    return (!value) ? 'This field is required' : null;
  }

  onSubmit = (values) => {
  }

  handleLocationChange ({ position, address }) {
    this.setState({ position, address });
  }

  render() {
    return(
      <div className="add-container">
        <Form className="add-form" id="add" 
          onSubmit={this.onSubmit}>
        {({ formState }) => (
          <Card className="add-card">
            <h5>Tên sự kiện</h5>
            <Text type="text" 
              field="name" 
              placeholder=" Tên sự kiện" 
              className={"add-form-input" + (formState.errors.name ? " error" : "")}
              validate={this.validateRequired}/>
            
            <h5>Mô tả sự kiện</h5>
            <TextArea
              field="description" 
              placeholder=" Mô tả sự kiện" 
              className={"add-form-input" + (formState.errors.description ? " error" : "")}
              validate={this.validateRequired}/>

            <h5>Thể loại</h5>
            <Select 
              field="type" 
              className={"add-form-input" + (formState.errors.description ? " error" : "")}
              validate={this.validateRequired}>
              <Option value="" disabled>Chọn thể loại ...</Option>
              <Option value="Entertainment">Entertainment</Option>
              <Option value="Technology">Technology</Option>
              <Option value="Sport">Sport</Option>
              <Option value="Education">Education</Option>
              <Option value="Other">Other</Option>
            </Select>

            <h5>Ngày bắt đầu</h5>
            <DatePicker
              selected={this.state.begin_date}
            />
            <Text type="text" 
              field="begin_date"
              style={{display: "none"}}
              validate={this.validateRequired}/>

            <h5>Ngày kết thúc</h5>
            <DatePicker
              selected={this.state.end_date}
            />
            <Text type="text" 
              field="begin_date"
              style={{display: "none"}}
              validate={this.validateRequired}/>

            <h5>Địa điểm tổ chức</h5>
            <Text type="text" 
              field="place" 
              placeholder=" VD: Vincom TimesCity" 
              className={"add-form-input" + (formState.errors.name ? " error" : "")}
              validate={this.validateRequired}/>

            <h5>Địa chỉ cụ thể</h5>
            <Text type="text" 
              field="address" 
              placeholder=" VD: 489 Hoàng Quốc Việt, Cổ Nhuế, Cầu Giấy" 
              className={"add-form-input" + (formState.errors.name ? " error" : "")}
              validate={this.validateRequired}/>

            <h5>Nhà tổ chức</h5>
            <Text type="text" 
              field="organizer" 
              placeholder=" VD: J2Team, GDG Hanoi" 
              className={"add-form-input" + (formState.errors.name ? " error" : "")}
              validate={this.validateRequired}/>

            <h1>{JSON.stringify(this.state.position)}</h1>
            <div>
              <LocationPicker
                containerElement={ <div style={ {height: '100%'} } /> }
                mapElement={ <div style={ {height: '400px'} } /> }
                defaultPosition={defaultPosition}
                onChange={this.handleLocationChange}
              />
            </div>




            <h2 className="add-error">{this.state.error}</h2>
            <Button 
              type="submit" 
              size="sm" color="yellow" 
              className="add-submit"
              disabled={this.state.disabled}>
              {this.state.disabled ? "Please Wait ..." : "Tạo sự kiện"}
            </Button>
            <code>{JSON.stringify(formState)}</code>
          </Card>
        )}
        </Form>
      </div>
    )
  }
}