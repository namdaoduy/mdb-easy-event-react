import React, { Component } from "react"
import { Form, Text, TextArea, Select, Option, Scope } from 'informed'
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
      dataURI: ""
    }
    this.handleLocationChange = this.handleLocationChange.bind(this);
  }

  validateRequired = (value) => {
    return (!value) ? 'This field is required' : null;
  }

  onSubmit = (values) => {
    values.dataURI = this.state.dataURI;
    const token = "Bearer " + localStorage.getItem('easy_event_token');
    API.putEvent(values, token)
    .then((result) => {
      if (result.success) {
        alert("Thành công!");
        this.props.history.push('/')
      }
      else {
        alert("Failed")
      }
    })
  }

  handleLocationChange ({ position, address }, formApi) {
    this.setState({ position, address });
    formApi.setValue('lat', position.lat)
    formApi.setValue('lng', position.lng)
  }

  readFile = (file) => {
    const FR = new FileReader();
    FR.readAsDataURL(file)
    FR.onload = () => {
      this.setState({dataURI: FR.result})
    }
    FR.onerror = (error) => {
      console.log('Error: ', error);
    }
  }

  render() {
    return(
      <div className="add-container">
        <Form className="add-form" id="add" 
          onSubmit={this.onSubmit}>
        {({ formState, formApi }) => (
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
              onChange={date => {
                this.setState({begin_date: date})
                const str = date.toISOString().slice(0,10);
                let vals = Object.assign({}, formState.values)
                if (!vals.time) vals.time = {};
                vals.time.begin_date = str;
                vals.time.begin_time = "12:00";
                formApi.setValues(vals)
              }}
            />

            <h5>Ngày kết thúc</h5>
            <DatePicker
              selected={this.state.end_date}
              onChange={date => {
                this.setState({end_date: date})
                const str = date.toISOString().slice(0,10);
                let vals = Object.assign({}, formState.values)
                if (!vals.time) vals.time = {};
                vals.time.end_date = str;
                vals.time.end_time = "12:00";
                formApi.setValues(vals)
              }}
            />

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

            <h5>Địa điểm trên bản đồ</h5>
            <p style={{color: 'gray'}}>* Gần {this.state.address}</p>
            <div>
              <LocationPicker
                containerElement={ <div style={ {height: '100%'} } /> }
                mapElement={ <div style={ {height: '500px'} } /> }
                defaultPosition={defaultPosition}
                zoom={15}
                radius={-1}
                onChange={({position, address}) => {
                  this.setState({address})
                  let vals = Object.assign({}, formState.values)
                  vals.cord = {lat: position.lat, lng: position.lng};
                  formApi.setValues(vals)
                }}
              />
            </div>

            <Scope scope="contact">
              <h5>Email</h5>
              <Text type="text" 
                field="email" 
                placeholder=" VD: example@gmail.com" 
                className={"add-form-input" + (formState.errors.name ? " error" : "")}
                validate={this.validateRequired}/>
              <h5>Số điện thoại</h5>
              <Text type="text" 
                field="phone" 
                placeholder=" VD: 0123456789" 
                className={"add-form-input" + (formState.errors.name ? " error" : "")}
                validate={this.validateRequired}/>
            </Scope>
            
            <h5>Chọn ảnh cho sự kiện</h5>
            <input type="file" onChange={e => {
              this.readFile(e.target.files[0])
            }}/>

            <h2 className="add-error">{this.state.error}</h2>
            <Button 
              type="submit" 
              size="sm" color="yellow" 
              className="add-submit"
              disabled={this.state.disabled}>
              {this.state.disabled ? "Please Wait ..." : "Tạo sự kiện"}
            </Button>
            {/* <code>{JSON.stringify(formState)}</code> */}
          </Card>
        )}
        </Form>
      </div>
    )
  }
}