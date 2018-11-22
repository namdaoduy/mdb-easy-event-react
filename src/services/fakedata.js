const formdata = [
  {
    type: "text",
    field: "name",
    label: "Tên của bạn là gì",
    required: true
  },
  {
    type: "text",
    inputType: "email",
    field: "email",
    label: "Địa chỉ email",
    required: true
  },
  {
    type: "textarea",
    field: "field-03",
    label: "Lý do bạn đăng ký tham gia sự kiện?",
    required: true
  },
  {
    type: "multi-checkbox",
    field: "field-04",
    label: "Bạn thuộc đối tượng nào?",
    list: [
      "Học sinh",
      "Sinh viên",
      "Lập trình viên"
    ]
  },
  {
    type: "radio",
    field: "field-05",
    label: "Giới tính",
    list: [
      "Nam",
      "Nữ"
    ]
  }
]

export { formdata }