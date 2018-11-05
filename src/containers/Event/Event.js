import React, { Component } from "react"
import "./event.css"
import { NavBar } from './../../components/NavBar'
import { Button, Card, CardBody, CardTitle, CardText } from 'mdbreact'

export default class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event_id: this.props.match.params.event_id,
      event_name: "[HÀ NỘI] - GOOGLE DIGITAL 4.0",
      event_time: "Thứ 6, 10 Tháng 8 2018 - Thứ 2, 31 Tháng 12 2018 (09:00 AM - 12:00 AM)",
      event_location: "YNest Co-working Space",
      event_location_detail: "Lầu 4 - Trung tâm thương mại V+ - số 505 Minh Khai, P.Vĩnh Tuy, Q. Hai Bà Trưng, Hà Nội., Quận Hai Bà Trưng, Thành Phố Hà Nội",
      event_info: `KỸ NĂNG KỸ THUẬT SỐ MIỄN PHÍ

      DÀNH CHO DOANH NGHIỆP VỪA VÀ NHỎ
      
      Bắt đầu từ tháng 6 này, Google kết hợp cùng VCCI – VWEC triển khai tại Việt Nam chiến dịch Digital 4.0, chương trình là những khóa học huấn luyện kỹ năng kỹ thuật số hoàn toàn miễn phí từ căn bản đến nâng cao dành cho doanh nghiệp vừa và nhỏ.
      
      Bạn có ý định mở một cừa hàng, bạn đang kinh doanh trực tuyến, bạn sắp sửa start up hoặc bạn làm chủ một doanh nghiệp… đều là những đối tượng có thể dễ dàng tiếp cận nguồn kiến thức, công cụ mới và mang tính thực dụng cao trong lĩnh vực kỹ thuật số từ chiến dịch Digital 4.0. Đây thật sự là cơ hội dành cho các doanh nghiệp vừa và nhỏ nâng cao hiệu suất kinh doanh và phát triển nhiều cơ hội lớn hơn. Theo nghiên cứu Business Digital Index 2017 công bố bởi Ngân hàng Anh quốc Lloyds Banking Group cho thấy các doanh nghiệp nhỏ nắm vững các kỹ năng kỹ thuật số sẽ tiết kiệm được gấp 3 lần thời gian, 5 lần chi phí và 11 lần các giao dịch quốc tế so với các doanh nghiệp nhỏ không biết tới kỹ thuật số.
      
      Không chỉ là một trợ thủ đắc lực hỗ trợ cho các doanh nghiệp vừa và nhỏ cải thiện chất lượng của nội tại, mà kỹ thuật số còn là một công cụ hữu ích để tim kiếm thêm những khách hàng mới và giữ liên lạc tốt hơn với các khách hàng hiện tại. Ví dụ như chỉ bằng một số thủ thuật đơn giản với Google My Business (Doanh nghiệp của tôi) để giới thiệu thương hiệu doanh nghiệp trực tiếp đến khách hàng, đồng thời kết nối các dữ liệu về vị trí và sự hiện diện của doanh nghiệp trong thương mại di động thông qua Google Tìm kiếm và Google Maps để khách hàng dễ dàng tìm thấy bạn. Hoặc chỉ bằng công cụ quảng cáo trên các trang mạng xã hội hoặc trên Google, các doanh nghiệp sẽ dễ dàng nhận được những tìm kiếm từ các khách hàng tiềm năng đang ở một đất nước khác.
      
      Nhưng vận dụng hiệu quả công cụ kỹ thuật số cho con đường kinh doanh của mình thật sự là chưa đủ với các doanh nghiệp vừa và nhỏ, khi thị trường kinh doanh ngày càng cạnh tranh khốc liệt và khó khăn với sự đòi hỏi ngày một cao của người tiêu dùng. Một câu chuyện dài hơi hơn nữa cho sự phát triển của các doanh nghiệp vừa và nhỏ chính là nên có một chiến lược sử dụng công cụ kỹ thuật số một cách bài bản từ khâu định hình xây dựng thương hiệu, phương thức bán hàng, định vị doanh nghiệp với cộng đồng khách hàng trên mạng. Song song đó, các doanh nghiệp vừa và nhỏ nên vừa kinh doanh, vừa phân tích thị trường cũng như chính nội tại của mình bằng những công cụ kỹ thuật số để nhanh chóng đưa ra những quyết định nên sử dụng tiếp phương thức kinh doanh nào, nên thay đổi ra sao cho phù hợp với thời thế hoặc để cân đối chi phí cho phù hợp với khả năng của bản thân.
      
       
      
      Sẽ chẳng có một hình mẫu nào hoàn toàn đúng hoặc phù hợp cho doanh nghiệp, ngoại trừ chính bản thân những người chủ doanh nghiệp luôn tìm tòi và vận dụng những kiến thức mới để liên tục cải thiện chính mình.
      
       
      
      Đồng hành cùng doanh nghiệp vừa và nhỏ trong một thời gian đủ dài để hiểu thấu những điều nên và không nên, những nhu cầu và mong mỏi của họ, Phòng Thương mại và Công nghiệp Việt Nam (VCCI) đã tìm kiếm những sáng kiến liên quan đến việc cung cấp những kiến thức, kỹ năng mới nhất về kỹ thuật số để thúc đẩy các doanh nghiệp vừa và nhỏ vận dụng sáng tạo, thành công và hội nhập vào thời đại 4.0. Cũng chính vì vậy, ý tưởng của Chiến dịch 4.0 đã ra đời và nhận được sự ủng hộ, hỗ trợ trực tiếp từ đối tác Google trong việc truyền tải thông điệp, thông tin, cơ hội thử nghiệm thực tế một cách hiệu quả nhất.
      
      Chiến dịch 4.0 với những khóa học hoàn toàn miễn phí về kiến thức và kỹ năng kỹ thuật số sẽ tổ chức 8 chủ đề nội dung với hàng trăm lớp học bắt đầu từ 01/06/2018 tại 3 thành phố: TP.HCM, Đà Nẵng, Hà Nội:
      
      - Xây dựng một thương hiệu dễ nhớ (Cơ bản): Các gợi ý về cách làm thương hiệu cho doanh nghiệp vừa và nhỏ, các lưu ý về màu sắc, hình ảnh và tính nhất quán để nhận diện thương hiệu.
      - Chiến lược truyền thông trên mạng xã hội (Cơ bản): Giới thiệu về các kênh tiếp thị kỹ thuật số chính và cách sử dụng để xây dựng chiến lược truyền thông trực tuyến.
      - Tạo một website đơn giản (Cơ bản): Tìm hiểu cách tạo website cơ bản, thêm chi tiết về sản phẩm hoặc dịch vụ của bạn và đăng ký trang web của bạn trên Google
      - Tăng hiển thị doanh nghiệp trên Google (Nâng cao): Tìm hiểu cách bắt đầu hiển thị trên Google Doanh Nghiệp của tôi và các cách khác giúp doanh nghiệp của bạn hiển thị nhiều hơn trên Google
      - Tăng hiển diện doanh nghiêp trên tìm kiếm (Nâng cao): Tìm hiểu về cách thức xuất hiện trên tìm kiếm và bắt đầu quảng cáo doanh nghiệp của bạn đến người dùng nhiều hơn
      - Hiểu về doanh nghiệp từ các dữ liệu (Nâng cao): Khám phá cách đọc và diễn giải dữ liệu đúng cách để hiểu về khách hàng và doanh nghiệp của bạn, để đưa ra các kế hoạch phù hợp giúp doanh nghiệp của bạn phát triển.
      - WomenWill: Cách mạng công nghệ 4.0 - Thách thức và cơ hội: Tìm hiểu về những thách thức và cả những cơ hội cho phụ nữ trong thời đại mới để phát triển khả năng của bạn.
      - WomenWill: Phụ nữ và kỹ năng lãnh đạo: Các kỹ năng lãnh đạo cần thiết trong việc quản lý doanh nghiệp của bạn.
      
      Các doanh nghiệp vừa và nhỏ sẽ có cơ hội trực tiếp được hướng dẫn, tư vấn bởi các chuyên viên được đào tạo từ Google; cũng như họ có thể thực hành và trải nghiệm những công cụ kỹ thuật số ngay tại các lớp học bằng những phương pháp trực quan, thực tiễn. Đồng thời, một chiến dịch mang tính cộng đồng như Digital 4.0 là một cơ hội thuận lợi để các chủ doanh nghiệp vừa và nhỏ chia sẻ, học tập kinh nghiệm thực tế khi xây dựng các chiến lược kinh doanh bằng các công cụ miễn phí mà hiệu quả, mở rộng những mối quan hệ mới từ cộng đồng đối tác kinh doanh cũng như tìm kiếm những cơ hội hợp tác kinh doanh mới. Và trên tất cả, kiến thức mới mẻ, hiện đại sẽ là nhân tố nền tảng cho các doanh nghiệp vừa và nhỏ vận dụng, nâng tầm giá trị của chính mình, tạo ra cơ hội để hòa nhập vào xu hướng kỹ thuật số tất yếu đang ngày càng mạnh mẽ trên toàn cầu.
      
      Lịch học TP HCM: https://events.withgoogle.com/digital-40-hochiminh/lch-hc/#content
      
      Lịch học Hà Nội: https://events.withgoogle.com/trung-tam-ha-noi/lch-hc/#content
      
      Lịch học Đà Nẵng: https://events.withgoogle.com/trung-tam-da-nang/lch-hc/#content
      
      Chương trình dự kiến sẽ mở 5 trung tâm tại 3 thành phố lớn: Hà Nội, thành phố Hồ Chí Minh , Đà Nẵng.
      
      Trung tâm TP.HCM: Saigon Mansion: lầu 15A, 3 Võ Văn Tần, P.6, Q.3, TP.HCM
      
      Trung tâm Hà Nội: YNest Co-working Space: Lầu 4 - Trung tâm thương mại V+ - số 505 Minh Khai, P.Vĩnh Tuy, Q. Hai Bà Trưng, Hà Nội.
      
      Trung tâm Đà Nẵng: Surf Space Co-working Space: 31 đường Trần Phú, P. Hải Châu1 , Q. Hải Châu, Đà Nẵng
      
      Trung tâm TP.HCM 2: TBU
      
      Trung tâm Hà Nội 2: TBU`,
      show: false,
    }
  }

  showMore = () => {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (
      <div className="event">
        <NavBar />
        <div className="event-ctn">
          <img src={require('./../../assets/images/google.jpg')} className="event-title-img" alt="" />
          <div className="row">

            <div className="col-lg-8 col-md-6">
              <h2 className="h2-responsive event-name">{this.state.event_name}</h2>
              <div className="row">
                <i className="fa fa-calendar event-icon"></i>
                <div className="col">
                  <h5>{this.state.event_time}</h5>
                </div>
              </div>
              <div className="row">
                <i className="fa fa-map-marker event-icon"></i>
                <div className="col">
                  <h5>{this.state.event_location}</h5>
                  <h6>{this.state.event_location_detail}</h6>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <Button color="yellow" className="event-join-btn"
                onClick={() => this.props.history.push("/registerform/1")}>
                Tham gia ngay</Button>
              <Button outline color="info" className="event-share-btn">Chia sẻ</Button>
            </div>

          </div>

          <div className="row event-body">
            <div className="col-md-8">
              <Card className="event-info-card">
                <CardBody>
                  <CardTitle>Giới thiệu</CardTitle>
                  <hr />
                  <CardText className={"pre event-card-text" + (this.state.show ? "" : " show-more-hide")}>
                    {this.state.event_info}
                  </CardText>
                  <Button size="sm" color="yellow" 
                    className="show-more-btn"
                    onClick={this.showMore}>
                    Show more</Button>
                </CardBody>
              </Card>
            </div>
            <div className="col-md-4">  
              <Card>
                <CardBody>
                  <CardTitle>Thông tin</CardTitle>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                </CardBody>
              </Card>
            </div>

          </div>
        </div>
      </div>
    )
  }
}